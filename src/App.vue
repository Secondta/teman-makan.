<template>
  <nav>
    <NavComp />
  </nav>
  <div>
    <router-view />
  </div>
  <FooterComponent />
</template>

<script>
import NavComp from "../src/components/NavbarComponent.vue";
import FooterComponent from "../src/components/FooterComponent.vue";
import "../src/assets/style/general.css";

export default {
  components: {
    NavComp,
    FooterComponent,
  },
};
</script>
