export const blog = () => {
  const divBlog = document.createElement('div');
  const viewBlog = `
<div id="banner">
  <img class="logoBanner" src="https://i.ibb.co/FX4X35M/logo.png" alt="Logo SocialBeer">
</div>
<div id="containerViewBlog">
    <section id="entranceContainer">
      <article class="card article-card">
        <img class="imgEntrance" src="https://images.unsplash.com/photo-1532634726-8b9fb99845fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
        <div class="article-info">
          <a href="#">
            <div>
              <h2 class="article-title">La diferencia entre lager y ale, explicada</h2>
            </div>
            <p class="byline">Escrito por Francisca G</p>
          </a>
        </div>
      </article>

      <article class="card article-card">
        <img class="imgEntrance" src="https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80">
        <div class="article-info">
          <a href="#">
            <div>
              <h2 class="article-title">Aprende a hacer tu primera cerveza</h2>
            </div>
            <p class="byline">Escrito por Maria Jose G.</p>
          </a>
        </div>
      </article>

      <article class="card article-card">
        <img class="imgEntrance" src="https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
        <div class="article-info">
          <a href="#">
            <div>
              <h2 class="article-title">La temperatura perfecta.</h2>
            </div>
            <p class="byline">Escrito por Katherine C.</p>
          </a>
        </div>
      </article>

      <article class="card article-card">
        <img class="imgEntrance" src="https://images.unsplash.com/photo-1568886875992-b765ae61fd37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
        <div class="article-info">
          <a href="#">
            <div>
              <h2 class="article-title">La cerveza: sinónimo de felicidad</h2>
            </div>
            <p class="byline">Escrito por Belén M.</p>
          </a>
        </div>
      </article>
  </section>
</div>
`
  divBlog.innerHTML = viewBlog;

  return divBlog;
}