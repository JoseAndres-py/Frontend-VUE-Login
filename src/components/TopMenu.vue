<template>
  <div class="init-menu nav-active">
    <div class="menu-icon" @click="deployMenu()">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>

    <div class="nav">
      <div class="nav__content">
        <ul class="nav__list">
          <li class="nav__list-item">Inicio</li>
          <li class="nav__list-item">Conózcanos</li>
          <li class="nav__list-item">Proyectos</li>
          <li class="nav__list-item" v-on:click="$emit('cerrarSesion')">
            Salir
          </li>
        </ul>
      </div>
    </div>

    <div class="site-content">
      <h1 class="site-content__headline">Bienvenido {{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  props: {
    name: {
      type: String,
    },
  },
  methods: {
    deployMenu() {
      document.body.classList.toggle("nav-active");
    },
  },
  mounted() {
    document.body.classList.remove("nav-active");
  },
};
</script>

<style scoped>
.init-menu {
  background-color: #477A71;
}
.site-content {
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-content__headline {
  font-weight: 200;
  color: #ffffff;
  font-size: calc(2vw + 10px);
}

.menu-icon {
  height: 30px;
  width: 30px;
  position: fixed;
  z-index: 2;
  left: 50px;
  top: 30px;
  cursor: pointer;
}

.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: #ffffff;
  margin-bottom: 4px;
  transition: transform 0.2s ease, background-color 0.5s ease;
}

.menu-icon__line-left {
  width: 15px;
}

.menu-icon__line-right {
  width: 15px;
  float: right;
}

.nav {
  position: fixed;
  z-index: 1;
}

.nav:before,
.nav:after {
  content: "";
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #477A71;
  z-index: -1;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transform: translateX(0%) translateY(-100%);
}

.nav:after {
  background: white;
  transition-delay: 0s;
}

.nav:before {
  transition-delay: 0.1s;
}

.nav__content {
  position: fixed;
  top: 50%;
  transform: translate(0%, -50%);
  width: 100%;
  text-align: center;
  font-size: calc(2vw + 10px);
  font-weight: 200;
  cursor: pointer;
}

.nav__list-item {
  position: relative;
  display: inline-block;
  transition-delay: 0.8s;
  opacity: 0;
  transform: translate(0%, 100%);
  transition: opacity 0.2s ease, transform 0.3s ease;
  margin-right: 25px;
}

.nav__list-item:before {
  content: "";
  position: absolute;
  background: #477A71;
  width: 20px;
  height: 1px;
  top: 100%;
  transform: translate(0%, 0%);
  transition: all 0.3s ease;
  z-index: -1;
}

.nav__list-item:hover:before {
  width: 100%;
}

body.nav-active .menu-icon__line {
  background-color: #477A71;
  transform: translateX(0px) rotate(-45deg);
}

body.nav-active .menu-icon__line-left {
  transform: translateX(1px) rotate(45deg);
}

body.nav-active .menu-icon__line-right {
  transform: translateX(-2px) rotate(45deg);
}

body.nav-active .nav {
  visibility: visible;
}

body.nav-active .nav:before,
body.nav-active .nav:after {
  transform: translateX(0%) translateY(0%);
}

body.nav-active .nav:after {
  transition-delay: 0.1s;
}

body.nav-active .nav:before {
  transition-delay: 0s;
}

body.nav-active .nav__list-item {
  opacity: 1;
  transform: translateX(0%);
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
}

body.nav-active .nav__list-item:nth-child(0) {
  transition-delay: 0.5s;
}

body.nav-active .nav__list-item:nth-child(1) {
  transition-delay: 0.6s;
}

body.nav-active .nav__list-item:nth-child(2) {
  transition-delay: 0.7s;
}

body.nav-active .nav__list-item:nth-child(3) {
  transition-delay: 0.8s;
}

body.nav-active .nav__list-item:nth-child(4) {
  transition-delay: 0.9s;
}
</style>
