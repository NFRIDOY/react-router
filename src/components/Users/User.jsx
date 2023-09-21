// import PropTypes from 'prop-types'; // ES6
import { Link } from "react-router-dom";

export default function User({ user }) {
    const {id, name, email } = user;
    // console.log(email);
    return (
        <>
            <div className="px-3 py-4 border-2 border-info rounded-lg">
                <div className="py-5">
                    <h2 className="text-xl">Name: {name}</h2>
                    <h2 className="text-xl">Email: {email}</h2>
                </div>
                <button className="btn btn-info">
                    <Link to={`/users/${id}`}>
                        User Details
                    </Link>
                </button>
            </div>
        </>
    )
}

// User.prototype = {
//     user: PropTypes.any,
//     name: PropTypes.string,
//     email: PropTypes.string
// }
