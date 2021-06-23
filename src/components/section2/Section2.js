import './Section2.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function Section2(){
	return(
		<div className='principal1'>

         <h2>PERFIL</h2>
        
        <p>Desarrollador Junior Front-End con capacidad de trabajar en equipo,
           responsable, honesta, amable, siempre con la mejor actitud y sobre todo
           con muchas expectastivas de poner todo el conocimiento en práctica y
           por supuesto adquirir nuevas habilidades capaz de aprender y dar lo mejor
           en cada reto.
        </p>

        <div className='link'>
        <li><Link to='/Section3'className='boton1'>Más sobre mi</Link></li>
        </div> 
            
        
   	</div>
		);
}
export default Section2;