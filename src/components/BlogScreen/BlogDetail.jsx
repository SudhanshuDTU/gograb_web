import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Databases, Query } from "appwrite";
import { client } from "../../appwriteConfig"; // Adjust path if needed
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const databases = new Databases(client);
        const response = await databases.listDocuments(
          "6825c8ab0021b2ec8969",
          "6825c8b6002b40cda13f",
          [Query.equal("$createdAt", id), Query.limit(1)]
        );
        if (response.documents.length > 0) {
          setBlog(response.documents[0]);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return null;

  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <Link style={{ justifySelf: "flex-start",marginLeft: '5%',marginTop: '3%' }} to={"/"}>
          {`<-`}Back
        </Link>
      </div>
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        <p>
          <em>
            By {blog.author || "Admin"} |{" "}
            {new Date(blog.$createdAt).toLocaleDateString()}
          </em>
        </p>
        {blog.image && (
          <img src={blog.image} alt={blog.title} style={{ maxWidth: "100%" }} />
        )}
        <div className="blog-content">
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
