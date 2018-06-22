const selectProperty = (property) => {
    console.log(`Summary: ${property.summary}`);
    return {
        type: "PROPERTY_SELECTED",
        payload: property
    }
};

export default selectProperty;