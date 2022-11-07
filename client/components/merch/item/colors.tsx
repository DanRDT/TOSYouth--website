import { getDisplayName } from "next/dist/shared/lib/utils"

const Colors = (item) => {

    return (    
        <div className="colors">
            {item.id.colors.map((color,index) => {
                return(
                <div key={"color"+index} className="color" 
                style={{backgroundColor: getColor(color), display: getDisplay(color)}}></div>
                )
            })}
        </div>
    )
}

export default Colors


function getColor(color) {
    switch (color){
        case "white":
            return "#fff";
        case "black":
            return "#000";
        case "biege":
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
    switch (color){
        case "white":
        case "black":
        case "biege":
            return "flex";
        default:
            return "none";
    }
}
