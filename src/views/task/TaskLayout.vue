<template>
    <div>
        <el-menu class="sub-menu" mode="horizontal" :default-active="subActiveRouter" router>
            <el-menu-item index="Activity" :route="{name:'Activity'}"><i class="el-icon-coin"></i>活动管理</el-menu-item>
            <el-menu-item index="Promo" :route="{name:'Promo'}"><i class="el-icon-data-analysis"></i>推广码</el-menu-item>
            <el-menu-item index="Stat" :route="{name:'Stat'}"><i class="el-icon-document"></i>数据统计</el-menu-item>
            <el-menu-item index="Fans" :route="{name:'Fans'}"><i class="el-icon-setting"></i>参与粉丝</el-menu-item>
        </el-menu>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "TaskLayout",
        data() {
            return {
                subActiveRouter: "Activity"
            }
        },
        watch: {
            $route: function (to) {
                console.log('--->', to);
                this.subActiveRouter = this.$route.matched[2].name;
            }
        },
        mounted() {
            // 获取当前的所有路由
            // 获取当前的所有路由
            console.log('检查路由表1：', this.$route.matched);
            try {
                console.log('检查路由表：', this.$route.matched[2].name);
                this.subActiveRouter = this.$route.matched[2].name;
            } catch (error) {
                console.error('获取路由时发生错误:', error);
                // 重定向
                this.$router.push({ name: 'Activity' });
            }

        }
    }
</script>

<style scoped>
    .sub-menu .el-menu-item {
        line-height: 40px;
        height: 40px;
        vertical-align: middle;
        font-size: 13px;
    }

    .sub-menu .el-menu-item i {
        margin-top: -3px;
    }
</style>
