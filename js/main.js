const linkList = [
    { label: 'Week 1', url: 'SiteFiles/W01/index.html' },
    { label: 'Week 3', url: 'SiteFiles/W03/index.html' },
    { label: 'Week 5 - CSS Grid', url: 'SiteFiles/W05/index.html' },
    { label: 'Week 5 - Responsive', url: 'SiteFiles/W06/responsibe.html' },
    { label: 'Week 6', url: 'SiteFiles/W06/index.html' },
    { label: 'Week 7', url: 'SiteFiles/W07/index.html' },
    { label: 'Week 8', url: 'SiteFiles/W08/index.html' },
    { label: 'Week 9', url: 'SiteFiles/W09/index.html' },
    { label: 'Week 10', url: 'SiteFiles/W10/index.html' },
    { label: 'Week 10', url: 'SiteFiles/W10/index.html' },
    { label: 'Week 10', url: 'SiteFiles/W10/index.html' },
  ];

  function addLinks() {
    // Select the ol element by its ID
    const olElement = document.getElementById('link-list');

    // Loop through the array of links
    for (let i = 0; i < linkList.length; i++) {
      // Create a new li element
      const liElement = document.createElement('li');

      // Create a new a element with the label and url from the link array
      const aElement = document.createElement('a');
      aElement.textContent = linkList[i].label;
      aElement.setAttribute('href', linkList[i].url);

      // Add the a element to the li element
      liElement.appendChild(aElement);

      // Add the li element to the ol element
      olElement.appendChild(liElement);
    }
  }