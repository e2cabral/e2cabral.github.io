<script setup>
defineProps({
  color: {
    text: String,
    background: {
      validator(value) {
        return [
          'primary',
          'secondary',
          'info',
          'success',
          'warning',
          'error',
          'light',
          'dark',
          'white'
        ].includes(value)
      }
    },
    default() {
      return {
        text: '',
        background: 'bg-gray-100'
      }
    }
  },
  title: {
    type: String,
    required: true
  },
  descriptions: {
    type: Array,
    required: true
  },
  action: {
    type: Object,
    required: true,
    label: {
      type: Object,
      required: true,
      text: String,
      color: String
    },
    route: {
      type: String,
      required: true
    }
  }
})
</script>
<template>
  <div
    class="info-horizontal border-radius-xl d-block d-md-flex"
    :class="`${color.background ?? ''}`"
  >
    <div class="ps-0 ps-md-3 mt-3 mt-md-0">
      <h5 :class="`text-${color.text ?? ''}`">{{ title }}</h5>
      <p
        :class="`text-${color.text ?? ''}`"
        v-for="(description, index) in descriptions"
        :key="index"
      >
        {{ description }}
      </p>

      <RouterLink
        class="icon-move-right"
        :class="`text-${action.label.color ?? 'success'}`"
        :to="{ name: action.route }"
      >
        {{ action.label.text }}
      </RouterLink>
    </div>
  </div>
</template>
