
class Level {
  constructor(
    stars,
    difficulty,
    rate,
    coins,
    length,
    objects,
    update,
    songName,
    songType,
    theme,
    gamemodes,
    copied,
    large,
    twoPlayer,
    creator,
    downloads,
    likes,
    realName,
    songColor
  ) {
    this.stars = stars;
    this.difficulty = difficulty;
    this.rate = rate;
    this.coins = coins;
    this.length = length;
    this.objects = objects;
    this.update = update;
    this.songName = songName;
    this.songType = songType;
    this.theme = theme;
    this.gamemodes = gamemodes;
    this.copied = copied;
    this.large = large;
    this.twoPlayer = twoPlayer;
    this.creator = creator;
    this.downloads = downloads;
    this.likes = likes;
    this.realName = realName;
    this.songColor = songColor;
  }
}

function update(id) {
  return id < 1942
    ? "1.0"
    : id < 10044
    ? "1.1"
    : id < 63416
    ? "1.2"
    : id < 121069
    ? "1.3"
    : id < 184426
    ? "1.4"
    : id < 420781
    ? "1.5"
    : id < 827308
    ? "1.6"
    : id < 1627363
    ? "1.7"
    : id < 2810919
    ? "1.8"
    : id < 11020427
    ? "1.9"
    : id < 28356225
    ? "2.0"
    : "2.1"
}

export const verifiedArtists = [
  "djvi",
  "foreverbound",
  "step",
  "waterflame",
  "dj-nate",
  "f-777",
  "mdk",
  "pandaeyesofficial",
  "hinkik",
  "ocular nebula",
  "kevin macleod",
  "boomkitty",
  "dex arson",
  "bossfight",
  "camellia",
  "shirobon",
  "extra terra",
  "helblinde",
  "xi",
  "leaf",
  "t+pazolite",
  "frums"
]

async function fetchLevelData() {
  try {
    const response = await fetch('http://localhost:4000/fetch-levels'); // Use the server URL
    const levels = await response.json();
    return levels;
  } catch (error) {
    console.error('Error fetching levels:', error);
    return [];
  }
}


async function getLevels() {
  const levels = await (await fetch(`${process.env.PUBLIC_URL}/levelsData.json`)).json()
  // const levels = await fetchLevelData()
  console.log(levels)
  const allLevels = {}
  for (let iLevel = 0; iLevel < levels.length; iLevel++) {
    let descriptionArray = levels[iLevel][0].split(', ')
    let id = Number(descriptionArray[0].trim())
    let theme = descriptionArray[1].toLowerCase().trim()
    let startingGamemode = descriptionArray[2]
    let data = levels[iLevel][1]
    data = String(data)
    let gamemodes = []
    if (data.match(/;1,12,/) || startingGamemode === 'cube') gamemodes.push('cube')
    if (data.match(/;1,13,/) || startingGamemode === 'ship') gamemodes.push('ship')
    if (data.match(/;1,47,/) || startingGamemode === 'ball') gamemodes.push('ball')
    if (data.match(/;1,111,/) || startingGamemode === 'ufo') gamemodes.push('ufo')
    if (data.match(/;1,660,/) || startingGamemode === 'wave') gamemodes.push('wave')
    if (data.match(/;1,745,/) || startingGamemode === 'robot') gamemodes.push('robot')
    if (data.match(/;1,1331,/) || startingGamemode === 'spider') gamemodes.push('spider')
    if (data.match(/;1,1933,/) || startingGamemode === 'swing') gamemodes.push('swing')
    if (data.match(/;1,286,/) || startingGamemode === 'dual') gamemodes.push('dual')
    const cologne = await getLevel(id)
    // console.log(cologne)
    //    cologne = [name/realName, stars, difficulty, rate, coins, length, objects, updateVer, songType, songName, copied, large, twoPlayer, creator, downloads, likes, songColor]
    //               0              1      2           3     4      5       6        7          8         9         10      11     12         13       14         15     16
    let objects = cologne[6]
    let absoluteObjects = data.match(/(;)/g)
    objects = objects === 0 || objects === 65535 ? absoluteObjects.length - 1 : objects
    allLevels[cologne[0].toLowerCase()] = new Level(
      cologne[1], // stars [1-15]
      cologne[2], // difficulty [auto, easy, normal, hard, harder, insane, easy demon, medium demon, hard demon, insane demon, extreme demon]
      cologne[3], // rate [star, feature, epic, legendary, mythic]
      cologne[4], // coins [0-3]
      cologne[5], // length [tiny, short, medium, long, xl, plat]
      objects, // 29+
      cologne[7], // update [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2]
      cologne[8], // songType [verified artist name, newgrounds, ncs, robtop]
      cologne[9], // songName
      theme, // hardest category
      gamemodes, // [cube, ship, ball, ufo, wave, robot, spider, swing, dual]
      cologne[10], // copied [true, false]
      cologne[11], // large [true, false]
      cologne[12], // twoPlayer [true, false]
      cologne[13],  // level creator's name
      cologne[14], // downloads (raw number)
      cologne[15], // likes (raw number)
      cologne[0], // realName
      cologne[16], // song color
    )
  }
  return allLevels
}

