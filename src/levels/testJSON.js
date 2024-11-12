const fs = require('fs');

fs.readFile('public/levelsData.json', 'utf8', (err, data) => {
  if (err) throw err;

  try {
    JSON.parse(data);
    console.log("JSON is valid!");
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    console.log("Error at position:", error.position);
  }
});