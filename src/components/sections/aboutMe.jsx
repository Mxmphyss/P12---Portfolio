import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

const aboutMe = () => {
  return (
    <section id="aboutMe" className="aboutMe">
      <div className="container">
        <div className="sectionTitle">
          <h2>À propos de moi</h2>
        </div>
        <div className="containerAboutMe">
          <div className="firstContentAboutMe">
            <div className="aboutMeContent">
              <div className="aboutMeSkills">
                <div className="aboutMeIcon">
                  <FontAwesomeIcon icon={faGears} alt="curiosité" />
                  <p>Curiosité</p>
                </div>
                <div className="aboutMeIcon">
                  <FontAwesomeIcon icon={faArrowsAlt} alt="adaptabilité" />
                  <p>Adaptabilité</p>
                </div>
                <div className="aboutMeIcon">
                  <FontAwesomeIcon icon={faPeopleGroup} alt="esprit d'équipe" />
                  <p>Esprit d'équipe</p>
                </div>
                <div className="aboutMeIcon">
                  <FontAwesomeIcon icon={faUserCog} alt="autonomie" />
                  <p>Autonomie</p>
                </div>
                <div className="aboutMeIcon">
                  <FontAwesomeIcon icon={faBolt} alt="rigueur" />
                  <p>Rigueur</p>
                </div>
              </div>
              <div className="aboutMeText">
              <p>
                Je m'appelle <strong>Samuel</strong>, j'ai 22 ans et j'habite dans le <strong>Loiret (45)</strong>.  
                Je suis un <strong>étudiant autodidacte</strong> qui a certifié ses compétences grâce à un parcours d'études 
                de niveau <strong>BTS ( Titre RNCP de niveau 5 )</strong>.  
                
                Passionné par le <strong>design</strong> et l'<strong>informatique</strong> en général, 
                j'ai exploré et utilisé diverses technologies modernes, notamment celles intégrées dans ce portfolio et celles que vous découvrirez plus tard.  
                Mon objectif est de pouvoir à vos attentes en créant des interfaces fluides, immersives et esthétiquement abouties.
              </p>
              </div>
            </div>
            <div className="wallpaperImg">
              <img src="./assets/image/wallpaper/white-rose-blue.png" alt="wallpaper" />
            </div>
          </div>
          <div className="aboutMeLinks">
              <div className="forLink">
                  <button onClick={() => window.open('/assets/cv.pdf', '_blank')}>
                      <p>Télécharger mon CV</p>
                  </button>
              </div>
              <div className="forLink">
                  <button onClick={() => window.open('https://www.francecompetences.fr/recherche/rncp/38145/', '_blank')}>
                      <p>Certification</p>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutMe;