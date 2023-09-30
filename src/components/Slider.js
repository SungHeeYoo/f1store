const Slider = () => {
    return (
        <>
            {
                products.map((item) => (
                    <div className="slider" key={item.id}>
                        <div className="description">
                            <p className="upText">{ item.upText }</p>
                            <p className="title">{ item.name }</p>
                            <p className="downText">{ item.downText }</p>
                            <button className="buy">Buy</button>
                        </div>
                    </div> 
                ))
            }
        </>
    )
}

const products = [
    {
        id: 1,
        upText: "Ferrari collection",
        name: "Ferrari red T-shirt",
        downText: "Half the price, twice the style",
        image: ""
    }
]

export default Slider;
