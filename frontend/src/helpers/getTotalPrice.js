const getTotalPrice = ( data, selected ) => {
    const priceArray = Object.keys(selected).map(key => selected[key] ? data[key].find(item => item.name === selected[key]).price : 0)
    const totalPrice = priceArray.reduce((a, b) => a + b, 0);
    
    return totalPrice;
};

export default getTotalPrice;