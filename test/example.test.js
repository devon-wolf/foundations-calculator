import {
    add,
    subtract,
    multiply,
    divide,
    getRemainder
} from '../mathUtils.js';

const test = QUnit.test;

test('it should return 7 when provided 3 and 4', (expect) => {
    const expected = 7;
    
    const actual = add(3, 4);

    expect.equal(actual, expected);
});

test('it should return -1 when provided 1 and -2', (expect) => {
    const expected = -1;
    
    const actual = add(1, -2);

    expect.equal(actual, expected);
});

test('it should return 302 when provided 334 and 32', (expect) => {
    const expected = 302;
    
    const actual = subtract(334, 32);

    expect.equal(actual, expected);
});

test('it should return -4 when provided -6 and -2', (expect) => {
    const expected = -4;
    
    const actual = subtract(-6, -2);

    expect.equal(actual, expected);
});

test('it should return 12 when provided 3 and 4', (expect) => {
    const expected = 12;
    
    const actual = multiply(3, 4);

    expect.equal(actual, expected);
});

test('it should return -32 when provided -8 and 4', (expect) => {
    const expected = -32;
    
    const actual = multiply(-8, 4);

    expect.equal(actual, expected);
});

test('it should return 6 when provided 60 and 10', (expect) => {
    const expected = 6;
    
    const actual = divide(60, 10);

    expect.equal(actual, expected);
});

test('it should return -8 when provided 48 and -6', (expect) => {
    const expected = -8;
    
    const actual = divide(48, -6);

    expect.equal(actual, expected);
});

test('it should return 2 when provided 20 and 6', (expect) => {
    const expected = 2;
    
    const actual = getRemainder(20, 6);

    expect.equal(actual, expected);
});

test('it should return -2 when provided -20 and 6', (expect) => {
    const expected = -2;
    
    const actual = getRemainder(-20, 6);

    expect.equal(actual, expected);
});