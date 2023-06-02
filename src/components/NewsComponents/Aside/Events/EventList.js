import EventItem from "./EventItem"

function EventList() {
    return (
        <section className="events">
                        <h2 className="section-title">Renginiai</h2>

                        <div className="events-list">
                            <EventItem
                            src="https://codeacademy.lt/wp-content/uploads/2023/05/309645329_167953272551840_4893275303789865567_n-300x300.jpg"
                            eventDay = "23"
                            eventMonth = "Geg"
                            location= "Online"
                            title= "DEVDAYS EUROPE 2023"
                            ></EventItem>

                            <EventItem
                            eventDay = "23"
                            eventMonth = "Geg"
                            location= "Online"
                            title= "DEVDAYS EUROPE 2023"
                            ></EventItem>


                            <EventItem
                            eventDay = "23"
                            eventMonth = "Geg"
                            location= "Online"
                            title= "DEVDAYS EUROPE 2023"
                            ></EventItem>

                            <EventItem
                            eventDay = "23"
                            eventMonth = "Geg"
                            location= "Online"
                            title= "DEVDAYS EUROPE 2023"
                            ></EventItem>
                        </div>
                    </section>
    )
}


export default EventList