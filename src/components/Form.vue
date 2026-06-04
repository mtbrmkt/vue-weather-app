// From.vue

<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="city" placeholder="都市名を英語で入力">
        <button type="submit">Get Wether</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue"

const city = ref<string>("")

const emits = defineEmits<{
  "submit-form": [city: string]
}>()

const submitForm = (): void => {
    emits("submit-form", city.value)
    city.value = ""
}
</script>

