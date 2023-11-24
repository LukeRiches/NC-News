import plan from "../plan/7.Sign-Up.png";

function SignUp() {
  return (
    <section className="SignUp">
      <h2>Sign Up</h2>

      <p id="SideNote">
        The Sign Up page currently has no functionality and is just a
        placeholder, the current active pages are Login, Topics, Articles and
        each Article and its related comments.
      </p>

      <p id="SideNote">
        But beneath is the wireframe with my plan for the page, which I'm
        currently working on!
      </p>

      <img src={plan} alt="A wireframe of my plan for the Sign Up page" />
    </section>
  );
}

export default SignUp;
