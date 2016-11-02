export default {
  get: () => localStorage.getItem('language') || 'ru',
  set: (language) => localStorage.setItem('language', language)
};
