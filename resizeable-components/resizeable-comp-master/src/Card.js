import "./Card.css";

function Card(props) {
    const {width} = props;
    return (
        <div className="card" width={width+"px"}>
            <span>Hello world</span>
        </div>
    );
}

export default Card;