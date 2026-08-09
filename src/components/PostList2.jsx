import LikeablePost from './LikeablePost';

function PostList2({ posts, onLike }) {
    return (
        <div className="post-list">
            {posts.map(post => (
                <LikeablePost
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                />
            ))}
        </div>
    );
}

export default PostList2;