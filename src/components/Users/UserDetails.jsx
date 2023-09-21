import { useLoaderData } from "react-router-dom"

export default function UserDetails() {
    const user = useLoaderData();
    const {id, name, email,username, address } = user;
    return (
        <div>
            <h1>
                UserDetails
            </h1>
            <h2>Name: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Username: {username}</h2>
            <h2>Email: {email}</h2>
            {/* <h2>Name: {address}</h2> */}
            {
                console.log(user)
            }
        </div>
    )
}
