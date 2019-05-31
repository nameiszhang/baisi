export const changeId=(itemId)=>{
    return (dispatch)=>{
        dispatch({
            type: 'CHANGE_ID',
            id:itemId
        })
    }
}
export const newsetData=()=>{
    return (dispatch)=>{
        wx.request({
            url: 'http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=5',
            success: (result)=>{
                dispatch({
                    type: 'RIGHT_DATA',
                    rightdata: result.data.list
                })
            }
        });
    }
}

export const changeRight=(id)=>{
    return (dispatch)=>{
        wx.request({
            url: `http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=${id}`,
            success: (result)=>{
                dispatch({
                    type: 'RIGHT_DATA',
                    rightdata: result.data.list
                })
            }
        });
    }
}
export const GZ=(id)=>{
    return (dispatch,getState)=>{
        let {rightdata}=getState().IndexStore
        rightdata[id].is_vip=true
        dispatch({
            type: 'RIGHT_DATA',
            rightdata: rightdata
        })
    }
}