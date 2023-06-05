import MainNewsItem from './MainNewsItem'
import SideNewsItem from './SideNewsItem'
import LargeButton from "../../Buttons/LargeButton"

function News() {

    const MAIN_NEWS_ITEM = [
        {
            img: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
            category: "AI & Deep learning",
            title: "Ar „ChatGPT“ užims mūsų darbo vietas?",
            date: "2023-01-27"
        },

        {
            img: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
            category: "Naujienos",
            title: "Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?",
            date: "2023-02-21"
        },
    ]

    const SIDE_NEWS_ITEM = [
        {
            img: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
            category: "AI & Deep learning",
            title: "Ar „ChatGPT“ užims mūsų darbo vietas?",
            date: "2023-01-27"
        },

        {
            img: "https://static2.bigstockphoto.com/4/3/2/large1500/234992131.jpg",
            category: "Naujienos",
            title: "Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?",
            date: "2023-01-27"
        },

        {
            img: "https://codeacademy.lt/wp-content/uploads/2021/09/mintosko-Ro0PNXcpCus-unsplash-1024x705.jpg",
            category: "TECHNOLOGIJŲ RITMU",
            title: "Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?",
            date: "2023-01-27"
        },

        {
            img: "https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg",
            category: "Naujienos",
            title: "„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį",
            date: "2023-01-27"
        },
    ]
    return (
        <section className="news">
            <h1 className="page-header">Naujienos</h1>
            <div className="main-news">
                {MAIN_NEWS_ITEM.map(({ img, category, title, date }, index) => (
                    <MainNewsItem
                        key={index}
                        img={img}
                        category={category}
                        title={title}
                        date={date}
                    />
                ))}
            </div>
            <div className="secondary-news">
                {SIDE_NEWS_ITEM.map(({ img, category, title, date }, index) => (
                    <SideNewsItem
                        key={index}
                        img={img}
                        category={category}
                        title={title}
                        date={date}
                    ></SideNewsItem>
                ))}
            </div>

            <LargeButton
                text="Visos Naujienos"
                href="#"
            ></LargeButton>
        </section>
    )
}


export default News