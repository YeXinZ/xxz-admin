<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <div class="content_wrap">
        <h3 class="page_title">{{ $route.meta.title }}</h3>
        <router-view :key="key" />
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>
<style lang="scss">
.content_wrap {
  .el-form,
  .el-table,
  .el-pagination {
    margin: 0 30px;
  }
  .el-table .el-form {
    margin: 0;
  }
  .el-pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  .form-inline .el-select > .el-input {
    width: 120px;
  }
  .operate_col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-button + .el-button {
      margin-top: 5px;
      margin-left: 0;
    }
  }
  .custom-dialog {
    .el-dialog__header {
      background: #f5f5f5;
      box-shadow: 0px 1px 0px 0px #eeeeee;
    }
    .el-dialog__footer {
      text-align: center;
    }
  }
  .el-table__expanded-cell[class*="cell"] {
    padding: 0 0 0 40px;
    .el-form-item {
      margin-bottom: 0;
    }
    .el-form-item + .el-form-item::before {
      width: calc(100% + 40px);
      height: 1px;
      margin: 0 -40px;
      border-bottom: 1px solid #eeeeee;
    }
  }
  .info_label {
    color: #333333;
    margin-right: 5px;
  }
  .btn-prev,
  .btn-next {
    span {
      margin: 0 8px;
    }
  }
  .el-date-editor .el-range-separator {
    width: 10%;
  }
  .el-range-editor.el-input__inner {
    width: 320px;
  }
  .el-pagination.is-background .btn-next.disabled,
  .el-pagination.is-background .btn-next:disabled,
  .el-pagination.is-background .btn-prev.disabled,
  .el-pagination.is-background .btn-prev:disabled,
  .el-pagination.is-background .el-pager li.disabled {
    color: #bbbbbb;
    background: #ffffff;
    border: 1px solid #ededed;
  }
  .el-table {
    width: calc(100% - 60px);
    td,
    th {
      padding: 5px 0;
    }
    .cell {
      line-height: 25px;
      min-height: 30px;
      p {
        margin: 0;
      }
    }
    .el-form-item__label,
    .el-form-item__content {
      line-height: 30px;
    }
  }
  .json_wrapper {
    border: 1px solid #eeeeee;
    h5 {
      font-size: 16px;
      font-weight: normal;
      line-height: 40px;
      margin: 0;
      text-align: center;
      color: #666666;
      background: #f5f5f5;
    }
    pre {
      width: 28vw;
      height: 50vh;
      padding: 0 1em;
      margin-bottom: 0;
      overflow: auto;
    }
    & + .json_wrapper {
      border-left: none;
    }
  }
}
</style>
<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f3f6fb;
}
.content_wrap {
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 15px;
  padding-bottom: 20px;
  .page_title {
    padding: 0 15px;
    height: 50px;
    font-weight: normal;
    line-height: 50px;
    font-size: 18px;
    border-bottom: 1px solid #eeeeee;
    // color: $mainBlue;
    margin-bottom: 20px;
  }
}
</style>