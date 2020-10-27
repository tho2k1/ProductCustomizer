import React from "react";
import CarPro from "../Cars/CarPro";
import CarUber from "../Cars/CarUber";
import CarStandard from "../Cars/CarStandard";
import CarWk from "../Cars/CarWk";
import QuestionMark from "../Cars/QuestionMark";

const CarImg = ({color, model}) => {
    const carImg = () => {
        switch(model) {
            case "PRO RS3": return <CarPro color={color}/>
            case "UBER RS2": return <CarUber color={color}/>
            case "STANDARD": return <CarStandard color={color}/>
            case "WK": return <CarWk color={color}/>
            default: return <QuestionMark color={color}/>
        }
    }

    return <>{carImg()}</>
}

export default CarImg;