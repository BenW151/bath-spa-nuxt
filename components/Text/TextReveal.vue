<template>
  <component :is="tag" class="text-reveal" ref="textContainer">
    <slot></slot>
  </component>
</template>

<style>
@keyframes reveal {
  0% {
    transform: translateY(100%);
    rotate: 2deg;
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    rotate: 0deg;
    opacity: 1;
  }
}

.text-reveal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.reveal-mask {
  overflow: hidden;
  display: inline-block;
  height: auto;
}

.word {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  rotate: 2deg;
  animation: none;
  white-space: pre;
}

.line-container {
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

.hero-text .line-container {
  justify-content: center;
}

@media (max-width: 767px) {
  .text-reveal {
    grid-column: span 6;
  }
}
</style>

<script setup>
import { ref, defineProps, onMounted } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

const textContainer = ref(null);

onMounted(() => {
  if (textContainer.value) {
    prepareText(textContainer.value);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed for when the animation should trigger
      }
    );

    observer.observe(textContainer.value);
  }
});

function prepareText(container) {
  const text = container.innerHTML;
  container.innerHTML = ""; // Clear initial content
  const lines = text.split(/<br\s*\/?>/i);
  lines.forEach((line) => {
    const lineContainer = document.createElement("div");
    lineContainer.className = "line-container";
    const words = line.trim().split(/\s+/);
    words.forEach((word, index) => {
      const wordContainer = document.createElement("div");
      wordContainer.className = "reveal-mask";
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";
      // Add a space after each word except the last
      wordSpan.textContent = word + (index < words.length - 1 ? " " : "");
      wordContainer.appendChild(wordSpan);
      lineContainer.appendChild(wordContainer);
    });
    container.appendChild(lineContainer);
  });
}

function animateText(container) {
  const words = container.querySelectorAll(".word");
  words.forEach((word, index) => {
    setTimeout(() => {
      word.style.animation = "reveal 0.6s forwards";
    }, 100 * index); // Delay can be adjusted
  });
}
</script>
