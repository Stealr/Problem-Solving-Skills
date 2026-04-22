const openedBracket = '({['
const closedBracket = ')}]'

const mapper = {
    '(': 'round',
    '[': 'square',
    '{': 'curly',
    ')': 'round',
    ']': 'square',
    '}': 'curly'
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 1) return false

    const arr = [] // 'round' | 'square' | 'curly'

    for (let bracket of s) {
        if (openedBracket.includes(bracket)) {
            arr.push(mapper[bracket]);
        } else {
            const lastOpenedBracket = arr.at(-1);

            if (mapper[bracket] !== lastOpenedBracket) {
                return false
            }

            arr.splice(arr.length - 1, 1)
        }
    }

    if (arr.length !== 0 ) return false

    return true
};

console.log(isValid('({})'))
console.log(isValid('({)}'))
console.log(isValid('((('))
