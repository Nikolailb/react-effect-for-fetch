function UsersListItem({ user }) {
  const fullName = `${user.firstName} ${user.lastName}`;
  console.log(fullName, user);
  return (
    <li style={{ background: user.favouriteColour }}>
      <img src={user.profileImage} alt={fullName} />
      <h3>{fullName}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UsersListItem;
