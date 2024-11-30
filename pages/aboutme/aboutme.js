// Calcula la edad basada en la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

// Inserta la edad en el elemento con id 'edad'
function actualizarEdad() {
  const fechaNacimiento = "2000-11-02"; // Cambia esta fecha por tu fecha de nacimiento
  const edad = calcularEdad(fechaNacimiento);
  document.getElementById("edad").textContent = edad;
}

document.addEventListener("DOMContentLoaded", () => {
  // Al cargar la página, actualiza la edad
  actualizarEdad();
});

document.getElementById("languageSwitch").addEventListener("change", function () {
  const AboutMeInfo = document.getElementById("AboutMeInfo");
  const BtnInicio = document.getElementById("BtnInicio");
  const BtnSobreMi = document.getElementById("BtnSobreMi");
  const BtnContacto = document.getElementById("BtnContacto");

  if (this.checked) {
    localStorage.setItem("language", "en");
    BtnInicio.innerText = "Home";
    BtnSobreMi.innerText = "About me";
    BtnContacto.innerText = "Contact";
    AboutMeInfo.innerHTML = `<h4>Hello 👋 I'm Lucas Vázquez, and I am <span id="edad"></span> years old.
    <br>I am a Data Analyst and Associate's degree in university programming, graduated from <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.
    <br><br>The technologies I work with include SQL, Python, Excel, Google Sheets, Looker Studio, Power BI, Power Query, and DAX.
    I also plan to continue expanding my data knowledge with tools like machine learning and cloud computing platforms (e.g., AWS).

    <br><br>You can check out some of my work and certifications on this website, in my resume, or through any of my social media platforms.
    <br><br>If you want to contact me, you can do so via the contact form on the contact page or by sending me a direct message on any platform.
    <br>Thank you for reading this far.
    </h4>`;
    
    // Actualiza la edad después de cambiar el idioma
    actualizarEdad();
  } else {
    localStorage.setItem("language", "es");
    BtnInicio.innerText = "Inicio";
    BtnSobreMi.innerText = "Sobre mí";
    BtnContacto.innerText = "Contacto";
    AboutMeInfo.innerHTML = `<h4>Hola 👋 Soy Lucas Vázquez y tengo <span id="edad"></span> años.
    <br>Soy Analista de Datos y Técnico Universitario en Programación egresado de <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.
    <br><br>Las tecnologías que manejo son SQL, Python, Excel, Google Sheets, Looker Studio, Power BI, Power Query, DAX.
    También planeo continuar formándome en datos en herramientas como machine learning y plataformas de computación en la nube (Ej: AWS).
    <br><br>Puedes revisar algunos de mis trabajos y certificaciones en esta página web, en mi CV o a través de cualquiera de mis redes.
    <br><br>Si quieres contactarme puedes hacerlo desde el formulario en la pág de contacto o por MD por cualquier medio.
    <br>Gracias por llegar hasta aquí.
    </h4>`;
    actualizarEdad();
  }
});



window.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("language");
  if (language === "en") {
    document.getElementById("languageSwitch").checked = true;
    document.getElementById("BtnInicio").innerText = "Home";
    document.getElementById("BtnSobreMi").innerText = "About me";
    document.getElementById("BtnContacto").innerText = "Contact";
    AboutMeInfo.innerHTML = `<h4>Hello 👋 I'm Lucas Vázquez, and I am <span id="edad"></span> years old.
    <br>I am a Data Analyst and Associate's degree in university programming, graduated from <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.
    <br><br>The technologies I work with include SQL, Python, Excel, Google Sheets, Looker Studio, Power BI, Power Query, and DAX.
    I also plan to continue expanding my data knowledge with tools like machine learning and cloud computing platforms (e.g., AWS).
    <br><br>You can check out some of my work and certifications on this website, in my resume, or through any of my social media platforms.
    <br><br>If you want to contact me, you can do so via the contact form on the contact page or by sending me a direct message on any platform.
    <br>Thank you for reading this far.
    </h4>`;
    actualizarEdad();
  } else {
    document.getElementById("languageSwitch").checked = false;
    document.getElementById("BtnInicio").innerText = "Inicio";
    document.getElementById("BtnSobreMi").innerText = "Sobre mí";
    document.getElementById("BtnContacto").innerText = "Contacto";
    AboutMeInfo.innerHTML = `
    <h4>Hola 👋 Soy Lucas Vázquez y tengo <span id="edad"></span> años.
    <br>Soy Analista de Datos y Técnico Universitario en Programación egresado de <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.
    <br><br>Las tecnologías que manejo son SQL, Python, Excel, Google Sheets, Looker Studio, Power BI, Power Query, DAX.
    También planeo continuar formándome en datos en herramientas como machine learning y plataformas de computación en la nube (Ej: AWS).
    <br><br>Puedes revisar algunos de mis trabajos y certificaciones en esta página web, en mi CV o a través de cualquiera de mis redes.
    <br><br>Si quieres contactarme puedes hacerlo desde el formulario en la pág de contacto o por MD por cualquier medio.
    <br>Gracias por llegar hasta aquí.
    </h4>`;

    // Actualiza la edad después de cambiar el idioma
    actualizarEdad();
  }
});