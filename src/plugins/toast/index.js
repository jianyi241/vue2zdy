import toast from "./Toast";

const toastPlugin = {};

toastPlugin.install = function(Vue, options) {
    console.log('plugin', options)
  const Toast = Vue.extend(toast);

  const toastObj = new Toast();

  Vue.prototype.$toast = function (options) {
      console.log('options', options)
      const node = toastObj.$mount(document.createElement("div"));

      document.body.appendChild(node.$el);
      node.show(options)
  }
};

export default toastPlugin;
