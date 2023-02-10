import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const parentModule = {
    state(){
        return{
            parents:[],
            name:"test"
        }
    },
    mutations:mutations,
    actions:actions,
    getters:getters
}

export default parentModule