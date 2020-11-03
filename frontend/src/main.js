import { Greeting } from './greeting.js'

export function hello() {
  var elm = document.getElementById('greeting')
  var greeting = new Greeting()
  elm.innerHTML = greeting.hello()
}

console.log('test');
