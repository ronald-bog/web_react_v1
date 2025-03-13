import { NavLink } from "react-router-dom"
import { useState } from 'react';

export const Head = () => {

    const toggleMenu = () => setBurgerOpen(!burgerOpen);

    const [burgerOpen, setBurgerOpen] = useState(false);

    const theme = () => document.body.classList.toggle('dark');

    return (
        <>
            <header>
                <div className="logo" />

                <nav>
                    <NavLink to='cursos' className="link" >Cursos</NavLink>
                    <NavLink to='tecnologia' className="link" >Tecnologia</NavLink>
                    <NavLink to='ciencia' className="link" >Ciencia</NavLink>
                    <NavLink to='videos' className="link" >Videos</NavLink>
                    <NavLink to='demos' className="link" >Demos</NavLink>
                </nav>

                <div className="rrss">
                    <NavLink to='https://www.youtube.com/@natsoftx' className="youtube" target="_blank" />
                    <NavLink to='https://www.facebook.com/natsoftx' className="facebook" target="_blank" />
                    <NavLink to='https://twitter.com/natsoftx' className="x" target="_blank" />
                    <NavLink to='https://www.instagram.com/natsoft/' className="instagram" target="_blank" />
                    <NavLink to='https://www.threads.net/@natsoft' className="threads" target="_blank" />
                </div>

                <div className={`burger ${burgerOpen ? 'abierto' : ''}`} onClick={toggleMenu} >
                    <div className="barra superior"></div>
                    <div className="barra media"></div>
                    <div className="barra inferior"></div>
                </div>

                <div className="theme" onClick={theme} />

            </header >
            <menu className={`burger ${burgerOpen ? 'abierto' : ''}`}>
                <nav>
                    <div className="theme-burguer" onClick={theme} />
                    <hr />
                    <NavLink to="cursos" onClick={toggleMenu}>Cursos</NavLink>
                    <hr />
                    <NavLink to="tecnologia" onClick={toggleMenu}>Tecnología</NavLink>
                    <hr />
                    <NavLink to="ciencia" onClick={toggleMenu}>Ciencia</NavLink>
                    <hr />
                    <NavLink to="videos" onClick={toggleMenu}>Videos</NavLink>
                    <hr />
                    <NavLink to="demos" onClick={toggleMenu}>Demos</NavLink>
                    <hr />
                </nav>
            </menu >
        </>
    )
}