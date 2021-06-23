import './Section3.css';
import React from "react";
import github from './github-brands.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Section3(){
	return(
		<div className='principal'>

				
        <section className='academico'>

            <h2><i class="fas fa-briefcase"></i>  EXPERIENCIA LABORAL</h2>

            <h4>FUNDACION WORLD VISION</h4>
            <div className='parrafo'>

            <p>En los últimos años eh sido voluntaria
            de la Fundación World Visión por los Niños.
            Donde vengo acompañando actividades de aprendizaje y
            cuidado de los niños trabajando en mi comunidad con niños
            de 3 a 14 años. Y capacitandome en diversos temas de interes
            en el entorno donde vivo.</p>
            </div>
             <h6>2016-2021</h6>

          
            <h2><i class="fas fa-user-graduate"></i>  FORMACION ACADEMICA</h2>

            <div className='parrafo'>
            <p>Bachiller Academico Institución para adultos PENSAMIENTO DE PITAGORAS.</p>
            <h6>2010</h6>
            <p>Tecnico en Desarrollo Front-End Actualmente.</p>
            <h6>2021</h6>
            
            </div>
            
            
            

            <h2><i class="fas fa-user-check"></i>  HABILIDADES</h2>

			        <div className='info2'>Diseño UX<progress max='100'value='80'></progress></div>
			        <div className='info2'>Diseño IU<progress max='100'value='90'></progress></div>
			        <div className='info2'>HTML y CSS<progress max='100'value='95'></progress></div>
			        <div className='info2'>JavaScript<progress max='100'value='90'></progress></div>
			        <div className='info2'>GitHub<progress max='100'value='90'></progress></div>


			        

            <div className='link'>
            <li><Link to='/'className='boton1'>Volver</Link></li>
            </div>
         
            
            
            
         </section>               
        
        
   	</div>
		);
}

export default Section3;




