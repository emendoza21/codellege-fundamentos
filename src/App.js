import React from "react";
import "./App.css";

function App() {
  const messages = ["Entrevista", "RE: Invitacion a Japón"];
  return (
    <div className="App">
      <Programmer
        name="Linus"
        lastName="Torvalds"
        age={55}
        language="C"
        insurance={18000}
        position="Programador Senior"
      />
      <Programmer
        name="Eduardo"
        lastName="Mendoza"
        age={18}
        language="JavaScript"
        position="Programador Web Jr."
      />
      <Programmer
        name="Jonathan"
        lastName="Rodriguez"
        age={21}
        language="JavaScript"
        position="Programador Backend Md."
      />

      <MailBox messages={messages} />
      <StatusBar balance={100000} />
      <div className="App">
        <div className="container">
          <Tarjeta
            imagen="https://lh6.googleusercontent.com/-DAwK8GOX3WE/UyDGoWngUTI/AAAAAAAAZwM/vISNUI8rnLo/s640/Captura%2520de%2520pantalla%2520completa%252009032014%2520210038.jpg"
            titulo="El nacimiento de Venus"
            descripcion="Cuadro de La bodega Marina"
            categoria="Histórico"
          />
          <Tarjeta
            imagen="https://mujerejecutiva.com.mx/wp-content/uploads/2019/01/capilla-sixtina-7.jpg"
            titulo="La creación de Adán"
            descripcion="Parte de la capilla sixtina"
            categoria="Arte religioso"
          />
        </div>
      </div>
      <Vacant
        title="Desarrollador web"
        city="Monterrey, N.L."
        salary={30000}
        description="Te gustaría formar parte de una empresa con más de 20 años dentro del mercado de Tecnologías de la información Northware está en búsqueda de talento como el tuyo."
      />
      <Vacant
        title="Soporte Tecnico"
        city="Monterrey, N.L."
        salary={3200}
        description="Solicitamos Encarado en soporte Técnico Nivel Tecnico o Universitario conocimientos en servidores, soporte tecnico, redes, cctv, conocimientos en Contpaq es un plus Zona de trabajo Centro, Monterrey Trabajo de Lunes a Viernes"
      />
      <Vacant
        title="Coordinador de soporte técnico"
        city="Monterrey, N.L."
        salary={13000}
        description="Tener conocimiento de equipos Apple ( Macbook pro, iMac, iPhone, Ipad), redes, telefonía, mantenimiento a equipos de cómputo e impresoras."
      />
      <Vacant
        title="Programador Jr"
        city="Estado de México"
        salary={2500}
        description="Buscamos a un programador / desarrollador web autodidacta, proactivo, creativo, honesto, responsable, motivado y orientado a resultados, una persona brillante que le apasione el desarrollo de software y la tecnología."
      />
      <Vacant
        title="Soporte en sitio"
        city="Estado de México"
        salary={7000}
        description="Empresa dedica a la distribución de medicamento, solicita: SOPORTE TECNICO EN SITIO"
      />
      <Vacant
        title="Analista de sistemas - Programación"
        city=""
        salary={12000}
        description="Somos una empresa de inteligencia de mercado, trabajamos con industrias apasionantes y proporcionamos a las marcas más grandes del mundo insigths y estrategias a través de soluciones analíticas para interpretar tendencias actuales y anticipar las del mañana."
      />
      <Vacant
        title="Ingeniero de sistemas"
        city="Altamira, Tamaulipas"
        salary={10000}
        description="Empresa Importante de la Zona, dedicada a brindar el mejor servicio"
      />
    </div>
  );
}

function StatusBar(props) {
  return (
    <div>
      <div>Tu cuenta bancaria tiene: {props.balance} pesos</div>
      {/* Si balance es menor que cero imprime el primer mensaje, sino el segundo */}
      {props.balance < 0 ? (
        <p style={{ color: "red" }}>URGE su presencia en una sucursal</p>
      ) : (
        <p style={{ color: "green" }}>GRACIAS por ser un buen cliente</p>
      )}
    </div>
  );
}

function Programmer(props) {
  return (
    <ul>
      <li>Nombre(s): {props.name}</li>
      <li>Apellidos: {props.lastName}</li>
      <li>Edad: {props.age} años</li>
      <li>Lenguaje de codificación: {props.language}</li>
      {props.age > 40 && <li>Pensión: {props.insurance} pesos al mes</li>}
      {/* Retirado si es mayor a 50 años, muestra su cargo(position) is es menor */}
      <li>Cargo: {props.age > 50 ? "Retirado" : props.position}</li>
    </ul>
  );
}

function Vacant(props) {
  // como props va a recibir: title, city, salary, description
  return (
    <div style={{ width: 600, fontSize: 10 }}>
      <h1> {props.title}</h1>
      <h2>City: {props.city}</h2>
      <h2>Salary: {props.salary} pesos</h2>
      <h2>Description: {props.description}</h2>
    </div>
  );
}

function MailBox(props) {
  const count = props.messages.length;
  return (
    <div>
      {count === 0 ? (
        <p>No tienes nuevos mensajes por leer</p>
      ) : (
        <p>Tienes {count} mensajes sin leer</p>
      )}
    </div>
  );
}

function Tarjeta(props) {
  return (
    <div className="card">
      <img className="card_image" src={props.imagen} alt="" />
      <div className="card_info">
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        <h6>+ {props.categoria}</h6>
      </div>
    </div>
  );
}
export default App;
