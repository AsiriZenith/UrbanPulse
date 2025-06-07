<template>
    <section class="local-issues">
        <h2>Local Urban Challenges</h2>
        <p>
            Every city has its unique set of challenges. Here are some key issues affecting our locality and
            how they impact everyday urban life.
        </p>

        <div class="issue-list">
            <div class="issue-card">
                <h3>🚦 Traffic Congestion</h3>
                <p>
                    Increasing number of vehicles and poor traffic signal synchronization lead to long commute times.
                </p>
                <img src="/assets/traffic.jpg" alt="Traffic jam in city" />
            </div>

            <div class="issue-card">
                <h3>🗑️ Waste Disposal</h3>
                <p>
                    Lack of organized garbage separation and insufficient recycling practices lead to environmental
                    harm.
                </p>
                <img src="/assets/waste.jpg" alt="Waste problem image" />
            </div>

            <div class="issue-card">
                <h3>⚡ Energy Consumption</h3>
                <p>
                    Heavy reliance on non-renewable energy sources increases the city's carbon footprint.
                </p>
                <img src="/assets/energy.jpg" alt="High energy usage" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.local-issues {
    max-width: 900px;
    margin: auto;
}

.issue-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.issue-card {
    background-color: #f9f9f9;
    padding: 1.2rem;
    border-radius: 8px;
    transition: box-shadow 0.2s ease;
}

.issue-card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.issue-card img {
    width: 100%;
    border-radius: 6px;
    margin-top: 0.5rem;
}
</style>