<template>
    <div>
        <!--顶部菜单-->
        <div>
            <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64"
                     :default-active="subActiveRouter"
                     text-color="#fff" active-text-color="#ffd04b" router>
                <el-menu-item>媒体宝系统</el-menu-item>
                <el-menu-item index="Task" :route="{name:'Task'}">任务宝</el-menu-item>
                <el-menu-item index="Msg" :route="{name:'Push'}">消息宝</el-menu-item>
                <el-menu-item index="Auth" :route="{name:'Auth'}">授权</el-menu-item>

                <el-submenu index="5" style="float: right">
                    <template v-slot:title>{{username}}</template>
                    <el-menu-item index="5-1">个人中心</el-menu-item>
                    <el-menu-item index="5-2">注销</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div>
            <router-view></router-view>
        </div>


    </div>
</template>

<script>
    export default {
        name: "LayoutView",
        data() {
            return {
                subActiveRouter: "Msg"
            }
        },
        watch: {
            $route: function (to) {
                console.log('--->', to);
                this.subActiveRouter = to.matched[1].name;
            }
        },
        mounted() {
            // 获取当前的所有路由
            console.log('检查路由表1：', this.$route.matched);
            try {
                console.log('检查路由表：', this.$route.matched[1].name);
                this.subActiveRouter = this.$route.matched[1].name;
                console.log('subActiveRouter等于：', this.$route.matched[1].name);
            } catch (error) {
                console.error('获取路由时发生错误,进行 重定向Task:', error);
                // 重定向
                this.$router.push({ name: 'Task' });
            }

        },
        computed: {
            username() {
                return this.$store.state.username;
            }
        }
    }
</script>

<style scoped>

</style>
