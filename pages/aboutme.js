
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
  document.addEventListener("DOMContentLoaded", () => {
    const fechaNacimiento = "2000-11-02"; // Cambia esta fecha por tu fecha de nacimiento
    const edad = calcularEdad(fechaNacimiento);
    document.getElementById("edad").textContent = edad;
  });
  