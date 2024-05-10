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
    
    return(
        <div className="newsContainer" onLoad={getNews}>

            <label onLoad={getNews}>Hello</label>

        </div>
    );
}