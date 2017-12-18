import Cascader from './cascader.vue'

export default {

	/**
	 * 每个插件都有的install方法，用于安装插件
	 * @param {Object} Vue - Vue类
	 */
	install(Vue) {
		Vue.component('cascader', Cascader);
	}
}

