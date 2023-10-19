//! Author: Christian M. Fulton
//! Version: 0.0.1
const puppeteer = require('puppeteer');

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


    await browser.close();
   })
}

function writeToFile(data) {
    /*
    used to write data to file.
    */
}

module.exports = driver;