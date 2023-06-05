import EventItem from "./EventItem"

function EventList() {

    const EVENT_ITEMS = [
        {
            src: "https://codeacademy.lt/wp-content/uploads/2023/05/309645329_167953272551840_4893275303789865567_n-300x300.jpg",
            eventDay: "23",
            eventMonth: "Geg",
            location: "Online",
            title: "DEVDAYS EUROPE 2023"
        },

        {
            eventDay: "23",
            eventMonth: "Geg",
            location: "Online",
            title: "DEVDAYS EUROPE 2023"
        },

        {
            eventDay: "23",
            eventMonth: "Geg",
            location: "Online",
            title: "DEVDAYS EUROPE 2023"
        },

        {
            eventDay: "23",
            eventMonth: "Geg",
            location: "Online",
            title: "DEVDAYS EUROPE 2023"
        },
    ]
    return (
        <section className="events">
            <h2 className="section-title">Renginiai</h2>
            <div className="events-list">
                {EVENT_ITEMS.map(({ src, eventDay, eventMonth, location, title }, index) => (
                    <EventItem
                        index = {index}
                        src={src}
                        eventDay={eventDay}
                        eventMonth={eventMonth}
                        location= {location}
                        title= {title}
                    ></EventItem>
                ))}
            </div>
        </section>
    )
}


export default EventList