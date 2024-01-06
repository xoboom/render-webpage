

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
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <title>OptiMove</title>
</head>

<body>

    <div class="header">
        <h2 class="CompanyName">OptiMove</h2>
        <nav>
            <ul class="sub-header">
                <li><a href="blog.html" class="subs">Blog</a></li>
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
