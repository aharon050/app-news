import React from "react";
import "../App.css";
import ImgMediaCard from "./Item";


class Home extends React.Component {
  state = {
    topNews: [],
    isLoaded: false,
  };

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=693a081ac91e4baabc7360e0028b523f";
    const response = await fetch(url);
    const { articles } = await response.json();
    this.setState({ topNews: articles });
    this.setState({ isLoaded: true });
  }

  render() {
    console.log(this.props);
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="flex-container">
          {this.state.topNews.map((item, index) => {
            return (
              <ImgMediaCard
                key={index}
                imgUrl={item.urlToImage}
                titl={item.title}
                author={item.author}
                conten={item.content}
                data={item.publishedAt}
                url={item.url}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Home;
