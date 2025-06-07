<!-- src/views/Events.vue -->
<template>
    <section class="events">
        <h2>Community Events & Activities</h2>
        <p>
            Join hands with the community to build a smarter and greener city. Here are some upcoming events promoting
            sustainability and innovation.
        </p>

        <div class="event-list">
            <div class="event-card">
                <h3>🌍 City Clean-Up Drive</h3>
                <p><strong>Date:</strong> June 15, 2025</p>
                <p>
                    Volunteer for a city-wide clean-up campaign to promote environmental awareness and reduce litter.
                </p>
                <img src="/assets/cleanup-event.jpg" alt="Clean-up event" />
            </div>

            <div class="event-card">
                <h3>💡 Smart City Tech Expo</h3>
                <p><strong>Date:</strong> July 10, 2025</p>
                <p>
                    Explore smart devices, green technology, and IoT-based solutions showcased by students and local
                    startups.
                </p>
                <img src="/assets/tech-expo.jpg" alt="Smart tech expo" />
            </div>

            <div class="event-card">
                <h3>🌿 Urban Garden Workshop</h3>
                <p><strong>Date:</strong> August 5, 2025</p>
                <p>
                    Learn how to build rooftop gardens and use composting for household waste in this free community
                    session.
                </p>
                <img src="/assets/garden-workshop.jpg" alt="Garden workshop" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.events {
    max-width: 900px;
    margin: auto;
}

.event-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.event-card {
    background-color: #fefae0;
    padding: 1.2rem;
    border-radius: 8px;
    transition: background-color 0.2s ease;
}

.event-card:hover {
    background-color: #f8f1c3;
}

.event-card img {
    width: 100%;
    border-radius: 6px;
    margin-top: 0.5rem;
}
</style>