import { createWorker } from 'tesseract.js'
import { ref } from 'vue'

export function useOcr() {
  const renderText = ref('')
  const discernImg = async (img: any) => {
    const worker = await createWorker()
    await worker.loadLanguage('chi_sim')
    await worker.initialize('chi_sim')

    const {
      data: { text },
    } = await worker.recognize(img)
    renderText.value = text
    await worker.terminate()
  }

  /* const loadImageFromBase64 = (base64Image: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
        ctx!.drawImage(img, 0, 0, img.width, img.height)
        resolve(canvas.toDataURL('image/png'))
      }
      img.onerror = (error) => reject(error)
      img.src = base64Image
    })
  }
*/

  return {
    discernImg,
    renderText,
  }
}
