// BlogSection.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Client, Databases, Query } from 'appwrite'; // Assuming Appwrite SDK is installed
import './BlogSection.css';
import {client} from '../../../appwriteConfig.js'

const BlogSection = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const databases = new Databases(client);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        '6825c8ab0021b2ec8969', // Replace with your database ID
        '6825c8b6002b40cda13f', // Replace with your collection ID
        [
          Query.limit(3),
          Query.orderDesc('$createdAt'),
          Query.select(['title', 'content', 'image', 'author', 'slug', 'featured', '$createdAt'])
        ]
      );

      setBlogs(response.documents);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const handleViewMore = () => {
    navigate('/blog');
  };

  if (loading) {
    return <div className="blog-section">Loading blogs...</div>;
  }

  if (error) {
    return <div className="blog-section error">Error: {error}</div>;
  }

  return (
    <div className="blog-section">
      <h2>From the Blogs</h2>

      <div className="blog-cards">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.$createdAt}>
            <div className="blog-image">
              <img src={blog.image || "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"} alt={blog.title} />
            </div>
            <p className="blog-title">{blog.title}</p>
            <p className="blog-description">
              {blog.content.substring(0, 100)}... {/* Truncate content to fit 2 lines, adjust as needed */}
            </p>
            <div className='read-more-footer'>
            <button  onClick={() => handleReadMore(blog.$createdAt)} className="read-more-button">
              Read More →
            </button>

            </div>
          </div>
        ))}
      </div>
      <button className="view-more-button" onClick={handleViewMore}>View More</button>
    </div>
  );
};

export default BlogSection;