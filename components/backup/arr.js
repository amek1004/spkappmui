import axios from "axios";

const Users = ({ users }) => (
  <>
    <h1>Arrival Information</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </>
);

Users.getInitialProps = async () => {
  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("data loaded");
  return { users };
};

export default Users;
