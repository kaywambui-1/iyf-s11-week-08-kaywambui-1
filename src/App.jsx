import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Layout from './components/Layout';
import './App.css'

  function App() {
const posts = [
    { id: 1, title: "First Post", excerpt: "...", author: "Alice", date: "Jan 15" },
    { id: 2, title: "Second Post", excerpt: "...", author: "Bob", date: "Jan 14" },
    { id: 3, title: "Third Post", excerpt: "...", author: "Charlie", date: "Jan 13" }
  ];

  return (
    <Layout>
    <div className="app">
      <Header />
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
        <Greeting name="Alice" />
        <Greeting name="Bob" />

        <Card title="Welcome">
    <p>This is the card content!</p>
    <button>Click me</button>
</Card>

<Card>
    <img src="https://placehold.co/200x100" alt="Placeholder" />
</Card>
      </main>
      <Footer/>
    </div>
    </Layout>
  );
}

export default App;