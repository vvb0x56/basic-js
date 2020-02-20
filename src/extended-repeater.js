module.exports = function repeater(str, options) {
//repeatTimes sets the number of repetitions of the str;
//separator is a string separating repetitions of the str;
//addition is an additional string that will be added to each repetition of the str;
//additionRepeatTimes sets the number of repetitions of the addition;
//additionSeparator is a string separating repetitions of the addition.
  
  console.log(str, ":", options);
  let ret = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    ret += str;
  }

  console.log(ret);

  return ret;
};

//  describe('base & functional requirements', () => {
//    it.optional('repeats string properly', () => {
//      assert.equal(repeater('la', { repeatTimes: 3 }), 'la+la+la');
//      assert.equal(repeater('single', { repeatTimes: 1 }), 'single');
//      assert.equal(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');
//    });
//
//    it.optional('supports custom separator', () => {
//      assert.equal(repeater('la', { repeatTimes: 3, separator: 's' }), 'laslasla');
//      assert.equal(repeater('point', { repeatTimes: 3, separator: '&&&' }), 'point&&&point&&&point');
//      assert.equal(repeater('12345', { repeatTimes: 5, separator: '3 words separator' }), '123453 words separator123453 words separator123453 words separator123453 words separator12345');
//    });
//
//    it.optional('supports basic addition', () => {
//      assert.equal(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }), 'la+sla+sla+');
//      assert.equal(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }), 'LALA++sLALA++sLALA++');
//    });
//
//    it.optional('supports missing repeat counters', () => {
//      assert.equal(repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' }), 'TESTstrADD!');
//    });
//

  
