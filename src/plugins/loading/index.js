import Loading from "./Loading";

const LoadingPlugin = {};
LoadingPlugin.install = function(Vue) {
  // 生成Vue的子类
  let LoadingBox = Vue.extend(Loading);
  // 创建该子类的实例
  let instance = new LoadingBox();
  instance.$mount(document.createElement("dev"));
  document.body.appendChild(instance.$el);

  Vue.prototype.$loading = instance;
};

export default LoadingPlugin;
