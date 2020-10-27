const assignAddons = optionType => {
    switch(optionType){
        case "models": 
            return "engines"
        case "engines":
            return "gearboxes"
        default:
            return null
    }
}

export default assignAddons;