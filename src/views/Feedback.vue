<!-- src/views/Feedback.vue -->
<template>
    <section class="feedback">
        <h2>Share Your Feedback</h2>
        <p>
            Your ideas and suggestions help us build a better community. Submit your thoughts below.
        </p>

        <form @submit.prevent="submitFeedback" class="feedback-form">
            <input v-model="name" type="text" placeholder="Your name" required />
            <textarea v-model="message" placeholder="Your message or idea" required></textarea>
            <button type="submit">Submit</button>
        </form>

        <div v-if="comments.length" class="comment-list">
            <h3>Community Feedback</h3>
            <div v-for="(comment, index) in comments" :key="index" class="comment">
                <strong>{{ comment.name }}</strong>
                <p>{{ comment.message }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')
const comments = ref([])

const submitFeedback = () => {
    comments.value.push({ name: name.value, message: message.value })
    name.value = ''
    message.value = ''
}
</script>

<style scoped>
.feedback {
    max-width: 700px;
    margin: auto;
}

.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
}

.feedback-form input,
.feedback-form textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    width: 100%;
}

.feedback-form button {
    align-self: flex-start;
    padding: 0.6rem 1.2rem;
    background-color: #1a1a2e;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.comment-list {
    margin-top: 2rem;
    background-color: #f2f2f2;
    padding: 1rem;
    border-radius: 8px;
}

.comment {
    margin-bottom: 1rem;
}

.comment strong {
    color: #1a1a2e;
}
</style>