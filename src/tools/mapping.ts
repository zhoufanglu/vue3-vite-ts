import type { Component } from 'vue'

const mapping = (modules: any) => {
  const components: Record<string, Component> = {}

  Object.keys(modules).forEach((key) => {
    // 例如：./components/A.vue => A
    const match = key.match(/\/([^\/]+)\.vue$/)
    if (match) {
      const name = match[1]
      components[name] = modules[key].default
    }
  })

  return components
}

export default mapping
