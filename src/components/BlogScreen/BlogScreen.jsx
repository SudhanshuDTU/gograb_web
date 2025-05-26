import React, { useState, useEffect } from 'react';
import { Databases, Query } from 'appwrite';
import { client } from '../../appwriteConfig.js';
import './BlogScreen.css';
import blogImage from '../../assets/blogs.png'
import { useNavigate } from 'react-router-dom';

const BlogScreen = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const blogsPerPage = 10;
  const navigate = useNavigate();

  const fetchBlogs = async (page) => {
    try {
      setLoading(true);
      const databases = new Databases(client);

      // Calculate offset for pagination
      const offset = (page - 1) * blogsPerPage;

      // Fetch blogs with pagination
      const response = await databases.listDocuments(
        '6825c8ab0021b2ec8969', // Replace with your database ID
        '6825c8b6002b40cda13f', // Replace with your collection ID
        [
          Query.limit(blogsPerPage),
          Query.offset(offset),
          Query.orderDesc('$createdAt'),
          Query.select(['title', 'content', 'image', 'author', 'slug', 'featured', '$createdAt'])
        ]
      );

      setBlogs(response.documents);

      // Calculate total pages
      const total = response.total || 0;
      setTotalPages(Math.ceil(total / blogsPerPage));

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const formatDateOnly = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  if (loading && currentPage === 1) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading blogs...</p>
      </div>
    );
  }
 

const handleBlogClick = (id) => {
  navigate(`/blog/${id}`);
};

  if (error) {
    return (
      <div className="error-container">
        <h2>Error loading blogs</h2>
        <p>{error}</p>
        <button onClick={() => fetchBlogs(currentPage)}>Retry</button>
      </div>
    );
  }

  return (
    <div className="blog-screen">

       <div className="contact-hero-section"> {/* Added a new div for the top section */}
        <div className="contact-header">
          <h1>Go-Grab Insights & <span className="highlight-text">Ideas</span> </h1>
          <p>Discover how we’re transforming vending across campuses with innovation, real stories, and smart product thinking.</p>
         
        </div>
        <div className="contact-image-container">
          <img src={blogImage} alt="Contact" className="contact-image" />
        </div>
      </div>

      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>Latest news, updates, and insights</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.$id} className="blog-card">
            <div className="blog-image-container">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-image"
                  onError={(e) => {
                    e.target.src = '/default-blog-image.jpg'; // Fallback image
                  }}
                />
              )}
              <div className="blog-date">
                {formatDateOnly(blog.$createdAt)}
              </div>
            </div>
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">
                {blog.content.substring(0, 150) + '...'}
              </p>
              <div className="blog-footer">
                <span className="blog-author">By {blog.author || 'Admin'}</span>
                <button onClick={() => handleBlogClick(blog.$createdAt)} className="read-more">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

   

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-arrow"
          >
            &lt;
          </button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            );
          })}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <span className="pagination-ellipsis">...</span>
          )}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <button
              onClick={() => handlePageChange(totalPages)}
              className={`pagination-number ${currentPage === totalPages ? 'active' : ''}`}
            >
              {totalPages}
            </button>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-arrow"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogScreen;
