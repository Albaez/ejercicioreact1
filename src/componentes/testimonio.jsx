import '../style-sheets/testimonio.css';


function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}`)} alt='Foto' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonifo'>"{props.testimonio}"</p>
            </div>
        
         
          
            </div>
            

        
    );
}

export default Testimonio;