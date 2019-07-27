<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" style="top: 30%;">
                <el-form label-width="80px">
                    <el-form-item label="姓名">
                        <el-input v-model="perRegis.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="perRegis.sex" placeholder="性别" style="width: 100%">
                            <el-option label="男" value="0"></el-option>
                            <el-option label="女" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model="perRegis.age"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input v-model="perRegis.identity"></el-input>
                    </el-form-item>
                    <el-form-item label="民族">
                        <el-input v-model="perRegis.nation"></el-input>
                    </el-form-item>
                    <el-form-item label="学历">
                        <el-input v-model="perRegis.educationDegree"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭住址">
                        <el-input v-model="perRegis.homeAdress"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码">
                        <el-input v-model="perRegis.phone"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit">登记</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "PerRegistration",
        data() {
            return {
                perRegis: {
                    name: "",
                    sex: "0",
                    age: "",
                    identity: "",
                    nation: "",
                    educationDegree: "",
                    homeAdress: "",
                    phone: ""
                }
            }
        },
        methods:{
            submit:function () {
                this.$axios.post("http://192.168.43.50:8080/api/perRegistration",this.$qs.stringify(this.perRegis)).then(res => {
                    this.$alert(res,'提示',{
                        confirmButtonText:'确定',
                        callback:()=>{
                            this.$router.push('/pr')
                        }
                    })
                })
            }
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
        .wh(320px, 600px);
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