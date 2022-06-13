import { createContext } from 'react'

let userContext=createContext()
let UserProvider=userContext.Provider
let UserConsumer=userContext.Consumer

export default userContext
export {UserProvider,UserConsumer}
