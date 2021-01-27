<template>
  <div class="Home">
    <Header @onLogout="onLogout" />
    <Title icon="fa fa-table" title="Listado de softwares">
      <template #actions>
        <button class="btn-secondary" @click="modalAdd = true">
          <i class="fa fa-plus" aria-hidden="true"></i>
          Agregar nuevo
        </button>
      </template>
    </Title>
    <div class="Home_cards">
      <template v-for="(item, i) in items">
        <Card :key="item.id" :index="i" :item="item" />
      </template>
    </div>
    <Modal v-if="modalAdd" @close="modalAdd = false">
      <template #header>
        <div>Agregar nuevo software</div>
      </template>
      <template #body>
        <input
          v-model="model.name"
          type="text"
          class="input-primary mt-xl"
          placeholder="Nombre del software"
          required
        />
      </template>
      <template #footer>
        <button
          class="btn-primary mt-xl"
          style="width: 100%;"
          @click="addSoftware"
        >
          Guardar
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Header,
    Title,
    Card,
    Modal
  },
  data() {
    return {
      modalAdd: false,
      model: {
        name: null,
        type: "Crédito grupal"
      }
    };
  },
  computed: {
    items() {
      return this.$store.getters["software/items"];
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push({ name: "Login" });
      });
    },
    addSoftware() {
      if (this.model.name) {
        this.$store.dispatch("software/add", this.model).then(() => {
          this.modalAdd = false;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Home {
  &_cards {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>
