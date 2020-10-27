const getColor = ( data, selectedColor ) => {
    const findColor = data.colors ? data.colors.find(item => item.name === selectedColor) : 0;
    const colorValue = findColor ? findColor.value : 0 ;
    
    return colorValue;
};

export default getColor;