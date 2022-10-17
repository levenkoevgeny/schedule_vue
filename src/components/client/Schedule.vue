<template>
  <div class="container">
    <h1>Рассписание преподавателей Академии МВД РБ</h1>
    <select class="form-select">
      <option value="">1</option>
    </select>
    <section>
      <div class="row">
        <div class="col-md-6">
          <div>
            <img src="" alt="" />
          </div>
          <div><p>Иванов Иван Иванович</p></div>
        </div>
        <div class="col-md-6">
          <p>Начало занятий <b>03.09.2022</b></p>
          <p>Конец занятий <b>28.12.2022</b></p>
        </div>
      </div>
    </section>
    <h3>Занятия</h3>
    <section style="display: flex">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label"> 1 </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label"> 2 </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label"> 3 </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" checked />
        <label class="form-check-label"> 4 </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label"> все </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label"> скрыть прошедшие </label>
      </div>
    </section>
    <section style="display: flex"></section>
    <div class="schedule">
      <table class="table">
        <thead>
          <th></th>
          <th>Понедельник (сегодня), 17.10</th>
          <th>Вторник (завтра), 18.10</th>
          <th>Среда</th>
          <th>Четверг</th>
          <th>Пятница</th>
          <th>Суббота</th>
          <th>Воскресенье</th>
        </thead>
        <tbody>
          <td>
            <div>
              <p>09:00</p>
              <p>10:20</p>
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-center align-items-center">
              <p>Занятий нет</p>
            </div>
          </td>
          <td>
            <div class="rounded-2 border-start-2 border-3">
              <p>Занятий нет</p>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { teacherApi } from "@/api/client/teacherAPI"
import { trainingSessionApi } from "@/api/client/trainingSessionAPI"
import Spinner from "@/components/common/Spinner"

export default {
  name: "Schedule",
  components: { Spinner },
  data() {
    return {
      sessionsList: [],
      isLoading: true,
      isError: false,
    }
  },
  async created() {
    try {
      const response = await trainingSessionApi.getItemsList()
      this.sessionsList = await response.data
    } catch (error) {
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
