const { test } = require('node:test');
const assert = require('node:assert/strict');
const { addTwoNumbers } = require('../src/addTwoNumbers');

test('adds two positive numbers', () => {
  assert.equal(addTwoNumbers(2, 3), 5);
});

test('adds negative numbers', () => {
  assert.equal(addTwoNumbers(-2, -3), -5);
  assert.equal(addTwoNumbers(-2, 5), 3);
});

test('adds zero', () => {
  assert.equal(addTwoNumbers(0, 7), 7);
});

test('adds decimals within floating-point tolerance', () => {
  assert.ok(Math.abs(addTwoNumbers(0.1, 0.2) - 0.3) < Number.EPSILON);
});

test('throws TypeError for non-finite or non-number input', () => {
  for (const [a, b] of [['2', 3], [2, '3'], [null, 1], [undefined, 1], [NaN, 1], [Infinity, 1]]) {
    assert.throws(() => addTwoNumbers(a, b), TypeError, `expected TypeError for (${String(a)}, ${String(b)})`);
  }
});
