<script>
export default {
    name: 'AppLogo'
}
</script>

<template>
    <h1>Boolflix</h1>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

h1 {
    color: $bf_logo;
    font-size: 5rem;
    font-family: $logo_font;
    text-shadow: 3px 3px 20px #ffffff47;
}
</style>