<template>
  <div>
    readonly
    {{count}}
  </div>
</template>

<script>
import { reactive, readonly, watchEffect, ref, watch } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })
    const copy = readonly(state)
    watchEffect(() => console.log('watchEffect copy', copy.count))
    console.log('state', state.count++)
    console.log('state copy', copy.count)



    const count = ref(0)
    watchEffect(() => {
      console.log('watchEffect count ref', count.value)
    }, {
      onTrack(e) {
        console.log(e)
      }
    })
    // onMounted(() => {
    //   watchEffect(() => console.log('onMounted', count.value))
    // })
    setTimeout(() => {
      count.value++
    }, 500);



    const state1 = reactive({ count: 5 })
    // watch(
    //   () => console.log('state1', state1.count),
    //   (count, prevCount) => {
    //     console.log('state1 watch count, prevCount', count, prevCount)
    //   }
    // )
    setTimeout(() => {
      state1.count++
    }, 500);



    const count1 = ref(0)
    const count2 = ref(9)

    watch([count1, count2], ([foo, bar], [prevFoo, prevBar])=> {
      console.log('[count1, count2]', foo, bar, prevFoo, prevBar)
    })

    // watch(count1, (count, prevCount) => {
    //   console.log('watch count1', count, prevCount)
    // })
    setTimeout(() => {
      count1.value++
      count2.value++
    }, 1000);

    return {
      count
    }
  }
}
</script>
