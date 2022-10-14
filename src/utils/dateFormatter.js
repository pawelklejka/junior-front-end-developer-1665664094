export const dateFormatter = (date, type) => {
    let formattedData;
    let month;
    const dayStartPosition = 0
    const dayEndPosition = 2
    let day =  date.slice(dayStartPosition, dayEndPosition)
    let dateArray;
    
    if(type === 'full'){
        dateArray = `${date}`.split("-") 
        console.log(dateArray);
        const positionOfMonthInArray = 1
        month = dateArray[positionOfMonthInArray]
        console.log(month);
        formattedData = `${month} ${day}`
        
    }
    if(type === 'short'){
        const monthStartPostion = 3
        const monthEndPostion = 6
        month = date.slice(monthStartPostion, monthEndPostion)
        formattedData = `${month} ${day}`
    }
    return formattedData


    

    
}