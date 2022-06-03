import React from "react";
import { useEffect,useState } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// extend means the class is inheriting from component so thats why we need to use super() in derived class super must be used before you can call the derived class.
const News=(props)=> {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(2);
  const [totalresult, settotalresult] = useState(0);
  // document.title = `${props.category}-NewsGeeks`;
  const updatedata = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=1&pageSize=20`;
    setloading(true);
    let data = await fetch(url);
    setloading(false);
    // wait karega data ke load hone ka
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles));
    settotalresult(parsedData.totalresult);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalresult: parsedData.totalResults,
    // });
  };
  useEffect(() => {
    updatedata();
    //eslint-disable-next-line
  }, [])
  const fetchmoredata=async()=>{
    // this.setState({
    //     page: this.state.page + 1
    //   });
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=20`;
    // this.setState({ loading: true });
    setloading(true);
    let data = await fetch(url);
    setloading(false);
    // this.setState({ loading: false });
    // wait karega data ke load hone ka
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles));
    settotalresult(parsedData.totalResults)
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalresult: parsedData.totalResults,
    // });
  }
    console.log("render");
    // pehle constructor run hoga fir render fir componentDidMount
    let { mode } = props;
    return (

        <div className="container my-20  " style={{marginTop:"52px"}}>
          <h1
            className="text-center my-20"
            style={{ color: mode === "light" ? "black" : "white" }}
          >{`NewsGeeks-Top ${props.category} HeadLines`}</h1>
          {loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchmoredata}
          hasMore={totalresult !== articles.length}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row my-2 d-flex justify-content-center">
            {
              articles.map((element) => {
                return (
                  <div className="col md-4 my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      published={element.publishedAt}
                      mode={mode}
                    />
                  </div>
                );
              })}
              </div>
          </div>
          </InfiniteScroll>
        </div>
    );
  }
News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
};
export default News