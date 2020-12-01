<template>
  <div class="loading-wrapper" v-show="isShowLoading">
    <div class="loading">
      <img src="./loading04.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      isShowLoading: false
    };
  },
  methods: {
    show() {
      this.isShowLoading = true;
    },
    hide() {
      this.isShowLoading = false;
    }
  }
};
</script>

<style scoped>
.loading-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
}
.loading-wrapper > .loading {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  border-radius: 6px;
  text-align: center;
  line-height: 80px;
}
.loading-wrapper > .loading > img {
  width: 48px;
  height: 48px;
  vertical-align: middle;
  animation: loopRotate 1.5s linear 0s infinite normal;
}
@keyframes loopRotate {
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>
