<template>
  <nav class="top-nav" style="color: #3a547f">
    <div class="d-flex justify-content-between align-items-center mx-4">
      <div><h1 class="m-3 fw-light">ИИС "Электронная Академия"</h1></div>
      <div><a href="">Войти</a></div>
    </div>
  </nav>
  <div class="container">
    <br />
    <div class="d-flex flex-row justify-content-between align-items-center">
      <div class="fw-bold fs-4" style="color: #3a547f">
        Рассписание преподавателей Академии МВД РБ
      </div>
      <div class="fw-bold fs-6" style="color: #bd7569">
        <span>Осенний семестр 2022-2023 учебный год, </span>
        <span style="color: #d34933">4-я учебная неделя</span>
      </div>
    </div>

    <section style="margin-top: 10px; margin-bottom: 10px">
      <select
        class="form-select"
        style="width: 50%"
        v-model="formSelect.teacherId"
      >
        <option value="">Выберите преподавателя</option>
        <option :value="teacher.id" v-for="teacher in teacherList">
          {{ teacher.last_name }} {{ teacher.first_name }}
        </option>
      </select>
    </section>

    <div v-if="selectedTeacher">
      <section class="my-3">
        Телефон диспетчера:
        <a href="#">+375 (17) 111-11-11</a>
      </section>

      <section style="background-color: #e9edf3; position: relative">
        <div
          class="d-flex flex-row flex-wrap justify-content-start align-items-center gap-5"
        >
          <div>
            <a href="">
              <img
                class="rounded-circle m-3"
                src="https://iis.bsuir.by/api/v1/employees/photo/500588"
                alt=""
                style="width: 90px; height: 90px"
              />
            </a>
          </div>
          <div>
            <b
              >{{ selectedTeacher.last_name }} {{ selectedTeacher.first_name }}
              {{ selectedTeacher.patronymic }}</b
            >
          </div>
          <div>
            <div>Начало занятий: <b>03.09.2022</b></div>
            <div>Окончание занятий: <b>28.12.2022</b></div>
          </div>
        </div>
      </section>

      <div class="mt-3">Занятия</div>
      <div class="dropdown-divider"></div>

      <section style="display: flex" class="my-3">
        <div class="form-check mx-3">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label"> 1 </label>
        </div>
        <div class="form-check mx-3">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label"> 2 </label>
        </div>
        <div class="form-check mx-3">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label"> 3 </label>
        </div>
        <div class="form-check mx-3">
          <input class="form-check-input" type="checkbox" checked />
          <label class="form-check-label"> 4 </label>
        </div>
        <div class="form-check mx-3">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label"> все </label>
        </div>
        <div class="form-check mx-3">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label"> скрыть прошедшие </label>
        </div>
      </section>
      <table class="table table-hover">
        <thead style="background-color: #bdc1ce">
          <tr>
            <th scope="col"></th>
            <th scope="col" v-for="day in currentWeek" class="text-center">
              {{ weekDays[day.getDay() - 1] }} <br />{{
                day.toLocaleDateString()
              }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trSession in sessionsList" :key="trSession.id">
            <td>
              {{ trSession.start_time }} -
              {{ trSession.end_time }}
            </td>
            <td v-for="date in currentWeek">
              <div v-if="getLessons(dateToIso(date), trSession.id).length > 0">
                <div
                  style="background-color: white; min-height: 60px"
                  class="border-start border-4 border-orange rounded-1"
                  v-for="lesson in getLessons(dateToIso(date), trSession.id)"
                >
                  <div class="border">
                    <div class="m-2">
                      <b>Предмет</b> ауд.
                      {{ lesson.class_room.class_room_number }}
                    </div>
                    <div class="m-2">
                      группа
                      <a href="">{{ lesson.group.group_name }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="border d-flex justify-content-center align-items-center rounded-1"
                style="height: 60px"
              >
                Занятий нет
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--    <div class="my-row">-->
    <!--      <div></div>-->
    <!--      <div class="text-center">Понедельник <br />17.10</div>-->
    <!--      <div class="text-center">Вторник <br />18.10</div>-->
    <!--      <div class="text-center">Среда <br />19.10</div>-->
    <!--      <div class="text-center">Четверг <br />20.10</div>-->
    <!--      <div class="text-center">Пятница <br />21.10</div>-->
    <!--    </div>-->
    <!--    <div class="my-row">-->
    <!--      <div></div>-->
    <!--      <div>-->
    <!--        <div-->
    <!--          class="border d-flex justify-content-center align-items-center rounded-1"-->
    <!--          style="height: 60px"-->
    <!--        >-->
    <!--          Занятий нет-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="text-center">-->
    <!--        <div-->
    <!--          class="border d-flex justify-content-center align-items-center rounded-1"-->
    <!--          style="height: 60px"-->
    <!--        >-->
    <!--          Занятий нет-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="text-center">-->
    <!--        <div-->
    <!--          class="border d-flex justify-content-center align-items-center rounded-1"-->
    <!--          style="height: 60px"-->
    <!--        >-->
    <!--          Занятий нет-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="text-center">-->
    <!--        <div-->
    <!--          class="border d-flex justify-content-center align-items-center rounded-1"-->
    <!--          style="height: 60px"-->
    <!--        >-->
    <!--          Занятий нет-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="text-center">-->
    <!--        <div-->
    <!--          class="border d-flex justify-content-center align-items-center rounded-1"-->
    <!--          style="height: 60px"-->
    <!--        >-->
    <!--          Занятий нет-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import { teacherApi } from "@/api/client/teacherAPI"
import { trainingSessionApi } from "@/api/client/trainingSessionAPI"
import Spinner from "@/components/common/Spinner"
import { scheduleApi } from "@/api/admin/scheduleAPI"

export default {
  name: "Schedule",
  components: { Spinner },
  data() {
    return {
      sessionsList: [],
      isLoading: true,
      isError: false,
      selectedTeacher: null,
      formSelect: {
        teacherId: "",
      },
      teacherList: [],
      currentWeek: [],
      weekDays: [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
      ],
      schedules: [],
      resultObject: {},
    }
  },
  async created() {
    try {
      const response = await trainingSessionApi.getItemsList()
      this.sessionsList = await response.data

      const responseTeachers = await teacherApi.getItemsList()
      this.teacherList = await responseTeachers.data

      let currentDate = new Date(new Date().setHours(0, 0, 0, 0))
      currentDate.setDate(currentDate.getDate() - (currentDate.getDay() - 1))
      let firstWeekDay = new Date(currentDate)

      for (let counter = 1; counter <= 6; counter++) {
        this.currentWeek.push(new Date(firstWeekDay))
        firstWeekDay.setDate(firstWeekDay.getDate() + 1)
      }
    } catch (error) {
      this.isError = true
    } finally {
      this.isLoading = false
    }
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
      console.log("resultObject", this.resultObject)
      console.log("date", date)
      console.log("sessionId", sessionId)
      return this.resultObject[date][sessionId]
    },
    async getTeacherData() {
      const responseData = await teacherApi.getItem(this.formSelect.teacherId)
      this.selectedTeacher = await responseData.data

      const responseSchedules = await scheduleApi.getItemsList(
        "",
        this.formSelect.teacherId
      )
      this.schedules = await responseSchedules.data

      this.scheduleToObject()
    },
    scheduleToObject() {
      let schedule_day_date
      let training_session

      if (this.currentWeek.length > 0) {
        this.currentWeek.forEach((date) => {
          schedule_day_date = date
          const scheduleDateArr = this.schedules.filter(
            (schedule) =>
              new Date(
                new Date(schedule.schedule_day_date).setHours(0, 0, 0, 0)
              ).getTime() === date.getTime()
          )
          let newObj = {}
          this.sessionsList.forEach((trSession) => {
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
  watch: {
    formSelect: {
      async handler(newValue, oldValue) {
        if (this.formSelect.teacherId !== "") {
          await this.getTeacherData()
        }
      },
      deep: true,
    },
  },
}
</script>

<style scoped></style>