// 	<title>Erebus (31462941)</title>
// >10</h1> <img id="starIcon"
// $('#difficultytext').html('Extreme Demon'
// fFace" id="featureB
// if (2 > 0) $("#coins")
// if ("Long" == "Plat"
// '[[OBJECTINFO]]', '36838' ==
// id="songname">xKore - Event Horizon</h1>
// >By: xKore<!--
// songLink" href="https://www.newgrounds.com/audio/listen/10006426"
// if (110154326 > 0) $('#copiedBadge').show()
// if (true) $('#largeBadge').show()
// if (true) $('#2pBadge').show()
// id="authorName"><a class="linkButton" id="authorLink" href="../u/3961368.">By lSunix<a
async function getLevel(id) {
  const response = await fetch(`https://gdbrowser.com/${id}`);
  const data = await response.text()
  try {
    let downloads = data.match(/Downloads: (\d*)/)[1]
    let likes = data.match(/Likes: (\d*)/)[1]
    let creator = data.match(/id="authorLink".*?>(By\s+[^<]*)</)[1]

    let copied = data.match(/(\d*) > 0\) \$\('#copiedBadge/)[1] > 0 ? 'true' : 'false'
    let large = data.match(/(true|false)\) \$\('#largeBadge/)[1]
    let twoPlayer = data.match(/(true|false)\) \$\('#2pBadge/)[1]

    let songId = data.match(/songLink" href="https:\/\/www.newgrounds.com\/audio\/listen\/(\d*)/)[1]
    let ngResponse = await checkSong(songId)
    let isntNG = ngResponse.match(/Whoops, that's a swing and a miss!/) ? true : false
    let NameUpdate = data.match(/<title>([A-Z a-z0123456789\-]*)\s\((\d*)\)/)

    let name = NameUpdate[1].trim()
    let updateVer = update(NameUpdate[2])
    let stars = Number(data.match(/>(\d{1,2})<\/h1> <img id="starIcon"/)[1])
    let difficulty = data.match(/\$\('#difficultytext'\)\.html\('([A-Z a-z]*)'/)[1].trim()
    let rate = data.match(/fFace" id="([a-z]*)B/)[1].trim()
    let coins = Number(data.match(/if \((\d) > 0\) \$\("#coins/)[1])
    let length = data.match(/if \("([A-Z a-z]*)" == "Plat/)[1].trim()
    let objects = Number(data.match(/\[\[OBJECTINFO\]\]',\s?'(\d*)'\s?==/)[1])

    let songName = data.match(/id="songname">(.*)<\/h1>/)[1].trim()
    let artist = data.match(/>By: (.*)<!--/)[1].trim()
    let songType = verifiedArtists.indexOf(artist.toLowerCase()) !== -1 ? artist : data.match(/ncs\.io/) ? 'ncs' : isntNG ? 'robtop' : 'newgrounds'
    let songColor = isntNG ? songType === 'ncs' ? "#64FFC8" : "#27CEFA" : songType !== 'newgrounds' ? "#27CEFA" : "#FF82FF"
    return [name, stars, difficulty, rate, coins, length, objects, updateVer, songName, songType, copied, large, twoPlayer, creator, downloads, likes, songColor]
  } catch (error) {
    console.error('Error fetching data in getLevel:', error)
  }
}

async function checkSong(id) {
  try {
    const response = await fetch(`http://localhost:4000/check-song/${id}`);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching song data in checkSong:', error);
  }
}

async function fetchLevels() {
    const levels = await getLevels()
    return levels
}

const allLevelsPromise = fetchLevels()
export default allLevelsPromise




const jataDSON = []
levelData.forEach((level) => {
  let formattedLevel = { ...level }
  if (formattedLevel.levelData) {
    // Stealing GD Colon's decode function 
    formattedLevel.levelData = decode(formattedLevel.levelData)
  }
  // Level description contains a level ID, deco theme, and the starting gamemode (the only data not scraped from gd browser)
  jataDSON.push([formattedLevel.description, formattedLevel.levelData])
})

// Convert data to JSON string
const dataStr = JSON.stringify(jataDSON, null, 2) // 'null' and '2' to pretty-print JSON

// Create a blob from the JSON string
const blob = new Blob([dataStr], { type: "application/json" })
const url = URL.createObjectURL(blob)

// Download level data as a .json file
const a = document.createElement("a")
a.href = url
a.download = "levelsData.json" // Required file name
document.body.appendChild(a)
a.click()

// Cleaning up after myself (optional)
document.body.removeChild(a)
URL.revokeObjectURL(url)