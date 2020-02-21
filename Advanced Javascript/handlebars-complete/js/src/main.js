// compile requried template
// const source = document.querySelector('#project-template').innerHTML;
// const template = Handlebars.compile(source);

Handlebars.registerHelper('currency', (value) => {
  // pretty widespread support for toLocaleString() in browsers now, so  ...
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
});

const renderProject = (proj) => {
  document.querySelector('.project').innerHTML = Handlebars.templates['project'](proj);
};

// now, fetch projects and render the first one.
fetch('data/projects.json').then(data => {
  return data.json();
}).then(projects => {
  renderProject(projects[0]);
});