<template>
  <div class="container">
    <h1>Составление расписания</h1>
    <h3 v-if="!isLoading">Группа - {{ groupData.group_name }}</h3>
    <div v-if="isLoading"></div>
    <div v-else class="scheduleContainer">
      <div>
        <div class="row">
          <div class="col border"></div>
          <div class="col border fw-bold">{{ groupData.group_name }}</div>
        </div>
        <div v-for="date in this.dateArray">
          <div class="row">
            <div class="col border text-center fw-bold alert alert-primary m-0">
              {{ dateToIso(date) }}
            </div>
          </div>
          <div class="row" v-for="tr in trainingSessions">
            <div class="col border fs-4">
              {{ tr.start_time }} - {{ tr.end_time }}
            </div>
            <div class="col border">
              <div v-if="getLessons(dateToIso(date), tr.id).length > 0">
                <div
                  class="card m-2 alert alert-success p-0"
                  v-for="lesson in getLessons(dateToIso(date), tr.id)"
                >
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ lesson.teacher.last_name }}
                      {{ lesson.teacher.first_name[0] }}.{{
                        lesson.teacher.patronymic[0]
                      }}.
                    </h5>
                    <h6 class="card-subtitle mb-1 text-muted">
                      ауд. - {{ lesson.class_room.class_room_number }}
                    </h6>
                    <p class="card-text my-1">Предмет</p>
                    <a href="#" class="card-link">Редактировать</a>
                  </div>
                </div>
              </div>
              <div v-else><a href="#" class="card-link">Создать</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { scheduleApi } from "@/api/admin/scheduleAPI"
import { trainingSessionApi } from "@/api/admin/trainingSessionAPI"
import { groupApi } from "@/api/admin/groupAPI"

export default {
  name: "ScheduleMaking",
  components: {},
  data() {
    return {
      isLoading: true,
      isError: false,
      groupData: null,
      dateArray: [],
      trainingSessions: [],
      schedules: [],
      resultObject: {},
    }
  },
  async created() {
    let counterDate = new Date("2022-11-07")
    let counterDate2 = new Date("2023-05-15")

    while (counterDate.getTime() <= counterDate2.getTime()) {
      this.dateArray.push(new Date(counterDate))
      counterDate.setDate(counterDate.getDate() + 1)
    }

    try {
      const responseTrainingSession = await trainingSessionApi.getItemsList()
      this.trainingSessions = await responseTrainingSession.data

      const responseSchedules = await scheduleApi.getItemsList(
        this.$route.params.groupId
      )
      this.schedules = await responseSchedules.data

      const responseGroupData = await groupApi.getItem(
        this.$route.params.groupId
      )
      this.groupData = await responseGroupData.data
    } catch (e) {
      this.isError = true
    } finally {
      this.isLoading = false
    }
    this.scheduleToObject()
  },
  methods: {
    dateToIso(date) {
      let year = date.toLocaleString("default", {
        year: "numeric",
      })
      let month = date.toLocaleString("default", {
        month: "2-digit",
      })
      let day = date.toLocaleString("default", {
        day: "2-digit",
      })
      let formattedDate = year + "-" + month + "-" + day
      return formattedDate
    },
    getLessons(date, sessionId) {
      return this.resultObject[date][sessionId]
    },
    scheduleToObject() {
      let schedule_day_date
      let training_session
      if (this.dateArray.length > 0) {
        this.dateArray.forEach((date) => {
          schedule_day_date = date
          const scheduleDateArr = this.schedules.filter(
            (schedule) =>
              new Date(schedule.schedule_day_date).getTime() === date.getTime()
          )
          let newObj = {}
          this.trainingSessions.forEach((trSession) => {
            const scheduleSessionArray = scheduleDateArr.filter(
              (sch) => sch.training_session.id === trSession.id
            )
            newObj[trSession.id] = scheduleSessionArray
          })
          this.resultObject[this.dateToIso(schedule_day_date)] = newObj
        })
      }
    },
  },
  computed: {},
  watch: {},
}
</script>

<style scoped></style>
