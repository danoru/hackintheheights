import classes from "./user-item.module.css"

function UserItem(props) {
  const { name, image, link, id } = props;

  return (
    <li className={classes.item}>
      <img className={classes.portrait} src={"/" + image} alt={name} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{name}</h2>
          <a href={link}>
            <img className={classes.github} src="/GitHub.png" alt="Github"/>
          </a>
        </div>
      </div>
    </li>
  );
};

export default UserItem;