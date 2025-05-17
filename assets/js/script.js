document.addEventListener('DOMContentLoaded', function () {
  // Testimonial slider logic
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  let current = 0;
  let interval = null;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      dots[i].classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  interval = setInterval(nextSlide, 5000);

  // Video controller logic (merged from video-controller.js)
  const video = document.querySelector('.video-element');
  const playCircle = document.querySelector('.play-circle');
  const playIcon = document.querySelector('.play-icon');

  if (video && playCircle && playIcon) {
    const togglePlayPause = () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    // Click handler on play button container
    playCircle.parentElement.addEventListener('click', togglePlayPause);

    video.addEventListener('play', () => {
      playCircle.classList.add('hidden');
      playIcon.classList.add('hidden');
    });

    video.addEventListener('pause', () => {
      playCircle.classList.remove('hidden');
      playIcon.classList.remove('hidden');
    });

    video.addEventListener('ended', () => {
      playCircle.classList.remove('hidden');
      playIcon.classList.remove('hidden');
    });
  }
});

// ...existing code...

// Contact Modal Logic
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  if (form && modal && closeBtn) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    });
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
    // Optional: close modal on overlay click
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  }
});