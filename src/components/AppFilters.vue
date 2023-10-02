<script>
import { state } from '../state';
export default {
    name: 'AppFilters',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <ul class=" list-unstyled m-0 position-fixed">
        <li v-for="genre in state.catList" @click="state.filterResults(genre)"> {{ genre }}</li>
    </ul>
</template>

<style lang=" scss" scoped>
    </style>