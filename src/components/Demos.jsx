import { Link } from "react-router-dom"
export const Demos = () => {
    return (
        <>
<div className="demos">
  <div className="text">
    <h2>Aplicación Web PHP, Angular, MySQL (My Pets)</h2>
    <br />
    <a href="https://pet.natsoft.cloud/" target="_blank" rel="noopener noreferrer">🌎 https://pet.natsoft.cloud</a>
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=8FptNv2a_sQ&list=PLnfNQrX0jBr0YgKgX2BvXmuc9gwSNC9e0" target="_blank" rel="noopener noreferrer">
      🎞️ Lista de reproducción en Youtube.
    </a>
    <br />
    <br />
    <a href="https://natsoft.cloud/download/pet.zip">💾 Script SQL para construir la base de datos.</a>
    <br />
    <br />
    <a href="https://natsoft.cloud/download/php.zip">💾 Archivos necesarios para el backend PHP.</a>
    <br />
    <br />
    <Link to="/code/header.component.html"><a>📜 Codigo Html: header.component.html</a></Link>
    <br />
    <br />
    <Link to="/code/styles.scss"><a>🖌️ Codigo Scss: styles.scss</a></Link>
    <br />
    <br />
    <Link to="/code/_header.scss"><a>🖌️ Codigo Scss: _header.scss</a></Link>
    <br />
    <br />
    <Link to="/code/home.component.html"><a>📜 Codigo Html: home.component.html</a></Link>
    <br />
    <br />
    <Link to="/code/_home.scss"><a>🖌️ Codigo Scss: _home.scss</a></Link>
    <br />
    <br />
    <Link to="/code/footer.component.html"><a>📜 Codigo Html: footer.component.html</a></Link>
    <br />
    <br />
    <Link to="/code/_footer.scss"><a>🖌️ Codigo Scss: _footer.scss</a></Link>
    <br />
    <br />
    <Link to="/code/galeria.component.html"><a>📜 Codigo Html: galeria.component.html</a></Link>
    <br />
    <br />
    <Link to="/code/_gallery.scss"><a>🖌️ Codigo Scss: _gallery.scss</a></Link>
    <br />
    <br />
    <Link to="/code/_lightbox.scss"><a>🖌️ Codigo Scss: _lightbox.scss</a></Link>
    <br />
    <br />
    <Link to="/code/spinner.component.html"><a>📜 Codigo Html: spinner.component.html</a></Link>
    <br />
    <br />
    <Link to="/code/_spinner.scss"><a>🖌️ Codigo Scss: _spinner.scss</a></Link>
    <br />
    <br />
    <Link to="/code/login.component.html"><a>📜 Codigo Html: login.component.html</a></Link>
    <br />
    <br />
    <Link to="/code/_login.scss"><a>🖌️ Codigo Scss: _login.scss</a></Link>
    <br />
    <br />
  </div>

  <a href="https://pet.natsoft.cloud/" target="_blank" rel="noopener noreferrer">
    <img className="preview" src="../../assets/pet.webp" width="1460" height="790"
      alt="Cursos de programación y desarrollo de software" />
  </a>
</div>

        </>
    )
}