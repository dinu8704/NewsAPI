import React from 'react'
import "../index.css"

const NewsItems = (props) => {
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <>
                <div>
                <div className="card">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger text-light">
                            {source}
                    </span>
                    <img className="card-img-top topImgCard" src={!imageUrl?"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/62f52c173a2c6b244647c839466f90f2.jpg":imageUrl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}... </p>
                        <p className="card-text"><small className="text-muted"> By  {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                        <div className="mt-4 text-center">
                            <a rel="noreferrer" href={newsUrl} target={"_blank"}  className="btn btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }

export default NewsItems
