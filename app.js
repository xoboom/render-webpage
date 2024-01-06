

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));
app.use(express.static('public'));
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html')); // Serve the blog.html file
  });


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <title>OptiMove</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter&family=Roboto:wght@400;500&display=swap');

    * {
        font-family: Inter, Roboto, sans-serif;
    }
    
    body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        background-image: linear-gradient(to right, #42275a, black);
    }
    
    .header {
        background-image: linear-gradient(to right, rgba(204, 43, 94, 0.35), rgba(117, 58, 136, 0.35));
        color: white;
        text-align: center;
        display: flex;
        justify-content: space-between;
        height: 55px;
        align-items: center;
        border-bottom: 1px solid black;
        position: fixed;
        width: 100%;
        box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.2 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
    }
    
    .CompanyName {
        padding: 0px 10px;
    }
    
    .sub-header,
    .subs {
        text-decoration: none;
        list-style-type: none;
        color: white;
        padding: 0px 15px; 
    }
    .sub-header {
        display: flex;
        flex-direction: row;
    }
    
    .sub-header, .subs:hover {
        color: cornflowerblue;
        transition: ease-in-out 0.2s;
    }
    
    .main-banner {
        background-image: url('TensegrityManBG.png'); /* Add your background image here */
        background-size: cover; /* Cover the entire area of the element */
        background-repeat: no-repeat; /* Do not repeat the image */
        text-align: center;
        padding: 95px 10px;
    }
    
    .main-banner span {
        color: red;
    }
    
    .main-banner h1 {
        margin: 0;
        color: white;
    }
    .main-banner p {
        color: white;
        display: flex;
        justify-content: center;
    }
    .main-banner ul {
        display: flex;
        color: white;
        text-decoration: none;
        list-style-type: none;
        padding: 10px 30%;
    }
    
    .main-banner #checklist {
        justify-content: space-between;
    }
    
    .main-banner img {
        width: 80%;
        height: 10rem;
        object-fit: cover;
    }
    
    .btn {
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 700;
        font-size: large;
    }
    .btn-primary {
        background-color: #f7a32e;
        border: none;
        padding: 12px 20px;
        margin: 10px;
        cursor: pointer;
        color: #333333;
        border-radius: 6px;
        box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.2), 
                    0 4px 6px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
        background-image: linear-gradient(to bottom, #f8b133, #f7a32e);
        transition: all 0.1s ease-in-out;
    }
    .btn-primary:active {
        box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.3);
        transform: translateY(2px);
    }
    .btn-primary:hover {
        background-image: linear-gradient(to bottom, #e09e2b, #d89128);
    }
    
    .btn-secondary {
        background-color: transparent;
        color: #ADD8E6;
        border: 4px solid #ADD8E6;
        cursor: pointer;
    }
    
    .features {
        display: flex;
        justify-content: space-around;
        padding: 20px;
        background: black;
        color: white;
        background-image: linear-gradient(to right, #42275a, black);
    }
    
    .feature-item {
        width: 30%;
        text-align: center;
    }
    
    .feature-item img {
        max-width: 100%;
        height: auto;
    }
    
    .footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 10px 20px;
    }
    
    @media (max-width: 858px) {
        .features {
            flex-direction: column;
            align-items: center;
        }
        .feature-item {
            width: 100%;
        }
        .feature-item img {
            width: 90% !important;
            height: auto !important;
        }
        .main-banner ul {
            padding: 0px 20px;
        }
        .main-banner {
            background-position: center; /* Center the image in the element */
        }
    }
    
    @keyframes rotateGradient {
        100% {
            background-position: 0% 50%;
        }
        0% {
            background-position: -200% 50%;
        }
      }
    
      .gradient-text {
        background: linear-gradient(90deg, red, orange, yellow, blue, red, orange, yellow, blue);
        background-size: 400% auto;
        color: transparent;
        background-clip: text;
        text-fill-color: transparent; /* Fallback: Need to duplicate color, can't be transparent */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: rotateGradient 150s linear infinite;
        display: inline;
      }
    </style>
</head>

<body>

    <div class="header">
        <h2 class="CompanyName">OptiMove</h2>
        <nav>
            <ul class="sub-header">
                <li><a href="/blog.html" class="subs">Blog</a></li>
                <li><a href="#" class="subs">Support</a></li>
            </ul>
        </nav>
    </div>

    <div class="main-banner">
        <h1>Optimize Your Mechanics, Get <span class="gradient-text">Pain Free!</span></h1>
        <p>Get started with a consultation</p>
        <a rel="noopener" target="_blank" href="https://calendly.com/optimove-training/30min" ><button class="btn btn-primary">Click here to book!</button></a>
        <button class="btn btn-secondary">Have questions?</button>
        <p>Breakthrough cutting edge physical application designed to correct dysfunctions and optimize mechanics,
            health, and your time.</p>
        <ul id="checklist">
            <li><span>✓</span>50 Minute Sessions</li>
            <li><span>✓</span>Minimal Equipment</li>
            <li><span>✓</span>All Fitness Levels</li>
        </ul>
    </div>

    <div class="features">
        <div class="feature-item">
            <img src="ethanBackshot.png" alt="Feature 1">
            <p>“I came across Optimove after suffering a shoulder (AC joint) injury and was interested in an alternative to the standard physical therapy. Prior to that I had been going to the chiropractor for the last 8 years on a weekly basis for "maintenance" since I have always been active and my scoliosis caused upper back pain. I would say three months into training with Optimove that pain has vanished with no return while at the same time it helped me fully revive my shoulder. I look forward to continuing this long journey of consistent improvement in my biomechanics and overall health via Optimove.” </p>
        </div>
        <div class="feature-item">
            <img src="TaylorSidePosture.png" alt="Feature 2">
            <p>"I had severe sciatica that would some days stop me from getting out of bed. Frustrated with doctors, chiropractors, and physical therapists who couldn't solve my problems, I stumbled an ad of what appeared as ninjas dancing with kettlebells. Within 6 months, twice a week working with Optimove, I was able to find immense relief, I was able to work my physical job and not feel like I taxed my body at the end of the day. Not only was it fixing my pain, it was healing my body in its entirety. I move better than I did 10 years ago, life hasn't gotten easier but now have a resilient body more apt to deal with environmental stressors.
                Many people seek this to relieve their physical pain, but extends into so much more than that, they’ve laid out the blueprint to health and well-being."</p>
        </div>
        <div class="feature-item">
            <img src="https://via.placeholder.com/150" alt="Feature 3">
            <p>Feature description</p>
        </div>
    </div>

    <div class="footer">
        <p>Start Optimizing Your Mechanics Now</p>
        <p>© 2023 OptiMove. All rights reserved.</p>
    </div>

    <script>
        // Add any JavaScript you need here
    </script>

</body>

</html>
`
