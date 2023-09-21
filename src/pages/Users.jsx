import { useLoaderData } from "react-router-dom"
import User from "../components/Users/User";

export default function Users() {
    const users = useLoaderData();
    return (
        <div className="p-2">
            Users = {users.length}
            <div className="grid grid-cols-4 gap-5">
            {
                users.map((user) => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    )
}