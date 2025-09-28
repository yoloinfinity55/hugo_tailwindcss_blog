module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBg: '#FFFFFF',
        lightText: '#333333',
        lightAccent: '#007BFF',
        darkBg: '#1A202C',
        darkText: '#E2E8F0',
        darkAccent: '#63B3ED',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
    },
  },
  plugins: [],
};