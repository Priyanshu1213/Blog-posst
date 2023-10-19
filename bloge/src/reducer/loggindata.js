var intialdata =[];

const Adding=(state=intialdata,action)=>{

    
    switch(action.type){

        case "ADD":
            var temp=[...state, action.payload]
            // console.log(temp);
            // console.log("vicky")
            // console.log(action.payload)
            // console.log("anoop")
            return temp;


         default:return state;   

    }
}

export default Adding