<template>
  <AdminNav />
  <div class="container">
    <div class="mb-3"></div>
    <h1>Учебные корпусы</h1>
    <div v-if="isLoading"><Spinner /></div>
    <div v-else>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-secondary">Добавить</button>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Расположение</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in locations" :key="location.id">
            <td>{{ location.location_address }}</td>
            <td>
              <button type="button" class="btn btn-link link-secondary my-0">
                ред.
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav"
import Spinner from "@/components/common/Spinner"
import { locationsApi } from "@/api/admin/locationsAPI"

export default {
  name: "Locations",
  components: { AdminNav, Spinner },
  data() {
    return {
      isLoading: true,
      isError: false,
      locations: [],
    }
  },
  async created() {
    try {
      const response = await locationsApi.getItemsList()
      this.locations = await response.data
    } catch (e) {
      this.isError = true
    } finally {
      this.isLoading = false
    }
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style scoped></style>
