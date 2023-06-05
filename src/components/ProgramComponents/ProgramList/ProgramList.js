import ProgramItem from "./ProgramItem"

function ProgramList() {
    const PROGRAM_ITEMS_DATA = [
        {
            promo: "Naujas",
            level: "1 lygis",
            time: "Vakarinis",
            extra: "Naujas",
            title: "„Salesforce“ CRM – pradedančių",
            description: "„Salesforce“ – pasaulyje lyderiaujanti ryšių su klientais palaikymo platforma, kuria pasitiki 150 tūkstančių įmonių: „Coca cola“, „Toyota“, „Amazon“, „Unilever“ ir kiti rinkos lyderiai. Ši įmonės operacinė sistema leidžia skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
        },

        {
            promo: "Finansuojama UZT",
            level: "1 lygis",
            time: "Vakarinis",
            extra: "Naujas",
            title: "Python – pradedantiesiems užimtiems asmenims (223002626)",
            description: "„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
        },

        {
            promo: "Naujas",
            level: "1 lygis",
            time: "Vakarinis",
            extra: "Naujas",
            title: "Python – pradedantiesiems užimtiems asmenims (223002626)",
            description: "„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
        },

        {
            promo: "Naujas",
            level: "1 lygis",
            time: "Vakarinis",
            extra: "Naujas",
            title: "Python – pradedantiesiems užimtiems asmenims (223002626)",
            description: "„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
        },

        {
            promo: "Naujas",
            level: "1 lygis",
            time: "Vakarinis",
            extra: "Naujas",
            title: "Python – pradedantiesiems užimtiems asmenims (223002626)",
            description: "„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
        },
    ]

    return (
        <div className="programs-list">
            {PROGRAM_ITEMS_DATA.map(({ promo, level, time, extra, title, description }, index) => (
                <ProgramItem
                    key={index}
                    promo={promo}
                    level={level}
                    time={time}
                    extra={extra}
                    title={title}
                    description={description}
                />
            ))}
        </div>
    )
}


export default ProgramList