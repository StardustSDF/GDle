export class Level {
  constructor(
    stars,
    difficulty,
    rate,
    coins,
    length,
    objects,
    update,
    song,
    theme,
    gamemodes
  ) {
    this.stars = stars;
    this.difficulty = difficulty;
    this.rate = rate;
    this.coins = coins;
    this.length = length;
    this.objects = objects;
    this.update = update;
    this.song = song;
    this.theme = theme;
    this.gamemodes = gamemodes;
  }
}

export function update(id) {
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
    : "2.1";
}

export function levelStats(level) {
  switch (level) {
    case "kenos":
      return new Level(
        10,
        "extreme demon",
        "feature",
        0,
        "long",
        true,
        update(58673581),
        "newgrounds",
        "hell",
        ["cube", "ship", "ball", "ufo", "wave", "robot", "spider"]
      )
    case "zodiac":
      return new Level(
        10,
        "extreme demon",
        "feature",
        0,
        "xl",
        true,
        update(52374843),
        "newgrounds",
        "generic/other",
        ["cube", "ship", "ball", "ufo", "wave", "robot", "spider", "dual"]
      )
    case "what is it":
      return new Level(
        10,
        "easy demon",
        "epic",
        3,
        "long",
        false,
        update(61348317),
        "newgrounds",
        "dynamic",
        ["cube", "ship", "ball", "ufo", "wave", "robot", "spider"]
      )
    case "nine circles":
      return new Level(
        10,
        "hard demon",
        "feature",
        3,
        "long",
        false,
        update(4284013),
        "newgrounds",
        "nine circles",
        ["cube", "ship", "ball", "wave"]
      )
    case "stereo madness":
      return new Level(
        1,
        "easy",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship"]
      )
    case "bloodbath":
      return new Level(
        10,
        "extreme demon",
        "feature",
        0,
        "long",
        true,
        update(10565740),
        "newgrounds",
        "hell",
        ["cube", "ship", "ball", "ufo", "wave", "dual"]
      )
    case "sonic wave infinity":
      return new Level(
        10,
        "extreme demon",
        "feature",
        0,
        "xl",
        true,
        update(69685815),
        "newgrounds",
        "nine circles",
        ["cube", "ship", "ball", "wave", "dual"]
      )
    case "damascus": // thats what damascus, thats what the point of damascus
      return new Level(
        10,
        "extreme demon",
        "feature",
        0,
        "xl",
        true,
        update(93339534),
        "newgrounds",
        "dynamic",
        ["cube", "ship", "ball", "ufo", "wave", "robot", "spider", "swing", "dual"]
      )
    case "back on track":
      return new Level(
        2,
        "easy",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship"]
      )
    // case "polargeist":
    //   return new Level(
    //     3,
    //     "normal",
    //     "star",
    //     3,
    //     "long",
    //     false,
    //     "1.0",
    //     "robtop",
    //     "robtop",
    //     ["cube", "ship"]
    //   )
    // case "dry out":
    //   return new Level(
    //     4,
    //     "normal",
    //     "star",
    //     3,
    //     "long",
    //     false,
    //     "1.0",
    //     "robtop",
    //     "robtop",
    //     ["cube", "ship"]
    //   )
    // case "base after base":
    //   return new Level(
    //     5,
    //     "hard",
    //     "star",
    //     3,
    //     "long",
    //     false,
    //     "1.0",
    //     "robtop",
    //     "robtop",
    //     ["cube", "ship"]
    //   )
    case "cant let go":
      return new Level(
        6,
        "hard",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship"]
      )
    case "jumper":
      return new Level(
        7,
        "harder",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship"]
      )
    case "time machine":
      return new Level(
        8,
        "harder",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship"]
      )
    case "cycles":
      return new Level(
        9,
        "harder",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship", "ball"]
      )
    case "xstep":
      return new Level(
        10,
        "insane",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship", "ball"]
      )
    case "clutterfunk":
      return new Level(
        11,
        "insane",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship", "ball"]
      )
    case "theory of everything":
      return new Level(
        12,
        "insane",
        "star",
        3,
        "long",
        false,
        "1.0",
        "robtop",
        "robtop",
        ["cube", "ship", "ball", "ufo"]
      )
    case 'tidal wave':
      return new Level(
        10,
        'extreme demon',
        'rated',
         0,
        'xl',
        true,
        update(86407629),
        'newgrounds',
        'glow/high decoration',
        ['cube,', 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider', 'dual']
      )
    case 'acheron':
      return new Level(
        10,
        "extreme demon",
        "feature",
        0,
        "long",
        true,
        update(73667628),
        "newgrounds",
        "1.9",
        ['cube', 'ship', 'ball', 'ufo', 'wave']
      ) // still on acheron? just use the wiki, ctrl+f every gamemode. make sure the gameplay description is detailed though. use the tidal wave wiki as a bad example
    case 'nullscapes':
      return new Level(
        10,
        "extreme demon",
        "feature",
        0,
        "long",
        true,
        update(109780665),
        "newgrounds",
        "inspired",
        ["robot"]
      )
    case 'silent clubstep':
      return new Level(
        10,
        "extreme demon",
        "star",
        0,
        "long",
        false,
        update(4125776),
        "robtop",
        "1.9",
        ["cube", 'ship', 'ball', 'ufo', 'dual']
      ) 
    case 'avernus':
      return new Level(
         10,
          "extreme demon",
          "star",
          0,
          "long",
          true,
          update(89496627),
          "newgrounds",
          "hell",
          ["cube", 'ship', 'ball', 'ufo', 'dual']
        )
      // case 'tunnel of despair':
      //   return new Level(
      //     10,
      //     "extreme demon",
      //     "feature",
      //     0,
      //     "long",
      //     true,
      //     update(91351939),
      //     "newgrounds",
      //     "generic/other",
      //     ["cube", 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider']
      //   )
      case 'abyss of darkness':
        return new Level(
          10,
          "extreme demon",
          "star",
          0,
          "xl",
          true,
          update(49896559),
          "newgrounds",
          "generic/other",
          ["cube", 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider', 'dual']
        )
      case 'kyouki': //q key
        return new Level(
          10,
          "extreme demon",
          "feature",
          0,
          "long",
          true,
          update(86018142),
          "newgrounds",
          "glow/high decoration",
          ["cube", 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider', 'dual']
        )
      case 'slaughterhouse':
        return new Level(
          10,
          "extreme demon",
          "star",
          0,
          "long",
          true,
          update(27690100),
          "nong",
          "hell",
          ["cube", 'ship', 'ball', 'ufo', 'wave']
        )
    case 'sakupen circles':
      return new Level(
        10,
        "extreme demon",
        "star",
        0,
        "medium",
        true,
        update(76962930),
        "newgrounds",
        "nine circles",
        ["cube", 'ship', 'ball', 'wave', 'dual']
      )
    case 'the nightmare':
      return new Level(
        10,
        "easy demon",
        "feature",
        0,
        "long",
        false,
        update(13519),
        "robtop",
        "robtop",
        ["cube", 'ship', 'ball']
      )
    case 'retray':
      return new Level(
        2,
        "easy",
        "feature",
        3,
        "long",
        false,
        update(6508283),
        "newgrounds",
        "generic/other",
        ["cube", 'ship', 'ball', 'ufo', 'wave']
      )
    case 'sonar':
      return new Level(
        2,
        "easy",
        "feature",
        3,
        "long",
        false,
        update(4454123),
        "newgrounds",
        "generic/other",
        ["cube", 'ship', 'ufo', 'wave']
      )
    case 'outerspace':
      return new Level(
        5,
        "hard",
        "feature",
        3,
        "long",
        false,
        update(27732941),
        "newgrounds",
        "generic/other",
        ["cube", 'ship', 'ball', 'ufo']
      )
    case 'level easy':
      return new Level(
        3,
        "normal",
        "feature",
        0,
        "long",
        false,
        update(11940),
        "newgrounds",
        "robtop",
        ["cube", 'ship']
      )
    case 'dark paradise':
      return new Level(
        2,
        "easy",
        "feature",
        3,
        "long",
        false,
        update(11280109),
        "newgrounds",
        "generic/other",
        ["cube", 'ship', 'ball', 'ufo', 'wave']
      )
    case 'acid factory':
      return new Level(
        4,
        "hard",
        "feature",
        3,
        "long",
        false,
        update(28179535),
        "newgrounds",
        "generic/other",
        ["cube", 'ship', 'ball', 'ufo', 'robot']
      )
    case 'dreamland':
      return new Level(
        4,
        "hard",
        "feature",
        0,
        "long",
        false,
        update(150245),
        "newgrounds",
        "robtop",
        ["cube", 'ship']
      )
    case 'amplification':
      return new Level(
        5,
        "hard",
        "feature",
        3,
        "long",
        false,
        update(20635816),
        "newgrounds",
        "generic/other",
        ["cube", 'ship', 'ball', 'ufo', 'wave', 'robot']
      )
    case 'the lightning road':
      return new Level(
        10,
        "easy demon",
        "feature",
        0,
        "long",
        false,
        update(55520),
        "newgrounds",
        "robtop",
        ["cube", 'ship', 'ball']
      )
    case 'promises':
      return new Level(
        2,
        "easy",
        "feature",
        3,
        "long",
        false,
        update(26618473),
        "newgrounds",
        "generic/other",
        ["cube", 'ship', 'ball', 'ufo', 'robot']
      )
    case 'end of line':
      return new Level(
        3,
        "normal",
        "feature",
        3,
        "long",
        false,
        update(215705),
        "newgrounds",
        "robtop",
        ["cube", 'ship', 'ball', 'robot']
      )
    default:
      return new Level(
        0,
        "error",
        "error",
        0,
        "error",
        true,
        "error",
        "error",
        "error",
        ["cube"]
      )
    }}

function getAllLevelNames() {
  let levelNames = [];
  const regex = /case\s+["']([^"']+)["']/g;
  let match;

  while ((match = regex.exec(levelStats.toString())) !== null) {
    levelNames.push(match[1]);
  }

  return levelNames;
}

export const levelNames = getAllLevelNames()
console.log(levelNames)

export function gamemodeEvaluator(answer, guess, type) {
  let count = 0
  for (let i = 0; i < answer[type].length; i++) {
    answer[type][i] === guess[type][i] && count++ 
  }
  return (count === answer[type].length) ? answer[type].length === guess[type].length ? 'green' : 'orange' : 'red'
}


export function compare(answer, guess, type) {
  let array = [type, guess[type], answer[type]]
  let stringed = JSON.stringify(array)
  let color = getColor(stringed)
  let picture = getPicture(stringed)
  color = type === 'gamemodes' ? gamemodeEvaluator(answer, guess, type) : color
  guess = type === 'gamemodes' ? guess[type].join(', ') : guess[type]
  let final = [type, guess, color, picture]
  return final
}



export function getColor(input) {
  let inputArray = JSON.parse(input)
  let possibleColor = inputArray[1] === inputArray[2] ? 'green' : 'red'
  if (Array.isArray[inputArray[1]]) {
    return inputArray[1][0] === inputArray[2][0] ? inputArray[1][1] === inputArray[2][1] ? 'green' : 'orange' : 'red'
  }
  return possibleColor
}


export function getPicture(input) {
  let inputArray = JSON.parse(input)
  let mainFolder = inputArray[0]
  let secondary = inputArray[1]
  if (Array.isArray[inputArray[1]]) {
    if (inputArray[0] === 'song') secondary = inputArray[1][0]
  }
  if (inputArray[0] === 'objects') secondary = !secondary ? 'object' : 'objects'
  if (inputArray[0] === 'stars' && !isNaN(secondary)) secondary = 'stars'
  return `${process.env.PUBLIC_URL}/assets/${mainFolder}/${secondary}.png`
}

const decoThemeList = [
  "hell", // red lvls
  "modern", // modern, smooth decoration
  "nine circles", // actual nine circles levels
  "flashy", // epileptic levels
  "robtop", // layout/default block deco
  "1.9", // riot lvls
  "2.2", // levels that use 2.2 default blocks as their main decoration
  "dynamic", // levels with dynamic decoration style. aka low quality megacollabs
  "effect", // effect layouts
  "inspired", // decoration inspired by a game or song or video. all game levels are inspired
  "realistic", // EoD
  "glow/high decoration", // glow levels or other visual vomit levels
  "generic/other" // everything that doesn't fit into the above categories
]

const songCreatorList = [
  "alecxs sunders",
  "alexander nakarada",
  "alkakrab", "andrew goodwin",
  "andrew hind",
  "andrew sharp",
  "atlas reach",
  "audible dread",
  "audimus music",
  "babaka",
  "bert cole",
  "blackmid",
  "boomkitty",
  "brooklyn game audio",
  "cafofo",
  "camellia",
  "chris logsdon",
  "custom sfx",
  "cyberwave orchestra",
  "daniel carl",
  "daniel keating",
  "danielmartin",
  "dark fantasy studio",
  "dave deville",
  "david berry",
  "david dumais",
  "dennis mowers",
  "donat baracsi",
  "elv games",
  "eduardo guerra arencibia",
  "eksperiment sound",
  "epic sound",
  "epic stock media",
  "eric bowser",
  "ethan lewis maltby",
  "extra terra",
  "f-777",
  "fictium sound design",
  "fractal dreamers",
  "frums",
  "gwriterstudio",
  "gamingloops",
  "granin studio",
  "helblinde",
  "hypnos",
  "imascore",
  "intersonic sound",
  "jdsherbert",
  "jacob lives",
  "joel steudler",
  "jordi longan",
  "juhani junkala",
  "kevin macleod",
  "leaf",
  "magic sound effects",
  "marcin szmuc",
  "marika schanz",
  "marma",
  "matias puumala",
  "matteo palmer",
  "moppy",
  "n91",
  "nicole marie t",
  "nitro fun",
  "notonetyrone",
  "one man symphony",
  "ostinarium",
  "owl theory music",
  "pete frogs",
  "pridask",
  "panman music",
  "philip zubarik",
  "pikewin",
  "potion audio",
  "rafael torres",
  "ragielof",
  "rik4k",
  "rob scales",
  "rodrigo flores",
  ""

]

//function checkList(level) {
//  return listOfLevels.indexOf(level)
//  }
//  console.log(checkList(“erebus”))
//  }
  