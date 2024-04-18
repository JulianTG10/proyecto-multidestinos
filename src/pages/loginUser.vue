<script setup>
import { useRouter, useRoute } from "vue-router";
import { LocalStorage, SessionStorage } from "quasar";
import { useQuasar } from "quasar";
import { ref, reactive } from "vue";

const userName = ref(null);
const password = ref(null);
const desactivar = ref(true);
const dialog = false;
const msg = null;
const loading = null;
const router = useRouter();
const route = useRoute();
const $q = useQuasar();
async function login() {
  var json = {
    usuario1: userName.value,
    contrasena: password.value,
  };
  console.log("inicio sesion", json);
  try {
    const res = await providerLogin.loginPost(json);
    console.log("res", res);
    if (res) {
      LocalStorage.clear();
      LocalStorage.set("userId", res);
      LocalStorage.set("tokenValido", true);
      providerServicios.idUser = res.idUsuario;
      providerServicios.permisos = await providerRoles.getPermissionsByUser(
        res.idUsuario
      );
      if (
        res.idUsuario == 4 ||
        res.idUsuario == 1017 ||
        res.idUsuario == 1011 ||
        res.idUsuario == 6024
      ) {
        providerServicios.admin = true;
      }
      providerServicios.nameUser =
        res.nombresPersona + " " + res.apellidosPersona;
      router.push("/cotizacion");
    } else {
      $q.notify({
        color: "red-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Usuario o contraseña incorrectos",
      });
    }
  } catch (error) {
    console.error("Error en la autenticación:", error);
    // Manejar el error de autenticación aquí
  }
}

function registrar() {
  router.push("/register");
}
</script>

<template>
  <div>
    <div>
      <q-card style="width: 100%; height: 100%">
        <q-card-section style="background-color: rgb(25, 118, 210)">
          <h4 class="text-h5 text-white q-my-md">Multidestinos Express</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-input
              square
              clearable
              v-model="userName"
              type="text"
              label="User"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              square
              clearable
              v-model="password"
              type="password"
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-section> </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            style="background-color: rgb(25, 93, 221)"
            class="full-width text-white"
            label="Iniciar Sesión"
            @click="login"
          />
        </q-card-actions>
        <!-- <q-card-section class="text-center q-pa-sm">
          <p class="text-grey-6">recuperar contraseña?</p>
        </q-card-section> -->
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            style="background-color: rgb(25, 93, 221)"
            class="full-width text-white"
            label="Registrarme"
            @click="registrar"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
