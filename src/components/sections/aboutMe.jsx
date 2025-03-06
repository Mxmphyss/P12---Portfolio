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
          <div className="aboutMeLinks">
              <div className="forLink">
                  <button>
                      <p>Télécharger mon CV</p>
                  </button>
              </div>
              <div className="forLink">
                  <button>
                      <p>Certification</p>
                  </button>
              </div>
          </div>
          <div className="aboutMeContent">
            <div className="aboutMeImages">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore debitis natus quos cumque perferendis dolorem, 
                at beatae dolore corrupti ipsam dolor omnis dolorum dicta similique fugit? 
                Corrupti exercitationem totam architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore debitis natus quos cumque perferendis dolorem, 
                at beatae dolore corrupti ipsam dolor omnis dolorum dicta similique fugit? 
                Corrupti exercitationem totam architecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutMe;