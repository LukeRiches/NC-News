import plan from "../plan/1.Home-Page.png";

function Home() {
  return (
    <section className="Home">
      <h2>Home</h2>

      <p id="SideNote">
        The Home page currently has no functionality and is just a placeholder,
        the current active pages are Login, Topics, Articles and each Article
        and its related comments.
      </p>

      <p id="SideNote">
        But beneath is the wireframe with my plan for the page, which I'm
        currently working on!
      </p>

      <img src={plan} alt="A wireframe of my plan for the Home page" />
    </section>
  );
}

export default Home;
