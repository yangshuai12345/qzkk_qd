<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin" style="top: 30%;">
                <div class="manage_tip">
                    <p>青藏科考管理系统PC端</p>
                </div>
                <el-form :model="registerForm" :rules="rules" ref="regForm"  label-width="80px" >
                    <el-form-item label="姓名" prop="username">
                        <el-input v-model="registerForm.username" placeholder="姓名">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="registerForm.password" placeholder="密码">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="账号名" prop="account">
                        <el-input v-model="registerForm.account" placeholder="账号名">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="registerForm.sex" placeholder="性别" style="width: 100%">
                            <el-option label="男" value="male"></el-option>
                            <el-option label="女" value="female"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业" prop="pro">
                        <el-input v-model="registerForm.pro" placeholder="专业">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" prop="idcard">
                        <el-input v-model="registerForm.idcard" placeholder="身份证号">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="身份" prop="identity">
                        <el-select v-model="registerForm.identity" placeholder="身份" style="width: 100%">
                            <el-option label="系统管理员" value="1"></el-option>
                            <el-option label="科考队队长" value="2"></el-option>
                            <el-option label="科考队队员" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('regForm')" class="submit_btn" >注册</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                registerForm: {
                    username: '',
                    password: '',
                    account: '',
                    sex: '',
                    pro: '',
                    idcard: '',
                    identity: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    account: [
                        {required: true, message: '请输入账号名', trigger: 'blur'},
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'blur'},
                    ],
                    pro: [
                        {required: true, message: '请输入专业', trigger: 'blur'},
                    ],
                    idcard: [
                        {required: true, message: '请输入身份证号', trigger: 'blur'},
                    ],
                    identity: [
                        {required: true, message: '请选择身份', trigger: 'blur'},
                    ],


                },
                showLogin: false,
            }
        },
        mounted() {
            this.showLogin = true;
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/register').then((res) => {
                            console.log(res);
                            if(res.data['res'] == 1) {
                                //todo
                                //this.$router.push('');
                            }
                            else {
                                console.log("1234343");
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
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
        .wh(320px, 500px);
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

