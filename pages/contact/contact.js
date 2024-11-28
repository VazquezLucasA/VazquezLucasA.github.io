
  document.getElementById("languageSwitch").addEventListener("change", function () {
    const BtnInicio = document.getElementById("BtnInicio");
    const BtnSobreMi = document.getElementById("BtnSobreMi");
    const BtnContacto = document.getElementById("BtnContacto");
    const FormContactMe = document.getElementById("FormContactMe");
    const FormName = document.getElementById("FormName");
    const FormEmail = document.getElementById("FormEmail");
    const FormMessage = document.getElementById("FormMessage");
    const FormBtnSend = document.getElementById("FormBtnSend");


    if (this.checked) {
        localStorage.setItem("language", "en");
        BtnInicio.innerText ="Home";
        BtnSobreMi.innerText ="About me";
        BtnContacto.innerText ="Contact";

        FormContactMe.innerText ="Contact me";
        FormName.innerText ="Name";
        FormEmail.innerText ="Email address";
        FormMessage.innerText ="Message";
        FormBtnSend.innerText ="Send Message";
    } else {
        localStorage.setItem("language", "es");
        BtnInicio.innerText ="Inicio";
        BtnSobreMi.innerText ="Sobre mí";
        BtnContacto.innerText ="Contacto";

        FormContactMe.innerText ="Contactame";
        FormName.innerText ="Nombre";
        FormEmail.innerText ="Correo";
        FormMessage.innerText ="Mensaje";
        FormBtnSend.innerText ="Enviar";
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("language");
    if (language === "en") {
      document.getElementById("languageSwitch").checked = true;
      document.getElementById("BtnInicio").innerText = "Home";
      document.getElementById("BtnSobreMi").innerText = "About me";
      document.getElementById("BtnContacto").innerText = "Contact";
      
      FormContactMe.innerText ="Contact me";
      FormName.innerText ="Name";
      FormEmail.innerText ="Email address";
      FormMessage.innerText ="Message";
      FormBtnSend.innerText ="Send Message";
    } else {
      document.getElementById("languageSwitch").checked = false;
      document.getElementById("BtnInicio").innerText = "Inicio";
      document.getElementById("BtnSobreMi").innerText = "Sobre mí";
      document.getElementById("BtnContacto").innerText = "Contacto";
      FormContactMe.innerText ="Contactame";
        FormName.innerText ="Nombre";
        FormEmail.innerText ="Correo";
        FormMessage.innerText ="Mensaje";
        FormBtnSend.innerText ="Enviar";
    }
  });