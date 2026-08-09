function LikeablePost({ post, onLike }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <button onClick={onLike}>
                ❤️ {post.likes}
            </button>
        </div>
    );
}

export default LikeablePost;