
/**
 * Get the number of days in a month
 *
 * @api private
 * @param {Date|Number} year
 * @param {Number} [month]
 * @return {Number}
 */
module.exports = function (year, month) {

  var date;

  if (year instanceof Date) {
    date = new Date(year.getFullYear(), year.getMonth() + 1, 0);
  } else if (arguments.length === 1) {
    date = new Date(new Date().getFullYear(), year, 0);
  } else {
    date = new Date(year, month, 0);
  }

  return date.getDate();
};
