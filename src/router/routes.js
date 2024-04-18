const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/cotizacion",
        component: () => import("pages/cotizacion/CotizacionViajes.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("pages/loginUser.vue"),
  },
  {
    path: "/",
    redirect: "/login", // Redirige la raíz al inicio de sesión
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
