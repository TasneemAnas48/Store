import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        product:[
            {
                id_store:'',
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
        createStore: [
            {
                name: "",
                place: "",
                discription: "",
                facebook: "",
                logo: "",
                cover: "",
                username: '',
                email: '',
                password: "",
                confrim: '',
            }
        ],
        setting:[
            {
                id_manager: "",
                id_store:'',
                id_persone:'',
                name: "",
                place: "",
                discription: "",
                facebook: "",
                logo: "",
                cover: "",
                username: '',
                email: '',
                password: "",
                new_password:'',
                helper_name:'', 
                helper_email:'',
                perm:[],
            }
        ],
        ip:'192.168.43.244:8000/',
        id_store:'',
        id_manager:'',
        id_person:'',
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});

