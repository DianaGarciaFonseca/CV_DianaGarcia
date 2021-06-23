import './Section1.css'
import foto from './FOTO4.jpg';
import Section2 from '../section2/Section2';

function Section1(){
	return(

        <div>

		<div className='datosp'>

        <img src={foto}/>

        <div className=''>
            <h1>DIANA VIVIANA</h1>
            <h1>GARCIA FONSECA</h1>
            <h6 className='titulo'>DISEÑADOR JUNIOR FRONT-END</h6>
         </div>

        <h2>DATOS PERSONALES</h2>

        <h3><i class="fas fa-phone"></i>  301 4634890</h3>
        <h3><i class="fas fa-envelope"></i>  danagf2008@hotmail.com</h3>
        <h3><i class="fas fa-map-marker-alt"></i>  Calle 75 B Sur N° 16 p 68</h3>

        
        
   		</div>
        
        </div>

		);
};
export default Section1;