import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        product:[
            {
                address:'',
                discription:'',
                image:'',
                sell:'',
                cost:'',
                selectedClassification:[],
                selectedGroup:'',
                replace:'',
                present:'',
                time:'', 
                age:'',
                party:'',
            }
        ],

    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});

