/*
 * Name: MB
 * File: ./app.js
 */

// using puppeteer elements
const puppeteer = require('puppeteer');
// async function to get DOM elements
(async () => {
    // variable to store browser options
    const launchOptions = { headless: true, }
    // variable to store browser element
    const browser = await puppeteer.launch(launchOptions);
    // variable to store new page element
    const page = await browser.newPage();

    // go to URL, wait until DOM is loaded
    await page.goto('https://www.randomlists.com/random-words?dup=false&qty=100', {
        waitUntil: 'domcontentloaded',});
    
        
    let resultRandomWords = await page.$$eval('.rand_large', words => words.map(word => word.textContent));
    arrayToCSV(resultRandomWords);
    //console.log(resultRandomWords);
    await browser.close();
})();

// console.log(wordList);
// pushes data from URL-to-csv
function arrayToCSV(arr){
    const fs = require('fs');
    const writeToFile = arr;
    //console.log(writeToFile.length);
    const writeStream = fs.createWriteStream('random.csv');
    writeStream.write(writeToFile.join(','));
    writeStream.close();
};
