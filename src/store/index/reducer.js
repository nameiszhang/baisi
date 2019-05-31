const initStore={
    index:0,
    id:0,
    rightdata: []
}
const IndexStore=(state=initStore,action)=>{
    switch(action.type){
        case 'CHANGE_ID':
            return {
                ...state,
                id:action.id
            }
        default :
        case 'RIGHT_DATA':
            return {
                ...state,
                rightdata: action.rightdata
            }
        default :
        return state
    }
}
export default IndexStore