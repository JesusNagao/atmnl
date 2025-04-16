import "styles/MainPage.css"
import News from '../../components/DynamicComponents/News/News'
import Ranking from '../../components/DynamicComponents/Ranking/Ranking'
import Videos from '../../components/DynamicComponents/Videos/Videos'
import IntroBanner from "../../components/DynamicComponents/IntroBanner/IntroBanner"


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