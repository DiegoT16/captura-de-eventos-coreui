import './App.css';
import { CButton } from '@coreui/react';
import { CForm } from '@coreui/react';
import { CFormInput } from '@coreui/react';

function App() {

  return (
    <div>
      <CForm onSubmit={calcularVocales}>
        <p>Ingrese texto: <CFormInput type="text" name="texto1" />
        </p>
        <p>
        <CButton type="submit" color="primary">Mostrar</CButton>
        </p>
      </CForm>
    </div>
  )
}

function calcularVocales(e) {
  e.preventDefault();
  let texto=e.target.texto1.value;
  let contarVocales=0;
  let vocales=['a','e','i','o','u','A','E','I','O','U'];
  //este for es para leer el contenido de la variable texto
  for(let i=0;i<texto.length;i++){
    //este for es para leer el vector vocales
    for(let s=0;s<vocales.length;s++){
      if(texto.charAt(i)==vocales[s]||texto.charAt(i)==vocales[s]){
        contarVocales++;
      }
    }
  }
  alert(contarVocales)
}

export default App
