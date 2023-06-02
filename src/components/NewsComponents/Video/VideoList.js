import VideoItem from "./VideoItem"
import LargeButton from "../../Buttons/LargeButton"
function Video() {
    return (
        <section className="video">

        <h2 className="section-title">Vaizdo įrašai</h2>

            <VideoItem
            src="https://www.youtube.com/embed/b8dGCsP75HA"
            title="Jei galiu aš – gali ir tu!"
            ></VideoItem>
            
        <LargeButton
        text="Visi vaizdo įrašai"
        href="#"
        ></LargeButton>
        </section>
    ) 
}

export default Video