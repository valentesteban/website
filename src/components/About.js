import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I'm currently a <b>Programming Technician Student</b> at{" "}
        <a href="https://www.austral.edu.ar/">Austral University</a> as a{" "}while undertaking a part-time
        <b> Chef Career</b> at{" "}
        <a href="https://www.gatodumas.com.ar/">Gato Dumas</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work and college, I'm interested in following the culture of
        food. I also like to enjoy a good movie o serie.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "JavaScript",
      "Java",
      "HTML & CSS",
      "Python",
      "Node.js",
      "React.js"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
