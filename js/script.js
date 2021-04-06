
  function getIconsDb() {

    return [
      {
        name: "cat",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "crow",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dove",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "horse",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "user-astronaut",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-graduate",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-ninja",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-secret",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
    ];

  }

  function getColors() {
    const colors = ["blue", "red", "green", "purple", "yellow"];
    return colors
  }

  // Milestone 1
  // Partendo dalla seguente struttura dati , mostriamo
  //in pagina tutte le icone disponibili come da layout.

  function printIcons(icons) {

    const iconsContainer = document.getElementById("icons-container");
    iconsContainer.innerHTML = "";
    icons.forEach(icon => {

      iconsContainer.innerHTML += `<div>
                                      <i class="${icon.family} ${icon.prefix}${icon.name}" style="color:${icon.color}"></i>
                                      <div class="title">${icon.name.toUpperCase()}</div>
                                    </div>`
    })
  }

  
// Milestone 2
// Coloriamo le icone per tipo

  function getIconType(icons) {

    const types = [];

    icons.forEach(icon => {

      if(!types.includes(icon.type)) {
        types.push(icon.type)
      }
    });

    return types
  }

  function colorIcons(icons,colors,iconTypes) {

    icons.map(icon => {

      const iconType = icon.type;
      const typeIndex = iconTypes.indexOf(iconType);
      console.log(typeIndex);

      const color = colors[typeIndex];
      icon.color = color;
    })

    return icons
  }

  function addOptions(types) {
    const select = document.getElementById("type");
    types.forEach(item => {
        const option = `
            <option value="${item}">${item.charAt(0).toUpperCase()}${item.slice(1)}</option> 
        `;
        select.innerHTML += option
    });
}

function filterArray(icons, typeSelected) {

  const filteredArray = icons.filter(icon => {

    if (icon.type == typeSelected) {
      return icon
    }
  });

  return filteredArray;
}

  function init() {

    // Collects of all icons
    const icons = getIconsDb();
    // Collects all colors
    const colors = getColors();
    // Collects all icon types
    const iconTypes = getIconType(icons);
    // Add color to each icon
    colorIcons(icons,colors,iconTypes);
    // Prints coloured icons
    printIcons(icons);
    addOptions(iconTypes);

    const select = document.getElementById("type");
    select.addEventListener("change", function() {

      const typeSelected = this.value;

      if(iconTypes.includes(typeSelected)) {

        const typeFilterArray = filterArray(icons, typeSelected);
        printIcons(typeFilterArray);
      } else {

        printIcons(icons);
      }
      
    })
    console.log(colors,iconTypes,icons);

  }

  document.addEventListener("DOMContentLoaded", init);
  