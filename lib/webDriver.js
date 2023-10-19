/*
I'll need to include custom cookies to scrape this domain.
This would be a whole lot easier using Python.
*/

//! Author: Christian M. Fulton
//! Version: 0.0.2
const puppeteer = require('puppeteer');
const fs = require('fs');


function driver(url) {
    /*
    goal here is to automate a browser to extract holidays from 
    'nationaltoday.com'.
    */
   (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.setViewport({Width: 1080, height: 1024});
    // From the homepage Jan XPATH: //*[@id="menu-item-19886"]/a
    // Feb XPATH: //*[@id="menu-item-19887"]/a
    // Dec XPATH: //*[@id="menu-item-20134"]/a
    // it will be easier to modify the url: https://nationaltoday.com/{insertMonth}-holidays/

    await browser.close();
   })
}

function extractToday() {
    /*
    Extract holidays just for that day. Use a package to identify Date.
    */
}

function extractMonth() {
    /*
    Extract the whole month of holidays.
    */
}

function extractYear() {
    /*
    Extract holidays for the entire year.
    */
}

function extractData(data) {
    /*
    Extract the necessary data from the page.
    */
}

function writeToFile(data) {
    /*
    used to write data to file.
    It would be nice to have the option to store the data into a txt doc or xlsx.
    figure out how to make args optional with default
    */
   fs.writeFileSync('holidays.txt', data.join('\n'), 'utf8')
}

module.exports = driver;