console.log("Start small. Ship something.");
console.error("This is an error");
console.warn("This is an warning");

// hoisting in JS

var x = 0
x = 1

const a = 0
// a = 2

let b = 1
console.log(b)
b = 'akhshy'
console.log(b)
b = false
console.log(b)
b = [1, 2, 3, 'akhshy', true, ['a', 'k']]
//   0  1  2     3       4      5

b.push('hello')
console.log(b) // [1, 2, 3, 'akhshy', true, ['a', 'k'], 'hello']

b.pop()
console.log(b) // [1, 2, 3, 'akhshy', true, ['a', 'k']]

b.unshift('hello')
console.log(b) // ['hello', 1, 2, 3, 'akhshy', true, ['a', 'k']]

b.shift()
console.log(b) // [1, 2, 3, 'akhshy', true, ['a', 'k']]


for (let i = 0; i < b.length; i++) {
    console.log(b[i])
}

const newArrB = b.map((item) => {
  item = item + 'hello'
  console.log(item)
})

b.forEach((item) => {
    console.log(item)
})
console.log(b) // [1, 2, 3, 'akhshy', true, ['a', 'k']]

const filteredB = b.filter((item) => {
    return typeof item === 'string'
})
console.log(filteredB) // ['akhshy']

const numberedArr = [1, 2, 3, 4, 5, 6]
const sumB = numberedArr.reduce((acc, item) => acc = acc + item, 0)
console.log(sumB) // 21

b.splice(2, 0, 'hello')
console.log(b) // [1, 2, 'hello', 3, 'akhshy', true, ['a', 'k']]

b[7] = 'hello'
console.log(b) // [1, 2, 3, 'akhshy', true, ['a', 'k'], <1 empty item>, 'hello']

console.log(newArr[1])

console.log(b)

b = {name: "akhshy", age: 99}
console.log(b)
console.log(b.fdasfdasfdas)
b.dassadfdas = 'hello'
b['fdasfdasfdas'] = 'world'
console.log(b)

console.log(Object.keys(b)) // ['name', 'age', 'dassadfdas', 'fdasfdasfdas']
console.log(Object.values(b)) // ['akhshy', 99, 'hello', 'world']
console.log(Object.entries(b)) // [['name', 'akhshy'], ['age', 99], ['dassadfdas', 'hello'], ['fdasfdasfdas', 'world']]



const h1 = document.getElementById('my-heading')
console.log(h1)

h1.style.color = 'yellow'

// adding 10 divs to main tag as a child element

const main = document.getElementsByTagName('main')[0]

for(let i = 0; i < 10; i++) {
    const div = document.createElement('div')
    div.textContent = `This is div number ${i+1}`
    main.appendChild(div)
}

// add div as sibling to main tag

const div = document.createElement('div')
div.textContent = "This is a sibling div to main tag"
main.parentNode.appendChild(div)
