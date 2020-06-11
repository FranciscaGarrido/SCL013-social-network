import { userData } from '../controller/controller-Firebase.js'
import { addPostSubmit } from './view-controller.js'

import itemPost from './post.js'
 // Funcion para exportar contenido del home
export  default(post) => {
  const pageMain = document.createElement('div');
  const user = userData();
  const template = `
  
  <header class = "header">
    <input type="checkbox" class ="hidden " id="btn-menu">
    <label class="cursor" for="btn-menu"> &#9776 </label>
      <nav class="menu-menu">
        <ul class="menu">
          <li class="menu-items"> <a class="menu-items"  > <h4  >  ${user.displayName ? `${user.displayName}` : `${user.email}`} </h4></a> </li>
          <li class="menu-items"><a class="menu-items" href="#/home"> <h4> <img class="icon-menu" src="./img/recycle.png"> PureLife </h4> </a> </li>
          <li class="menu-items"><a class="menu-items" href="#/signOut"><h4> <img class="icon-menu" src="./img/logout.png"> cerrar sesion </h4> </a> </li>
        </ul>
      </nav>
      </header>
     
    <section class = "container flex-collumn">
    <div class="content-profile ">
    <img class=" hidden show" src="./img/planeta.jpeg">
    <article class="block-profile show">
      <img class="profile-logo" src="${user.photoURL ? `${user.photoURL}` : `./img/avatar.png`}">
      <h3>   ${user.displayName ? `${user.displayName}` : `${user.email}`} </h3>
    </article>
    </div>
     <div class="block-post " >
      <form class="form-post line-black">
      <textarea class="share-post line-black" name="textarea" rows="8" cols="50" id="input-post" placeholder="¿Qué estas pensando?"></textarea>
      <div class="container-btn">
      <label for="file"> <img  src="./img/camara.png"> </label>
      <input type="file" class="hidden" type="file" id="file" name="file" 
      accept="image/png, image/jpeg" multiple>
      <div class="flex-collumn">
        <select  id="privacy-select">
          <option value="public" > Público &#128101 </option>
          <option value="private">Privado &#128274</option>
        </select>
    
        <button class="button" type="button" id="btn-add-post"> Compartir  </button>
        </div>
        </div>
      </form>
      
    <div id= "post-content"></div>
    </div>
  
  </section>
  `;

  pageMain.innerHTML = template;
  const imageFile = pageMain.querySelector('#file');
  const userName = user.displayName ? user.displayName : user.email;
  const userId = user.uid;
  let numberLike = 0;
  const privacySelect = pageMain.querySelector('#privacy-select');
  const btnAddPost = pageMain.querySelector('#btn-add-post');
  const divPost = pageMain.querySelector('#post-content');
  post.forEach((post, index) => {
    divPost.appendChild(itemPost(post, index, userId))
  })

  btnAddPost.addEventListener('click', (e) => {
    e.preventDefault()
    const privacySelectValue = privacySelect.value
    const imageFileValue = imageFile.files[0];
    addPostSubmit(userId, userName, privacySelectValue, numberLike, imageFileValue)
  });
  return pageMain;
}


export const addPostSubmit = (userId, user, privacySelectValue, numberLike, imageFileValue) => {
  const input = document.querySelector('#input-post').value;
  if (imageFileValue === undefined) {
    addPost(input, userId, user, privacySelectValue, numberLike, '');
  } else {
    getImageUrl(putImageInStorage(imageFileValue)).then((url) => {
      console.log(url);
      addPost(input, userId, user, privacySelectValue, numberLike, url);
    })
  }
}


export const editPostSubmit = (id, index) => {
  const btnEditPost = document.querySelector(`#btn-edit-post-${index}`)
  btnEditPost.addEventListener('click', () => {
    const postEdited = document.querySelector(`#input-edit-${index}`).value
    const valueSelect = document.querySelector('#privacy-select-edit').value
    editPost(id, postEdited, valueSelect)
  });
}



export const countLikes = (id, totaLike, newLike) => {
  editLike(id, totaLike, newLike)
}

export const deletedPostSubmit = (id) => {
  deletedPost(id)
}

export const commentPostSubmit = (id, index,) => {
  const inputValue = document.getElementById(`input-comment-${index}`);
  addCommentPost(id, inputValue.value)
  inputValue.value = '';
}













/* export const comuniBeer = () => {
    const divcomuniBeer = document.createElement("div");
    const viewcomuniBeer = `   
    <div id="banner"></div>
    <div class="comments">
     <h1>Hola mundo</h1>
        <input type="text" id="nombre" placeholder='nombre' class='form-control'></input>
        <input type="text" id="apellido" placeholder='apellido' class='form-control'></input>
        <input type='text' id="edad" placeholder='edad' class='form-control'></input>
        <button class='btn-info' id='btn-comment'>Comentar!</button>
    </div>

    <div>
  <table class='table'>
    <head>
      <tr>
        <th scope='col'>Id</th>
        <th scope='col'>First</th>
        <th scope='col'>last</th>
        <th scope='col'>born</th>
      </tr>
    </head>
    <body id='tabla'>
    </body>
  </table>
</div>
    `
    divcomuniBeer.innerHTML = viewcomuniBeer;
    const botonComentario = divcomuniBeer.querySelector('#btn-comment');
    botonComentario.addEventListener('click',guardar);
    
    return divcomuniBeer;
  }


    //firestore
    var db = firebase.firestore();

    //Agregar comentarios

    function guardar(){
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var edad = document.getElementById('edad').value;

    db.collection("users").add({
        first: nombre,
        last: apellido,
        born: edad
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('nombre').value='';
        document.getElementById('apellido').value='';
        document.getElementById('edad').value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

//leer doc
  var tabla= document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
  tabla.innerHTML='';
  querySnapshot.forEach((doc) => { //forEach ciclos que se repiten en el documento para imprimir el dato
      console.log(`${doc.id} => ${doc.data().first}`);
      tabla.innerHTML += `
      <tr>
      <th scope='row'>${doc.id}</th>
      <th>${doc.data().first}</th>
      <th>${doc.data().last}</th>
      <th>${doc.data().born}</th>
      </tr>
      `

  });
});
 
 //document.querySelector('.btn-info').addEventListener('click',guardar); */