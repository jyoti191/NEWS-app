import React, {useEffect, useState} from 'react'
import Contentitem from './Contentitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'

import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';



const Content = (props)=> {
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] =useState(1)
 const [totalResults, setTotalResults] = useState(0)
 
 
const updateNews= async ()=> {
    props.setProgress(10)
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=01f879da17474fcebc3e6169ac4ce8eb&page=${page}&pagesize=${props.pageSize}`;
    
    setLoading(true);
    let data= await fetch(url);
    props.setProgress(30);
    let parsedData= await data.json()
    props.setProgress(60);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
      props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])

  
  
  const fetchMoreData  = async() => {
        setPage(page+1)
        const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=01f879da17474fcebc3e6169ac4ce8eb&page=${page+1}&pagesize=${props.pageSize}`;
        
        let data= await fetch(url);
        let parsedData= await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
        
  };


  
    return (
      <>
        <h2>Today's NEWS</h2>
       
       <InfiniteScroll
       dataLength={articles.length}
       next={fetchMoreData}
       hasMore={articles.length !== totalResults}
       loader={<Spinner/>}>
        <div className="container">

        
        <div className="row my-4">
        {articles.map((element)=>{
          return <div className="col-md-4 my-4 mx-0.5" key={element.url }>
          <Contentitem  title={element.title} description={element.description} imageUrl={element.urlToImage}
          urlId={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
  })}
          
 </div>
 </div>
 </InfiniteScroll>
 </>
    )
  }

Content.defaultProps ={
  country:'in' ,
  pageSize: 6,
  category: 'general',
 }
 Content.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
 }

export default Content
