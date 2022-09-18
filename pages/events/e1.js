import { getFeaturedUsers } from "../../user-data"
import UserList from "../../components/users/user-list"

function EventPage2022() {
  const featuredUsers = getFeaturedUsers();

  return (
    <div>
      <div>
        <h1>Hack in the Heights Fall 2022</h1>
        <UserList
          items={featuredUsers} 
        />
      </div>
      <div>
        <ul>
          <li>Test Stretch</li>
          <li>Work Tracker</li>
          <li>Post-Death</li>
          <li>Library Room Booker</li>
          <li>DIY Karaoke</li>
          <li>Random Generator Hub</li>
        </ul>
      </div>
    </div>
  )
}

export default EventPage2022;
