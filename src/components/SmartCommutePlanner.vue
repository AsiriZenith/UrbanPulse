<template>
    <div class="commute-planner">
        <h3>🚶 Smart Commute Planner</h3>
        <label for="start">Start Location:</label>
        <select id="start" v-model="start">
            <option disabled value="">Select start</option>
            <option v-for="place in places" :key="place">{{ place }}</option>
        </select>

        <label for="end">End Location:</label>
        <select id="end" v-model="end">
            <option disabled value="">Select destination</option>
            <option v-for="place in places" :key="place">{{ place }}</option>
        </select>

        <div v-if="start && end" class="suggestion">
            <p>
                Best Green Commute Option from <strong>{{ start }}</strong> to <strong>{{ end }}</strong>:
            </p>
            <p class="highlight">{{ suggestedCommute }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const start = ref('')
const end = ref('')

const places = ['Town Center', 'University', 'Tech Park', 'Train Station', 'Residential Area']

const suggestedCommute = computed(() => {
    if (start.value === end.value) return 'Start and end cannot be the same.'

    const ecoOptions = ['Walking', 'Cycling', 'Electric Bus', 'Metro']
    const index = (start.value.length + end.value.length) % ecoOptions.length
    return ecoOptions[index]
})
</script>

<style scoped>
.commute-planner {
    background-color: #fff8f0;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.commute-planner label {
    display: block;
    margin-top: 1rem;
}

.commute-planner select {
    width: 100%;
    padding: 0.6rem;
    margin-top: 0.3rem;
    border-radius: 6px;
    border: 1px solid #ccc;
}

.suggestion {
    margin-top: 1.5rem;
    background-color: #e1ffe1;
    padding: 1rem;
    border-radius: 6px;
    text-align: center;
}

.highlight {
    font-weight: bold;
    color: #006600;
    font-size: 1.1rem;
}
</style>