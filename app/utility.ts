
const getInputValue = (elementId: string): string => {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    return inputElement.value
}

const logger = (message:string):void => {
    console.log(message)
}

export {getInputValue as getValue, logger}