<template>
  <div>
    <!-- <button @click="increment">
      count: {{ state.count }}, double: {{ state.double }}
    </button> -->
  </div>
</template>

<script>
import { reactive, computed, watchEffect } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    watchEffect(() => {
      document.body.innerHTML = `count is ${state.count}`
    })

    return {
      state,
      increment
    }
  }
}
</script>