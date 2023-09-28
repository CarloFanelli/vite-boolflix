<script>
import { state } from '../state';

export default {
    name: 'AppSearch',
    emits: ['performSearch'],
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="search">

        <form action="" @submit.prevent="$emit('performSearch')">

            <input type="text" v-model="state.query">
            <button type="submit">cerca</button>
        </form>
        <span class="text-start">hai cercato {{ state.querySpan }}</span>
    </div>
</template>

<style lang="scss" scoped></style>