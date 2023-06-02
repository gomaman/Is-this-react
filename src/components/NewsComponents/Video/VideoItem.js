function VideoItem(props) {
    return (
        <div className="single-video-wrapper">
            <div className="video-wrapper">
            <iframe width="560" height="315" src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <span className="extra-text">{props.title}</span>
        </div>
    )
}

export default VideoItem