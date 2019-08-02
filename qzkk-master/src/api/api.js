require('../mock.js');

export default login = function() {
    this.$axios.post('/api/login').then((res) => {
        console.log(res);
        if(res.data['res'] == 1) {
            this.$router.push('/register');
        }
        else {
            console.log("1234343");
        }
    })
}