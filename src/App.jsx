import coronaImage from './assets/corona.jpg'
import kongImage from './assets/kong.webp'
import universoImagen from './assets/universo_kong.jpeg' 

import './App.css'

function App() {
  const getImageForNumber = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return [coronaImage, kongImage];
    } else if (num % 3 === 0) {
      return coronaImage; 
    } else if (num % 5 === 0) {
      return kongImage; 
    } else {
      return universoImagen; 
    }
  };

  const numeros = Array.from({ length: 30 }, (_, i) => i+1);

  return (
    <div>
    <h2 className='mb-5 ps-5'>Listado del 1 al 30 </h2>
    <ul>
      {numeros.map((num) => (
        <li className='number d-flex gap-3 justify-content-center align-items-center mb-5' key={num}>
          <span>{`#${num}`}</span>
          {Array.isArray(getImageForNumber(num)) ? ( // Verifica si hay más de una imagen
            getImageForNumber(num).map((imagen, index) => (
              <img key={index} width={200} src={imagen} alt={`Imagen para el número ${num}`} />
            ))
          ) : (
            getImageForNumber(num) && (
              <img width={200} src={getImageForNumber(num)} alt={`Imagen para el número ${num}`} />
            )
          )}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default App
