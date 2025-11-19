---
layout: null
title: Fall
permalink: /fall/
sitemap: false
---

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Fall</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            background-image: url('/assets/img/fall-background.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
        }

        /* Falling leaves GIF overlay */
        .leaves-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: url('/assets/img/fall-leaves.gif');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            pointer-events: none;
            z-index: 10;
        }

        /* Centered card container */
        .container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            padding: 20px;
        }

        .card {
            background: rgba(255, 255, 255, 0.52);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 40px;
            max-width: 600px;
            width: 90%;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            text-align: center;
            animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        h1 {
            font-size: 2.5rem;
            color: #8B4513;
            margin-bottom: 24px;
            font-weight: 600;
            letter-spacing: -0.5px;
        }

        #secret-message {
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
            white-space: pre-wrap;
            word-wrap: break-word;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Loading state */
        .card.loading #secret-message::after {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid #ddd;
            border-top-color: #8B4513;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        /* Error state */
        .card.error #secret-message {
            color: #D32F2F;
            font-size: 0.95rem;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
            h1 {
                font-size: 1.8rem;
            }

            .card {
                padding: 30px 20px;
            }

            #secret-message {
                font-size: 0.95rem;
            }
        }
    </style>
</head>

<body>
    <!-- Falling leaves GIF overlay -->
    <div class="leaves-overlay"></div>

    <!-- Content card -->
    <div class="container">
        <div class="card loading" id="card">
            <h1>🍁 Fall 🍁</h1>
            <div id="secret-message"></div>
        </div>
    </div>

    <script>
        (function() {
            const secretMessageEl = document.getElementById('secret-message');
            const cardEl = document.getElementById('card');

            // PLACEHOLDER: Replace this URL with your private Gist raw URL
            const GIST_URL = 'https://gist.githubusercontent.com/grassknoted/0cba6ad46dbc0aaf0903c987b4ab9abe/raw/274196f4b3562dd19f61702cba64906563d1e4a0/gistfile1.txt';

            // Fetch and display secret message from private Gist
            fetch(GIST_URL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(text => {
                    secretMessageEl.innerText = text;
                    cardEl.classList.remove('loading');
                })
                .catch(error => {
                    console.error('Failed to load secret message:', error);
                    secretMessageEl.innerText = 'Something was here... but now it remains a secret.';
                    cardEl.classList.remove('loading');
                    cardEl.classList.add('error');
                });
        })();
    </script>
</body>
</html>
