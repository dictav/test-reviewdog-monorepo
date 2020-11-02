import { Greeting } from './greeting.js'

export function hello() {
  const elm = document.getElementById('greeting')
  const greeting = new Greeting()
  elm.innerHTML = greeting.hello()
}
