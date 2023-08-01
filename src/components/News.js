import React, { useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
  // document.title=`${this.capitaliseFirstLetter(props.category)} - News Monkey`;

  const capitaliseFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState([]);
  // const [hasMore,setHasMore]=useState(true);


      
    
    const updateNews= async()=>{
      props.setProgress(10);
      let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=publishedAt&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      // console.log(url);;
      let data = await fetch (url);
      props.setProgress(30);
      let parsedData= await data.json();
      props.setProgress(70);
      // console.log(parsedData);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);

      props.setProgress(100);
      
    } 

// Below used is a lifecycle method .....will be taught later
    useEffect(() => {
      updateNews();
    }, [  ])
      const fetchMoreData= async ()  =>{
        setLoading(false);
        let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=publishedAt&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage( page+1 );
        let data = await fetch (url);
        let parsedData= await data.json();
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles) );
        setTotalResults( parsedData.totalResults );
        // console.log(this.state.articles.length !== this.state.totalResults)
      }
    return (
      <>
        <h2 className='mb-4 text-center' style={{marginTop:"50px"}} >News Leopards - Top {capitaliseFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner /> }
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner />}
        >

        <div className="container">

        <div className="row">
        {articles.map(( element )=>{ 
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


News.defaultProps ={
  country: "in",
  pageSize: 8,
  category: "general"
}
News.propTypes= {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}   
 export default News;
