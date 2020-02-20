module.exports = function getSeason(date) {

  if (typeof(date) == "undefined") 
    return 'Unable to determine the time of year!';

  if (toString.call(date) !== "[object Date]") 
    throw new TypeError("Given not a Date object type");

  let seasons = ["winter", "spring", "summer", "autumn"];



  return seasons[Math.floor(((date.getMonth() + 1) % 12) / 3)];
};
