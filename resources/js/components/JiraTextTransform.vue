<template>
  <form>
    <div class="mb-2">
      <input class="form-control"
             type="text"
             v-model="link"
             placeholder="Link" />
    </div>

    <div class="mb-2">
      <input class="form-control"
             type="text"
             v-model="title"
             placeholder="Title" />
    </div>

    <div class="highlight">
      <span>[] {{ title }}</span>
    </div>
  </form>
</template>

<script>
export default{
  data: () => ({
    link: '',
    title: '',
  }),
}
</script>