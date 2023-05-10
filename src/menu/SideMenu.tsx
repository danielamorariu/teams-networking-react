import "./menu.css";
export function SideMenu() {
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
