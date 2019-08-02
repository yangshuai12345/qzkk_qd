<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/headTop'
    export default {
        name: "UserList",
        data(){
            return {
                tableData: [{
                    account: '',
                    name: '',
                    sex: '',
                    major: '',
                    idCard: '',
                    type: '',
                    examine: '',
                    psd: '',
                    state: '',
                    uId: ''
                }],
                form: {
                    username: '',
                    city: ''
                },
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
                dialogFormVisible: false,
                formLabelWidth: '120px'
            }
        },
        components: {
            headTop,
        },
        created(){
            // this.initData();
            // this.getUsers();
        },

    }
</script>

<style lang="less" scoped>
    @import '../../style/mixin';
    .table_container{
        padding: 20px;
    }

</style>