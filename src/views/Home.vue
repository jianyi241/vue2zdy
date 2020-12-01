<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="showLoading">showLoading</button>
    <button @click="hideLoading">hideLoading</button><br />
    <button @click="showToast">showToast</button>
    <Radio></Radio>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Radio from '@/components/common/Radio/Radio'
export default {
  name: "Home",
  components: {
    HelloWorld,
    Radio
  },
  methods: {
    showLoading() {
      this.$loading.show();
      setTimeout(() => {
        this.$loading.hide()
      }, 1000000)
    },
    hideLoading() {
      this.$loading.hide();
    },
    showToast() {
      this.$toast({
        msg: '请求失败！',
        duration: 3000
      });
    }
  }
};
</script>
