<template>
  <div>
    <button id="topButton" @click="scrollToTop" v-show="showTopButton">
      <div class="progress-circle">
        <svg class="progress-svg" viewBox="0 0 100 100">
          <circle class="progress-background" cx="50" cy="50" r="45"></circle>
          <circle class="progress-bar" cx="50" cy="50" r="45" :stroke-dasharray="circleDashArray" :stroke-dashoffset="circleDashOffset"></circle>
        </svg>
      </div>
      Top
    </button>

    <!-- Your page content here -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      showTopButton: false,
      progress: 0,
      circleDashArray: 283, // Circumference of a circle with radius 45
      circleDashOffset: 283
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolledPercentage = (scrollY / (fullHeight - windowHeight)) * 100;

      this.progress = scrolledPercentage;
      this.circleDashOffset = this.circleDashArray - (scrolledPercentage * this.circleDashArray) / 100;

      if (scrollY > windowHeight / 2) {
        this.showTopButton = true;
      } else {
        this.showTopButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style>
#topButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 2px solid #3498db;
  cursor: pointer;
}

.progress-circle {
  position: relative;
  width: 60px;
  height: 60px;
}

.progress-svg {
  width: 100%;
  height: 100%;
}

.progress-background {
  fill: none;
  stroke: #ccc;
  stroke-width: 4;
}

.progress-bar {
  fill: none;
  stroke: #3498db;
  stroke-width: 4;
  transform: translate(5px, 5px);
  transition: stroke-dashoffset 0.3s ease;
}
</style>
