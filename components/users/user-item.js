import classes from "../events/event-item.module.css"

function UserItem(props) {
  const { name, image, id } = props;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={name} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{name}</h2>
        </div>
      </div>
    </li>
  );
};

export default UserItem;