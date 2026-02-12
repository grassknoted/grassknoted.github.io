---
permalink: /caren/
title: "Valentine's Day"
author_profile: false
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Arial', sans-serif;
            overflow-x: hidden;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .container {
            text-align: center;
            padding: 20px;
            position: relative;
            z-index: 10;
        }

        h1 {
            color: white;
            font-size: 3em;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: fadeInDown 1s ease-in;
        }

        .valentine-message {
            font-size: 2em;
            color: #ffcccc;
            margin: 30px 0;
            animation: fadeIn 2s ease-in;
        }

        .heart {
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: #ff6b9d;
            transform: rotate(45deg);
            animation: float 3s ease-in-out infinite;
            opacity: 0.8;
        }

        .heart:before,
        .heart:after {
            content: "";
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: #ff6b9d;
            border-radius: 50%;
        }

        .heart:before {
            left: -25px;
        }

        .heart:after {
            top: -25px;
        }

        @keyframes float {
            0%, 100% {
                transform: rotate(45deg) translateY(0px);
            }
            50% {
                transform: rotate(45deg) translateY(-20px);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .countdown-section {
            margin-top: 60px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }

        .countdown-text {
            color: white;
            font-size: 1.2em;
            margin-bottom: 20px;
        }

        .countdown {
            font-size: 2.5em;
            color: #ffcccc;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .under-construction {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1em;
            margin-top: 15px;
            font-style: italic;
        }
    </style>
</head>
<body>
    <!-- Floating Hearts -->
    <div class="heart" style="top: 10%; left: 10%; animation-delay: 0s;"></div>
    <div class="heart" style="top: 20%; left: 80%; animation-delay: 1s;"></div>
    <div class="heart" style="top: 60%; left: 15%; animation-delay: 2s;"></div>
    <div class="heart" style="top: 70%; left: 85%; animation-delay: 0.5s;"></div>
    <div class="heart" style="top: 40%; left: 90%; animation-delay: 1.5s;"></div>
    <div class="heart" style="top: 80%; left: 5%; animation-delay: 2.5s;"></div>

    <div class="container">
        <h1>Happy Birthday!</h1>

        <div class="valentine-message">
            Will You Be My Valentine? 💕
        </div>

        <div class="countdown-section">
            <div class="countdown-text">
                This page is still being built...
            </div>
            <div class="countdown-text">
                Check back in:
            </div>
            <div class="countdown" id="countdown"></div>
            <div class="under-construction">
                Something special is coming your way!
            </div>
        </div>
    </div>

    <script>
        // Set the countdown end time (30 hours from now)
        const endTime = new Date().getTime() + (30 * 60 * 60 * 1000);

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                document.getElementById("countdown").innerHTML = "TIME'S UP!";
                return;
            }

            const hours = Math.floor(distance / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML =
                hours + "h " + minutes + "m " + seconds + "s";
        }

        // Update the countdown every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    </script>
</body>
</html>
