const Colors = ({item}) => {

    return (    
        <div className="colors">
            {item.colors.map((color,index) => (
                <div key={"color"+index} className="color" title={color}
                style={{backgroundColor: getColor(color), display: getDisplay(color)}}></div>
                
            ))}
        </div>
    )
}

export default Colors


function getColor(color) {
    //return color hex code
    switch (color){
        case "white":
            return "#fff";
        case "black":
            return "#000";
        case "beige":
            return "#E9E0CF";
        case "light blue":
            return "#8096A3";
        case "light grey":
            return "#D7D7D7";
        default:
            return "none";
    }
}
function getDisplay(color) {
    // check if color is know 
    if (getColor(color) == "none") {
        return "none"
    } else {
        return "flex"
    }
}
