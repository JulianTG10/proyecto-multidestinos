import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

import { useRouter } from "vue-router";
import axios from "axios";
import { LocalStorage } from "quasar";

const router = useRouter();
const linksList = [];

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const miniState = ref(true);
    const drawer = ref(false);

    return {
      router: useRouter(),
      essentialLinks: linksList,
      leftDrawerOpen,
      drawer,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      miniState,
      toggleMiniState() {
        leftDrawerOpen.value = true;
        miniState.value = !miniState.value;
      },
    };
  },
  beforeMount() {},
  async data() {
    return {};
  },
  methods: {
    goPage(pagina) {
      this.router.push(pagina);
    },
  },
});
