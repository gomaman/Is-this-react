
import PodcastItem from './PodcastItem'

function PodcastList () {
    return (
        <section className="podcasts">
                        <h2 className="section-title">Podcastai ir radijo laidos</h2>

                        <div className="podcasts-list">

                            <PodcastItem
                            time="7:55"
                            buttonText="Play"
                            title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
                            date="2021-09-02"
                            ></PodcastItem>

                            <PodcastItem
                            time="7:55"
                            buttonText="Play"
                            title="Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“"
                            date="2021-08-25"
                            ></PodcastItem>

                            <PodcastItem
                            time="7:55"
                            buttonText="Play"
                            title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
                            date="2021-09-02"
                            ></PodcastItem>


                            <PodcastItem
                            time="8:32"
                            buttonText="Play"
                            title="Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“"
                            date="2021-09-02"
                            ></PodcastItem>
                        </div>
                    </section>
    )
}


export default PodcastList