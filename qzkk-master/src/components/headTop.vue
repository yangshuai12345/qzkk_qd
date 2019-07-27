<template>
    <el-row class="header_container">
        <el-col :span="12" >
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/manage'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="8" >
        </el-col>
        <el-col :span="2" v-model="account">
            <span>欢迎您！管理员{{account}}</span>
        </el-col>
        <el-col :span="2" >

            <el-dropdown menu-align='start' @command="handleCommand" >

                <!--<el-dropdown @command="handleCommand" menu-align='start'>-->
                <!--<img :src="baseImgPath + adminInfo.avatar" class="avator">-->


                <img class="avator">

                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item command="home">首页</el-dropdown-item>
                    <el-dropdown-item command="command">退出</el-dropdown-item>
                    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                    <!--<el-dropdown-item>首页</el-dropdown-item>-->
                    <!--<el-dropdown-item>退出</el-dropdown-item>-->
                </el-dropdown-menu>

            </el-dropdown>
        </el-col>

    </el-row>
    <!--<div class="header_container">-->
        <!--<el-breadcrumb separator="/">-->
            <!--<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->

        <!--<el-dropdown menu-align='start'>-->
        <!--&lt;!&ndash;<el-dropdown @command="handleCommand" menu-align='start'>&ndash;&gt;-->
            <!--&lt;!&ndash;<img :src="baseImgPath + adminInfo.avatar" class="avator">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-breadcrumb style="float: right">欢迎您！管理员</el-breadcrumb>&ndash;&gt;-->
            <!--<img class="avator">-->

            <!--<el-dropdown-menu slot="dropdown">-->
                <!--&lt;!&ndash;<el-dropdown-item command="home">首页</el-dropdown-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-dropdown-item command="signout">退出</el-dropdown-item>&ndash;&gt;-->
                <!--<el-dropdown-item>首页</el-dropdown-item>-->
                <!--<el-dropdown-item>退出</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
    <!--</div>-->
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "headTop",
        data() {
            return {
                account: ''
            }
        },
        created() {},
        methods: {
            handleCommand(command) {
                //alert(command);
                let res = {
                    data: {
                        account: '',
                        type: '',
                        uid: ''
                    }
                };
                this.$store.commit('setState', res);
                this.account = this.$store.state.ACCOUNT_NAME;
                alert(this.account);
                // this.$router.push('/');
            }
        },
        mounted() {
            this.account = this.$store.state.ACCOUNT_NAME;
        },
        computed: {
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .header_container{
        background-color: #EFF2F7;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
    }
    .avator{
    .wh(36px, 36px);
        border-radius: 50%;
        margin-right: 37px;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>