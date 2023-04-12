
const data = [{
  title: 'Multi Post Stories',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essent`,
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example'
},
{
  title: 'Multi Post Stories',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essent`,
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example'
},
{
  title: 'Multi Post Stories',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essent`,
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example'
},
{
  title: 'Multi Post Stories',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essent`,
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example'
},
{
  title: 'Multi Post Stories',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essent`,
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example'
},
{
  title: 'Multi Post Stories',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essent`,
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveDemoLink: 'https://example.com',
  sourceCodeLink: 'https://github.com/example'
}
];
const modal = document.getElementById("popup-container");
const btn = document.getElementById("popup-trigger");
const span = document.getElementsByClassName("close")[0];

data.forEach(function (project) {
  console.log('Title:', project.title);
  console.log('Technologies:', project.technologies.join(', '));
  console.log('Description:', project.description);
  console.log('Live Demo Link:', project.liveDemoLink);
  console.log('Source Code Link:', project.sourceCodeLink);
});

btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
