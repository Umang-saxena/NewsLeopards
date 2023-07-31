import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps ={
    country: "in",
    pageSize: 8,
    category: "general"
  }
  static propTypes= {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }   
  capitaliseFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
    
      constructor(props){
        super(props);
        // console.log("I am console log of News Component");
        this.state ={
            articles:[],
            loading:true,
            page:1,
            totalResults:0,
            hasMore:true
        }
        document.title=`${this.capitaliseFirstLetter(this.props.category)} - News Monkey`;
    }
    updateNews=async()=>{
      this.props.setProgress(10);
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=acc93718e32a44c79ab16ebbcc146b46&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      console.log(url);;
      let data = await fetch (url);
      let parsedData= await data.json();
      // console.log(parsedData);
      this.setState({ 
        articles: parsedData.articles ,
        totalResults: parsedData.totalResults,
      })
      this.props.setProgress(100)
      
    } 

// Below used is a lifecycle method .....will be taught later
    async componentDidMount(){
      this.updateNews();

    }

    // Functions Used
    // handlePrev=async ()=>{
    //   this.setState({
    //     page: this.state.page -1
    //   })
    //   this.updateNews();
    // }
    
    // handleNext= async ()=>{
    //     this.setState({
    //       page: this.state.page+1
    //     })
    //     this.updateNews();
    //   }
      // --------------------------------------------
      fetchMoreData= async ()  =>{
        this.setState({ page: this.state.page+ 1 })
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=acc93718e32a44c79ab16ebbcc146b46&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        console.log(url);
        this.setState({
          loading:true
        });
        let data = await fetch (url);
        let parsedData= await data.json();
        // console.log(parsedData);
        this.setState({ 
          articles: this.state.articles.concat(parsedData.articles) ,
          totalResults: parsedData.totalResults,
          loading:false
        })
        console.log(this.state.articles.length !== this.state.totalResults)
      }


  render() {
    return (
      <>
        <h2 className='mb-4 text-center' >News Leopards - Top {this.capitaliseFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner /> }
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >

        <div className="container">

        <div className="row">
        {this.state.articles.map(( element )=>{ 
          return <div className="col-md-4" key={ element.url } >
                <Newsitems title={ element.title?element.title.slice( 0,45 ):" " } description={ element.description?element.description.slice( 0,97 ):" " } author={element.author?element.author:"Unknown"} date={ new Date(element.publishedAt).toGMTString()} imageUrl={ element.urlToImage?element.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"} newsUrl={ element.url} source={ element.source.name } />
            </div> 
         }) }         
        </div>
         </div>

         </InfiniteScroll>
      </>
    )
  }
}

