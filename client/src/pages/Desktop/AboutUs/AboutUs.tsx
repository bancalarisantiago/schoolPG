//css
import styles from "./AboutUs.module.css";
import img from "../../../assets/appPanel.png"
const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
      <div className={styles.title}>
        <h1>Todas las herramientas <br/> que tu colegio necesita</h1>
        <p>Simplifica la comunicación.<br/>  Administra tu aula.<br/>  Gestiona tu institución.</p>
        <div>
         <button className={styles.btn}>Comienza Ahora</button>
        </div>
      </div>
      <div className={styles.appImg}>
        {/* <img src={img} alt="app-img"/> */}
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.stats}>
          <h1>+1500</h1>
          <p>Instituciones educativas</p>
        </div>
        <div className={styles.stats}>
          <h1>+13</h1>
          <p>Paises</p>
        </div>
        <div className={styles.stats}>
          <h1>+300.000</h1>
          <p>Alumnos</p>
        </div>
        <div className={styles.stats}>
          <h1>+140</h1>
          <p>Instituciones becadas</p>
        </div>
      </div>
      <div className={styles.title}>
        <h1>Lleva a tu institución al<br/> siguiente nivel</h1>
      </div>
      <div className={styles.gridFeatures}>
        <div className={styles.box1}>
          <h2>Noticias</h2>
          <p>Mantén informada a toda tu comunidad con las últimas novedades de tu institución.</p>
        </div>
        <div className={styles.box2}>
          <h2>Calendario</h2>
          <p>Gestiona todas las actividades escolares desde un solo lugar.</p>
        </div>
        <div className={styles.box3}>
          <h2>Integraciones</h2>
          <p>Integra otras soluciones para potenciar la experiencia de educación a distancia.</p>
        </div>
        <div className={styles.box4}>
          <h2>Aula virtual</h2>
          <p>Comparte contenido educativo con tu clase y corrige las tareas de cada alumno de forma personalizada.</p>
        </div>
        <div className={styles.box5}>
          <h2>Integraciones</h2>
          <p>Integra otras soluciones para potenciar la experiencia de educación a distancia.</p>
        </div>
        <div className={styles.box6}>
          <h2>Aula virtual</h2>
          <p>Comparte contenido educativo con tu clase y corrige las tareas de cada alumno de forma personalizada.</p>
        </div>
      </div>
      <div className={styles.title}>
        <h1>La app que conecta a tu <br/>comunidad</h1>
      </div>
      <div className={styles.gridMobile}>
        <div>
          <h2>Perfil académico</h2>
          <p>Los padres estarán siempre al tanto de las últimas novedades de sus hijos.</p>
        </div>
        <div>
          <h2>Notificaciones</h2>
          <p>Mantén informada a toda tu comunidad en tiempo real.</p>
        </div>
      </div>
      <div className={styles.title}>
        <h1>Te acompañamos en la <br/>transformación</h1>
      </div>
      <div className={styles.gridFeatures2}>
        <div>
          <h2>Soporte</h2>
          <p>Respondemos las consultas de docentes y familias en menos de 24 horas.</p>
        </div>
        <div>
          <h2>Implementación</h2>
          <p>En tan solo dos días, tu red ya estará activa y lista para utilizar.</p>
        </div>
        <div>
          <h2>Integraciones</h2>
          <p>Conectamos todos tus sistemas para que puedas unificar la información.</p>
        </div>
        <div>
          <h2>Personalización</h2>
          <p>Configuramos tu propia red a medida y reflejamos la identidad de tu institución.</p>
        </div>
        <div>
          <h2>Asesoría</h2>
          <p>Guiamos a tu institución para ayudarlos a alcanzar sus objetivos.</p>
        </div>
        <div>
          <h2>Privacidad</h2>
          <p>Manejamos los más altos estándares de encriptación y seguridad.</p>
        </div>
        </div>
        <div className={styles.title}>
        <h1>Historias de colegios <br/>inspiradores</h1>
      </div>
      <div className={styles.gridComments}>
        <div>
          <h2>Perfil académico</h2>
          <p>Los padres estarán siempre al tanto de las últimas novedades de sus hijos.</p>
        </div>
        <div>
          <h2>Notificaciones</h2>
          <p>Mantén informada a toda tu comunidad en tiempo real.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
