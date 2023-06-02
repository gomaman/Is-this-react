function EventItem(props) {
    let { eventDay, eventMonth, location, src, title } = props;
    if (title || eventDay || eventMonth || location) {
        return (

            <div className="event-item">
                <a href="#">

                    {src && (
                        <div className="image-wrapper">
                            <img src={src} className="event-image" />
                        </div>
                    )}

                    <div className="event-content-wrapper">
                        <div className="event-date">
                            <span className="event-day">{eventDay}</span>
                            <span className="event-month">{eventMonth}</span>
                        </div>
                        <div className="event-info">
                            <span className="event-location">{location}</span>
                            <h3 className="event-title">{title}</h3>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}


export default EventItem