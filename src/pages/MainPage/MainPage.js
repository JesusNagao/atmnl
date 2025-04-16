import "./MainPage.css"
import News from '../News/News'
import Ranking from '../Ranking/Ranking'
import Videos from '../Videos/Videos'
import IntroBanner from "../IntroBanner/IntroBanner"


export default function MainPage(){
    return(
        <div className="mainpage">
            <IntroBanner />
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