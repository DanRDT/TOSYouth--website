import { useEffect } from "react"
import setPhoneNumberValue from "../../hooks/functions/setPhoneNumberValue"
import useClearRequiredPopup from "../../hooks/useClearRequiredPopup"

const ShippingInfo = ({shippingInfo, setShippingInfo, checkoutInfoValidCss, setCheckoutInfoValidCss}) => {
    
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
    
    return (
        <>      
            <section className="shipping-info">
                <h4 className={checkoutInfoValidCss.shippingName}>First Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    defaultValue={shippingInfo.first_name}
                    onChange={(e) => {changeShippingInfo(e, "normal")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingName}>Last Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    defaultValue={shippingInfo.last_name}
                    onChange={(e) => {changeShippingInfo(e, "normal")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingEmail}>Email
                <input className="info-input" type="email" name="email" placeholder="..." required
                    value={shippingInfo.email}
                    onChange={(e) => {changeShippingInfo(e, "email")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingPhone}>Phone
                <input className="info-input" type="tel" name="phone" placeholder="..." required
                    value={shippingInfo.phone}
                    onChange={(e) => {changeShippingInfo(e, "phone")}}
                /></h4>
            </section>
        </>
    )
    
}

export default ShippingInfo