<template>
  <main>
    <h1>API Request Builder</h1>
    <RequestForm />
  </main>
</template>

<script>
import RequestForm from "./RequestForm.vue";

export default {
  components: {
    RequestForm,
  },
};
</script>

<style>
@import "../css/variables.css";

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 100%;
  line-height: 1.2;
}

main {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: var(--lieblingsfarbe);
}
</style>
