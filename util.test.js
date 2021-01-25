//https://www.youtube.com/watch?v=r9HdJ8P6GQI&t=398s&ab_channel=Academind

//import functions from our util.js
//const { TestScheduler } = require('jest');
const { generateText, validateAndGenerate } = require('./util');
const puppeteer = require('puppeteer');

test('Ouput name and age from generateText', () => {
    //Actual testing code
    const fakeText = generateText('John', 12)
    expect(fakeText).toBe('John (12 years old)')
    const fakeText2 = generateText('Aaron', 10)
    expect(fakeText2).toBe('Aaron (10 years old)')

});

test('Test null value with generateText', () => {
    //Actual testing code
    const fakeText = generateText('', null)
    expect(fakeText).toBe(' (null years old)')
    const fakeText2 = generateText()
    expect(fakeText2).toBe('undefined (undefined years old)')
});

test('Test validateAndGenerate', () => {
    const text = validateAndGenerate('Jane', 16)
    expect(text).toBe('Jane (16 years old)')
})

/*
test('Simulate the mouse clicking around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920, 1080',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process',]

    })
    const page = await browser.newPage();
    await page.goto('file:////home/william/src/node/js-testing-introduction/index.html')

})
*/