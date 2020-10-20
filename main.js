/**
 * This function shuffles the li nodes.
 */
document.getElementById("shuffle").onclick = function () {

  var ul = document.querySelector('ul#shuffleAndSort');

  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }

};

/**
 * This function sorts the li nodes.
 */
document.getElementById("sort").onclick = function () {

  var ul = document.querySelector('ul#shuffleAndSort');

  Array.from(ul.getElementsByTagName("LI"))
    .sort((a, b) => a.textContent - b.textContent)
    .forEach(li => ul.appendChild(li));

}
