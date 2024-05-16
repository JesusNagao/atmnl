import { useState } from "react";
import './News.css';


export default function News(){

    const [news, setNews] = useState('')
    const [pending, setPending] = useState(true)

    function getNews(){
        fetch('http://localhost:3000/clubs').then(result => {
            return result.json();
        }).then(result => {
            setNews(result)
        }).then(() => {
            setPending(false)
        })
    }

    window.addEventListener('load', getNews())

    if (pending){
        return(
            <div className="newsContainer" onLoad={getNews}>
                <div className="loadingNews">
                    <h1>Loading</h1>
                </div>
            </div>
        );
    }

    return(
        <div className="newsContainer">
            <div className="loadedNews">
                <h1>Loaded</h1>
            </div>
        </div>
    );
        
}