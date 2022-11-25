import { createContext } from "react";
import { useState, useContext } from "react";

//selected item
const SelectedItemContext = createContext(null)
const SelectedItemContextUpdate = createContext(null)

export function useSelectedItem() {
    return useContext(SelectedItemContext)
}
export function useSetSelectedItem() {
    return useContext(SelectedItemContextUpdate)
}



export function ItemProvider({ children }) {
    const [selectedItem, setSelectedItem] = useState({
        "id": "",
        "name": "",
        "price": "",
        "image": "",
        "images": [],
        "color": "",
        "size": "",
        "sizes": [],
        "variant-id": "",
        "quantity": "1"
    });

    return (
        <SelectedItemContext.Provider value={selectedItem}>
            <SelectedItemContextUpdate.Provider value={setSelectedItem}>
                {children}
            </SelectedItemContextUpdate.Provider>
        </SelectedItemContext.Provider>
    )
}