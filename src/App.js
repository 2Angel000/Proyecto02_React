import rey1 from './imagenes/rey_atanagildo.png';
import rey2 from './imagenes/rey_sisebuto.png';
import {useRef} from 'react';
import './App.css';

function App() {
  const cambio=20.15;
  const refCaja = useRef();

  //function incrementar(e){
  const incrementar=(e)=>{
    e.target.innerHTML = Number(e.target.innerHTML)+(1);

    if(Number(e.target.innerHTML) >= 8){
      e.target.style.backgroundColor="#FE0B0B";
    }
    
    if(Number(e.target.innerHTML) == 10){
      e.target.innerHTML = 0;
      e.target.style.backgroundColor="#282c34";
    }
  }

  //function convertir(){
  const convertir=()=>{
    //utilizando referencias: useRef [hook] => nombreRef.current
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
  }

  //function cambioImagen
  const cambioImagen=(img)=>{
    if(img.target.src.includes("atanagildo")){
      img.target.src=rey2;
    }else{
      img.target.src=rey1;
    }
  }

  //function lectura(e){
    const lectura=(e)=>{
    refCaja.current.innerHTML = //para hacer el cambio en la referencia
    e.target.//es el elemento en cuestion [input]
    value;
  }
  
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir}>Convertir a MXN</button>
      <div><img onClick={cambioImagen} src={rey1}/></div>
      <input onChange={lectura} className="campo"/>
    </>
  );
}

export default App;
