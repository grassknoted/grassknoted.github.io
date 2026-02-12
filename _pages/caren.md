---
permalink: /caren/
title: "Carrie"
author_profile: false
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Will You Be My Valentine?</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Lora', serif;
      background: hsl(350, 30%, 8%);
      color: hsl(350, 20%, 90%);
      min-height: 100vh;
      overflow-x: hidden;
    }

    h1, h2, h3 { font-family: 'Playfair Display', serif; }

    .container {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 3rem 1rem;
      gap: 2.5rem;
    }

    .question {
      text-align: center;
      animation: fadeInUp 1s ease-out 0.2s forwards;
      opacity: 0;
    }

    .question h1 {
      font-size: clamp(2rem, 6vw, 3.75rem);
      font-weight: 700;
      color: hsl(350, 80%, 55%);
      animation: pulseGlow 2s ease-in-out infinite;
    }

    .question p {
      margin-top: 0.75rem;
      font-size: 1.125rem;
      color: hsl(350, 15%, 60%);
      font-style: italic;
    }

    .ascii-art {
      opacity: 0;
      animation: fadeInUp 1s ease-out 0.6s forwards;
    }

    .ascii-art pre {
      color: hsl(350, 80%, 55%);
      font-size: clamp(6px, 1.5vw, 14px);
      line-height: 1.1;
      font-family: monospace;
      user-select: none;
      white-space: pre;
    }

    .ascii-char {
      opacity: 0;
      display: inline;
    }

    .ascii-char.visible {
      opacity: 1;
    }

    .countdown-section {
      animation: fadeInUp 1s ease-out 1s forwards;
      opacity: 0;
      text-align: center;
    }

    .countdown-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: hsl(350, 15%, 60%);
      margin-bottom: 1rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .countdown {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .countdown-unit {
      background: hsl(340, 40%, 18%);
      border-radius: 0.75rem;
      padding: 0.75rem 1rem;
      min-width: 72px;
    }

    .countdown-value {
      font-size: 1.875rem;
      font-weight: 700;
      color: hsl(350, 80%, 55%);
      animation: pulseGlow 2s ease-in-out infinite;
    }

    .countdown-label {
      font-size: 0.75rem;
      color: hsl(350, 15%, 60%);
      margin-top: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    /* Floating hearts */
    .hearts-container {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    }

    .heart {
      position: absolute;
      animation: floatHeart linear infinite;
    }

    @keyframes floatHeart {
      0% { transform: translateY(100vh) rotate(0deg) scale(0); opacity: 0; }
      10% { opacity: 1; transform: translateY(90vh) rotate(15deg) scale(1); }
      90% { opacity: 0.8; }
      100% { transform: translateY(-10vh) rotate(-15deg) scale(0.5); opacity: 0; }
    }

    @keyframes pulseGlow {
      0%, 100% { text-shadow: 0 0 20px hsla(350, 100%, 65%, 0.4); }
      50% { text-shadow: 0 0 40px hsla(350, 100%, 65%, 0.7), 0 0 60px hsla(340, 80%, 60%, 0.3); }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>

  <div class="hearts-container" id="hearts"></div>

  <div class="container">
    <div class="question">
      <h1>Will You Be My Valentine?</h1>
      <p>Caren ♥</p>
    </div>

    <div class="ascii-art">
<pre id="ascii-pre"></pre>
    </div>

    <div class="countdown-section">
      <h3 class="countdown-title">Check back here in:</h3>
      <div class="countdown">
        <div class="countdown-unit">
          <div class="countdown-value" id="days">00</div>
          <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-unit">
          <div class="countdown-value" id="hours">00</div>
          <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-unit">
          <div class="countdown-value" id="minutes">00</div>
          <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-unit">
          <div class="countdown-value" id="seconds">00</div>
          <div class="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // ASCII art drawing animation
    (function() {
      var lines = [
        "    @@@@@@           @@@@@@",
        "  @@@@@@@@@@       @@@@@@@@@@",
        "@@@@@@@@@@@@@@   @@@@@@@@@@@@@@",
        "@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@",
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        " @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        "  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        "   @@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        "    @@@@@@@@@@@@@@@@@@@@@@@@@@",
        "      @@@@@@@@@@@@@@@@@@@@@@",
        "        @@@@@@@@@@@@@@@@@@",
        "          @@@@@@@@@@@@@@",
        "            @@@@@@@@@@",
        "              @@@@@@",
        "                @@"
      ];

      var fullText = lines.join("\n");
      var totalChars = fullText.replace(/\s/g, '').length; // count only visible chars
      var pre = document.getElementById('ascii-pre');

      // Create spans for each character
      var spans = [];
      for (var i = 0; i < fullText.length; i++) {
        var ch = fullText[i];
        if (ch === "\n") {
          pre.appendChild(document.createTextNode("\n"));
        } else if (ch === " ") {
          pre.appendChild(document.createTextNode(" "));
        } else {
          var span = document.createElement('span');
          span.className = 'ascii-char';
          span.textContent = ch;
          pre.appendChild(span);
          spans.push(span);
        }
      }

      // Animate: reveal each span over 3 seconds, starting after 1s delay
      var duration = 3000;
      var delay = 1000;
      var interval = duration / spans.length;

      setTimeout(function() {
        spans.forEach(function(s, idx) {
          setTimeout(function() {
            s.classList.add('visible');
          }, idx * interval);
        });
      }, delay);
    })();

    // Floating hearts

    // Countdown
    function updateCountdown() {
      var now = new Date();
      var year = now.getFullYear();
      var vday = new Date(year, 1, 14);
      if (now > vday) vday = new Date(year + 1, 1, 14);

      var diff = vday.getTime() - now.getTime();
      if (diff <= 0) diff = 0;

      var d = Math.floor(diff / (1000 * 60 * 60 * 24));
      var h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var m = Math.floor((diff / (1000 * 60)) % 60);
      var s = Math.floor((diff / 1000) % 60);

      document.getElementById('days').textContent = String(d).padStart(2, '0');
      document.getElementById('hours').textContent = String(h).padStart(2, '0');
      document.getElementById('minutes').textContent = String(m).padStart(2, '0');
      document.getElementById('seconds').textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  </script>
</body>
</html>
