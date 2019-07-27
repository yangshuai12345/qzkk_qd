<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        type="index"
                        width="100">
                </el-table-column>
                <el-table-column
                        property=""
                        label="设备名称"
                        width="220">
                </el-table-column>
                <el-table-column
                        property="name"
                        label="用户姓名"
                        width="220">
                </el-table-column>
                <el-table-column
                        property="account"
                        label="账号名">
                </el-table-column>
                <el-table-column
                        property="idcard"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        property="type"
                        label="身份"
                        :formatter="typeFromat">
                </el-table-column>
                <el-table-column
                        property="usetime"
                        label="使用时期"
                        width="220">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">通过</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">不通过</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="20"
                        layout="total, prev, pager, next"
                        :total="count">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
    import headTop from '../../components/headTop'
    export default {

        data(){
            return {
                tableData: [{
                    registe_time: '2016-05-02',
                    username: '王小虎',
                    city: '上海市普陀区金沙江路 1518 弄'
                }],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
        components: {
            headTop,
        },
        created(){
            this.initData();
            //在页面加载时读取localStorage里的状态信息
            localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));

            //在页面刷新时将vuex里的信息保存到localStorage里
            window.addEventListener("beforeunload",()=>{
                localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
            })
        },
        methods: {
            // async initData(){
            //     try{
            //         const countData = await getUserCount();
            //         if (countData.status == 1) {
            //             this.count = countData.count;
            //         }else{
            //             throw new Error('获取数据失败');
            //         }
            //         this.getUsers();
            //     }catch(err){
            //         console.log('获取数据失败', err);
            //     }
            // },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getUsers()
            },
            handleEdit(index, row) {
                console.log(index, row);
                this.$confirm('通过该申请, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '审核成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消审核'
                    });
                });
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.$confirm('拒绝通过该申请, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '已拒绝审核!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消审核'
                    });
                });
            },
            typeFormat(row) {
                if(row.type == '0') {
                    return "队员";
                } else if(row.type == '1') {
                    return "队长";
                } else if(row.type == '2') {
                    return "管理员";
                }
            },
        },

    }
</script>

<style lang="less" scoped>
    @import '../../style/mixin';
    .table_container{
        padding: 20px;
    }
</style>