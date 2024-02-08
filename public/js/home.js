// Any JS for the home page goes here
const home = require("../../views/home.handlebars")

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
// hint- remember to import them in your handlebars!
module.exports = home;