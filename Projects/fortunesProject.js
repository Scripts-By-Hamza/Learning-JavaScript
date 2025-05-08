const fortunes = [
    "🌈 Great luck is coming your way.",
    "💀 Avoid making big decisions today.",
    "🧠 You will solve a problem that's been bothering you.",
    "🐸 A strange animal will cross your path soon.",
    "🚀 You're about to start something amazing.",
    "⏳ Be patient — timing is everything.",
    "🧭 Trust your instincts over logic today.",
    "🎭 Someone is hiding something from you.",
    "📚 Learn something new — it’ll change your week.",
    "🪞 Reflection will lead to clarity."
  ];

  function revealFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    document.getElementById('fortune').textContent = fortune;

    // Optional: Change background for extra mystique
    const colors = ['#1e3c72', '#2c5364', '#0f2027', '#3a6186', '#000428'];
    document.body.style.background = `linear-gradient(to right, ${colors[randomIndex % colors.length]}, #2a5298)`;
  }