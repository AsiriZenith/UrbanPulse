<template>
    <section class="home">
        <img :src="IMAGE_URLS.CITY_BANNER" alt="City Banner" class="banner" />
        <h2>Welcome to UrbanPulse</h2>
        <p>
            UrbanPulse is your digital guide to smarter and greener city living. Explore how
            technology, sustainability, and community efforts can shape the future of our
            urban environment.
        </p>

        <div class="features">
            <div class="feature-card">
                <h3>🚗 Traffic Management</h3>
                <p>Discover smarter ways to reduce congestion and improve commute times.</p>
            </div>
            <div class="feature-card">
                <h3>⚡ Energy Efficiency</h3>
                <p>Learn how smart grids and solar energy can reduce power consumption.</p>
            </div>
            <div class="feature-card">
                <h3>🗑️ Waste Management</h3>
                <p>See how tech helps improve recycling and reduce landfill waste.</p>
            </div>
            <div class="feature-card">
                <h3>🌳 Urban Greening</h3>
                <p>Explore green spaces, rooftop gardens, and eco-friendly designs.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { IMAGE_URLS } from '../constants/imageUrl';
</script>

<style scoped>
.home {
    max-width: 900px;
    margin: auto;
    text-align: center;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.feature-card {
    padding: 1.2rem;
    border-radius: 8px;
    background-color: #f2f2f2;
    transition: transform 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    background-color: #e6f0ff;
}

.banner {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1.5rem;
}
</style>
