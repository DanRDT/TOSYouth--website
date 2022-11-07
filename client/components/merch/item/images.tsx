
const Images = (item) => {
    
    return (    
        <div className="images">
            <img className="main-image" src={item.id.images[0]}/>
            <div className="extra-images">
                {item.id.images.map((image,index) => {
                    return(
                        <img key={"image"+index} className="extra-image" src={image}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Images