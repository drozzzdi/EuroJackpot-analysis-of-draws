const changeClassReducer=(state=0,action)=>{
    switch(action.type){
        case 'active':
            return state=1;
        case 'noActive':
            return state=0;
        default:
            return state;
    }
}
export default changeClassReducer;