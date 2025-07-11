// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Text counting logic
  const textarea = document.getElementById('inputText');
  const charCountEl = document.getElementById('charCount');
  const spaceCountEl = document.getElementById('spaceCount');
  const wordCountEl = document.getElementById('wordCount');
  const sentenceCountEl = document.getElementById('sentenceCount');
  const paragraphCountEl = document.getElementById('paragraphCount');

  function updateCounts() {
    const text = textarea.value;
    const charCount = text.length;
    const spaceCount = (text.match(/\s/g) || []).length;
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const sentenceCount = (text.match(/[^\.!\?]+[\.!\?]+/g) || []).length;
    const paragraphCount = text.trim() === ''
      ? 0
      : text.split(/\n+/).filter(p => p.trim() !== '').length;

    charCountEl.textContent = charCount;
    spaceCountEl.textContent = spaceCount;
    wordCountEl.textContent = wordCount;
    sentenceCountEl.textContent = sentenceCount;
    paragraphCountEl.textContent = paragraphCount;
  }

  textarea.addEventListener('input', updateCounts);
  updateCounts();

  // FAQ accordion logic
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
});
