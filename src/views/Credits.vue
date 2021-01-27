<template>
  <div class="Credits">
    <Header />
    <Title title="Buscar credítos grupales" maxWidth="1280px">
      <template #actions>
        <button class="btn-secondary">
          <i class="fa fa-search" aria-hidden="true"></i>
          Inspeccionar
        </button>
      </template>
    </Title>
    <div class="container">
      <div class="Table">
        <div class="">
          Archivo
        </div>
        <div class="">
          Expedición
        </div>
        <div class="">
          % Calidad de información
        </div>
        <div class="">
          Estatus
        </div>
        <div class="">
          Finalización
        </div>
        <div class="">
          Usuario
        </div>
        <div class="">
          Acciones
        </div>
      </div>
      <template v-for="(item, i) in items">
        <CardCredits :key="i" :item="item" />
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import CardCredits from "@/components/CardCredits.vue";

export default {
  name: "Home",
  components: {
    Header,
    Title,
    CardCredits
  },
  computed: {
    items() {
      return this.$store.getters["software/item"];
    }
  }
};
</script>

<style lang="scss" scoped>
.Credits {
  .container {
    padding-top: 20px;
    .Table {
      height: 60px;
      width: 100%;
      padding: 0 20px;
      font-size: 11px;
      color: #9ba2af;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
    }
  }
}
</style>
