import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsHome = (props) =>{
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);

        const CapitalLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const  updateNews = async () =>{
                props.setProgress(10);
                let urlAPI = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4a053e1f7c5d436a97023fae7bb54d37&page=${page}&pageSize=${props.pageSize}`;
                setLoading(true);
                props.setProgress(30);
                let data = await fetch(urlAPI);
                props.setProgress(50);
                let parseData = await data.json(data);
                props.setProgress(70);

                setArticles(parseData.articles);
                setTotalResults(parseData.totalResults);
                setLoading(false);
                
                props.setProgress(100);
        }

        useEffect(() => {
            document.title =    `${CapitalLetter(props.category)} - NewsStern`;
            updateNews();

            //eslint-disable-next-line
        }, [])

        // const handlePrevClick = async () =>{
        //         setPage(page - 1);
        //         updateNews();
        // }

        // const handleNextClick = async () =>{
        //     if(page + 1 > Math.ceil(totalResults/props.pageSize)){
        //     }
        //     else{
        //         setPage(page+1);
        //         updateNews();
        //     }
        // }

        const fetchDataMore = async() => {
            // let urlAPI = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=in`;
            let urlAPI = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4a053e1f7c5d436a97023fae7bb54d37&page=${page+1}&pageSize=${props.pageSize}`;
            setPage(page + 1);
            let data = await fetch(urlAPI);
            let parseData = await data.json(data);

            setArticles(articles.concat(parseData.articles));
            setTotalResults(parseData.totalResults);
        }

        return (
            <>
                <div className="text-center mb-4" style={{marginTop : "4rem"}}>
                    <h3> NewsStern -  <strong className="text-capitalize"> {props.category}</strong> </h3>
                </div>
                {loading && <Spinner /> }
                <InfiniteScroll 
                dataLength = {articles.length}
                next = {fetchDataMore}
                hasMore = {articles.length !== totalResults}
                loader = {<Spinner />}
                >
                    <div className="container my-2">
                        <div className="row">
                            {articles.map((element) => {
                            return <>
                                    <div className="col-md-4 mb-4">
                                        <NewsItems  key={element.url} title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                    </>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }


NewsHome.defaultProps={
    country : 'in',
    pageSize : 8,
    category : 'general',
}
NewsHome.propTypes={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
}

export default NewsHome
