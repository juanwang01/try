<template>
    <div>
        <el-card>
            <el-form :inline="true" class="demo-form-inline" :model="searchForm" ref="searchForm">
                <el-form-item label="当前任务" prop="category">
                    <el-select placeholder="当前任务" v-model="searchForm.category" @click="changeTask">
                        <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label"
                                   :value=item.value></el-option>
                        <!--                        <el-option label="类型二" value="beijing"></el-option>-->
                    </el-select>
                </el-form-item>
                <el-form-item label="推广码" prop="category">
                    <el-select placeholder="活动区域" v-model="searchForm.category">
                        <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label"
                                   :value=item.value></el-option>
                        <!--                        <el-option label="类型二" value="beijing"></el-option>-->
                    </el-select>
                </el-form-item>

            </el-form>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "StatView",
        data(){
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
            }
        }
    }
</script>

<style scoped>

</style>