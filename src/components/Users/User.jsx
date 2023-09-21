import PropTypes from 'prop-types'; // ES6

export default function User({ user }) {
    const {name, email} = user ;
    // console.log(email);
    return (
        <>
            <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </>
    )
}

User.prototype = {
    user: PropTypes.object,
    user: PropTypes.string,
    email: PropTypes.string
}
