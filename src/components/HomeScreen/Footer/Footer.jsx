import React, { useEffect, useState } from 'react';
import './Footer.css'; // Create this CSS file for styling
import {client} from '../../../appwriteConfig.js'
import { Databases,Query } from 'appwrite';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const databases = new Databases(client);
    const navigate = useNavigate()
    const fetchFooterBlogs = async () => {
        try {
          setLoading(true);
          const response = await databases.listDocuments(
            '6825c8ab0021b2ec8969', // Replace with your database ID
            '6825c8b6002b40cda13f', // Replace with your collection ID
            [
              Query.limit(3),
              Query.orderDesc('$createdAt'),
              Query.select(['title', 'slug','$createdAt']) // Only fetch title and slug for the footer
            ]
          );
            console.log(response.documents);
          setBlogs(response.documents);
          setLoading(false);
        } catch (err) {
          console.error("Failed to fetch footer blogs:", err); // Log error for debugging
          setError("Failed to load recent blogs.");
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchFooterBlogs();
      }, []);
 
      const handleRoute = (id)=>{
        navigate(`/blog/${id}`)
      }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>team@go-grab.in</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/gograb_india/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.freepik.com/premium-psd/instagram-logo_971166-164497.jpg?semt=ais_hybrid&w=740" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Index</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/collaborations">Collaborations</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Blogs</h3>
          <ul>
            {loading && <li>Loading blogs...</li>}
            {error && <li>{error}</li>}
            {!loading && !error && blogs.map((blog) => (
                
              <li key={blog.$id}>
               <p onClick={()=> handleRoute(blog.$createdAt)}>{blog.title}</p>
                {/* <Link to={`/blog/${blog.$createdAt}`}>{blog.title}</Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2020 Go-Grab, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
