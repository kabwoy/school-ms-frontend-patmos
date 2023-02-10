import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {

    state(){
        return{

            grades : []

        }
    },

    mutations:mutations,

    actions:actions,

    getters:getters


}