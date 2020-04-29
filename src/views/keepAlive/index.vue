<template>
  <div>
    <button
      v-for="item in tabList"
      :key="item.id"
      :class="{ active: item.id === tabCur }"
      @click="toggleEvent(item)"
    >
      {{ item.title }}
    </button>
    <!-- <keep-alive> -->
      <component :is="currentTab" keep-alive />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import { Aaa, Bbb } from './components'
import { toggleTab } from '@/hooks/toggleTab'

export default {
  components: {
    Aaa,
    Bbb
  },
  setup() {
    const tabList = [
      { id: 0, component: 'aaa', title: 'aaa' },
      { id: 1, component: 'bbb', title: 'bbb' }
    ]
    const { tabCur, currentTab, toggleEvent } = toggleTab(0, 'aaa')


    // function toggleTab(tab) {
    //   state.tabCur = tab.id
    //   state.currentTab = tab.component
    // }

    return {
      tabList,
      tabCur,
      currentTab,
      toggleEvent
    }
  }
}
</script>

<style scoped>
.active {
  background: red;
}
</style>