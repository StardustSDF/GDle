import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';
import path from 'path';
import fetch from 'node-fetch'
import fs from 'fs'

const app = express();
const PORT = process.env.PORT || 4000;

const CCLocalLevels = path.resolve('C:/Users/avala/AppData/Local/GeometryDash/CCLocalLevels.dat');

// wth is cors?
app.use(cors());

app.get('/fetch-levels', async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://gdcolon.com/gdsave/', { waitUntil: 'networkidle2' });

    const fileType = 'input[type="file"]';
    await page.waitForSelector(fileType);
    const upload = await page.$(fileType);
    await upload.uploadFile(CCLocalLevels);
    await new Promise(resolve => setTimeout(resolve, 500000));

    await page.waitForFunction(() => typeof levelData !== 'undefined' && typeof decode !== 'undefined');

    const dataJSON = await page.evaluate(() => {
      const jataDSON = [];
      levelData.forEach((level) => {
        let formattedLevel = { ...level };
        if (formattedLevel.levelData) {
          formattedLevel.levelData = decode(formattedLevel.levelData);
        }
        jataDSON.push([formattedLevel.description, formattedLevel.levelData]);
      });
      console.log(jataDSON)
      return jataDSON;
    });

  } catch (error) {
    console.error('Error fetching level data:', error);
    res.status(500).json({ error: 'Failed to fetch level data' });
  }
});

// New route to check song by ID
app.get('/check-song/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://www.newgrounds.com/audio/listen/${id}`);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching song data:', error);
    res.status(500).json({ error: 'Failed to fetch song data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
