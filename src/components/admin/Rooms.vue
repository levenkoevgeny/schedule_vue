<template>
  <AdminNav />
  <div class="container">
    <div class="mb-3"></div>
    <h1>Учебные аудитории</h1>
    <div v-if="isLoading"><Spinner /></div>
    <div v-else>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-secondary mb-3">Добавить</button>
      </div>
      <div class="accordion" id="accordionExample">
        <div
          class="accordion-item"
          v-for="location in locations"
          :key="location.id"
        >
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="strConcat('#collapse', location.id)"
              aria-expanded="true"
              :aria-controls="strConcat('collapse', location.id)"
            >
              {{ location.location_address }}
            </button>
          </h2>
          <div
            :id="strConcat('collapse', location.id)"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div v-for="room in location.rooms" :key="room.id">
                Аудитория № {{ room.class_room_number }}
                <button type="button" class="btn btn-link link-secondary my-0">
                  ред.
                </button>
              </div>
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
import { classRoomApi } from "@/api/admin/classRoomAPI"
import { locationsApi } from "@/api/admin/locationsAPI"

export default {
  name: "Rooms",
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
  methods: {
    strConcat(str1, str2) {
      return str1.toString() + str2.toString()
    },
  },
  computed: {},
  watch: {},
}
</script>

<style scoped></style>
