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
  color = type === 'gamemodes' ? gamemodeEvaluator(answer, guess, type) : color
  return [type, guess[type], color, 'shoutout to PepeTheGod', answer[type]]
}


export function getColor(input) {
  let inputArray = JSON.parse(input)
  let possibleColor = inputArray[1] === inputArray[2] ? 'green' : 'red'
  if (Array.isArray[inputArray[1]]) {
    return inputArray[1][0] === inputArray[2][0] ? inputArray[1][1] === inputArray[2][1] ? 'green' : 'orange' : 'red'
  }
  if (possibleColor === 'red') {
    if (String(inputArray[1]).match(/Demon/) && String(inputArray[2]).match(/Demon/)) {
      return 'orange'
    }
  }
  return possibleColor
}

export function CL2compare(answer, guess, type) {
  let array = [type, guess[type], answer[type]]
  let drawPicture = array[1]
  let squareColor = array[1] === array[2] ? 'green' : 'red'
  return [drawPicture, squareColor]
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
  


export function condenseNumber(number) {
    let number1 = String(number)[0]
    let number2 = String(number)[1]
    let number3 = String(number)[2]
    let letter = number < 1000 ? "" : number < 1000000 ? "K" : number < 1000000000 ? "M" : "B"
    let leftOfDecimal = String(number).length % 3
    switch (leftOfDecimal) {
      case 1:
        return `${number1}.${number2}${letter}`
      case 2:
        return `${number1}${number2}.${number3}${letter}`
      default:
        return `${number1}${number2}${number3}${letter}`
    }
}