import { COUNT_DECREMENT, COUNT_INCREMENT, COUNT_RESET } from "../countConstants/counterConstant"

export const getCountIncrement =() =>{
    return {
        type:COUNT_INCREMENT,
    }
}

export const getCountDecrement =() =>{
    return {
        type:COUNT_DECREMENT,
    }
}

export const getCountReset =() =>{
    return {
        type:COUNT_RESET,
    }
}