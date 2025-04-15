import "./MainPage.css"
import News from '../News/News'
import Ranking from '../Ranking/Ranking'
import Videos from '../Videos/Videos'


export default function MainPage(){
    return(
        <div className="mainpage">
            <div className="news">
                <h1>Ultimas Noticias</h1>
                <News />
            </div>
            <div className="ranking">
                <h1>Ranking</h1>
                {/*<Ranking />*/}
            </div>
            <div className="videos">
                <h1>Ultimos Videos</h1>
                <Videos />

            </div>
        </div>
    );
}