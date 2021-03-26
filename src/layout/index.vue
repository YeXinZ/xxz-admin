<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <navbar />
    </div>
    <div class="main-content">
      <sidebar class="sidebar-container" />
      <div class="main-container">
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
  name: 'Layout',
  data() {
    return {}
  },
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
}
.main-content {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 210px;
  padding-top: 50px;
  position: relative;
  .sidebar-container {
    -webkit-transition: width 0.28s;
    transition: width 0.28s;
    width: 210px;
    background-color: #fff;
    position: fixed;
    font-size: 0;
    top: 50px;
    bottom: 0;
    left: 0;
    z-index: 5;
    overflow: hidden;
    -webkit-box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.05);
    box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.05);
  }
}
</style>
