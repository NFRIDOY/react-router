import { useLoaderData } from "react-router-dom"
import User from "../components/Users/User";

export default function Users() {
    const users = useLoaderData();
    return (
        <div>
            Users = {users.length}
            {
                console.log(users)
            }
            {
                
                users.map((user) => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}