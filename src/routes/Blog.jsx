import React from "react";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";
import blog5 from "../assets/images/blog-5.jpg";
import { IoTime, IoChatbubbleEllipsesOutline } from "react-icons/io5";
const blogData = [
  {
    id: 1,
    title: "Opening of new offices of the company",
    image: blog1,
    category: "Company",
    date: "January 14, 2022",
    comments: 114,
  },
  {
    id: 2,
    title: "What cars are most vulnerable",
    image: blog2,
    category: "Repair",
    date: "January 14, 2022",
    comments: 114,
  },
  {
    id: 3,
    title: "Statistics showed which average age",
    image: blog3,
    category: "Cars",
    date: "January 14, 2022",
    comments: 114,
  },
  {
    id: 4,
    title: "What´s required when renting a car?",
    image: blog4,
    category: "Cars",
    date: "January 14, 2022",
    comments: 114,
  },
  {
    id: 5,
    title: "New rules for handling our cars",
    image: blog5,
    category: "Company",
    date: "January 14, 2022",
    comments: 114,
  },
];

export default function Blog() {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <h2 className="h2 section-title">Our Blog</h2>
        <ul className="blog-list ">
          {blogData.map((blog) => (
            <li key={blog.id}>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-100"
                    />
                  </a>
                  <a href="#" className="btn card-badge">
                    {blog.category}
                  </a>
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#">{blog.title}</a>
                  </h3>
                  <div className="card-meta">
                    <div className="publish-date">
                      <IoTime size={"18"} />
                      <time dateTime="2022-01-14">{blog.date}</time>
                    </div>
                    <div className="comments">
                      <IoChatbubbleEllipsesOutline size={"18"} />
                      <data value={blog.comments}>{blog.comments}</data>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
