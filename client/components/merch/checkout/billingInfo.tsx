import { useEffect, useRef, useState } from "react"
import checkForCheckoutInfo from "../../hooks/checkForCheckoutInfo";
import getCheckoutInfo from "../../hooks/getCheckoutInfo";
import setLocalCheckoutInfo from "../../hooks/setLocalCheckoutInfo";

const BillingInfo = ({shippingInfo, billingInfo, setBillingInfo, sameAsShipping, setSameAsShipping}) => {

    function changeBillingInfo(e, billingInfoKey) {
        setBillingInfo(prev => {
            const tempObject = {...prev, [billingInfoKey]: e.target.value}
            return tempObject
        })
    }

    return (
        <>  
            <div className={`same-as-shipping-container ${sameAsShipping}`}>
                <input 
                    onChange={() => {
                        if (sameAsShipping == '') {
                            setSameAsShipping("same-as")
                            setBillingInfo(shippingInfo)
                            setLocalCheckoutInfo(shippingInfo, shippingInfo) //pass billing as shipping
                        } else if (sameAsShipping == 'same-as') {
                            setSameAsShipping('')
                        }
                    }} 
                    className={`same-as-shipping ${sameAsShipping}`} id="same-as-shipping" type="checkbox"/>
                <label className="same-as-shipping-lbl" htmlFor="same-as-shipping">Same as shipping</label>
            </div>    
            <section className={`billing-info ${sameAsShipping}`}>
                <h4>Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    value={billingInfo.name}
                    onChange={(e) => {changeBillingInfo(e, "name")}}
                /></h4>
                <h4>Email
                <input className="info-input" type="text" name="email" placeholder="..." required
                    value={billingInfo.email}
                    onChange={(e) => {changeBillingInfo(e, "email")}}
                /></h4>
                <h4>Street Address
                <input className="info-input" type="text" name="address" placeholder="..." required
                    value={billingInfo.address}
                    onChange={(e) => {changeBillingInfo(e, "address")}}
                /></h4>
                <h4>Phone
                <input className="info-input" type="text" name="phone" placeholder="..." required
                    value={billingInfo.phone}
                    onChange={(e) => {changeBillingInfo(e, "phone")}}
                /></h4>
                <h4>Apartment / Unit / Suite
                <input className="info-input" type="text" name="unit" placeholder="..." required
                    value={billingInfo.unit}
                    onChange={(e) => {changeBillingInfo(e, "unit")}}
                /></h4>
                <h4>Zip Code
                <input className="info-input" type="text" name="zip" placeholder="..." required
                    value={billingInfo.zip}
                    onChange={(e) => {changeBillingInfo(e, "zip")}}
                /></h4>
                <h4>City
                <input className="info-input" type="text" name="city" placeholder="..." required
                    value={billingInfo.city}
                    onChange={(e) => {changeBillingInfo(e, "city")}}
                /></h4>
                <h4>State
                <input className="info-input" type="text" name="state" placeholder="..." required
                    value={billingInfo.state}
                    onChange={(e) => {changeBillingInfo(e, "state")}}
                /></h4>
            </section>
        
        </>
    )
    
}

export default BillingInfo