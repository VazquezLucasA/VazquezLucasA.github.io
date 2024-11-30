//texto presentacion
const presentacion = document.getElementById("presentacion");
//Botones del nav
const BtnInicio = document.getElementById("BtnInicio");
const BtnSobreMi = document.getElementById("BtnSobreMi");
const BtnContacto = document.getElementById("BtnContacto");
// Descripcion proyectos
const DescProyecto1 = document.getElementById("DescProyecto1");
const DescProyecto2 = document.getElementById("DescProyecto2");
const DescProyecto3 = document.getElementById("DescProyecto3");
const DescProyecto4 = document.getElementById("DescProyecto4");
const DescProyecto5 = document.getElementById("DescProyecto5");
//Titulos certificaciones
const Proyectos = document.getElementById("Proyectos"); 
const Certificados = document.getElementById("Certificados");
const tecnologias = document.getElementById("tecnologias");
const proximamente = document.getElementById("proximamente");
//botones certificaciones
const BtnCertificacion = document.querySelectorAll(".BtnCertificacion");

document.getElementById("languageSwitch").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("language", "en");
    BtnInicio.innerText ="Home";
    BtnSobreMi.innerText ="About me";
    BtnContacto.innerText ="Contact";
    presentacion.innerHTML = `
    <h4>
    <span>
    The page is currently under construction.<br><br>
    I am a data analyst. I graduated as Associate's degree in university programming at <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.<br>
    Some of the skills I have include: Python, PowerBI, Looker Studio, Excel, Spreadsheets, MySQL, and inferential statistics.
    </span>
    <h4/>
    `;
    DescProyecto1.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto2.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto3.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto4.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto5.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    Proyectos.innerText ="Projects";
    Certificados.innerText = "Certifications";
    tecnologias.innerText = "My Stack";
    proximamente.innerText = "Soon..";

      BtnCertificacion.forEach((boton) => {
        boton.textContent = "View Certification";
      });

  } else {
    localStorage.setItem("language", "es");
    BtnInicio.innerText ="Inicio";
    BtnSobreMi.innerText ="Sobre mí";
    BtnContacto.innerText ="Contacto";
    presentacion.innerHTML = `
    <h4>
    <span>
    La página actualmente se encuentra en construcción.<br><br>
    Soy analista de datos. Recibido de Técnico Universitario en Programación en <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.<br>
    Algunas de las skills que manejo son: Python, PowerBI, Looker Studio, Excel, Spreedsheets, MySql y estadística inferencial.
    </span>
    <h4/>
    `;
      DescProyecto1.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto2.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto3.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto4.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto5.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      Proyectos.innerText ="Proyectos";
      Certificados.innerText = "Certificados";
      tecnologias.innerText = "Tecnologías que manejo";
      proximamente.innerText = "Próximamente";

      BtnCertificacion.forEach((boton) => {
        boton.textContent = "Ver certificación";
      });
  }
});

  

window.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("language");
  if (language === "en") {
    document.getElementById("languageSwitch").checked = true;
    BtnInicio.innerText ="Home";
    BtnSobreMi.innerText ="About me";
    BtnContacto.innerText ="Contact";
    presentacion.innerHTML = `
    <h4>
    <span>
    The page is currently under construction.<br><br>
    I am a data analyst. I graduated as Associate's degree in university programming at <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.<br>
    Some of the skills I have include: Python, PowerBI, Looker Studio, Excel, Spreadsheets, MySQL, and inferential statistics.
    </span>
    <h4/>
    `;
    DescProyecto1.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto2.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto3.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto4.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    
    DescProyecto5.innerText =`This is a more detailed description of the project. It can include information about the goals, 
    the technologies used, challenges faced, and the outcomes achieved.`;
    Proyectos.innerText ="Projects";
    Certificados.innerText = "Certifications";
    tecnologias.innerText = "My Stack";
    proximamente.innerText = "Soon..";

      BtnCertificacion.forEach((boton) => {
        boton.textContent = "View Certification";
      });

  } else {
    BtnInicio.innerText ="Inicio";
    BtnSobreMi.innerText ="Sobre mí";
    BtnContacto.innerText ="Contacto";
    presentacion.innerHTML = `
    <h4>
    <span>
    La página actualmente se encuentra en construcción.<br><br>
    Soy analista de datos. Recibido de Técnico Universitario en Programación en <a href="https://www.frt.utn.edu.ar/">UTN FRT</a>.<br>
    Algunas de las skills que manejo son: Python, PowerBI, Looker Studio, Excel, Spreedsheets, MySql y estadística inferencial.
    </span>
    <h4/>
    `;
      DescProyecto1.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto2.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto3.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto4.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      DescProyecto5.innerText =`Se trata de una descripción más detallada del proyecto.
      Puede incluir información sobre los objetivos, las tecnologías utilizadas, los desafíos afrontados y los resultados obtenidos.`;
      
      Proyectos.innerText ="Proyectos";
      Certificados.innerText = "Certificados";
      tecnologias.innerText = "Tecnologías que manejo";
      proximamente.innerText = "Próximamente";

      BtnCertificacion.forEach((boton) => {
        boton.textContent = "Ver certificación";
      });
  }
});