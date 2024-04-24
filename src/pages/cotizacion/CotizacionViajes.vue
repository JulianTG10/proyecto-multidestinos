<template>
  <q-page padding>
    <div v-if="userData">
      <h4 padding>Bienvenido, {{ userData.nombreCompleto }}</h4>
    </div>
    <div v-else>
      <p>Cargando datos del usuario...</p>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { LocalStorage } from "quasar";

export default {
  setup() {
    const userData = ref(null);
    const router = useRouter();

    onMounted(() => {
      console.log(
        "Intentando recuperar los datos del usuario del almacenamiento local..."
      );
      const storedUserData = LocalStorage.getItem("userData");
      console.log("Datos del usuario recuperados:", storedUserData);
      if (storedUserData) {
        userData.value = storedUserData;
      } else {
        console.log(
          "No se encontraron datos de usuario en el almacenamiento local. Redirigiendo a la página de inicio de sesión..."
        );
        router.push("/login");
      }
    });

    return {
      userData,
    };
  },
};
</script>
