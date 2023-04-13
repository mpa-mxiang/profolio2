
const data = [{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/work.png'
},
{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/work.png'
},
  ,
{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/work.png'
},
{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/work.png'
},
{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/work.png'
},
{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/work.png'
},
{
  title: 'Multi Post Stories',
  technologies: '<li>HTML</li><li>Bootstrap</li><li>Ruby</li>',
  description: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the
  industry's standard.`,
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example',
  image: './img/work.png'
}
];

const work = document.getElementById("projects");

data.forEach(function (project) {
  work.innerHTML += `
  <div class="normal">
    <img src="${project.image}" alt="Art Selection Project Image" />
    <div class="div-text">
        <h1 aria-label="Profesional Art Printing Data" class="hover">${project.title}</h1>
        <p aria-label="A daily selection of privately personalized reads;
        no accounts or sign-ups required. has been the
        industry's standard" class="hover">
        ${project.description}
        </p>
        <ul>
        ${project.technologies}
        </ul>
    </div>
    <button type="button" class="hover-btn popup-trigger" aria-label="press to see the project" id="${project.id}">See project</button>
  </div>
      `;
});
const btn = document.querySelectorAll(".popup-trigger");
const modal = document.getElementById("popup-container");


for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {


    modal.innerHTML = `
        <span class="close" ><img src="./img/close-icon.png" /></span >
        <h1>${data[i].title}</h1>
        <ul>${data[i].technologies}</ul>
        <div class="popup-div">
              <img src="${data[i].image}"></img>
              <p>${data[i].description}</p>
            </div>
            <div class="btn-div">
                <button type="button" aria-label="project live demo" tabindex="-13"><a href="${data[i].liveDemoLink}">See live<img src="./img/live-demo.png" alt="live demo icon" /></a></button>
                <button type="button" aria-label="project source code" tabindex="-14"><a href="${data[i].sourceCodeLink}">See source<img src="./img/github-button.png" alt="github icon" /></a>/button>
                </div>
    `;
    const span = document.getElementsByClassName("close")[0];

    modal.style.display = "flex";
    span.onclick = function () {
      modal.style.display = "none";
      modal.innerHTML = '';
    }
  
  });
}

