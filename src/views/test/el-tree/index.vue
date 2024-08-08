<script setup lang="ts">
  interface Tree {
    label: string
    children?: Tree[]
  }
  const curNode = ref()
  const treeRef = ref()
  const handleNodeClick = (data: Tree) => {
    // console.log(9, data)
    curNode.value = data
    treeRef!.value.setCurrentKey(data.label)
  }

  const data = ref<Tree[]>([
    {
      label: 'Level one 1',
      children: [
        {
          label: 'Level two 1-1',
          children: [
            {
              label: 'Level three 1-1-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 2',
      children: [
        {
          label: 'Level two 2-1',
          children: [
            {
              label: 'Level three 2-1-1',
            },
          ],
        },
        {
          label: 'Level two 2-2',
          children: [
            {
              label: 'Level three 2-2-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 3',
      children: [
        {
          label: 'Level two 3-1',
          children: [
            {
              label: 'Level three 3-1-1',
            },
          ],
        },
        {
          label: 'Level two 3-2',
          children: [
            {
              label: 'Level three 3-2-1',
            },
          ],
        },
      ],
    },
  ])

  const defaultProps = {
    children: 'children',
    label: 'label',
  }

  const remove = (node: any, data: any) => {
    // console.log(78, node.label)
    const parent = node.parent
    const children: Tree[] = parent.data.children || parent.data
    const index = children.findIndex((d) => d.label === data.label)
    // ?如果删除的元素是当前选中的元素
    if (true) {
      // console.log(84, children)
      const prev = children[index - 1]
      const next = children[index + 1]
      // !优先找上一个， 如果没有找下一个，再没有就找父元素
      const curKey: string = prev?.label || next?.label || parent?.label
      /* console.log('prev', prev)
      console.log('next', next)
      console.log('parent', parent) */

      children.splice(index, 1)
      setTimeout(() => {
        setCurrentNode(curKey)
      })
    } else {
      console.log('单纯移除')
      children.splice(index, 1)
    }
  }

  onMounted(() => {
    // ?设置默认选中项
    setCurrentNode('Level one 1')
  })

  function setCurrentNode(key: string) {
    console.log('设置的key', key)
    treeRef!.value.setCurrentKey(key)
    curNode.value = treeRef!.value.getNode(key)
  }
</script>
<template>
  <div class="">
    <iframe
      src="https://www.eptrade.cn/ep-trade/#/pages/cargo/index?mmsi=369207000&startTime=1723010400&endTime=1723015563&ac=F123CC81FFDD42C781D8507377D0F307&appFrom=KJGF"
      style="width: 500px; height: 500px"
    ></iframe>
    <el-button @click="setCurrentNode('Level one 2')">test</el-button>
    <el-tree
      ref="treeRef"
      :default-expanded-keys="['Level one 1']"
      :highlight-current="true"
      :expand-on-click-node="false"
      node-key="label"
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <!--          <a @click="append(data)"> Append </a>-->
            <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<style scoped lang="scss">
  .test {
  }
</style>
