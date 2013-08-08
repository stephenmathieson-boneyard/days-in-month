
var days,
    assert = require('assert');

try {
  // component
  days = require('days-in-month');
} catch (e) {
  // node
  days = require('..');
}

describe('days-in-month', function () {
  it('should work when provided a Date', function () {
    assert(days(new Date(2013, 7, 8)) === 31);
  });

  it('should assume the current year when only provided a month', function () {
    assert(days(8) === 31);
  });

  it('should work when provided a year and month', function () {
    assert(days(2013, 8) === 31);
  });

  it('should account for leap years', function () {
    assert(days(2000, 2) === 29);
    assert(days(2076, 2) === 29);
    assert(days(1804, 2) === 29);
    assert(days(new Date(2000, 1, 1)) === 29);
  });
});
