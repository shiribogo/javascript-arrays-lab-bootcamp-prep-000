const app = "I don't do much."
var kittens= ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name, kittens) {
  return [name,...kittens]
  
}

function prependKitten(name, kittens) {
  return [...kittens, name]
}

function removeLastKitten(name) {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}