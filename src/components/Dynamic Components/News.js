import { useState } from "react";
import './News.css';


export default function News(){
    /*    
    const [isPending, setIsPending] = useState('false');
    const [msg, setmsg] = useState('')

    function getNews(){
        
        console.log("Hello")
        
        fetch('http://localhost:3000/news').then(() => {
            console.log("News Received")
            setmsg("News Received")
            setIsPending(false);
        })
    }*/

    const [news, setNews] = useState('')

    function getNews(){
        fetch('http://localhost:3000/clubs').then(result => {
            console.log("News received")
        }).then(result =>{
            setNews(result.json)
        })
    }
    
    return(
        <div className="newsContainer" onLoad={getNews}>

            <label>Hello</label>
            <button onClick={getNews}>Click</button>
        </div>
    );
}