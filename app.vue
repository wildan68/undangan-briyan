<template>
  <div>
    <Cover v-if="!store.openInvitation" />
    <Content v-else />
  </div>
</template>

<script setup>
const store = useStore()
</script>