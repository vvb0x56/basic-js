const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    // VALIDATE DATA

    if (typeof(sampleActivity) !== 'string')    return false;

    let activity = parseFloat(sampleActivity);

    if (activity !== activity)                  return false; // if activity is NaN
    if (activity <= 0 || activity > 15.0009)    return false;

    // COMPUTE:
    //   Method: t == log(N0 / N) / k, where  k == 0.0693 / t1-2
    //   Should return t
    //   Details: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2
    // VARS:
    //   N0 is MODERN_ACTIVITY
    //   N  is activity
    //   t1-2 is HALF_LIFE_PERIOD
    // ! add 0.5 to round up
    return  Math.round(Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD) + 0.5); 
};
