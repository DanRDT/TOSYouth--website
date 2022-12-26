export default setPhoneNumberValue;

function setPhoneNumberValue(input: string): string {
    let numbers: string[] = input.match(/[0-9]/g)
    let formattedInput = "";
    
    if (numbers != null) { //incase no numbers are found
        
        numbers.map((char, i)=> {
            if (i > 9) return
            
            // enter dash
            if (i == 3 || i == 6) {
                formattedInput = formattedInput + "-" + char;
            } else {
            formattedInput = formattedInput + char;
            }
        })
        
        // allow dash if user enters one
        if (input.endsWith("-") && (numbers.length == 3 || numbers.length == 6)) {
            formattedInput = formattedInput + "-"
        }
    }
    return formattedInput;
}