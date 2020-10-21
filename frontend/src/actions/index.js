export const changeOption = (optionName, optionValue) => {
    return {
        type: "CHANGED_OPTION",
        payload: { [optionName]: optionValue }
    }
}