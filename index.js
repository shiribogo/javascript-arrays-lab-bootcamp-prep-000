const app = "I don't do much."
var kittens= ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name,array) {
  [name,...array]
}

function prependKitten(name, array) {
  [array, name...]
}

function removeLastKitten(name) {
  kittens.splice(0,1)
}

function removeFirstKitten(name) {
  kittens.splice(0,1)
}