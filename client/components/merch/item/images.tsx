
const Images = ({item}) => {
    
    return (    
        <div className="images">
            <img className="main-image" src={item.images[0]}/>
            <div className="extra-images">
                {item.images.map((image,index) => (
                    <img key={"image"+index} className="extra-image" src={image}/>
                ))}
            </div>
        </div>
    )
}

export default Images