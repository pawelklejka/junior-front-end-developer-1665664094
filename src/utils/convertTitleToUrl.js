export const convertTitleToUrl = title =>{
    const punctuationMarksRegex = /[.,\s]/g

    return title.toLowerCase().replaceAll(" ", "-").replaceAll(punctuationMarksRegex, '')
}