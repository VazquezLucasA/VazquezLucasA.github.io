document.getElementById("languageSwitch").addEventListener("change", function () {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const label = document.querySelector(".form-check-label");
  
    if (this.checked) {
      title.innerText = "Título del Proyecto";
      description.innerText =
        "Esta es una descripción detallada del proyecto. Explica los objetivos, las tecnologías utilizadas y los resultados obtenidos.";
      label.innerText = "Inglés";
    } else {
      title.innerText = "Project Title";
      description.innerText =
        "This is a detailed description of the project. It explains the goals, technologies used, and outcomes achieved.";
      label.innerText = "Español";
    }
  });
  