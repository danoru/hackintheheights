import { getFeaturedUsers } from "../../user-data"
import UserList from "../../components/users/user-list"

function EventPage2022() {
  const featuredUsers = getFeaturedUsers();

  return (
    <div>
      <h1>Hack in the Heights Fall 2022</h1>
      <UserList
        items={featuredUsers} 
      />
    </div>
  )
}

export default EventPage2022;
