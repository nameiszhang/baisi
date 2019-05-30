export const changeId=(itemId)=>{
    return (dispatch)=>{
        dispatch({
            type: 'CHANGE_ID',
            id:itemId
        })
    }
}
