import { useState } from "react"

const BillingInfo = ({sameAsShipping, setSameAsShipping}) => {
    
    return (
        <>  
            <div className={`same-as-shipping-container ${sameAsShipping}`}>
                <input 
                  onClick={() => {
                    if (sameAsShipping == '') {
                      setSameAsShipping("same-as")
                    } else if (sameAsShipping == 'same-as') {
                      setSameAsShipping('')
                    }
                  }} 
                  className="same-as-shipping" id="same-as-shipping" type="checkbox"/>
                <label className="same-as-shipping-lbl" htmlFor="same-as-shipping">Same as shipping</label>
            </div>    
            <section className={`billing-info  ${sameAsShipping}`}>
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

export default BillingInfo