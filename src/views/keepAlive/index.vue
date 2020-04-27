<template>
  <div>
    <button
      v-for="item in state.tabList"
      :key="item.id"
      :class="{ active: item.id === state.tabCur }"
      @click="toggleTab(item)"
    >
      {{ item.title }}
    </button>
    <keep-alive>
      <component :is="state.currentTab" />
    </keep-alive>
  </div>
</template>

<script>
import { reactive } from 'vue'
// import Aaa from './components'
// import Bbb from './components'
import { Aaa, Bbb } from './components'

export default {
  components: {
    Aaa,
    Bbb
  },
  setup() {
    const state = reactive({
      tabList: [
        { id: 0, component: 'aaa', title: 'aaa' },
        { id: 1, component: 'bbb', title: 'bbb' }
      ],
      tabCur: 0,
      currentTab: 'aaa'
    })

    function toggleTab(tab) {
      state.tabCur = tab.id
      state.currentTab = tab.component
    }

    return {
      state,
      toggleTab
    }
  }
}
</script>

<style scoped>
.active {
  background: red;
}
</style>