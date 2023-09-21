import PropTypes from 'prop-types'

export default function Post({ post }) {
    // const { title } = props.post;
    const { userId, id, title, body } = post;
    function getUserName(userId) {
        switch (userId) {
            case 1: return "Sam"

            case 2: return "Ram"

            case 3: return "Jam"

            case 4: return "Mam"

            case 5: return "Nam"

            case 6: return "Tam"

            case 7: return "Fam"

            case 8: return "Lam"

            case 9: return "Dam"

            case 10: return "Qam"

            case 11: return "Vam"



            default: return userId;

        }
    }
    return (
        <div >
            <div className=" bg-info rounded-2xl shadow-md m-5 p-8 text-white">
                <h2 className="text-xl">{getUserName(userId)} Posted This Post</h2>
                <h2 className='font-bold text-2xl'>
                    Post: #{id}{' Title: '}{title}
                </h2>
                <p>
                    {body}
                </p>
                <div>
                    <button className="btn btn-secondary">Like</button>
                </div>

                {/* {console.log(post)} */}
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.object
}