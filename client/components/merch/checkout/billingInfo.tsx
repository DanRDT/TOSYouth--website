import { useEffect } from "react";
import setLocalCheckoutInfo from "../../hooks/functions/setLocalCheckoutInfo";
import setPhoneNumberValue from "../../hooks/functions/setPhoneNumberValue";
import ClearRequiredPopup from "../../hooks/ClearRequiredPopup";

const BillingInfo = ({shippingInfo, billingInfo, setBillingInfo, sameAsShipping, setSameAsShipping, checkoutInfoValidCss, setCheckoutInfoValidCss}) => {

    function changeBillingInfo(e, billingInfoKey) {
        let input = e.target.value;
        // force format for phone number
        if (billingInfoKey == "phone") input = setPhoneNumberValue(input)
        //update billingInfo state on change
        setBillingInfo(prev => {
            const tempObject = {...prev, [billingInfoKey]: input}
            return tempObject
        })
        ClearRequiredPopup(input, billingInfoKey, "billing", setCheckoutInfoValidCss)
    }

    useEffect(() => {
        //clear billing info popups when "same as shipping" is checked
        if (sameAsShipping == '') return
        const billing = ["name", "email", "address", "phone", "zip", "city", "state"]
        
        billing.map((key) => {
            ClearRequiredPopup(billingInfo[key], key, "billing", setCheckoutInfoValidCss)
        })

    }, [billingInfo])

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
                <h4 className={checkoutInfoValidCss.billingName}>Full Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    value={billingInfo.name}
                    onChange={(e) => {changeBillingInfo(e, "name")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.billingEmail}>Email
                <input className="info-input" type="text" name="email" placeholder="..." required
                    value={billingInfo.email}
                    onChange={(e) => {changeBillingInfo(e, "email")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.billingAddress}>Street Address
                <input className="info-input" type="text" name="address" placeholder="..." required
                    value={billingInfo.address}
                    onChange={(e) => {changeBillingInfo(e, "address")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.billingPhone}><div>Phone {/*<p>&nbsp;&nbsp;( xxx-xxx-xxxx )</p>*/}</div>
                <input className="info-input" type="text" name="phone" placeholder="..." required
                    value={billingInfo.phone}
                    onChange={(e) => {
                        changeBillingInfo(e, "phone")
                        return (e + "yes")
                    }}
                /></h4>
                <h4><div>Apartment / Unit / Suite <p>&nbsp;&nbsp;(optional)</p></div>
                <input className="info-input" type="text" name="unit" placeholder="..." required
                    value={billingInfo.unit}
                    onChange={(e) => {changeBillingInfo(e, "unit")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.billingZip}>Zip Code
                <input className="info-input" type="text" name="zip" placeholder="..." required
                    value={billingInfo.zip}
                    onChange={(e) => {changeBillingInfo(e, "zip")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.billingCity}>City
                <input className="info-input" type="text" name="city" placeholder="..." required
                    value={billingInfo.city}
                    onChange={(e) => {changeBillingInfo(e, "city")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.billingState}>State
                    <select 
                        value={billingInfo.state}
                        onChange={(e) => {
                            changeBillingInfo(e, "state")
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

export default BillingInfo