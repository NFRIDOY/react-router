import { useLoaderData } from "react-router-dom"
import Post from "../components/Post/Post"

export default function Posts() {
    const posts = useLoaderData()
    return (
        <div>
            <h1>
                Posts: {posts.length}
            </h1>
            <div className="grid grid-cols-3 gap-1">
                {
                    posts.map((post) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    )
}
