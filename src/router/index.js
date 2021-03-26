import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/* 静态路由 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/account",
    hidden: true,
  },
];

/* 动态路由 */
export const asyncRoutes = [
  {
    path: "/account",
    name: "account",
    component: Layout,
    redirect: "/account/list",
    meta: { title: "账号管理", icon: "user", roles: ["admin"] },
    children: [
      {
        path: "list",
        name: "accountList",
        component: () => import("@/views/system/account/index"),
        meta: { title: "账号列表", icon: "" },
      },
    ],
  },
  {
    path: "/permission",
    name: "permission",
    component: Layout,
    redirect: "/permission/role",
    meta: { title: "权限管理", icon: "permission", roles: ["admin"] },
    children: [
      {
        path: "role",
        name: "role",
        component: () => import("@/views/system/role/index"),
        meta: { title: "角色管理", icon: "" },
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: Layout,
    redirect: "/user/admin",
    meta: { title: "用户管理", icon: "user", roles: ["admin"] },
    children: [
      {
        path: "admin",
        name: "user_admin",
        component: () => import("@/views/user/admin"),
        meta: { title: "管理员列表", icon: "" },
      },
      {
        path: "supplier",
        name: "user_supplier",
        component: () => import("@/views/user/supplier"),
        meta: { title: "供应商列表", icon: "" },
      },
      {
        path: "user",
        name: "user_user",
        component: () => import("@/views/user/user"),
        meta: { title: "用户列表", icon: "" },
      },
    ],
  },
  {
    path: "/audit",
    name: "audit",
    component: Layout,
    redirect: "/audit/supplier",
    meta: { title: "审核管理", icon: "audit", roles: ["admin"] },
    children: [
      {
        path: "supplier",
        name: "audit_supplier",
        component: () => import("@/views/audit/supplier"),
        meta: { title: "供应商审核", icon: "" },
      },
      {
        path: "product",
        name: "audit_product",
        component: () => import("@/views/audit/product"),
        meta: { title: "商品审核", icon: "" },
      },
      {
        path: "category",
        name: "audit_category",
        component: () => import("@/views/audit/category"),
        meta: { title: "品类审核", icon: "" },
      },
      {
        path: "workorder",
        name: "audit_workorder",
        component: () => import("@/views/audit/workorder"),
        meta: { title: "工单审核", icon: "" },
      },
    ],
  },
  {
    path: "/audit-financial",
    name: "audit_financial",
    component: Layout,
    redirect: "/audit-financial/bill",
    meta: { title: "财务审核", icon: "audit", roles: ["admin"] },
    children: [
      {
        path: "bill",
        name: "audit_bill",
        component: () => import("@/views/audit/bill"),
        meta: { title: "账单审核", icon: "" },
      },
      {
        path: "withdraw",
        name: "audit_withdraw",
        component: () => import("@/views/audit/withdraw"),
        meta: { title: "提现审核", icon: "" },
      },
    ],
  },
  {
    path: "/bill",
    name: "bill",
    component: Layout,
    redirect: "/bill/list",
    meta: { title: "账单管理", icon: "bill", roles: ["admin"] },
    children: [
      {
        path: "list",
        name: "billList",
        component: () => import("@/views/bill/index"),
        meta: { title: "账单列表", icon: "" },
      },
      {
        path: "checkAccount",
        name: "checkAccount",
        component: () => import("@/views/bill/checkAccount"),
        meta: { title: "对账流水", icon: "" },
      },
      {
        path: "withdraw",
        name: "withdraw",
        component: () => import("@/views/bill/withdraw"),
        meta: { title: "提现记录", icon: "" },
      },
    ],
  },
  {
    path: "/order",
    name: "order",
    component: Layout,
    redirect: "/order/list",
    meta: { title: "订单管理", icon: "order", roles: ["admin"] },
    children: [
      {
        path: "list",
        name: "order_list",
        component: () => import("@/views/order/list"),
        meta: { title: "订单列表", icon: "" },
      },
      {
        path: "buyout",
        name: "order_buyout",
        component: () => import("@/views/order/buyout"),
        meta: { title: "买断订单", icon: "" },
      },
      {
        path: "relet",
        name: "order_relet",
        component: () => import("@/views/order/relet"),
        meta: { title: "续租订单", icon: "" },
      },
      {
        path: "sublet",
        name: "order_sublet",
        component: () => import("@/views/order/sublet"),
        meta: { title: "转租订单", icon: "" },
      },
      {
        path: "refund",
        name: "order_refund",
        component: () => import("@/views/order/refund"),
        meta: { title: "退款订单", icon: "" },
      },
    ],
  },
  {
    path: "/product",
    name: "product",
    component: Layout,
    redirect: "/product/list",
    meta: { title: "商品管理", icon: "product", roles: ["admin"] },
    children: [
      {
        path: "list",
        name: "product_list",
        component: () => import("@/views/product/list"),
        meta: { title: "商品列表", icon: "" },
      },
      {
        path: "category",
        name: "product_category",
        component: () => import("@/views/product/category"),
        meta: { title: "品类管理", icon: "" },
      },
    ],
  },
  {
    path: "/message",
    name: "message",
    component: Layout,
    redirect: "/message/list",
    meta: { title: "信息中心", icon: "message", roles: ["admin"] },
    children: [
      {
        path: "list",
        name: "message_list",
        component: () => import("@/views/message/list"),
        meta: { title: "信息列表", icon: "" },
      },
      {
        path: "notify",
        name: "message_notify",
        component: () => import("@/views/message/notify"),
        meta: { title: "商家通知", icon: "" },
      },
      {
        path: "question",
        name: "message_question",
        component: () => import("@/views/message/question"),
        meta: { title: "常见问题", icon: "" },
      },
      {
        path: "leasing",
        name: "message_leasing",
        component: () => import("@/views/message/agreement/leasing"),
        meta: { title: "租赁协议", icon: "" },
      },
      {
        path: "privacy",
        name: "message_privacy",
        component: () => import("@/views/message/agreement/privacy"),
        meta: { title: "用户隐私协议", icon: "" },
      },
      {
        path: "service",
        name: "message_service",
        component: () => import("@/views/message/agreement/service"),
        meta: { title: "信息列表", icon: "" },
      },
      {
        path: "rule",
        name: "message_rule",
        component: () => import("@/views/message/rule"),
        meta: { title: "积分规则", icon: "" },
      },
      {
        path: "maninfo",
        name: "message_maninfo",
        component: () => import("@/views/message/maninfo"),
        meta: { title: "供应商帮助手册", icon: "" },
      },
      {
        path: "procedure",
        name: "message_procedure",
        component: () => import("@/views/message/procedure"),
        meta: { title: "投诉须知", icon: "" },
      },
    ],
  },
  {
    path: "/position",
    name: "position",
    component: Layout,
    redirect: "/position/homeAd",
    meta: { title: "推荐位管理", icon: "position", roles: ["admin"] },
    children: [
      {
        path: "homeAd",
        name: "homeAd",
        component: () => import("@/views/position/homeAd"),
        meta: { title: "首页广告", icon: "" },
      },
      {
        path: "selectGoods",
        name: "selectGoods",
        component: () => import("@/views/position/selectGoods"),
        meta: { title: "精选租物", icon: "" },
      },
      {
        path: "timeLimit",
        name: "timeLimit",
        component: () => import("@/views/position/timeLimit"),
        meta: { title: "限时惠租", icon: "" },
      },
      {
        path: "selectPhone",
        name: "selectPhone",
        component: () => import("@/views/position/selectPhone"),
        meta: { title: "精选手机", icon: "" },
      },
      {
        path: "computer",
        name: "computer",
        component: () => import("@/views/position/computer"),
        meta: { title: "电脑平板", icon: "" },
      },
      {
        path: "officeEquip",
        name: "officeEquip",
        component: () => import("@/views/position/officeEquip"),
        meta: { title: "办公设备", icon: "" },
      },
      {
        path: "medical",
        name: "medical",
        component: () => import("@/views/position/medical"),
        meta: { title: "康复医疗", icon: "" },
      },
      {
        path: "electrocar",
        name: "electrocar",
        component: () => import("@/views/position/electrocar"),
        meta: { title: "电动车", icon: "" },
      },
      {
        path: "newEnergy",
        name: "newEnergy",
        component: () => import("@/views/position/newEnergy"),
        meta: { title: "新能源", icon: "" },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
