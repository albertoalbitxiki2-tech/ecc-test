/**
 * Adds two finite numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The sum of a and b.
 * @throws {TypeError} If either argument is not a finite number.
 */
function addTwoNumbers(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError(`addTwoNumbers expects two finite numbers, got (${String(a)}, ${String(b)})`);
  }
  return a + b;
}

module.exports = { addTwoNumbers };
