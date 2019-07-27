<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <div class="manage_tip">
                    <p>青藏科考管理系统PC端</p>
                </div>
                <el-form :model="loginForm" :rules="rules" ref="lofinForm">
                    <el-form-item prop="account">
                        <el-input v-model="loginForm.account" placeholder="用户名">
                            <span>啦啦啦</span>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="psd">
                        <el-input v-model="loginForm.psd" placeholder="密码">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login" class="submit_btn">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="register" class="submit_btn">注册</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </transition>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    account: '',
                    psd: '',
                },
                rules: {
                    account: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    psd: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                },
                showLogin: false,
            }
        },
        mounted() {
            this.showLogin = true;
        },
        methods: {
            //login: api.login,
            login: function() {
                this.$axios.post('http://jinhee.cn:4028/login', this.loginForm)
                    .then(res => (
                        console.log(res)
                    ))
            },
            register: function() {
                this.$router.push('/register');
            }
        },
    }
</script>

<style lang="less" scoped>
    @import '../style/mixin';
    .login_page{
        background-color: #324057;
    }
    .manage_tip{
        position: absolute;
        width: 100%;
        top: -100px;
        left: 0;
        p{
            font-size: 34px;
            color: #fff;
        }
    }
    .form_contianer{
        .wh(320px, 225px);
        .ctp(320px, 210px);
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        .submit_btn{
            width: 100%;
            font-size: 16px;
        }
    }
    .tip{
        font-size: 12px;
        color: red;
    }
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>

