<template>
  <div>
    <div class=""> keep-alive-test </div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable
      class="demo-tabs"
      @edit="handleTabsEdit"
    >
      <div> 当前选中:{{ editableTabsValue }} </div>
      <div> 缓存的组件： {{ bindKeys }} </div>
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <!--      {{ item.content }}-->
      </el-tab-pane>
    </el-tabs>
    <!--  <div style="border: solid 1px green; padding: 20px">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="renderRouterCom(Component)" :key="editableTabsValue" />
        </keep-alive>
      </router-view>
    </div>-->
    <div style="border: solid 1px red">
      <h4>测试动态渲染component</h4>
      <component :is="renderCom()"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
  import testCom from './testCom.vue'
  import { ref, watch, h, resolveComponent } from 'vue'
  import { useRouter } from 'vue-router'
  import keepAliveComponent from '../keep-alive-detail/index.vue'
  import { useDynamicComponent } from '@/views/test/keep-alive/useDynamicComponent'
  import { divide } from 'lodash'
  const { getComponent, comName } = useDynamicComponent()

  const router = useRouter()
  /*const handleClick = (tab: TabsPaneContext, event: Event) => {
    router.push({
      path: `/keep-alive-detail/${tab.props.name}`
    })
  }*/
  let tabIndex = 2
  const editableTabsValue = ref('1')
  const editableTabs = ref([
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content'
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content'
    }
  ])

  const handleTabsEdit = (targetName: string, action: 'remove' | 'add') => {
    if (action === 'add') {
      const newTabName = `${++tabIndex}`
      editableTabsValue.value = '3'
      editableTabs.value.push({
        title: 'Tab 3',
        name: '3',
        content: 'Tab 3'
      })
      // editableTabsValue.value = newTabName
      editableTabsValue.value = '3'
    } else if (action === 'remove') {
      const tabs = editableTabs.value
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      editableTabsValue.value = activeName
      editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
  }
  const bindKeys = ref(['1', '2'])
  const test1 = ref(null)
  watch(editableTabsValue, (val) => {
    // console.log(85, val)
    bindKeys.value = editableTabs.value.map((i: any) => `Tab-${i.name}`)
    comName.value = val
    router.push({
      path: `/keep-alive-detail/${val}`
    })
  })

  const renderCom = () => {
    return h('div', null, {
      default: () => h('div', null, 'aa'),
      name: 'test'
    })
    /*return {
      render() {
        return h('div', null, {
          default: () => h(testCom),
          name: 'test'
        })
      }
    }*/

    /*console.log(103, keepAliveComponent)
    const test = resolveComponent('keepAliveComponent')
    return h(test)*/
    /*return h(
      {
        name: `Tab-${editableTabsValue.value}`,
        render() {
          //return this.$slots.default()
          //return () => {}
        }
      },
      null,
      'aaa'
    )*/
    /*return {
      render: () => {
        return h({
          name: `Tab-${editableTabsValue.value}`,
          render() {
            console.log(editableTabsValue.value)
            return h('span', null, 'ssss')
            // return this.$slots.default()
          }
        })
      }
    }*/
  }

  const renderRouterCom = (com: any) => {
    com.ctx.ctx.name = 'test'
    console.log(114, com.ctx)
    return com
  }
</script>

<style scoped lang="scss">
  .test {
  }
</style>
