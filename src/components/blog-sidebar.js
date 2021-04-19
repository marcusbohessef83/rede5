import React, { Fragment } from "react";
import { BlogSidebarPost } from "@/data";
const BlogSidebar = () => {
  return (
    <Fragment>
      <aside className="widget search-widget">
        <form method="post" action="#" className="searchform">
          <input type="search" placeholder="Pesquisar..." name="s" id="s" />
        </form>
      </aside>
      <aside className="widget recent_posts">
        <h3 className="widget_title">Últimos Posts</h3>
        <div className="meipaly_post_widget">
          {BlogSidebarPost.map(({ title, image, url }, index) => (
            <div className="mpw_item" key={index}>
              <img src={image} alt="" />
              <a href={url}>{title}</a>
            </div>
          ))}
        </div>
      </aside>
      <aside className="widget categories">
        <h3 className="widget_title">Categories</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="#">Serveless</a>
            </li>
            <li>
              <a href="#">Desenvolvimento</a>
            </li>
            <li>
              <a href="#">SEO</a>
            </li>
            <li>
              <a href="#">Tecnologias</a>
            </li>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget">
        <h3 className="widget_title">Tags:</h3>
        <div className="meipaly_tagcloude_widget">
          <a href="#">Business,</a> <a href="#">Serveless</a>{" "}
          <a href="#">Digital,</a> <a href="#">Desenvolvimento,</a>
          <a href="#">Parallax,</a> <a href="#">Seo,</a>{" "}
          <a href="#">Professional,</a>
          <a href="#">Tecnologias,</a>
        </div>
      </aside>
    </Fragment>
  );
};

export default BlogSidebar;
