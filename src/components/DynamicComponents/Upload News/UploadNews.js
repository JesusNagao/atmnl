import { useState } from "react";


export default function UploadNews(){
    function getUserData(){
        fetch('http://localhost:3000/users')
    }


    return(
        <div className="newsContainer">
            <form action="/news" method="post">
                <label>Title:</label>
                <input id="newsName" type="text"/>
                <label>Description:</label>
                <input id="newsDesc" type="text"/>
                <label>Image:</label>
                <input type="file" name="news" id="news" accept="image/jpeg, image/png"/>
                <input type="submit"/>
            </form>

        </div>
    );
}