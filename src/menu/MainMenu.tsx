import "./menu.css";
export function MainMenu() {
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
        <a href="#" data-page="teams">
          <span data-page="projects">Teams</span>
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
