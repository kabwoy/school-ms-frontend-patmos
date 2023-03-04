import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {

    state(){
        return{

            subjects : []

        }
    },

    mutations:mutations,

    actions:actions,

    getters:getters


}