import React from 'react'

const Contentitem =(props)=> {
 let {title, description, imageUrl, urlId,author, date, source} = props;
    return (
      <div>
        <div className="card">
  <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWPukizrzMc0Ej62zgH3pksb1mu74PZej5ufqWJZ8gA&s":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <div style={{display: 'flex', 
    justifyContent: 'flex-end',
  position: 'absolute' , 
  right:0, top:0 }}><span class="badge rounded-pill bg-danger">
    {source}</span></div>
   
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on
     {new Date(date).toGMTString()}</small></p>
    <a rel="none" href={urlId}d target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>      
      </div> 
    )
  }


export default Contentitem
