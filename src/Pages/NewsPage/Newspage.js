import './Newspage.css'
import Container from '../../components/Containers/Container'
import News from '../../components/NewsComponents/News/NewsList'
import Video from '../../components/NewsComponents/Video/VideoList'
import PodcastList from '../../components/NewsComponents/Aside/Podcasts/PodcastList'
import EventList from '../../components/NewsComponents/Aside/Events/EventList'
function NewsPage() {
    return (
        <Container>
            <div className="news-content-wrapper">
                <main className="main-content">
                    <News></News>
                    <Video></Video>
                </main>

                <aside className="sidebar-content">
                    <PodcastList></PodcastList>
                    <EventList></EventList>
                </aside>
            </div>
        </Container>
    )
}


export default NewsPage