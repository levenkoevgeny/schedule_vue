<template>
  <AdminNav />
  <div class="container">
    <div class="mb-3"></div>
    <h1>Проверка накладок</h1>
    <div v-if="isLoading"><Spinner /></div>
    <div v-else></div>
  </div>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav"
import Spinner from "@/components/common/Spinner"

export default {
  name: "Overlays",
  components: { AdminNav, Spinner },
  data() {
    return {
      isLoading: true,
      isError: false,
    }
  },
  async created() {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style scoped></style>
