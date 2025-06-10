<template>
    <section class="solutions">
        <h2>Smart Solutions for a Better City</h2>
        <p>
            Here are some innovative and tech-driven solutions to tackle our urban challenges and improve the quality of
            life.
        </p>

        <div class="solution-list">
            <div class="solution-card">
                <h3>🚦 Smart Traffic Lights</h3>
                <p>
                    Use AI-based traffic signals that adapt to real-time congestion levels, reducing idle time and
                    improving flow.
                </p>
                <img :src="IMAGE_URLS.SMART_TRAFFIC_LIGHTS" alt="Smart traffic lights" />
            </div>

            <div class="solution-card">
                <h3>🗑️ IoT-Enabled Smart Bins</h3>
                <p>
                    Bins that notify authorities when full and help optimize collection routes to save fuel and time.
                </p>
                <img :src="IMAGE_URLS.SMART_BINS" alt="Smart waste bin" />
            </div>

            <div class="solution-card">
                <h3>☀️ Solar Panel Grids</h3>
                <p>
                    Promote community solar programs to reduce dependency on non-renewable sources and lower electricity
                    bills.
                </p>
                <img :src="IMAGE_URLS.SOLAR_PANEL_GRIDS" alt="Solar panel solution" />
            </div>
        </div>

        <!-- Interactive Tools -->
        <EnergyTracker />
        <SmartCommutePlanner />
    </section>
</template>

<script setup>
import EnergyTracker from '../components/EnergyTracker.vue'
import SmartCommutePlanner from '../components/SmartCommutePlanner.vue'
import { IMAGE_URLS } from '../constants/imageUrl'
</script>

<style scoped>
.solutions {
    max-width: 900px;
    margin: auto;
}

.solution-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.solution-card {
    background-color: #ecf7f6;
    padding: 1.2rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
}

.solution-card:hover {
    transform: translateY(-5px);
    background-color: #d7f5f1;
}

.solution-card img {
    width: 100%;
    border-radius: 6px;
    margin-top: 0.5rem;
}
</style>