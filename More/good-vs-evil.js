/*The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.*/

function goodVsEvil(good, evil){
  const goodForces = good.split(" ").map(Number).reduce((a, b) => a + b, 0);
  const evilForces = evil.split(" ").map(Number).reduce((a, b) => a + b, 0);
  
  if (goodForces === evilForces) return "Battle Result: No victor on this battle field";
  return goodForces > evilForces ? "Battle Result: Good triumphs over Evil" : "Battle Result: Evil eradicates all trace of Good";
}
