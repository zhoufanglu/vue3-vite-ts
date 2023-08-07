<script setup lang="ts">
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { Plus } from '@element-plus/icons-vue'
  import { useOcr } from '@/views/test/ocr/useOcr'
  import type { UploadProps } from 'element-plus'
  import { setStringProp } from '@/utils/props'
  import { Props } from './props'

  /* const prop = defineProps({
    name: setStringProp('name'),
  }) */
  const prop = defineProps(Props)
  // console.log(14, prop.name)
  const { discernImg, renderText } = useOcr()

  /** ********************图片上传***********************/
  const imageUrl = ref('')

  const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    discernImg(uploadFile.raw!)
  }

  const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    /* if (rawFile.type !== 'image/jpeg') {
      ElMessage.error('Avatar picture must be JPG format!')
      return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error('Avatar picture size can not exceed 2MB!')
      return false
    } */
    return true
  }
</script>
<template>
  <div class="p-ocr">
    <el-tooltip
      trigger="click"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      >dsdsds</el-tooltip
    >
    {{ ocrName }}
    <el-upload
      class="avatar-uploader"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    {{ renderText }}
  </div>
</template>

<style lang="scss">
  .p-ocr {
    padding: 20px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  .avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
</style>
