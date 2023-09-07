<template>
    <h1>index</h1>
</template>

<script setup>
const colorMode = useColorMode()

onMounted(() => {
    console.log(colorMode.value)
})
</script>

<style></style>