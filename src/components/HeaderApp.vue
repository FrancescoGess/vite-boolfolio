<script>
export default {
  name: "HeaderApp",
  data() {
    return {

    }
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Boolfolio</a>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'projects'}">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'contact-us'}">Contatti</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped></style>