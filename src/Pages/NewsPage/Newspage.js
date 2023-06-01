import './Newspage.css'
import News from '../../components/NewsComponents/News/NewsList'
import Video from '../../components/NewsComponents/Video/VideoList'
import PodcastList from '../../components/NewsComponents/Aside/Podcasts/PodcastList'
import EventList from '../../components/NewsComponents/Aside/Events/EventList'
function Newspage() {
    return (
        <div className="container">
            <div className="content-wrapper">
                
                <main className="main-content">
                    <h1 className="page-header">Naujienos</h1>
                    <News></News>
                    <Video></Video>
                </main>

                <aside className="sidebar-content">
                    <PodcastList></PodcastList>
                    <EventList></EventList>
                </aside>
            </div>
        </div>
    )
}


export default Newspage