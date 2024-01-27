import React from "react";
import "./Sidebar.css";
import logoSpotify from "../assets/icons/logo-spotify.png";

import '@fortawesome/fontawesome-free/css/solid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlus} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return(
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="logo spotify" />
                    </a>
                </div>

                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faHome} className="fa fa-home"/>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faSearch} className="fa fa-search"/>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <FontAwesomeIcon icon={faBook} className="fa fa-book"/>
                        <span>Sua biblioteca</span>
                    </button>

                    <FontAwesomeIcon icon={faPlus} className="fa fa-plus"/>
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;