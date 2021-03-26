<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenu"
      :collapse="false"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <template v-for="route in permission_routes">
        <sidebar-item
          v-if="hasRoutes.includes(route.name)"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'
import bus from "../bus"
export default {
  components: { SidebarItem },
  data() {
    return {
      hasRoutes: []
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    }
  },
  created() {
    bus.$on("setType", val => {
      this.hasRoutes = val;
    })
  },
  beforeDestroy() {
    bus.$off('setType')
  }
}
</script>

<style lang="scss" scoped>
</style>