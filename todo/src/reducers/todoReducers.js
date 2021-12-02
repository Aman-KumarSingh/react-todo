const intialData={
    list : []
}

const todoReducers =(state=intialData, action)=>{
    switch(action.type){
        case "ADD_TODO":
            const { id,data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                }
            ]
            }
            case "DELETE_TODO":
               const newList= state.list.filter((elem)=>elem.id != action.id)
                return{
                    ...state,
                    list : newList
                }
            case "UPDATE_TODO":
                const {udata}=action.payload;
                const newsList= state.list.map((elem)=>{
                    if(elem.id===action.id){
                        elem.data=udata;
                    }
                    return elem
                }
                )
                return{
                    ...state,
                    list : newsList
                }
                
            default: return state;
    }
}
export default todoReducers;