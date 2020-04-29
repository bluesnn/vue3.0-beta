import { ref, computed } from 'vue'

export function toggleTab(id, component) {
  let tabCur = ref(id)
  let currentTab = ref(component)

  const toggleEvent = computed(() => {
    return tab => {
      tabCur.value = tab.id
      currentTab.value = tab.component
    }
  })

  return {
    tabCur,
    currentTab,
    toggleEvent
  }
}