import Link from "next/link";
import { useEffect, useState } from "react"

const ShippingInfo = () => {
    const [items, setItems] = useState([]);

    
    return (
        <>      
            <section className="billing-info">
                <h4>Name
                <input className="info-input" type="text" name="name" placeholder="..." required/></h4>
                <h4>Email
                <input className="info-input" type="text" name="email" placeholder="..." required/></h4>
                <h4>Street Address
                <input className="info-input" type="text" name="address" placeholder="..." required/></h4>
                <h4>Phone
                <input className="info-input" type="text" name="phone" placeholder="..." required/></h4>
                <h4>Apartment / Unit / Suite
                <input className="info-input" type="text" name="unit" placeholder="..." required/></h4>
                <h4>Zip Code
                <input className="info-input" type="text" name="zip" placeholder="..." required/></h4>
                <h4>City
                <input className="info-input" type="text" name="city" placeholder="..." required/></h4>
                <h4>State
                <input className="info-input" type="text" name="state" placeholder="..." required/></h4>
            </section>
        
        </>
    )
    
}

export default ShippingInfo