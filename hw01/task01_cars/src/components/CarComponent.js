import './Car.css'

function App(props) {
    let {item, clsName} = props;
    return (
        <div className={clsName}>
            <h3>
                {item.model}-{item.edition}-{item.color}-{item.power}
            </h3>
        </div>

    );

}

export default App;