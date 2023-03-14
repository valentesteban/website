import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const projects = {
      "Tea": {
        desc:
          "Tea is an extension to reset the JetBrains free trial licence.",
        techStack: "Shell, Batch. (Not really a tech)",
        link: "https://github.com/valentesteban/tea",
        open: ""
      },
      "Discord Bot": {
        desc:
          "A basic but functional survival plugin based on 1.8.8 Minecraft version.",
        techStack: "Java, Kotlin, Gradle.",
        link: "https://github.com/valentesteban/survival",
        open: ""
      },
      "Dancer Box": {
        desc:
          "A funny dancer box with a song that i like to practice the Front-end Stack a little bit more.",
        techStack: "JavaScript, Html5, CSS3.",
        link: "https://github.com/valentesteban/dancer-box",
        open: ""
      },
      "Website": {
        desc:
          "My personal website commited into GitHub to be seen by everyone.",
        techStack: "JavaScript, React, Yarn.",
        link: "https://github.com/valentesteban/website",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
