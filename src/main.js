import { changeRouter } from './lib/router.js';
import { identification } from './lib/view/templateIdentificacion.js'
import { menu } from './lib/view/templateMenu.js';
import { home } from './lib/view/templateHome.js';
// import { registrarse } from './lib/view/templateHome.js';
import { iniciarSesion } from './lib/view/templateIniciarSesion.js';
import { blog } from './lib/view/templateBlog.js';
import { comuniBeer } from './lib/view/templateComuniBeer.js';
import { dondebeber } from './lib/view/templateDondeBeber.js';
import { eventos } from './lib/view/templateEventos.js';
import { abastecete } from './lib/view/templateAbastecete.js';
import { cerveceriasChilenas } from './lib/view/templateCerveceriaschilenas.js';
import { contacto } from './lib/view/templateContacto.js';
import { login, loginUser, createUser } from './lib/firebase.js'

window.location.hash = '#identificacion';

const init = () => {
  console.log(identification());
  document.getElementById('root').innerHTML= menu()  //llama al identificador

  window.addEventListener('hashchange', () => {
    changeRouter(window.location.hash)
    switch(window.location.hash){

      case '#identificacion':
        let div = document.getElementById("#identificacion");
        div.addEventListener('click',()=>{
      
        })
        document.getElementById("boton17").addEventListener("click",() => {location.href="https://google.com"});
        document.getElementById("boton18").addEventListener("click", () => {window.location.hash = '#home'} );
        break;

      case '#iniciarsesion':
        const btn = document.querySelector('#google-i');
        btn.addEventListener('click', () => {
          login()
        })
        document.getElementById("btnEntrar").addEventListener('click',(e) => {
          e.preventDefault();
          let email = document.getElementById("emailInicio").value;
          let password = document.getElementById("passawordInicio").value;
          loginUser(email,password);
        })
        document.getElementById("btnRegistrarse").addEventListener('click', (e) =>{
          e.preventDefault();
          let email = document.getElementById("emailRegistro").value;
          let password = document.getElementById("passwordRegistro").value;
          createUser(email,password);
        })
        break;

      default:
        break;
      }
        })
}

window.addEventListener('load', init)