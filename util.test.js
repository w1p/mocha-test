//import functions from our util.js
//const { TestScheduler } = require('jest');
const { generateText } = require('./util');

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