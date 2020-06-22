import { iniciarSesion } from './templateIniciarSesion.js';
import {currentUser, postLike} from '../firebase.js'

export const comuniBeer = () => {
  let user = currentUser();
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
    let beerImg = document.getElementById('file-upload').value;

  db.collection("resenas").add({
      fechaPublicacion: Date.now(),
      marcaCerveza: beerBrand,
      nombreCerveza: beerName,
      tipoCerveza: beerType,
      paisCerveza: beerCountry,
      resenaCerveza: beerReview,
      imagenCerveza: beerImg,
      userId: user.uid,
      likes: ""
  })


  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('inputBeerBrand').value='';
      document.getElementById('inputBeerName').value='';
      document.getElementById('inputBeerType').value='';
      document.getElementById('inputBeerCountry').value='';
      document.getElementById('inputReviewBeer').value='';
      document.getElementById('file-upload').value='';
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

//leer doc

db.collection("resenas").orderBy("fechaPublicacion", "desc").onSnapshot((querySnapshot) => {
    document.getElementById("rootReview").innerHTML='';
    querySnapshot.forEach((doc) => {
      let divPost = document.createElement("div"); //forEach ciclos que se repiten en el documento para imprimir el dato   
      divPost.innerHTML = `
    <section id="containerReviewPost">
      <div id="post">
        <div id="menuBtn">
          <a class="btnEditDelete"><i class="fas fa-trash-alt" id="delete-${doc.id}"></i>
          </a>
          <a class="btnEditDelete"><i class="fas fa-edit" id="edit-${doc.id}"></i>
          </a>
        </div>
        <div id="textReviewPost">
          <div id="labelColumn">
            <div class="tagBeer">
              <p class="labelText"> MARCA: </p>
            </div>
            <div class="tagBeer">
              <p class="labelText"> NOMBRE: </p>
            </div>
            <div class="tagBeer">
              <p class="labelText"> TIPO: </p>
            </div>
            <div class="tagBeer">
              <p class="labelText"> PAÍS: </p>
            </div>
          </div>
          <div id="inputEntranceColumn">
            <div class="tagBeerReview">
              <p class="reviewLabel" id="marca"> <strong> ${doc.data().marcaCerveza} </strong> </p>
              </div>
              <div class="tagBeerReview">
              <p class="reviewLabel" id="nombre"> <strong> ${doc.data().nombreCerveza} </strong> </p>
              </div>
              <div class="tagBeerReview">
              <p class="reviewLabel" id="tipo"> <strong> ${doc.data().tipoCerveza}</strong> </p>
              </div>
              <div class="tagBeerReview">
              <p class="reviewLabel" id="pais"> <strong> ${doc.data().paisCerveza}</strong> </p>
              </div>
          </div>
          <div>
        </div>
          <div id="reviewRow">
          <p id="res">${doc.data().resenaCerveza}</p>    
          <button class="botonGuardar" id="guardar-${doc.id}">Guardar</button>      
        </div>
          <img ${doc.data().imagenCerveza}></img>
        <div id="likeBtn">
          <a class="btnImageUnpload" id="like-${doc.id}"><i class="fas fa-beer"> ${doc.data().likes.length}</i>   
          </a>          

        </div>
      </div>
        <div id="comments">
          <textarea type='text' id="inputCommentsBeer" placeholder='Escribe un comentario' class='inputWeb review'></textarea>
          <br>
          <button type="submit" class='btnWebComments' id='btnComments'>¡comentar!</button>
        </div>  
    </section>    
    `
    const del = divPost.querySelector(`#delete-${doc.id}`)
      del.addEventListener('click', () => {
        console.log("entro al boton")
        db.collection("resenas").doc(doc.id).delete()
        .then( () => {
        console.log("Document successfully deleted!");
        })
        .catch( (error) => {
        console.error("Error removing document: ", error);
        });
    })

    
      const boton = divPost.querySelector(`#guardar-${doc.id}`); 
      boton.style.display = "none"; 
      const edit =  divPost.querySelector(`#edit-${doc.id}`)
      edit.addEventListener('click', () => {
       // console.log(user.id)
        console.log(doc.userId)  
        console.log(divPost.querySelector("#inputEntranceColumn").textContent)      
       // if (user.id === doc.userId){        
        let res = divPost.querySelector("#res");
        let nombre = divPost.querySelector("#nombre");
        let pais = divPost.querySelector("#pais");
        let marca = divPost.querySelector("#marca");
        let tipo = divPost.querySelector("#tipo");

          nombre.setAttribute("contenteditable", true);
          tipo.setAttribute("contenteditable", true);
          pais.setAttribute("contenteditable", true);
          res.setAttribute("contenteditable", true);
          marca.setAttribute("contenteditable", true);
         
          boton.style.display = "block";
          boton.addEventListener('click', () => {
            console.log("Entró al boton guardar")
            db.collection("resenas").doc(doc.id).update({
              marcaCerveza: marca.textContent,
              nombreCerveza: nombre.textContent,
              tipoCerveza: tipo.textContent,
              paisCerveza: pais.textContent,
              resenaCerveza: res.textContent,
            })
            .then( () => {
            console.log("Document successfully updated!");
            nombre.setAttribute("contenteditable", false);
          tipo.setAttribute("contenteditable", false);
          pais.setAttribute("contenteditable", false);
          res.setAttribute("contenteditable", false);
          marca.setAttribute("contenteditable", false);
           boton.style.display = "none"; 
            })
            .catch( (error) => {
            console.error("Error updating document: ", error);
            });
          })                
       /* }else{
          alert("No puedes editar un post que no creaste")
        }*/
    })


    //LIKESSSS
    const like = divPost.querySelector(`#like-${doc.id}`)
        like.addEventListener('click', () => {
        postLike(doc.id);
      })

    document.getElementById("rootReview").appendChild(divPost).innerHTML
  });
})





return divcomuniBeer;

};

