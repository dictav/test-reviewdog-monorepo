var mylib = (function (exports) {
  'use strict';

  class Greeting {
    hello() {
      return "hello";
    }
  }

  function hello() {
    const elm = document.getElementById("greeting");
    const greeting = new Greeting();
    elm.innerHTML = greeting.hello();
  }

  exports.hello = hello;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
