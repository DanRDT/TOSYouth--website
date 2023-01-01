import { useEffect, useRef, useState } from "react"
import setPhoneNumberValue from "../../hooks/functions/setPhoneNumberValue"
import useClearRequiredPopup from "../../hooks/ClearRequiredPopup"

const ShippingInfo = ({shippingInfo, setShippingInfo, setBillingInfo, sameAsShipping, checkoutInfoValidCss, setCheckoutInfoValidCss}) => {
    
    function changeShippingInfo(e, shippingInfoKey) {
        let input = e.target.value;
        // force format for phone number
        if (shippingInfoKey == "phone") input = setPhoneNumberValue(input)
        //update billingInfo state on change
        setShippingInfo(prev => {
            const tempObject = {...prev, [shippingInfoKey]: input}
            return tempObject
        })
        useClearRequiredPopup(input, shippingInfoKey, "shipping", setCheckoutInfoValidCss)
    }
    
    useEffect(() => {
        //set billing to shipping if set to same 
        if (sameAsShipping == "same-as") {
            setBillingInfo(shippingInfo)
        }
    }, [shippingInfo]);

    return (
        <>      
            <section className="shipping-info">
                <h4 className={checkoutInfoValidCss.shippingName}>Full Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    value={shippingInfo.name}
                    onChange={(e) => {changeShippingInfo(e, "name")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingEmail}>Email
                <input className="info-input" type="email" name="email" placeholder="..." required
                    value={shippingInfo.email}
                    onChange={(e) => {changeShippingInfo(e, "email")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingAddress}>Street Address
                <input className="info-input" type="text" name="address" placeholder="..." required
                    value={shippingInfo.address}
                    onChange={(e) => {changeShippingInfo(e, "address")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingPhone}><div>Phone {/*<p>&nbsp;&nbsp;( xxx-xxx-xxxx )</p>*/}</div>
                <input className="info-input" type="tel" name="phone" placeholder="..." required
                    value={shippingInfo.phone}
                    onChange={(e) => {changeShippingInfo(e, "phone")}}
                /></h4>
                <h4><div>Apartment / Unit / Suite <p>&nbsp;&nbsp;(optional)</p></div>
                <input className="info-input" type="text" name="unit" placeholder="..." required
                    value={shippingInfo.unit}
                    onChange={(e) => {changeShippingInfo(e, "unit")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingZip}>Zip Code
                <input className="info-input" type="text" name="zip" placeholder="..." required
                    value={shippingInfo.zip}
                    onChange={(e) => {changeShippingInfo(e, "zip")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingCity}>City
                <input className="info-input" type="text" name="city" placeholder="..." required
                    value={shippingInfo.city}
                    onChange={(e) => {changeShippingInfo(e, "city")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingState}>State
                    <select 
                        value={shippingInfo.state}
                        onChange={(e) => {
                            changeShippingInfo(e, "state")
                        }}>
                        <option value=""></option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </h4>
            </section>
        </>
    )
    
}

export default ShippingInfo