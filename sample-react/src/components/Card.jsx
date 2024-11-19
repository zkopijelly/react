import CardDetails from "./CardDetails";

const Card = props => {
    console.log(props.data)
    return (
        <>
            <div>{props.data.map(item => (
                    <div className="card">
                        <h2>Product ID: {item.productId}</h2>
                        <h2>Product Name: {item.productName}</h2>
                        <h2>Product Price: {item.price}</h2>
                        <CardDetails price={item.price}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card;