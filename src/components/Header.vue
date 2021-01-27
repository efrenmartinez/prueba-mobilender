<template>
  <header class="Header">
    <div class="container">
      <router-link to="/" class="Header_title"
        >Integra<span>Software</span></router-link
      >
      <div class="Header_account">
        <p>Miguel Mencia</p>
        <div class="Header_account-avatar">
          <p>MM</p>
        </div>
        <div class="Header_account-dropdown">
          <i class="fa fa-chevron-down dropbtn" aria-hidden="true"></i>
          <div class="dropdown-content">
            <a href="#" @click="$emit('onLogout')">Salir</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
/**
 *
 * Header Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 * @copyright 2021, Marciano Studio S.C.
 */
export default {
  name: "Header",
  components: {
    // components
  },
  data() {
    return {
      // data
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.Header {
  background: #3b393b;
  color: #fff;
  height: 80px;
  .container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Header_title {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    span {
      color: #24e6ac;
    }
  }
  .Header_account {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      font-size: 12px;
    }
    &-avatar {
      margin: 0 15px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: #eff3f6;
      text-align: center;
      border: 1px solid #ccc;
      p {
        color: #060505;
        line-height: 58px;
        font-size: 14px;
      }
    }
    &-dropdown {
      position: relative;
      display: inline-block;
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 100px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        right: 0;
        a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
        }
      }
      .dropdown-content a:hover {
        background-color: #ddd;
      }
      &:hover .dropdown-content {
        display: block;
      }
      &:hover .dropbtn {
        background-color: #ddd;
      }
    }
  }
}
</style>
