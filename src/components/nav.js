import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";
import Search from "./search";
import ContactForm from "./ContactForm";

class Nav extends React.Component {
  navStyle = {
    color: "white",
    inlineSize: "none",
  };
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const sorses = [
      { name: "BBC News", path: "bbc-news" },
      { name: "CBC News", path: "cbc-news" },
      { name: "Google News", path: "google-news" },
    ];
    return (
      <header>
        <nav>
          <Link to="/" style={this.navStyle}>
            <p>{<HomeIcon fontSize="large" />}</p>
          </Link>
          <ul className="nav-links">
            {sorses.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/category/${item.path}`} style={this.navStyle}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Search />
          <Button onClick={this.handleShow}>Contact Us</Button>
          {this.state.show && <ContactForm handleClose={this.handleShow} />}
        </nav>
      </header>
    );
  }
}

export default Nav;
