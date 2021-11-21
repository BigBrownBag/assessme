const emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type ConfirmValueParams<T = any, R = any> = ( value: T, type: R) => boolean

const confirmValue: ConfirmValueParams = (value, type) => {
    switch (type) {
        case 'text':
            return false
        case "email":
            return !emailRegExp.test(value as string)
        case "password":
            return value === ''
        default:
            return false
    }
}

export default confirmValue