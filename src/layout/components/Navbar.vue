<template>
  <div class="flex flex-between-center navbar">
    <span class="logo_wrapper"></span>
    <p class="horizontal_menu">
      <template v-for="menu in menuList">
        <span
          @click="goToPage(menu.routes)"
          class="pointer"
          :class="{'active_menu': isActive(menu.routes)}"
          :key="menu.type"
        >{{menu.title}}</span>
      </template>
    </p>
    <div class="right-menu">
      <span style="margin-right:30px">{{name}}</span>
      <el-dropdown
        class="avatar-container"
        trigger="click"
      >
        <span class="pointer">
          <svg-icon
            icon-class="exit"
            :size="14"
          />
        </span>
        <el-dropdown-menu
          slot="dropdown"
          class="user-dropdown"
        >
          <router-link to="/modify/index">
            <el-dropdown-item>修改密码</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span
              style="display:block;"
              @click="logout"
            >退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import bus from "./bus"
export default {
  data() {
    return {
      activeRoutes: []
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('login')
    },
    goToPage(routes) {
      if (routes.length > 0) {
        bus.$emit('setType', routes);
        this.$router.push({ name: routes[0] });
      }
    },
    isActive(routes) {
      for (let item of routes) {
        if (this.$route.path.indexOf(item) > -1) {
          this.activeRoutes = routes;
          return true
        }
      }
      return false
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    menuList() {
      const list = [
        {
          title: "系统",
          type: "system",
          routes: ["account", "permission"]
        },
        {
          title: "信息",
          type: "info",
          routes: ["message", "position"]
        },
        {
          title: "用户",
          type: "user",
          routes: ["user"]
        },
        {
          title: "审核",
          type: "audit",
          routes: ["audit", "audit_financial"]
        },
        {
          title: "积分商城",
          type: "mall",
          routes: []
        },
        {
          title: "财务",
          type: "financial",
          routes: ["bill"]
        },
        {
          title: "订单",
          type: "order",
          routes: ["order"]
        },
        {
          title: "店铺",
          type: "shop",
          routes: []
        },
        {
          title: "商品",
          type: "product",
          routes: ["product"]
        },
      ];
      return list;
    },
  },
  created() {
    this.$nextTick(() => {
      bus.$emit('setType', this.activeRoutes);
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #28313d;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  color: #ffffff;

  .horizontal_menu {
    margin-left: 50px;
    span {
      display: inline-block;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      margin: 0 30px;
    }
  }
  .active_menu {
    border-bottom: 8px solid #2993ff;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}

ul.user-dropdown {
  top: 40px !important;
}
.logo_wrapper {
  display: inline-block;
  width: 210px;
  height: 100%;
  background: url(../../assets/images/home_logo.png) no-repeat;
  background-size: contain;
}
.horizontal_menu {
  flex: 1;
}
</style>
