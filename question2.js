var rules = [
  {occur: 'AB', sub: 'AA'},
  {occur: 'BA', sub: 'AA'},
  {occur: 'CB', sub: 'CC'},
  {occur: 'BC', sub: 'CC'},
  {occur: 'AA', sub: 'A'},
  {occur: 'CC', sub: 'C'}
];

function solution(S){
  var usefulRules = [];

  rules.forEach(function(rule) {
    if (S.indexOf(rule.occur) !== -1) {
      usefulRules.push(rule);
    }
  });

  if (usefulRules.length === 0) {
    return S;
  }

  var randIx = Math.floor(Math.random() * usefulRules.length);
  var applyRule = usefulRules[randIx];

  S = S.replace(applyRule.occur, applyRule.sub);

  return solution(S);
}

console.log(solution('ABBCC'));