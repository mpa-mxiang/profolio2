const triggerBtn = document.querySelector('#popup-trigger');
const popupContainer = document.querySelector('#popup-container');

// Event listener for the trigger button
triggerBtn.addEventListener('click', function() {
  // Create the modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');
  
  // Create the popup content container
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
  
  // Append the modal overlay and popup content to the popup container
  popupContainer.appendChild(modalOverlay);
  popupContainer.appendChild(popupContent);
  
  // Example data for the popup
  const exampleData = {
    title: 'Multi Post Stories',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essent`,
    liveDemoLink: 'https://example.com',
    sourceCodeLink: 'https://github.com/example'
  };
  
  // Function to populate the popup with data
  function showPopupWithData(data) {
    popupContent.innerHTML = '';
    
    // Create elements to display the data
    const titleEl = document.createElement('h1');
    titleEl.textContent = data.title;
    
    const technologiesEl = document.createElement('ul');
    technologiesEl.innerHTML = data.technologies.map(technology => `<li>${technology}</li>`).join('');
    
    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = data.description;
    
    const liveDemoBtn = document.createElement('a');
    liveDemoBtn.href = data.liveDemoLink;
    liveDemoBtn.setAttribute('aria-label', 'project live demo');
    liveDemoBtn.setAttribute('tabindex', '-1');
    liveDemoBtn.innerHTML = `See live <img src="./img/live-demo.png" alt="live demo icon"/>`;
    
    const sourceCodeBtn = document.createElement('a');
    sourceCodeBtn.href = data.sourceCodeLink;
    sourceCodeBtn.setAttribute('aria-label', 'project source code');
    sourceCodeBtn.setAttribute('tabindex', '-1');
    sourceCodeBtn.innerHTML = `See source <img src="./img/github-button.png" alt="github icon"/>`;
    
    // Append the data elements to the popup content
    popupContent.appendChild(titleEl);
    popupContent.appendChild(technologiesEl);
    popupContent.appendChild(descriptionEl);
    popupContent.appendChild(liveDemoBtn);
    popupContent.appendChild(sourceCodeBtn);
  }
  
  // Call the function to populate the popup with data
  showPopupWithData(exampleData);
});
