<template>
  <div class="Login">
    <h1>Inicia sesión</h1>
    <div class="card-login">
      <input
        v-model="model.user"
        type="email"
        class="input-primary mt-md"
        placeholder="Correo electrónico"
        required
      />
      <input
        v-model="model.password"
        type="password"
        class="input-primary mt-md"
        placeholder="Contraseña"
        required
      />
      <button class="btn-primary mt-md" @click="onLogin">
        Acceder
      </button>
    </div>
  </div>
</template>

<script>
/**
 *
 * Login Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 * @copyright 2021, Marciano Studio S.C.
 */
export default {
  name: "Login",
  data() {
    return {
      model: {
        user: null,
        password: null
      }
    };
  },
  methods: {
    onLogin() {
      if (this.model.user && this.model.password) {
        this.$store.dispatch("auth/login", this.model).then(() => {
          this.$router.push({ name: "Home" });
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Login {
  text-align: center;

  .card-login {
    max-width: 400px;
    width: 100%;
    max-height: 400px;
    min-height: 400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>
