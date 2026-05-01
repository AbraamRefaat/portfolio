import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;

  // Function to close menu on mobile
  const closeMobileMenu = () => {
    if (window.innerWidth <= 768) {
      const menuBtn = document.getElementById('menu-btn');
      if (menuBtn) menuBtn.checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={closeMobileMenu}>Education</a>
            </li>
          )}
          {workExperiences.display && (
            <li>
              <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={closeMobileMenu}>Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={closeMobileMenu}>Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" onClick={closeMobileMenu}>Resume</a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={closeMobileMenu}>Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
