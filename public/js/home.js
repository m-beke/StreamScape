// Any JS for the home page goes here
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = { alignment: 'bottom' };
    var instances = M.Dropdown.init(elems, options);
  });
// hint- remember to import them in your handlebars!