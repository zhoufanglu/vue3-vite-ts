import { ExtractPropTypes, PropType } from 'vue'
import { setNumberProp, setStringProp } from '@/utils/props'

export const Props = {
  ocrName: {
    type: String as PropType<string>,
    default: () => 'Nicky',
  },
  age: {
    type: Number as PropType<number>,
    default: () => 18,
  },
} as const

export const Props2 = {
  ocrName: setStringProp('Nicky'),
  age: setNumberProp(18),
} as const

export type OcrPropsType = ExtractPropTypes<typeof Props>
