import { useState } from "react";
import './News.css';


export default function News(){

    const [news, setNews] = useState('')
    const [pending, setPending] = useState('true')

    function getNews(){
        fetch('http://localhost:3000/clubs').then(result => {
            return result.json();
        }).then(result => {
            setNews(result)
        }).then(() => {
            setPending('false')
        })
    }

    function printNews(){
        console.log(news[0].name)
    }

    window.addEventListener('load', getNews())
    window.addEventListener('load', printNews())
    
    return(
        <div className="newsContainer" onLoad={getNews}>
            <div className="loadingNews" style={{display: pending ? 'none' : 'inline'}}>
                <h1>Loading</h1>
                
            </div>
            
            <div className="loadedNews" style={{display: !pending ? 'none' : 'inline'}}>
                <h1 onLoad={printNews}>Loaded</h1>
                <label></label>
            </div>
        </div>
    );
    
}