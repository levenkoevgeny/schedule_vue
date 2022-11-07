<template>
  <AdminNav />
  <div class="container">
    <div class="mb-3"></div>
    <h1>Преподаватели</h1>
    <div v-if="isLoading"><Spinner /></div>
    <div v-else>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-secondary mb-3">Добавить</button>
      </div>
      <div class="card mb-3" v-for="teacher in teachers" :key="teacher.id">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {{ teacher.last_name }} {{ teacher.first_name }}
                {{ teacher.patronymic }}
              </h5>
              <p class="card-text">Дополнительная информация</p>
              <p class="card-text">
                <small class="text-muted">
                  <button
                    type="button"
                    class="btn btn-link link-secondary m-0 p-0"
                  >
                    Редактировать
                  </button></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav"
import Spinner from "@/components/common/Spinner"
import { teachersApi } from "@/api/admin/teachersAPI"

export default {
  name: "Teachers",
  components: { AdminNav, Spinner },
  data() {
    return {
      isLoading: true,
      isError: false,
      teachers: [],
    }
  },
  async created() {
    try {
      const response = await teachersApi.getItemsList()
      this.teachers = await response.data
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
