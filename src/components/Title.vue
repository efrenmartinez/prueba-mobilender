<template>
  <div class="Title" :style="{ maxWidth: maxWidth }">
    <div class="Title_heading">
      <i v-if="icon" :class="icon" aria-hidden="true"></i>
      <div v-if="title" class="Title_heading-title">{{ title }}</div>
    </div>
    <div class="Title_actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
/**
 *
 * Title Component
 *
 * @author emartinez <efren.martinez@marciano.com.mx>
 *
 */
export default {
  name: "Title",
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: "900px"
    }
  }
};
</script>

<style lang="scss" scoped>
.Title {
  height: 80px;
  border-bottom: 1px solid #b0abab;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  &_heading {
    display: flex;
    align-items: center;
    i {
      color: #20c997;
      font-size: 22px;
      margin-right: 10px;
    }
    &-title {
      font-size: 22px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
