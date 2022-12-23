import { createContext } from "react";
import { useState, useContext } from "react";

//updated item
const updatedItemContext = createContext(null)
const updatedItemContextUpdate = createContext(null)

export function useUpdatedItem() {
    return useContext(updatedItemContext)
}
export function useSetUpdatedItem() {
    return useContext(updatedItemContextUpdate)
}



export function UpdatedItemProvider({ children }) {
    const [updatedItem, setUpdatedItem] = useState({
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "color_variants": [
            {
                "color": "",
                "hexCode": "",
                "images": [
                    {
                        "src": "",
                        "active": true
                    }
                ],
                "sizes": [
                    {
                        "size": "",
                        "variant_id": "",
                        "variant_price": ""
                    }
                ],
            }
        ],
        "item_on_sale": true,
        "main_image": ""
    });

    return (
        <updatedItemContext.Provider value={updatedItem}>
            <updatedItemContextUpdate.Provider value={setUpdatedItem}>
                {children}
            </updatedItemContextUpdate.Provider>
        </updatedItemContext.Provider>
    )
}