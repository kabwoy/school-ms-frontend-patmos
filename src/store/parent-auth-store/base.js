import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {

    state(){
        return{
            first_name:'',
            token:''
        }
    },
    mutations:mutations,
    actions:actions,
    getters:getters
}