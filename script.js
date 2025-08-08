document.getElementById('post-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const textarea = this.querySelector('textarea');
  const text = textarea.value.trim();
  if (!text) return;
  const posts = document.getElementById('posts');
  const div = document.createElement('div');
  div.className = 'post';
  div.textContent = text;
  posts.prepend(div);
  textarea.value = '';
});
