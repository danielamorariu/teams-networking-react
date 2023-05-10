import { MainMenu } from "../menu/MainMenu";
import selfie from "./selfie.jpg";

export default function AppHeader() {
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
