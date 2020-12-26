<template>
  <div class="limiter">
    <div
      class="container-login100"
      style="background-image: url('images/bg-01.jpg')"
    >
      <div class="wrap-login100">
        <form class="login100-form validate-form" @submit.prevent="loginUser">
          <span class="login100-form-logo">
            <i class="zmdi zmdi-assignment-account"></i>
          </span>

          <span class="login100-form-title p-b-34 p-t-27">
            Ingreso de Usuario
          </span>

          <div
            class="wrap-input100 validate-input"
            :class="{ 'alert-validate': login.email.isValid }"
            data-validate="Correo inválido"
            ref="email"
          >
            <input
              class="input100"
              name="username"
              type="email"
              placeholder="Correo electrónico"
              v-model="login.email.value"
              @click="setFocus('email')"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            :class="{ 'alert-validate': login.password.isValid }"
            data-validate="Contraseña Invalida"
            ref="email"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Contraseña"
              v-model="login.password.value"
              @click="setFocus('password')"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <!-- <div class="contact100-form-checkbox">
            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
            <label class="label-checkbox100" for="ckb1"> Remember me </label>
          </div> -->

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Ingresar</button>
          </div>

          <div class="text-center p-t-90">
            <a class="txt1" href="#"> Olvido la Contraseña? </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import jwt_decode from "jwt-decode"; //Importar el desencriptador
export default {
  data() {
    return {
      login: {
        email: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
      },
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  methods: {
    async loginUser() {
      if (this.validateForm()) {
        try {
          let response = await this.$http.post("/api/auth/signin", {
            email: this.login.email.value,
            password: this.login.password.value,
          });
          let token = response.data.accessToken;
          let user = jwt_decode(token); //desencripta el token
          console.log(user)

          localStorage.setItem("jwt", token);
          localStorage.setItem("user", JSON.stringify(user));
          if (token) {
            swal("Exitoso", "login exitoso", "success");
            this.$router.push("/panel");
          }
        } catch (err) {
          swal("Oops...", "Datos de ingreso incorrectos", "error");
          console.log(err);
        }
      }
    },
    setFocus(element) {
      this.login[element].isValid = false;
    },
    validateForm() {
      //Change state email valid
      this.login.email.isValid = !this.isEmailValid(this.login.email.value);
      //Change state password valid
      this.login.password.isValid = this.login.password.value == "";

      return !(this.login.password.isValid && this.login.password.isValid);
    },
    isEmailValid(email) {
      return this.email == "" ? "" : this.reg.test(email);
    },
  },
};
</script>
