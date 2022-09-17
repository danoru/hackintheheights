import UserItem from "./user-item";
import classes from "./user-list.module.css"

function UserList(props) {
  const { items } = props;
    
  return (
    <ul className={classes.list}>
      { items.map(user => (
        <UserItem 
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          link={user.link}
        />
      ))}
    </ul>
  )
}

export default UserList;