import { useEffect } from "react"
import setPhoneNumberValue from "../../hooks/functions/setPhoneNumberValue"
import ClearRequiredPopup from "../functions/useClearRequiredPopup"

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
        ClearRequiredPopup(input, shippingInfoKey, "shipping", setCheckoutInfoValidCss)
    }
    
    return (
        <>      
            <section className="shipping-info">
                <h4 className={checkoutInfoValidCss.shippingFirstName}>First Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    defaultValue={shippingInfo.firstName}
                    onChange={(e) => {changeShippingInfo(e, "firstName")}}
                /></h4>
                <h4 className={checkoutInfoValidCss.shippingLastName}>Last Name
                <input className="info-input" type="text" name="name" placeholder="..." required
                    defaultValue={shippingInfo.lastName}
                    onChange={(e) => {changeShippingInfo(e, "lastName")}}
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