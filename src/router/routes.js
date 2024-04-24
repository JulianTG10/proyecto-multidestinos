const routes = [
  {
    path: "/cotizacion",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/cotizacion",
        component: () => import("pages/cotizacion/CotizacionViajes.vue"),
      },
      {
        path: "/ControlUser",
        component: () => import("pages/ControlUser.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/",
    component: () => import("pages/IndexPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
