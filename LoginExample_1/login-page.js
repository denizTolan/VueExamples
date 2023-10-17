const {createApp,ref} = Vue;

createApp({
    data(){
        return {
            loginHistory:ref([]),
            email:ref(''),
            password:ref('')
        }
    },
    methods:{
        addHistory() {
            var item = {
                Email:this.email,
                Password:this.password
            };

            this.loginHistory.push(
                item
            );

            this.email = ref('');
            this.password = ref('');
        }
    }
}).mount("#login-page");

