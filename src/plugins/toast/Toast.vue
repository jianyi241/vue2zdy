<template>
  <div class="toast-wrapper" v-if="isRender">
    <div class="toast" :style='{ animation: "toast "+ duration/1000 +"s ease-out normal" }'>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: '提示',
      duration: 3000,
      icon: 'default',
      isRender: false
    };
  },
  methods:{
    show (options){
      const { msg, icon, duration } = options
      this.msg = msg
      this.icon = icon ? icon : this.icon
      this.duration = duration ? duration : this.duration
      this.isRender = true
      setTimeout(() => {
        this.isRender = false;
      }, this.duration - 100);
    }
  }
};
</script>

<style>
.toast-wrapper {
  position: fixed;
  height: 48px;
  width: 100%;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.toast-wrapper > .toast {
  display: inline-block;
  position: relative;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  transform: translateY(-50px);
}
@keyframes toast {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  15% {
    transform: translateY(0px);
    opacity: 1;
  }
  85% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}
</style>
