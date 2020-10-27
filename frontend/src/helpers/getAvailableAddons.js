const getAvailableAddons = (data, targetName, targetValue, addons) => {
    const selectedData = data[targetName].find(item => item.name === targetValue)
    return selectedData[addons]
}

export default getAvailableAddons;