<template>
    <div>
        <el-card style="padding:40px">
            <el-form :inline="true" class="demo-form-inline" :model="searchForm" ref="searchForm">
                <el-form-item label="搜索" prop="title">
                    <el-input placeholder="请输入搜索内容" v-model="searchForm.title" ></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="category">
                    <el-select placeholder="活动区域" v-model="searchForm.category" >
                        <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label"
                                   :value=item.value></el-option>
                        <!--                        <el-option label="类型二" value="beijing"></el-option>-->
                    </el-select>
                </el-form-item>
                <el-form-item label="推送时间" prop="dateValue">

                    <el-date-picker
                            v-model="searchForm.dateValue"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"

                            >

                    </el-date-picker>

                </el-form-item>
            </el-form>
            <el-row type="flex" justify="center">
                <el-button size="small" type="success" @click="onSubmit">查询</el-button>
                <el-button size="small" type="warning" @click="resetForm('searchForm')">重置</el-button>
            </el-row>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "PushView",
        data() {
            return {
                searchForm: {
                    title: "",
                    category: "",
                    dateValue: "",
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
                        zip: 200333
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1519 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1516 弄',
                        zip: 200333
                    }],
            }


        },
        methods: {
            onSubmit() {
                console.log(this.searchForm)
                console.log('检查选择的时间：', this.searchForm.dateValue)

            },
            resetForm(fromName){
                console.log('检查是否执行重置1')
                this.$refs[fromName].resetFields()
                console.log('检查是否执行重置2')

            }
        }

    }
</script>

<style scoped>

</style>