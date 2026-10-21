"use strict";

(() => {
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const targets = [
    ".hero-copy",
    ".enquiry-card",
    ".stats-row",
    ".section-head",
    ".course-tools",
    ".course-card",
    ".finder-layout > *",
    ".quiz-panel",
    ".corporate-training-copy",
    ".corporate-training-visual",
    ".corporate-training-points li",
    ".road-step",
    ".mentor-card",
    ".mentor-guidance-copy",
    ".mentor-teaching-visual",
    ".mentor-support-point",
    ".benefits-intro",
    ".addon-benefit-card",
    ".benefits-note",
    ".progress-intro > *",
    ".progress-card",
    ".progress-cta",
    ".internship-heading",
    ".internship-course-card",
    ".story-photo",
    ".story-testimonial",
    ".faq-list > *",
    ".closing-inner",
    ".about-hero-copy",
    ".about-hero-visual",
    ".about-learning-layout > *",
    ".about-principle",
    ".about-course-flow",
    ".about-course-flow li",
    ".about-course",
    ".about-support-layout > *",
    ".about-footer > *",
    ".footer-grid > *",
  ].join(",");

  if (motionPreference.matches || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

  function observe(root) {
    const elements = [];
    if (root instanceof Element && root.matches(targets)) elements.push(root);
    if (root.querySelectorAll) elements.push(...root.querySelectorAll(targets));
    elements.forEach((element) => {
      if (element.classList.contains("motion-item")) return;
      element.classList.add("motion-item");
      element.style.setProperty("--motion-delay", `${Math.min(elements.indexOf(element), 5) * 55}ms`);
      observer.observe(element);
    });
  }

  document.documentElement.classList.add("motion-ready");
  observe(document);
  new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node instanceof Element) observe(node);
    }));
  }).observe(document.body, { childList: true, subtree: true });

  motionPreference.addEventListener("change", (event) => {
    if (event.matches) {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    }
  });
})();
