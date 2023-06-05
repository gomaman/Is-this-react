
import PodcastItem from './PodcastItem'

function PodcastList() {

    const PODCAST_ITEMS = [
        {
            time: "7:55",
            buttonText: "Play",
            title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
            date: "2021-09-02"
        },

        {
            time: "7:55",
            buttonText: "Play",
            title: "Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“",
            date: "2021-08-25"
        },

        {
            time: "7:55",
            buttonText: "Play",
            title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
            date: "2021-09-02"
        },

        {
            time: "7:55",
            buttonText: "Play",
            title: "Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“",
            date: "2021-09-02"
        },
    ]
    return (
        <section className="podcasts">
            <h2 className="section-title">Podcastai ir radijo laidos</h2>

            <div className="podcasts-list">


                {PODCAST_ITEMS.map(({ time, buttonText, title, date }, index) => (
                    <PodcastItem
                        key={index}
                        time={time}
                        buttonText={buttonText}
                        title={title}
                        date={date}
                    ></PodcastItem>
                ))}
            </div>
        </section>
    )
}


export default PodcastList