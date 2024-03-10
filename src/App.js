import "./App.css";
import Testimonio from "./componentes/testimonio.jsx";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios de Mujeres Emblematicas</h1>
        <Testimonio
          imagen="testimonio-ada.png"
          nombre="Ada Lovelace"
          pais="Reino Unido"
          cargo="Ingeniera de software"
          empresa="Dpto. de Defensa de Estados Unidos"
          testimonio="Hija del poeta inglés Lord Byron, Ada Lovelace era una matemática que trabajaba en la máquina analítica de Charles Babbage, para que pudiera realizar cálculos de forma automática. Babbage es considerado como “El Padre de la Computación” por concebir la idea de lo sería una computadora, y llamaba a Ada “La encantadora de los números”.."
        />

        <Testimonio
          imagen="testimonio-angela.jpg"
          nombre="Angela Ruiz Robles"
          pais="España"
          cargo="Maestra/Escritora/Inventora"
          empresa="El atlas"
          testimonio="Ángela llevó a cabo varios proyectos científicos, como el atlas científico-gramatical que contenía información de España y de la lengua española en formato desplegable, y la máquina taquimecanográfica que ofrecía un nuevo orden de signos y caracteres para una lectura rápida y una traducción sencilla en español y otros idiomas.
          El 7 de diciembre de 1949 obtuvo la patente nº 190.698 por su Enciclopedia mecánica, un procedimiento mecánico, eléctrico y a presión de aire para la lectura de libros, con el objetivo de aligerar la carga de libros de los alumnos y hacer la enseñanza más amena y adapta la enseñanza al nivel de cada estudiante."
        />

        <Testimonio
          imagen="testimonio-grace.jfif"
          nombre="Grace Hopper"
          pais="Estados Unidos"
          cargo="Doctora en Matematicas y profesora de la materia"
          empresa="NASA"
          testimonio="Se enroló en la marina tras el estallido de la II Guerra Mundial con 37 años. Grace empezó a trabajar en el proyecto de computación que trataba de construir la computadora experimental Harvard Mark I, la cual ayudó a programar y además escribió un manual sobre los principios elementales del funcionamiento de una máquina informática.Hopper pensó que podía crearse un lenguaje de programación que usara órdenes en inglés. Dos años después se creó un comité para crearlo y Hopper fue miembro del comité original, aunque no tuvo un papel preponderante su desarrollo. De esta forma nació COBOL (acrónimo de COmmon Business-Oriented Language, Lenguaje Común Orientado a Negocios), inspirado en las ideas de Grace, un lenguaje de programación universal que podía ser usado en cualquier ordenador, que hoy en día sigue utilizando la industria bancaria."
        />

        <Testimonio
          imagen="testimonio-hedy.jfif"
          nombre="Hedy Lamar"
          pais="Austria-Hungara"
          cargo="Ingenieria"
          empresa="Inventora"
          testimonio="A Hedy se le ocurrió un método para enviar una señal a un misil teledirigido que cambiase de frecuencia a cada segundo de forma sincronizada para que no pudiera ser interceptado, y su amigo el pianista George Antheil propuso usar el papel perforado de las pianolas, que al tener 88 teclas se podrían usar 88 frecuencias para hacer un sistema de encriptación indescifrable;El 11 de agosto de 1942 Hedy Lamarr y George Antheil recibieron el número de patente 2.292.387 por su ‘Sistema de comunicación secreta’, que donaron al Consejo Nacional de Inventores y del que se apropió posteriormente el Gobierno de los Estados Unidos."
        />

        <Testimonio
          imagen="testimonio-katherine.jfif"
          nombre="Katherine Johnson"
          pais="Estados Unidos"
          cargo="Matematica"
          empresa="Nasa"
          testimonio=".Empezó leyendo datos de las cajas negras de los aviones y llevando a cabo cálculos matemáticos. Poco a poco fue ganándose la confianza del personal masculino con sus conocimientos sobre geometría analítica y pasó a estudiar las trayectorias de las naves. En 1961 calculó la trayectoria del primer vuelo suborbital de un estadounidense,El año siguiente ayudo en la misión Mercury-Atlas 6,trabajó directamente con computadoras digitales, Sus cálculos fueron importantes para éxito del Apolo 11, misión que permitió a Neil Armstrong convertirse en el primer humano en pisar la Luna el 20 de julio de 1969."
        />
      </div>
    </div>
  );
}

export default App;
