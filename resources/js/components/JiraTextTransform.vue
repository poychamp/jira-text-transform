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
      <span>{{ link }}</span><br>
      <span>[{{ ticketId }}] {{ title }}</span><br>
      <span>{{ branch }}</span>
    </div>
  </form>
</template>

<script>
export default{
  data: () => ({
    link: '',
    title: '',
  }),

  computed: {
    ticketId() {
      let matches = this.link.match(/\/([^\/]+)$/)

      if (! matches) {
        return ''
      }

      return matches[1]
    },

    branch() {
      if (this.title == '') {
        return ''
      }

      let strippedTitle = this.title.replace(/['"&]/g, '')
          .replace(/[ ]{2,}/g, ' ')
      let branchText = this.ticketId + ' ' + strippedTitle

      return branchText.toLowerCase().replace(/[\- _\(\)]/g, '_')
    }
  }
}
</script>