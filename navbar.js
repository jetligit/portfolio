function createHeader(containerId){
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="top">
            <h1 class = "nav-title">Welcome to Jet's Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/about/about.html">About</a></li>
                    <li><a href="/projects/projects.html">Projects</a></li>
                    <li><a href="/contact/contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;
}