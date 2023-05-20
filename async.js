// Crear el contenedor div
const divImg = document.createElement('div');
divImg.id = 'img';
document.body.appendChild(divImg);

// Función asincrónica para obtener y mostrar las imágenes
//try intenta cumplir la promesa, compañero catch( con fetch usas el metodo .then/catch)
async function fetchAndDisplayImages() {
  try {
    // Realizar el fetch a la API
    const response = await fetch('https://rickandmortyapi.com/api/character');
    
    const data = await response.json();// lo mandamos a la variable

    // Iterar sobre los resultados, puede ser con for of,forEach,map
    //for of, genera una cons resultado por cada objeto.
    for (const result of data.results) {
      // Obtener la URL de la imagen del personaje
      const imageUrl = result.image;

      // Crear un nuevo elemento de imagen con createElement
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;

      // Agregar la imagen al contenedor div
      divImg.appendChild(imgElement);
    }
  } catch (error) {// atrapar el error
    console.error(error, "no se pudo resolver la peticion");
  }
}

// Llamar a la función asincrónica
fetchAndDisplayImages();

