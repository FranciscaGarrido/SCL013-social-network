import { identification } from './view/templateIdentificacion.js'
import { menu } from './view/templateMenu.js';
import { home } from './view/templateHome.js';
import { iniciarSesion } from './view/templateIniciarSesion.js';
import { blog } from './view/templateBlog.js';
import { dondebeber } from './view/templateDondeBeber.js';
import { eventos } from './view/templateEventos.js';
import { abastecete } from './view/templateAbastecete.js';
import { cerveceriasChilenas } from './view/templateCerveceriaschilenas.js';
import { comuniBeer } from './view/templateComuniBeer.js';
import { contacto } from './view/templateContacto.js';
import { entradaBlog2 } from './view/templateEntradaBlog2.js';

export const changeRouter = (hash) => {
    if (hash === '#identificacion'){
        return showTemplate(hash)
    }else if (hash === '#home'){
        return showTemplate(hash)
    } else if (hash === '#cerveceriasChilenas') {
        return showTemplate(hash)
    } else if (hash === '#eventos') {
        return showTemplate(hash)
    } else if (hash === '#abastecete') {
        return showTemplate(hash)
    } else if (hash === '#dondebeber') {
        return showTemplate(hash)
    } else if (hash === '#iniciarsesion') {
        return showTemplate(hash)
    } else if (hash === '#comunibeer') {
        return showTemplate(hash)
    } else if (hash === '#blog') {
        return showTemplate(hash)
    } else if (hash === '#contacto'){
        return showTemplate(hash)
    } else if (hash === '#entradaBlog2'){
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = menu();

    switch (hash) {
        case '#identificacion':
            containerRoot.appendChild(identification());
            break;
        case '#home':
            containerRoot.appendChild(home());
            break;
        case '#cerveceriasChilenas':
            containerRoot.appendChild(cerveceriasChilenas());
            break;
        case '#abastecete':
            containerRoot.appendChild(abastecete());
            break;
        case '#eventos':
            containerRoot.appendChild(eventos());
            break;
        case '#dondebeber':
            containerRoot.appendChild(dondebeber());
            break;
        case '#blog':
            containerRoot.appendChild(blog());
            break;
        case '#registrarse':
            containerRoot.appendChild(registrarse());
            break;
        case '#iniciarsesion':
            containerRoot.appendChild(iniciarSesion());
            break;
        case '#comunibeer':
            containerRoot.appendChild(comuniBeer());
            break;
        case '#contacto':
            containerRoot.appendChild(contacto());
            break;
        case '#entradaBlog2':
            containerRoot.appendChild(entradaBlog2());
            break;
        default:
            containerRoot.innerHTML = `<img id="error" src="./img/error404.png">`

    }
}