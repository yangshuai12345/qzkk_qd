<template>
    <div>
        <head-top></head-top>

        <div class="login_page fillcontain">
            <transition name="form-fade" mode="in-out">
                <section class="form_contianer" style="top: 30%;">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  label-width="100px" class="demo-ruleForm">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <el-select v-model="ruleForm.sex" placeholder="性别" style="width: 100%">
                                <el-option label="男" value="0"></el-option>
                                <el-option label="女" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="职务" prop="workPosition">
                            <el-input v-model="ruleForm.workPosition" ></el-input>
                        </el-form-item>
                        <el-form-item label="工作单位" prop="workUnit">
                            <el-input v-model="ruleForm.workUnit"></el-input>
                        </el-form-item>
                        <el-form-item label="专题名称" prop="subject">
                            <el-input v-model="ruleForm.subject"></el-input>
                        </el-form-item>
                        <el-form-item label="科考地点" prop="researchSite">
                            <el-input v-model="ruleForm.researchSite"></el-input>
                        </el-form-item>
                        <el-form-item label="来青时间" prop="comeDate">
                            <el-date-picker
                                    v-model="ruleForm.comeDate"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy年MM月dd日">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="离青时间" prop="backDate">
                            <el-date-picker
                                    v-model="ruleForm.backDate"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy年MM月dd日">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="服务保障需求" prop="demand">
                            <el-input type="textarea"
                                      :rows="5"
                                      placeholder="请输入所需要的服务保障内容" v-model="ruleForm.demand"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="register('ruleForm')">提交</el-button>
                            <el-button @click="reset('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </section>
            </transition>
        </div>
    </div>

 </template>
    <script>
        import headTop from '../../components/headTop'
        export default {
            name: "PerRegistration",
            data() {
                return {
                    ruleForm: {
                        name: '小明',
                        sex: '0',
                        workPosition: '学生',
                        workUnit:'青海师范大学',
                        subject:'青藏科考',
                        researchSite:'青藏高原',
                        demand:'需要帐篷',
                        comeDate:'',
                        backDate:''
                    },
                    rules: {
                        name: [
                            {required: true, message: '请输入用户名', trigger: 'blur'},
                        ],
                        sex: [
                            {required: true, message: '请选择性别', trigger: 'blur'},
                        ],
                        workPosition: [
                            {required: true, message: '请输入职务', trigger: 'blur'},
                        ],
                        workUnit: [
                            {required: true, message: '请输入工作单位', trigger: 'blur'},
                        ],
                        subject: [
                            {required: true, message: '请输入专题名称', trigger: 'blur'},
                        ],
                        researchSite: [
                            {required: true, message: '请输入科考地点', trigger: 'blur'},
                        ],
                        comeDate: [
                            {required: true, message: '请选择来青时间', trigger: 'blur'},
                        ],
                        backDate: [
                            {required: true, message: '请选择离青时间', trigger: 'blur'},
                        ],
                    }
                };
            },
            components: {
                headTop,
            },
            methods: {
                register: function () {
                    if(this.ruleForm.name==''||this.ruleForm.workPosition==''||this.ruleForm.workUnit==''
                        ||this.ruleForm.subject==''||this.ruleForm.researchSite==''||
                        this.ruleForm.comeDate==''||this.ruleForm.backDate==''){
                        this.$alert('登记申请表没有填写完整！', '提示', {
                            confirmButtonText: '确定'
                        })
                    }else{
                        this.$axios.post(this.commonVar.axiosServe+'/perRegistration', this.$qs.stringify(this.ruleForm))
                            .then(res => {
                                if (res.data.code == '500') {
                                    this.$alert(res.data.msg, '提示', {
                                        confirmButtonText: '确定'
                                    })
                                }
                                if (res.data.code == '200') {
                                    this.$alert(res.data.msg, '提示', {
                                        confirmButtonText: '确定',
                                        callback: () => {
                                            window.location.reload();
                                        }
                                    })
                                }
                            })
                    }

                },
                reset(formName) {
                    this.$refs[formName].resetFields();
                }
            }
        }
    </script>
<style lang="less" scoped>
    @import '../../style/mixin';
    .form_contianer{
    .wh(320px, 500px);
    .ctp(320px, 410px);
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
</style>