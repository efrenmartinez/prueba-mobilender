<template>
  <div class="Card">
    <div class="Card_numeral">
      {{ index >= 9 ? index + 1 : `0${index + 1}` }}
    </div>
    <div class="Card_name">
      {{ item.name }}
    </div>
    <div class="Card_type">
      {{ item.type }}
    </div>
    <div class="Card_actions">
      <i class="fa fa-angle-right" aria-hidden="true" @click="goRoute"></i>
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
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    goRoute() {
      this.$router.push({ name: "Credits" });
    }
  }
};
</script>

<style lang="scss" scoped>
.Card {
  height: 60px;
  max-width: 500px;
  width: 100%;
  padding: 0 20px;
  border-radius: 5px;
  background: #171925;
  color: #fff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &_numeral {
    border-radius: 5px;
    height: 35px;
    width: 35px;
    border: 1px solid #20c997;
    text-align: center;
    line-height: 34px;
    font-weight: bold;
  }
  &_name {
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
  }
  &_type {
    font-weight: 400;
    font-size: 15px;
    color: #9ba2af;
  }
  &_actions {
    color: #9ba2af;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
