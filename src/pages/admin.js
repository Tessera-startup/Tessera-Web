import React from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";

function AdminPage() {
  // Dummy list of posts
  const dummyPosts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
    },
    {
      id: 3,
      title: "Third Post",
      content: "This is the content of the third post.",
    },
  ];

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>
        <div className="container p-4 sm:p-8 about relative z-50">
          <h2 className="text-3xl font-semibold mb-4 mt-12">All Posts</h2>
          {dummyPosts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </Dashboard>
    </Layout>
  );
}

export default AdminPage;
