// Let's compile the template
const source = document.querySelector("#project-template").innerHTML;
const template = Handlebars.compile(source);

Handlebars.registerHelper("currency", (value) =>
{
    return value.toLocaleString("en-US", 
    {
      style: "currency",
      currency: "USD",

    })
});

/**
 * Renders a single project.
 * @param {Object} proj - Single project object 
 */
const renderProject = (proj) => {
    document.querySelector(".project").innerHTML = template(proj);
};

// now, fetch projects and render the first one.
fetch('data/projects.json').then(data => {
  return data.json();
}).then(projects => {
  renderProject(projects[0]);
});