<template>
  <el-menu :default-active="activeIndex"
           class="yls-menu"
           mode="horizontal"
           router
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
  >
    <img id="logo" src="../../assets/images/logo.png" style="height: 50px;width: 50px" alt="logo">
    <el-menu-item class="menu-item-left" index="/home">首页</el-menu-item>
    <el-submenu index="2" :show-timeout="200" :hide-timeout="200">
      <template slot="title"><i class="el-icon-user"></i>{{'开始'}}</template>
      <el-menu-item index="/tome">to me</el-menu-item>
      <el-menu-item index="/demo">demo</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu v-if="roles" index="3" :show-timeout="200" :hide-timeout="200">
      <template slot="title"><i class="el-icon-user"></i>{{username||'控制台'}}</template>
      <el-menu-item index="3-1" @click="outLogin">登出</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item class="menu-item-right" v-if="!roles" @click="openLogin">登录</el-menu-item>
    <el-menu-item class="menu-item-right" v-if="!roles" index="/registered">注册</el-menu-item>
  </el-menu>
</template>

<script>
	import {Mixins} from '../../mixins/mixins';
	import {mapGetters} from 'vuex';

	export default {
		name: 'HeadMenu',
		mixins: [Mixins],
		data() {
			return {};
		},
		computed: {
			...mapGetters([
				'roles',
				'username'
			]),
			activeIndex() {
				return this.$route.fullPath;
			}
		},
		methods: {
			async outLogin() {
				await this.$store.dispatch('LoginOut');
			}
		}
	};
</script>

<style lang="less" scoped>
  @import "../../styles/globalVar.less";

  .yls-menu {
    height: @menuHeight;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    top: 0;
    width: 100%;
    z-index: 99;

    #logo {
      position: absolute;
      left: 20px;
    }

    .menu-item-left {
      height: @menuChildHeight;
      text-align: center;
      width: 100px
    }

    .menu-item-right {
      height: @menuChildHeight;
    }
  }
</style>
