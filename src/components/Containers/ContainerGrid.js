import './ContainerGrid.css'

function ContainerGrid(props) {
    return (
        <div className="container-grid">
            {props.children}
        </div>
    )
}


export default ContainerGrid