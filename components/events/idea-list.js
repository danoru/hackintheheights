import classes from "./idea-list.module.css"

function IdeaList() {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <h3>MoveIt</h3>
        <h4>Movement Reminder</h4>
        <p>A Chrome extension that gives you reminders to move/stretch throughout your work day and offers potential exercises via Youtube.</p>
      </div>
      <div className={classes.item}>
        <h3>Post-Death</h3>
        <h4>End-of-Life Planner</h4>
        <p>A web application that allows users to put together all of their end-of-life planning information in a single, convenient space for your loved ones to reference in the end.</p>
      </div>
      <div className={classes.item}>
        <h3>A Quiet Place</h3>
        <h4>Library Room Scheduler</h4>
        <p>A web application that allows you to schedule a room to use in a library.</p>
      </div>
      <div className={classes.item}>
        <h3>Karaoq</h3>
        <h4>Karaoke Performance Queue</h4>
        <p>A web application that handles karaoke open mic performance queues with multiple users and Youtube-provided karaoke videos.</p>
      </div>
      <div className={classes.item}>
        <h3>Writer's Box</h3>
        <h4>Hub for Randomly-Generated Content</h4>
        <p>A web application with a variety of lists (town names, NPC names, store inventories, etc.) that can be used to quickly generate things a creative might need in a pinch.</p>
      </div>
    </div>
  );
};

export default IdeaList;