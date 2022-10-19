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
      <input type="search" class="form-control" style="width: 50%" />
    </section>

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
        <div><b>Иванов Иван Иванович</b></div>
        <div>
          <div>Начало занятий: <b>03.09.2022</b></div>
          <div>Окончание занятий: <b>28.12.2022</b></div>
        </div>
      </div>
      <div class="buttons-container">
        <button>1</button>
        <button>2</button>
        <button>3</button>
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
          <th scope="col">Понедельник <br />17.10</th>
          <th scope="col">Вторник <br />18.10</th>
          <th scope="col">Среда <br />19.10</th>
          <th scope="col">Четверг <br />20.10</th>
          <th scope="col">Пятница <br />21.10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <div
              class="border d-flex justify-content-center align-items-center rounded-1"
              style="height: 60px"
            >
              Занятий нет
            </div>
          </td>
          <td class="table-primary">
            <div
              style="background-color: white; min-height: 60px"
              class="border-start border-4 border-orange rounded-1"
            >
              <div class="border">
                <div class="m-2"><b>АиСД (ЛР)</b> 213a-4к</div>
                <div class="m-2"><a href="">группа 0000</a></div>
              </div>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <div
              class="border d-flex justify-content-center align-items-center rounded-1"
              style="height: 60px"
            >
              Занятий нет
            </div>
          </td>
          <td class="table-primary">
            <div
              class="border d-flex justify-content-center align-items-center rounded-1"
              style="height: 60px"
            >
              Занятий нет
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div class="my-row">
      <div></div>
      <div class="text-center">Понедельник <br />17.10</div>
      <div class="text-center">Вторник <br />18.10</div>
      <div class="text-center">Среда <br />19.10</div>
      <div class="text-center">Четверг <br />20.10</div>
      <div class="text-center">Пятница <br />21.10</div>
    </div>
    <div class="my-row">
      <div></div>
      <div>
        <div
          class="border d-flex justify-content-center align-items-center rounded-1"
          style="height: 60px"
        >
          Занятий нет
        </div>
      </div>
      <div class="text-center">
        <div
          class="border d-flex justify-content-center align-items-center rounded-1"
          style="height: 60px"
        >
          Занятий нет
        </div>
      </div>
      <div class="text-center">
        <div
          class="border d-flex justify-content-center align-items-center rounded-1"
          style="height: 60px"
        >
          Занятий нет
        </div>
      </div>
      <div class="text-center">
        <div
          class="border d-flex justify-content-center align-items-center rounded-1"
          style="height: 60px"
        >
          Занятий нет
        </div>
      </div>
      <div class="text-center">
        <div
          class="border d-flex justify-content-center align-items-center rounded-1"
          style="height: 60px"
        >
          Занятий нет
        </div>
      </div>
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
