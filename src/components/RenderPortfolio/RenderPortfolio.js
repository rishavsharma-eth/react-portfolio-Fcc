import React from 'react';
import portfolioData from "../../data/portfolio.json"

const RenderPortfolio = (portfolio) => {
    return(
      <div className='imagesContainer'>
          {
            portfolio.map((item, id)=>{
              return(
                <div className='imageBox' key={id}>
                    <img 
                        src={item.cover}
                        alt="portfolioCoverImg"
                        className="portfolioImg"
                    />
                  <div className="projectInfo">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button onClick={()=> window.open(item.url)}>View</button>
                  </div>
                </div>
              )
            })
          }
      </div>
    )
  }

export default RenderPortfolio