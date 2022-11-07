<template>
  <div class="container">
    <h1>ScheduleList</h1>
    <div v-if="isLoading"></div>
    <div v-else>
      <ul class="list-group" v-for="unit in groupUnits">
        <li class="list-group-item fw-bold mb-2">
          {{ unit.group_unit }}
          <ul class="list-group">
            <li class="list-group-item fw-light" v-for="group in unit.groups">
              <button
                type="button"
                class="btn btn-link link-secondary"
                title="Просмотр"
                @click="changeRoute(group.id)"
              >
                {{ group.group_name }}
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { groupUnitApi } from "@/api/admin/groupUnitAPI"

export default {
  name: "ScheduleList",
  components: {},
  data() {
    return {
      isLoading: true,
      isError: false,
      groupUnits: [],
    }
  },
  async created() {
    try {
      const response = await groupUnitApi.getItemsList()
      this.groupUnits = await response.data
    } catch (e) {
      this.isError = true
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    changeRoute(groupId) {
      let route = this.$router.resolve({
        name: "scheduleMaking",
        params: { groupId: groupId },
      })
      window.open(route.href, "_blank")
    },
  },
  computed: {},
  watch: {},
}
</script>

<style scoped></style>
