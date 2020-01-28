/**
 * Renders any number of projects to the browser.
 * @param {Array} proj - Array of project objects
 */
const renderProject = (proj) => {
  document.querySelector('.project-title .title').innerHTML = proj.title;
  document.querySelector('.details .start').innerHTML = proj.start;
  document.querySelector('.details .end').innerHTML = proj.end;
  document.querySelector('.details .budget').innerHTML = `$${Number(proj.budget).toFixed(2)}`;

  let managers = '';

  proj.managers.forEach(mgr => {
    managers += `
          <tr>
            <td>${mgr.name}</td>
            <td>${mgr.position}</td>
            <td>${mgr.experience}</td>
          </tr>`
  });

  document.querySelector('.tbl-managers tbody').innerHTML = managers;

};

// now, fetch projects and render the first one.
fetch('data/projects.json').then(data => {
  return data.json();
}).then(projects => {
  renderProject(projects[0]);
});