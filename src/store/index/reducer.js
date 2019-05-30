const initStore={
    index:0,
    id:0
}
const IndexStore=(state=initStore,action)=>{
    switch(action.type){
        case 'CHANGE_ID':
            return {
                ...state,
                id:action.id
            }
        default :
        return state
    }
}
export default IndexStore