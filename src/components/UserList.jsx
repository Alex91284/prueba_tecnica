import { useSelector } from "react-redux"

export const UserList = () => {
  const users = useSelector(state => state.user)
  return (
      <div>
          {users.map(user => (
              <div key={user.id}>
                  <h4>{ user.email}</h4>
              </div>
          ))}
    </div>
  )
}

export default UserList
