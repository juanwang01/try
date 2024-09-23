<template>
    <div>
        <el-card style="padding:40px">
            <el-form :inline="true" class="demo-form-inline" :model="searchForm" ref="searchForm">
                <el-form-item label="搜索" prop="title">
                    <el-input placeholder="请输入搜索内容" v-model="searchForm.title"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="category">
                    <el-select placeholder="活动区域" v-model="searchForm.category">
                        <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label"
                                   :value=item.value></el-option>
                        <!--                        <el-option label="类型二" value="beijing"></el-option>-->
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" type="success" @click="onSubmit">查询</el-button>
                    <el-button size="small" type="warning" @click="resetForm('searchForm')">重置</el-button>
                </el-form-item>

            </el-form>

        </el-card>
        <el-card class="box-card">
            <template v-slot:header>
                <div class="clearfix">
                    <span><i class="el-icon-menu"></i>消息列表</span>
                    <el-button plain @click="dialogFormVisible = true" type="success"
                               style="float: right;margin-bottom: 10px" size="small"><i
                            class="el-icon-circle-plus-outline"></i>创建推送
                    </el-button>
                </div>
            </template>
            <!--          内容-->
            <div>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column label="状态">
                        <template #default="scope">
                            <el-tag v-if="scope.row.status === 1" type="success">成功</el-tag>
                            <el-tag v-else type="danger">失败</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template #default="scope">
                            <el-button link type="primary" size="small" @click="handleClick(scope.row)">
                                查看
                            </el-button>
                            <!--                            <el-button link type="primary" size="small">删除</el-button>-->
                            <el-button plain @click="deleteLine(scope.row)" type="warning" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-row type="flex" justify="end">
                <el-pagination background layout="prev, pager, next" :total="pageInfo.total"
                               @current-change="changePage" :page-size="pageInfo.pageSize"/>
            </el-row>
        </el-card>
    </div>

    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
        <el-form :model="createform" ref="createform">
            <el-form-item label="Promotion name" :label-width="formLabelWidth">
                <el-input v-model="createform.name" autocomplete="off" prop="name"/>
            </el-form-item>
            <el-form-item label="Zones" :label-width="formLabelWidth">
                <el-select v-model="createform.region" placeholder="Please select a zone" prop="region">
                    <el-option label="Zone No.1" value="shanghai"/>
                    <el-option label="Zone No.2" value="beijing"/>
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="commitInfo('createform')">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>

    <el-dialog v-model="centerDialogVisible" title="Warning" width="500" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="centerDialogVisible = false">
                    关闭
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>

<script>
    import {ElMessage, ElMessageBox} from 'element-plus'

    export default {
        name: "SopView",
        data() {
            return {
                searchForm: {
                    title: "",
                    category: "",
                },
                categoryOptions: [
                    {
                        value: '1',
                        label: '黄金糕'
                    }, {
                        value: '2',
                        label: '双皮奶'
                    }, {
                        value: '3',
                        label: '蚵仔煎'
                    }, {
                        value: '4',
                        label: '龙须面'
                    }, {
                        value: '5',
                        label: '北京烤鸭'
                    }],
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        status:1
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333,
                        status:0
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1519 弄',
                        zip: 200333,
                        status:1
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1516 弄',
                        zip: 200333,
                        status:1
                    }],
                pageInfo: {
                    total: 200,
                    pageSize: 10
                },
                dialogFormVisible: false,
                centerDialogVisible:false,
                createform: {
                    name: '',
                    region: '',
                }
            }


        },
        methods: {
            onSubmit() {
                console.log(this.searchForm)
                console.log('检查选择的时间：', this.searchForm.dateValue)

            },
            resetForm(fromName) {
                console.log('检查是否执行重置1')
                this.$refs[fromName].resetFields()
                console.log('检查是否执行重置2')

            },
            handleClick(row) {
                console.log('检查是否能获取行：', row)
                //    关闭弹窗
                this.centerDialogVisible = true
            },
            deleteLine(row) {
                console.log('检查是否能获取行：', row);
                ElMessageBox.confirm(
                    '你确定要删除吗?',
                    'Warning',
                    {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: 'warning',
                    }
                ).then(() => {
                    //todo：执行删除过程
                    console.log('删除这一行的信息：', row)
                    //发送成功信息
                    ElMessage({
                        type: 'success',
                        message: 'Delete completed',
                    })
                }).catch(() => {
                    ElMessage({
                        type: 'info',
                        message: 'Delete canceled',
                    })
                })

            },
            changePage(page) {
                console.log('我想查看这一页：', page)
            },
            commitInfo(formName) {
                this.dialogFormVisible = false
                //    获取表单，提交信息
                console.log('测试是否获得表单：',this.$refs[formName].name)
            }
        }

    }


</script>


<style scoped>

</style>