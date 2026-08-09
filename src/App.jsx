import { useState } from 'react';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Layout from './components/Layout';
import UserGreeting from './components/UserGreeting';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import UserForm from './components/UserForm';
import EventExamples from './components/EventExamples';
import ContactForm from './components/ContactForm';
import TodoList from './components/TodoList';
import Stats from './components/stats';
import PostList2 from './components/PostList2';
import './App.css'

function App() {
  const posts = [
    { id: 1, title: "First Post", excerpt: "...", author: "Alice", date: "Jan 15" },
    { id: 2, title: "Second Post", excerpt: "...", author: "Bob", date: "Jan 14" },
    { id: 3, title: "Third Post", excerpt: "...", author: "Charlie", date: "Jan 13" }
  ];

  const [likablePosts, setLikablePosts] = useState([
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 }
  ]);

  const handleLike = (id) => {
    setLikablePosts(likablePosts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const totalLikes = likablePosts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <Layout>
      <div className="app">
        <main>
          <h2>Welcome to CommunityHub</h2>
          <div className="post-list">
            {posts.map(post => (
              <PostCard 
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
              />
            ))}
          </div>
          <Sidebar/>
          <Button text="Submit" variant="primary" />
          <Button text="Cancel" variant="secondary" />
          <Button text="Delete" variant="danger" />
          <Button />
          <Counter />
          <Toggle/>
          <UserForm/>
          <EventExamples/>
          <ContactForm/>
          <TodoList/>
          <Stats totalPosts={likablePosts.length} totalLikes={totalLikes} />
          <PostList2 posts={likablePosts} onLike={handleLike} />
          <Greeting name="Alice" />
          <Greeting name="Bob" />
          <UserGreeting user={{ name: "Christine" }} />
          <UserGreeting user={null} />
          <Card title="Welcome">
            <p>This is the card content!</p>
            <button>Click me</button>
          </Card>
          <Card>
            <img src="https://placehold.co/200x100" alt="Placeholder" />
          </Card>
        </main>
      </div>
    </Layout>
  );
}

export default App;