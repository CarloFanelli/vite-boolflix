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

        <form action="" @submit.prevent="$emit('performSearch')" class="">


            <input type="text" v-model="state.query" class=" rounded-3 w-50 mx-2">
            <button type="submit" class="rounded-circle text-uppercase"><i class="fa fa-search" aria-hidden="true"></i>
            </button>

        </form>
        <div class="text-center">

            <span class="text-start" v-show="state.querySpan != ''">hai cercato {{ state.querySpan }}</span>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


form {
    input {

        background: $type_bg;
        color: white;

    }

    button {
        color: white;
        background: $bf_logo;
    }
}
</style>