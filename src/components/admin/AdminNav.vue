<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ИИС Электронная Академия</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click="$router.push({ name: 'clientSchedule' })"
              >На главную</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Разделы
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push({ name: 'adminLocationList' })"
                  href="#"
                  >Корпусы</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push({ name: 'adminRoomsList' })"
                  href="#"
                  >Кабинеты</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push({ name: 'adminTeachersList' })"
                  href="#"
                  >Преподаватели</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push({ name: 'adminScheduleList' })"
                  href="#"
                  >Расписания</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push({ name: 'adminScheduleOverlays' })"
                  href="#"
                  >Проверка накладок</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNav",
}
</script>

<style scoped></style>
