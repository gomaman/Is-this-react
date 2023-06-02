import arrow from '../../../images/arrow.svg'
import MainNewsItem from './MainNewsItem'
import SideNewsItem from './SideNewsItem'

function News() {
    return (
        <section className="news">
            <div className="main-news">

            <h1 className="page-header">Naujienos</h1>
            
                <MainNewsItem
                    img="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg"
                    category="AI & Deep learning"
                    title="Ar „ChatGPT“ užims mūsų darbo vietas?"
                    date="2023-01-27"
                >
                </MainNewsItem>

                <MainNewsItem
                    img="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg"
                    category="Naujienos"
                    title="Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?"
                    date="2023-02-21"
                >
                </MainNewsItem>

            </div>

            <div className="secondary-news">

                <SideNewsItem
                    img="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg"
                    category="AI & Deep learning"
                    title="Ar „ChatGPT“ užims mūsų darbo vietas?"
                    date="2023-01-27"
                ></SideNewsItem>

                <SideNewsItem
                    img="https://static2.bigstockphoto.com/4/3/2/large1500/234992131.jpg"
                    category="Naujienos"
                    title="Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?"
                    date="2023-01-27"
                ></SideNewsItem>

                <SideNewsItem
                    img="https://codeacademy.lt/wp-content/uploads/2021/09/mintosko-Ro0PNXcpCus-unsplash-1024x705.jpg"
                    category="TECHNOLOGIJŲ RITMU"
                    title="Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?"
                    date="2023-01-27"
                ></SideNewsItem>

                <SideNewsItem
                    img="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg"
                    category="Naujienos"
                    title="„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį"
                    date="2023-01-27"
                ></SideNewsItem>

            </div>

            <a className="large-button arrow" href="#">Visos naujienos <img src={arrow} /></a>
        </section>
    )
}


export default News