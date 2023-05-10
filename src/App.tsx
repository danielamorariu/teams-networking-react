import React from "react";
import selfie from "./selfie.jpg";
import "./App.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div className="header__image">
          <img src={selfie} alt="Selfie" height="150" />
        </div>
        <div className="header__content">
          <h1>Morariu Daniela</h1>
          <h2 id="job-title">Frontend Developer @ Target-E Digital</h2>
        </div>
      </div>

      <div className="navigation">
        <span></span>
        <MainMenu />
      </div>
    </header>
  );
}

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          <span data-page="home">Home</span>
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          <span data-page="skills">Skills</span>
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          <span data-page="projects">Projects</span>
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          <span data-page="languages">Languages</span>
        </a>
      </li>
    </ul>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section id="form-section">
        <h2>Contact me</h2>
        <form action="" method="get">
          <input type="email" name="email" id="userEmail" placeholder="Email*" required />
          <input type="text" name="name" id="userName" placeholder="Name*" required />
          <textarea name="message" id="userMssag" placeholder="Message*" required></textarea>

          <button type="submit" className="button button--large">
            <h2>Send</h2>
          </button>
        </form>
      </section>
      <section>M2</section>
    </div>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />

      <div id="main">
        <div className="page" id="home">
          Home content ... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
        <div className="page" id="skills">
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>
        <div className="page" id="projects">
          Projects content ... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className="page" id="languages">
          Languages content ... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </section>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="">Linkedin</a>
    </footer>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
