module.exports = function repeater(str, options) {

  function m_repeater(s, repeat_times, separator) {
    if (typeof s === "undefined")           return '';

    if (typeof separator === "undefined")   separator = '+';  

    let s_with_separator = separator + s;
    for (let i = 1; i < repeat_times; i++) {
      s += s_with_separator;
    }

    return s;
  }

  let new_addition = m_repeater(options.addition, options.additionRepeatTimes, options.additionSeparator);

  return m_repeater(str + new_addition, options.repeatTimes, options.separator);
};
