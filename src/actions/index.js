export const addtodo = (data) => {
    return{
        type:"ADDTODO",
        payload:{
            id:new Date().getTime().toString(),
            data
        }
    }
}
export const deletetodo = (id) => {
    return{
        type:"DELETETODO",
        id
    }
}
export const removetodo = () => {
    return{
        type:"REMOVETODO"
    }
}