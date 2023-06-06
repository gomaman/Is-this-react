import MainNewsItem from './MainNewsItem'
import SideNewsItem from './SideNewsItem'
import LargeButton from "../../Buttons/LargeButton"
import { MAIN_NEWS_ITEM, SIDE_NEWS_ITEM } from '../../Config/Config'
function News() {

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