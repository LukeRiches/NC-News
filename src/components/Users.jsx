import plan from "../plan/5.Users.png";

function Users() {
  return (
    <main className="Users">
      <h2>Users</h2>

      <p id="SideNote">
        The Users page currently has no functionality and is just a placeholder.
        <br />
        <br />
        I'm currently uncertain on my plan for this page as it feels a little
        invasive to just list all active users and their avatars. But I like the
        idea of implementing kudos to authors so other users can gain a sense of
        the relevancy of their content. I also like the idea of a direct
        messaging service.
        <br />
        <br />
        However, the current active pages are Login, Topics, Articles and each
        Article and its related comments.
      </p>

      <p id="SideNote">
        But beneath is the wireframe with my plan for the page, which I'm
        currently deciding on!
      </p>

      <img src={plan} alt="A wireframe of my plan for the Users page" />
    </main>
  );
}

export default Users;
