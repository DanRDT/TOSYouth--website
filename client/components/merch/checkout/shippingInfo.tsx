import { useEffect, useRef, useState } from "react"
import checkForCheckoutInfo from "../../hooks/checkForCheckoutInfo";
import getCheckoutInfo from "../../hooks/getCheckoutInfo";

const ShippingInfo = ({shippingInfo, setShippingInfo, setBillingInfo, sameAsShipping}) => {
    
    function changeShippingInfo(e, shippingInfoKey) {
        setShippingInfo(prev => {
            const tempObject = {...prev, [shippingInfoKey]: e.target.value}
            return tempObject
        })
    }
    
    useEffect(() => {
        if (sameAsShipping == "same-as") {
            setBillingInfo(shippingInfo)
        }
    }, [shippingInfo]);

    return (
        <>      
            <section className="shipping-info">
                <h4>Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    value={shippingInfo.name}
                    onChange={(e) => {changeShippingInfo(e, "name")}}
                /></h4>
                <h4>Email
                <input className="info-input" type="text" name="email" placeholder="..." required
                    value={shippingInfo.email}
                    onChange={(e) => {changeShippingInfo(e, "email")}}
                /></h4>
                <h4>Street Address
                <input className="info-input" type="text" name="address" placeholder="..." required
                    value={shippingInfo.address}
                    onChange={(e) => {changeShippingInfo(e, "address")}}
                /></h4>
                <h4>Phone
                <input className="info-input" type="text" name="phone" placeholder="..." required
                    value={shippingInfo.phone}
                    onChange={(e) => {changeShippingInfo(e, "phone")}}
                /></h4>
                <h4>Apartment / Unit / Suite
                <input className="info-input" type="text" name="unit" placeholder="..." required
                    value={shippingInfo.unit}
                    onChange={(e) => {changeShippingInfo(e, "unit")}}
                /></h4>
                <h4>Zip Code
                <input className="info-input" type="text" name="zip" placeholder="..." required
                    value={shippingInfo.zip}
                    onChange={(e) => {changeShippingInfo(e, "zip")}}
                /></h4>
                <h4>City
                <input className="info-input" type="text" name="city" placeholder="..." required
                    value={shippingInfo.city}
                    onChange={(e) => {changeShippingInfo(e, "city")}}
                /></h4>
                <h4>State
                <input className="info-input" type="text" name="state" placeholder="..." required
                    value={shippingInfo.state}
                    onChange={(e) => {changeShippingInfo(e, "state")}}
                /></h4>
            </section>
        </>
    )
    
}

export default ShippingInfo