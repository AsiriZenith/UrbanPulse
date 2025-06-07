<template>
  <div class="energy-tracker">
    <h3>⚡ Energy Usage Tracker</h3>
    <label for="usage">Estimated Monthly Usage (kWh):</label>
    <input type="range" id="usage" v-model="usage" min="50" max="1000" step="10" />
    <p><strong>{{ usage }} kWh</strong></p>
    <p>Estimated Cost: <strong>LKR {{ estimatedCost }}</strong></p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const usage = ref(300) // default value

// Assume LKR 50 per kWh
const estimatedCost = computed(() => (usage.value * 50).toFixed(2))
</script>

<style scoped>
.energy-tracker {
  background-color: #f0faff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.energy-tracker input[type='range'] {
  width: 100%;
  margin: 1rem 0;
}
</style>
