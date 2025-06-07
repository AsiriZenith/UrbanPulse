<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav>
        <h1 class="logo">UrbanPulse</h1>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/local-issues">Local Issues</router-link></li>
          <li><router-link to="/solutions">Solutions</router-link></li>
          <li><router-link to="/events">Events</router-link></li>
          <li><router-link to="/feedback">Feedback</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2025 UrbanPulse. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// no logic needed yet
</script>

<style scoped>
/* Basic layout styles */
#app {
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #1a1a2e;
  padding: 1rem 2rem;
  color: #fff;
}

.logo {
  margin: 0;
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
}

main {
  flex: 1;
  padding: 2rem;
}

footer {
  background-color: #1a1a2e;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>
