import podcastImage from '../../../../images/podcast-image.jpg'

function PodcastItem (props) {
    return (
        <div className="podcast-item">
        <div className="podcast-controls">
            <img src={podcastImage} className="podcast-image" />
            <span className="podcast-time">Trukmė: {props.time}</span>
            <button className="podcast-play">{props.buttonText}</button>
        </div>

        <div className="podcast-info">
            <h3 className="podcast-title">{props.title}</h3>
            <span className="podcast-date">{props.date}</span>
        </div>
    </div>
    )
}


export default PodcastItem