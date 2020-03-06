"use strict";

// Let's compile the template
// const source = document.querySelector("#project-template").innerHTML;
// const template = Handlebars.compile(source);
Handlebars.registerHelper("currency", function (value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
});
/**
 * Renders a single project.
 * @param {Object} proj - Single project object 
 */

var renderProject = function renderProject(proj) {
  document.querySelector(".project").innerHTML = Handlebars.template.project(proj);
}; // now, fetch projects and render the first one.


fetch('data/projects.json').then(function (data) {
  return data.json();
}).then(function (projects) {
  renderProject(projects[0]);
});