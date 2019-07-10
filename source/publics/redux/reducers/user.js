const initialState = {
    user: [],
    isLoading:false,
}
export default user = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_USER_PENDING':
            return{
                ...state,
                isLoading:true,
            }
        case 'GET_USER_REJECTED':
            return{
                ...state,
                isLoading:false,
            }
        case 'GET_USER_FULFILLED':
            return{
                ...state,
                isLoading:false,
                user: action.payload.data.data
            }
        default:
            return state
    }
}