//import functions from our util.js
const { TestScheduler } = require('jest');
const { generateText } = require('./util');

TestScheduler('Ouput name and age from generateText', () => {
    //Actual testing code
    const fakeText = generateText('John', 12)
    expect(fakeText).toBe('John (12 years old)')
});