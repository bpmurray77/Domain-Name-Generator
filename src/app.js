/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let first = ["massive", "obtuse"];
  let second = ["crystaline", "amethyst"];
  let third = ["palace", "fortress"];
  let list = [];
  var total = first.length * second.length * third.length;
  for (var i = 0; i < total; i++) {
    for (var a = 0; a < first.length; a++) {
      for (var b = 0; b < second.length; b++) {
        for (var c = 0; c < third.length; c++) {
          list.push(first[a] + second[b] + third[c] + ".com");
        }
      }
    }
  }
  console.log(list);
};
window.onload = () => {
  document.querySelector("#test").innerHTML = list;
};
