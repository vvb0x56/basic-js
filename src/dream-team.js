module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))        return false;

  return members.map(function(element) {
    if (typeof(element) !== 'string') return;
    
    let c = element.trimLeft().charAt(0).toUpperCase();
    if (c >= 'A' && c <= 'Z')         return c;
  }).sort().join("");
};
