/**
 * Codewars kata: Two to One
 *
 * Task:
 * Take 2 strings s1 and s2 including only letters from a to z.
 * Return a new sorted string (alphabetical ascending),
 * the longest possible, containing distinct letters
 * coming from s1 or s2.
 *
 * Source:
 * https://www.codewars.com/kata/5656b6906de340bd1b0000ac
 *
 * Concepts:
 * - strings
 * - uniqueness
 * - loops
 * - sorting
 * - Set
 */
//Solution with loops
function longestWithLoop(s1, s2) {
    const arrS1 = s1.split('') 
    const arrS2 = s2.split('') 
    const res = [];
    for(let i=0; i<arrS1.length; i++){
        const letter = arrS1[i]
        if(!res.includes(letter)){
            res.push(letter)
        }
    }
    for(let j=0; j<arrS2.length; j++){
        const letter = arrS2[j]
        if(!res.includes(letter)){
            res.push(letter)
        }
    }
    return res.sort().join('')
}
//Solution with Set
function longestWithSet(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
};
