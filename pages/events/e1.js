import { getFeaturedUsers } from "../../user-data"
import UserList from "../../components/users/user-list"
import IdeaList from "../../components/events/idea-list"

function EventPage2022() {
  const featuredUsers = getFeaturedUsers();

  return (
    <div>
      <div>
        <h1>Hack in the Heights: Fall 2022</h1>
        <IdeaList />
      </div>
      <div>
        <UserList
          items={featuredUsers} 
        />
      </div>
    </div>
  )
}

export default EventPage2022;
