import { iniciarSesion } from './templateIniciarSesion.js';

export const comuniBeer = () => {
  const divcomuniBeer = document.createElement("div");
  const viewcomuniBeer = ` 
  <div id="containerWebComunity">
  <header id="banner">
    <img class="logoBanner" src="http://imgfz.com/i/bGv4odX.png" alt="Logo SocialBeer">
  </header>
  <div id="containerSocialNetwork">
    <section id="reviewPostAndComments">
      <div id="review">
        <h3>Crea tu reseña cervecera</h3>
          <div id="startAndImage">
            <div class="ec-stars-wrapper">
              <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
              <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
              <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
              <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
              <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
            </div>
          </div>
        <br>
        <form>
          <input type="text" autocomplete="off" id="inputBeerBrand" placeholder='Marca de tu cerveza' class='inputWeb'></input>
          <input type="text" autocomplete="off" id="inputBeerName" placeholder='Nombre de tu cerveza (solo si tiene)' class='inputWeb'></input>
          <input type="text" autocomplete="off" id="inputBeerType" placeholder='Tipo de tu cerveza' class='inputWeb'></input>
          <input type="text" autocomplete="off" id="inputBeerCountry" placeholder='País' class='inputWeb'></input>
          <textarea type='text' id="inputReviewBeer" placeholder='Reseña de tu cerveza' class='inputWeb review'></textarea>
        </form>
        <br>
        <div id="containerBtnSubmit">
          <label for="file-upload" class="btnImageUnpload">
            <i class="fas fa-camera"></i>
          </label>
          <input id="file-upload" type="file" style='display: none;'/>
          <div id="info"></div> 
          <button type="submit" class='btnWeb' id='btnReview'>¡Reseñar!</button>  
        </div>
        
      </div>
      <div id="postAndComments">
        <div id="reviewPost">
          <h1>Post Reseñas</h1>
          <div id="rootReview"></div>
        </div>
      </div>
    </section>
    <section id="profileAndOthers">
      <div id="profile">
        <h1>Perfil</h1>
        <div id="rootProfile">
        </div>
      </div>
      <div id="spotify">
        <div class="spotify">
        <iframe src='https://open.spotify.com/embed/playlist/5vYkdZqio6UOLB1qtYGGVe?si=x3vZxUVlR3WUoaXy_tsg-A' width="300" height="380" frameborder='0' allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      </div>
    </section>
  </div>
  </div>
  <footer>
  <div class="container-primFooter"> 
  </div> 
  <div class="container-finFooter">
   
    <div class="logoSocialBeer"> 
      <a href="#home"> 
      <img src="./img/logo.png" alt="Logo del sitio"> 
    </div>
  
    <div class="menuFooter">
      <p class="opmenuFooter">
        <a href="#blog"> Blog </a>
        | &nbsp;
        <a href="#comunibeer"> Comunibeer </a>
        | &nbsp;
        <a href="#dondebeber"> ¿Dónde beber? </a>
        | &nbsp;
        <a href="#eventos"> Eventos </a>
        | &nbsp;
        <a href="#abastecete"> ¡Abastécete! </a>
        | &nbsp;
        <a href="#cerveceriasChilenas"> Cervecerías Chilenas </a>
      </p>
  
      <p class="menuiconsFooter"> 
        <a href="#home"> 
          <i class="fa fa-home iconFooter"> </i> 
        </a>
        <a href="#iniciarsesion"> 
          <i class="fa fa-user iconFooter"></i> 
        </a> 
        <a href="#contacto"> 
          <i class="fas fa-phone iconFooter"></i> 
        </a>
        <a href="https://open.spotify.com/embed/playlist/5vYkdZqio6UOLB1qtYGGVe?si=x3vZxUVlR3WUoaXy_tsg-A" target="_blank"> 
          <i class="fas fa-music iconFooter"></i> 
        </a>
      </p>
  
        <p class="copyrigth">
          ©️ 2020 Social Beer™️  | Todos los derechos reservados.
        </p>
      </div>
      
    </div>
  
  </footer>

  `
  divcomuniBeer.innerHTML = viewcomuniBeer;
  const btnReviewBeer = divcomuniBeer.querySelector('#btnReview');
  btnReviewBeer.addEventListener('click', guardar);

  //Inicia firestore
  var db = firebase.firestore();

  //Agregar comentarios 

  function guardar(){
    let beerBrand = document.getElementById('inputBeerBrand').value;
    let beerName = document.getElementById('inputBeerName').value;
    let beerType = document.getElementById('inputBeerType').value;
    let beerCountry = document.getElementById('inputBeerCountry').value;
    let beerReview = document.getElementById('inputReviewBeer').value;
    let beerImg = document.getElementById('btnImageUpload').value;

  db.collection("resenas").add({
      fechaPublicacion: Date.now(),
      marcaCerveza: beerBrand,
      nombreCerveza: beerName,
      tipoCerveza: beerType,
      paisCerveza: beerCountry,
      resenaCerveza: beerReview,
      imagenCerveza: beerImg
  })


  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('inputBeerBrand').value='';
      document.getElementById('inputBeerName').value='';
      document.getElementById('inputBeerType').value='';
      document.getElementById('inputBeerCountry').value='';
      document.getElementById('inputReviewBeer').value='';
      document.getElementById('btnImageUpload').value='';
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

//leer doc

db.collection("resenas").orderBy("fechaPublicacion", "desc").onSnapshot((querySnapshot) => {
    document.getElementById("rootReview").innerHTML='';
    querySnapshot.forEach((doc) => { //forEach ciclos que se repiten en el documento para imprimir el dato
    console.log(`${doc.id}`);
    document.getElementById("rootReview").innerHTML += `
    <section id="containerReviewPost">
      <div id="post">
        <div id="menuBtn">
          <a href="#" id="delete"><i class="fas fa-trash-alt"></i>
          </a>
          <a href="#" id="edit"><i class="fas fa-edit"></i>
          </a>
        </div>
        <div id="textReviewPost">
          <div id="labelColumn">
            <p class="labelText"> MARCA: </p>
            <p class="labelText"> Nombre: </p>
            <p class="labelText"> TIPO: </p>
            <p class="labelText"> PAÍS: </p>
          </div>
          <div id="inputEntranceColumn">
            <p class="reviewLabel"> <strong> ${doc.data().marcaCerveza} </strong> </p>
            <p class="reviewLabel"> <strong> ${doc.data().nombreCerveza} </strong> </p>
            <p class="reviewLabel"> <strong> ${doc.data().tipoCerveza}</strong> </p>
            <p class="reviewLabel"> <strong> ${doc.data().paisCerveza}</strong> </p>
          </div>
        </div>
          <div id="reviewRow">
          <p>${doc.data().resenaCerveza}</p>
          </div>
          <img ${doc.data().imagenCerveza}>
        <div id="likeBtn">
          <a href="#" id="like"><i class="fas fa-beer"></i>
          </a>
        </div>
      </div>
        <div id="comments">
          <textarea type='text' id="inputCommentsBeer" placeholder='Escribe un comentario' class='inputWeb review'></textarea>
          <br>
          <button type="submit" class='btnWeb' id='btnComments'>¡comentar!</button>
        </div>  
    </section>
    `
  });
})


/* const postContainer = document.querySelector('#post') */
/* const deleteBtn = document.querySelector("#delete")
 deleteBtn.onclick = () => {
  db.collection("resenas").doc(doc.id).delete().then( () => {
    console.log("Document successfully deleted!");
  }).catch( (error) => {
    console.error("Error removing document: ", error);
  });
 } */



return divcomuniBeer;

};

