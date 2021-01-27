<template>
  <div class="Card">
    <div class="Card_file">
      {{ item.file }}
    </div>
    <div class="Card_date">
      {{ item.date }}
    </div>
    <div class="Card_quality">{{ item.quality }}%</div>
    <div class="Card_status" :class="color">
      {{ item.status }}
    </div>
    <div class="Card_date">
      {{ item.dateEnd }}
    </div>
    <div class="Card_user">@{{ item.user }}</div>
    <div class="Card_actions">
      <i class="fa fa-file" aria-hidden="true"></i>
    </div>
    <div class="">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
/**
 *
 * Card Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 * @copyright 2021, Marciano Studio S.C.
 */
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    color() {
      let colors = {
        Finalizado: "green",
        "En proceso": "yellow",
        Rechazado: "red"
      };
      return colors[this.item.status];
    }
  }
};
</script>

<style lang="scss" scoped>
.Card {
  height: 60px;
  width: 100%;
  padding: 0 20px;
  border-radius: 5px;
  background: #171925;
  color: #9ba2af;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &_file {
    font-size: 20px;
    text-decoration: underline;
  }
  &_date,
  &_quality,
  &_user {
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
  }
  &_status {
    &.red {
      color: #dc3545;
    }
    &.green {
      color: #198754;
    }
    &.yellow {
      color: #ffc107;
    }
  }
}
</style>
