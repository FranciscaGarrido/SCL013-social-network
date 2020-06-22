export const cerveceriasChilenas = () => {
    const divCerveceriasChilenas = document.createElement("div");
  
    const viewCerveceriasChilenas = `
    <div id="banner">
        <img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer">
    </div>
    <div class="introTemplate">
    <h6 class="introTemplateText"> Aquí encontraras solo cervecerías Chilenas que tienen página web para tu mayor seguridad, 
    las hemos ordenado alfabeticamente para que te sea más fácil encontrarlas</h6>
    </div>
    <div id="containerChileanBeer">
    <!-- sección cervezas -->
    <section class="webbeer">
        <!-- sección cervezas # -->
        <div class="webbeer-content">
            <br>
            <h3>#</h3>
            <div class="webbeer-content-logo">
                <a href="https://www.cervezamas56.cl/"> 
                    <img class="img-fluid" src="./img/Logos cervezas/logo-56.jpg">
                </a>
            </div>
        </div>
        <div class="clearfix">
        </div>
        <!-- sección cervezas A -->
            <div class="webbeer-content">
                <h3>A</h3>
                <div class="webbeer-content-logo">
                    <a href="https://www.cerveceraaltamira.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/altamira.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.cervezaaltosdecantillana.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-cantillana.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://www.brewstillery.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-alchimia.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.cervezaanima.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-anima.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://cervezaantillanca.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/antillanca.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.arisca.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-arisca.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.atrapaniebla.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/atrapaniebla.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://www.cervezaaustral.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-austral.png">
                    </a>
                </div>
                </div>
                <div class="clearfix">
                </div>
            <!-- sección cervezas B -->
            <div class="webbeer-content">
                    <h3>B</h3>
                <div class="webbeer-content-logo">
                    <a href="http://www.cervezabaron.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-baron.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://berner.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-berner.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://brauzehn.cl/web/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/brau-zehn.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://cervezabundor.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/bundor.jpg">
                    </a>
                </div>
          </div>
          <div class="clearfix">
          </div>
        <!-- sección cervezas C -->
          <div class="webbeer-content">
                <h3>C</h3>
                <div class="webbeer-content-logo">
                    <a href="https://cervezacallecalle.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-callecalle.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.cervezacardelius.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo cardelius.jpeg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://cervezacelta.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/celta.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://elcesar.beer/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-cesar.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://www.cervezacerrosdechena.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-cerros-de-chena.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.chesterbeer.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/chester_beer_logo.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://cervezachucao.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-chucao.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://www.coda.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-coda.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">  
                    <a href="https://www.cuellonegro.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/cuello negro.png">
                    </a>
                </div>  
                <div class="webbeer-content-logo">  
                    <a href="http://www.cervezacruzdemalta.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-cruz.png">
                    </a>
                </div>  
                </div>
          <div class="clearfix"></div>
          <!-- sección cervezas D -->
            <div class="webbeer-content">
                    <h3>D</h3>
                <div class="webbeer-content-logo">
                    <a href="https://www.cervezademonio.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-demonio.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://www.cervezadiem.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-die-m.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.cerveceradelpuerto.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-delpuerto.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.dolbek.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/dolbek.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://cervezadora.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-Dora.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://durness.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-durness.png">
                    </a>
                </div>
          </div>
          <div class="clearfix"></div>  
        <!-- sección cervezas E -->
          <div class="webbeer-content">
                <h3>E</h3>
                <div class="webbeer-content-logo">
                    <a href="https://www.edelstoff.cl/">
                        <img class="img-fluid" src="./img/Logos cervezas/logo-edelstoff.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://cervezaemperador.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/emperador.jpg">
                    </a>
                </div>
          </div>
            <div class="clearfix">
            </div>  
        <!-- sección cervezas F -->
          <div class="webbeer-content">  
                <h3>F</h3>
                <div class="webbeer-content-logo">
                    <a href="http://www.cervezafalken.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-falken.jpg" >
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://cervezafinisterra.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-finisterra.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://www.cervezafryderup.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-fryderup.png">
                    </a>
                </div>
          
          </div>
          <div class="clearfix">
          </div>
          <!-- sección cervezas G -->
          <div class="webbeer-content">    
                <h3>G</h3>
                <div class="webbeer-content-logo">
                    <a href="https://guayacan.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-guayacan.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://granizo.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-cerveza-granizo.png" height="100px" width="200px">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://grassau.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-grassau.jpg">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://grossegerste.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-grosse.png">
                    </a>
                </div>
          </div>
          <div class="clearfix">
          </div>
          <!-- sección cervezas H -->
          <div class="webbeer-content">
                <h3>H</h3>
                <div class="webbeer-content-logo">
                    <a href="https://hastapronto.cl/?v=5bc574a47246"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo_hastapronto.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://cervezahathor.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-hathor.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="https://www.cervezahernandodemagallanes.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-hernando.jpg" height="200px" width="200px">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://huasodelamancha.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-huaso.png">
                    </a>
                </div>
                <div class="webbeer-content-logo">
                    <a href="http://www.cervezahbh.cl/"> 
                        <img class="img-fluid" src="./img/Logos cervezas/logo-hbh.png">
                    </a>
                </div>
            </div>
          <div class="clearfix">
          </div>
          <!-- sección cervezas I -->
          <div class="webbeer-content">    
                <h3>I</h3>
            <div class="webbeer-content-logo">
              <a href="https://independentzia.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-independentzia.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.intrinsical.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-intrinsical.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.irlanois.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-irlanois.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas J -->  
          <div class="webbeer-content">  
          <h3>J</h3>
          <div class="webbeer-content-logo">
              <a href="https://cervezajauria.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-jauria.png">
              </a>
           </div>
          <div class="webbeer-content-logo">
              <a href="https://www.jester.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/jester.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas K -->  
          <div class="webbeer-content">  
          <h3>K</h3>
          <div class="webbeer-content-logo">
              <a href="http://www.kalyla.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-kalyla.jpg" >
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://cerveceriakawke.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-kawke.jpeg" >
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.keyer.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-keyer.png" >
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.kross.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/kross.jpg" >
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.cerveza-kunstmann.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/kunstmann.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.cervezakudell.cl/index.html"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-kudell-.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas L -->  
          <div class="webbeer-content">  
          <h3>L</h3>
          <div class="webbeer-content-logo">
              <a href="http://cervezala.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-la.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.leyendabrewco.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-leyenda.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas M -->  
          <div class="webbeer-content">  
          <h3>M</h3>
          <div class="webbeer-content-logo">
              <a href="http://mahinabeer.com/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-mahina.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://cervezamauco.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-mauco.jpeg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.mestra.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-mestra.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.mildemonios.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-mildemonios.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.monjesdelonquen.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-monjes.png">
              </a>
          </div>  
          <div class="webbeer-content-logo">
              <a href="https://www.la-montana.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-lamontaña.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.cervezamonteverde.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-monte.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://mossto.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-mossto.png">
              </a>
          </div>  
          <div class="webbeer-content-logo">
              <a href="https://www.mungku.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-mungku.png">
              </a>
          </div>  
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas N --> 
          <div class="webbeer-content">   
          <h3>N</h3>
          <div class="webbeer-content-logo">
              <a href="http://cervecerianativa.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-nativa.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://cervezanomade.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo_nomade.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.nothus.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-nothus.jpg">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas P -->  
          <div class="webbeer-content">  
          <h3>P</h3>
          <div class="webbeer-content-logo">
              <a href="http://cervezapalestra.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-palestra.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.cervezapaniahue.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-paniahue.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://pichuante.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-pichuante.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://pioneras.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-pioneras.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.cerveceriapudu.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/pudu.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://cervezapuffe.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-puffe.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.cervezaplagemann.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-plagemann.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas Q --> 
          <div class="webbeer-content">   
          <h3>Q</h3>
          <div class="webbeer-content-logo">
              <a href="http://www.quebrada.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-quebrada.jpg">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas R -->   
          <div class="webbeer-content">
          <h3>R</h3>
          <div class="webbeer-content-logo">
              <a href="http://cervezaselraco.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo_raco.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.cervezaraices.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-raices.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.ralss.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-ralss.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://rho.cl/">
              <img class="img-fluid" src="./img/Logos cervezas/logo-rho.jpeg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.rothhammer.cl/">
              <img class="img-fluid" src="./img/Logos cervezas/logo-rothhammer.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas S -->
          <div class="webbeer-content">    
          <h3>S</h3>
          <div class="webbeer-content-logo">
              <a href="http://www.cervezasantiago.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-santiago.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.cerveceriasantos.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-santos.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://sayka.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-sayka.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://cervezaselknam.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-selknam.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.szot.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/szot.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.scarbeer.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-scar.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas T -->
          <div class="webbeer-content">    
          <h3>T</h3>
          <div class="webbeer-content-logo">
              <a href="https://tamango.cl/brebajeria/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-tamango.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.cervezatauss.cl/index.php/es/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-tauss-brau.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://www.toropaire.cl/historia.php#"> 
              <img class="img-fluid" src="./img/Logos cervezas/Logo_ToroPaire.jpg">
              </a>
          </div>
           <div class="webbeer-content-logo">
              <a href="https://www.cervezatoska.com/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-toska.jpeg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.cervezatotem.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-totem.webp">
              </a>
          </div>
          <div class="webbeer-content-logo">
                <a href="https://www.cervezatubinger.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/tubinger.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.cervezatribal.cl/"> 
                <img class="img-fluid" src="./img/Logos cervezas/logo-tribal.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://www.cervezatripulantes.cl/"> 
               <img class="img-fluid" src="./img/Logos cervezas/logo-tripulante.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="http://trog.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-trog.jpg">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://tropera.cl/"> 
              <img class="img-fluid" src="./img/Logos cervezas/logo-tropera.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas V -->
          <div class="webbeer-content">    
          <h3>V</h3>
          <div class="webbeer-content-logo">
              <a href="https://www.virrels.cl/">
              <img class="img-fluid" src="./img/Logos cervezas/logo-virrels.png">
              </a>
          </div>
          <div class="webbeer-content-logo">
              <a href="https://volcanesdelsur.cl/">
              <img class="img-fluid" src="./img/Logos cervezas/volcanes.png">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- sección cervezas W -->
          <div class="webbeer-content">    
          <h3>W</h3>
          <div class="webbeer-content-logo">
              <a href="https://cervezawalung.cl/">
              <img class="img-fluid" src="./img/Logos cervezas/logo-walung.jpg">
              </a>
          </div>
          </div>
          <div class="clearfix"></div>  
          </section>
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
      `;
  
    divCerveceriasChilenas.innerHTML = viewCerveceriasChilenas;
  
    return divCerveceriasChilenas;
  };
  