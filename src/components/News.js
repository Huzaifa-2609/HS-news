import React, { Component } from 'react';
import Newsitem from './NewsItem';
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


class News extends Component {
    // handleNext= async ()=>{
    //     this.setState({
    //         page:this.state.page+1,
    //     })
    //     await this.updateNews();
        //     let data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85e7d2e67b2247f497aac77fa5dd1fbd&page=${this.state.page+1}`);
    //     let parsedData=await data.json();
    //     this.setState({
    //         articles:parsedData.articles
    //     })
    // }
     updateNews=async()=>{
         this.setState({
            loading:true
         })
         this.props.setLoader(10);
        let data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=85e7d2e67b2247f497aac77fa5dd1fbd&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.props.setLoader(50);
        let parsedData=await data.json();
        this.props.setLoader(80);
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
        this.props.setLoader(100);
    }
    // handlePrevious= async()=>{
        //     this.setState({
            //         page:this.state.page-1
            //     })
            //     console.log(this.state.page)
            // let data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85e7d2e67b2247f497aac77fa5dd1fbd&page=${this.state.page-1}`);
            // let parsedData=await data.json();
        // this.setState({
        //     articles:parsedData.articles
        // })
    //     await this.updateNews();

    // }
    async componentDidMount(){
         this.updateNews();
    }
    fetchMoreData=async ()=>{
        this.setState({
            page:this.state.page+1,
        })

        let data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=85e7d2e67b2247f497aac77fa5dd1fbd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);

        let parsedData=await data.json();
        
        this.setState({
            articles:this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults,
        })
        
    }
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h3>HS-Top Headlines</h3>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<Spinner/>}
        >
                <div className="container">
                <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col">
                            <Newsitem key={element.url} title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} image={element.urlToImage} url={element.url} />
                    </div>
                        })}
                </div>
                        </div>
                </InfiniteScroll>
                {/* {!this.state.loading &&<div className="d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} className="btn btn-dark">&#8249; Previous</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNext} className="btn btn-dark">Next &#8250;</button>
                </div>} */}
            </div>
        );
    }
}

export default News;
