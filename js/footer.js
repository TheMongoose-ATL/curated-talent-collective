document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <div class="footer-menu">
            <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="process.html">Our Process</a></li>
            </ul>
            <div class="footer-logo">
                <a href="index.html">
                    <img src="assets/CTClogo.jpg" alt="CTC Logo" width="80">
                </a>
            </div>
            <ul>
                <li><a href="leadership.html">Leadership Team</a></li>
                <li><a href="blog.html">Blog/White Papers</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <p>&copy; 2025 Curated Talent Collective. All Rights Reserved.</p>
    `;
});
