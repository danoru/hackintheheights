import UserItem from "./user-item";
import classes from "../events/event-list.module.css"

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
        />
      ))}
    </ul>
  )
}

export default UserList;