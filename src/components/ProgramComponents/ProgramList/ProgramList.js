import ProgramItem from "./ProgramItem"
import { PROGRAM_ITEMS_DATA } from "../../Config/Config"

function ProgramList() {
    return (
        <div className="programs-list">
            {PROGRAM_ITEMS_DATA.map((item, index) => <ProgramItem key={index} item={item} />)}
        </div>
    )
}


export default ProgramList