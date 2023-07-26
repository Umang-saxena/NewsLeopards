import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


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
      
    articles=[];
      constructor(){
        super();
        // console.log("I am console log of News Component");
        this.state ={
            articles : this.articles,
            loading:false,
            page:1
        }
    }
    updateNews=async()=>{
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=acc93718e32a44c79ab16ebbcc146b46&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      console.log(url);
      this.setState({
        loading:true
      });
      let data = await fetch (url);
      let parsedData= await data.json();
      // console.log(parsedData);
      this.setState({ 
        articles: parsedData.articles ,
        totalResults: parsedData.totalResults,
        loading:false,
        page:this.state.page+1
      })

      
    } 

// Below used is a lifecycle method .....will be taught later
    async componentDidMount(){
      this.updateNews();

    }

    // Functions Used
    handlePrev=async ()=>{
      this.setState({
        page: this.state.page -1
      })
      this.updateNews();
    }
    
    handleNext= async ()=>{
        this.setState({
          page: this.state.page + 1
        })
        this.updateNews();
      }
      // --------------------------------------------


  render() {
    return (
      <div className="container my-3" >
        <h2 className='mb-4 text-center' >News Leopards - Top Headlines</h2>
        {this.state.loading && <Spinner /> }
        <div className="row">
        { !this.state.loading && this.state.articles.map(( element )=>{ 
            return <div className="col-md-4" key={ element.url } >
                <Newsitems title={ element.title?element.title.slice( 0,45 ):" " } description={ element.description?element.description.slice( 0,97 ):" " } author={element.author?element.author:"Unknown"} date={ new Date(element.publishedAt).toGMTString()} imageUrl={ element.urlToImage?element.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"} newsUrl={ element.url} source={ element.source.name } />
            </div> 
         }) }         
        </div>
        <div className="d-flex justify-content-between">
        <button  disabled={this.state.page<=1}  type="button" className="btn btn-primary btn-sm" onClick={this.handlePrev}>&larr; Previous	</button>
        <button disabled={ this.state.page + 1 > Math.ceil( this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-primary btn-sm" onClick={this.handleNext} >Next &rarr; </button>

        </div>
      </div>
    )
  }
}

