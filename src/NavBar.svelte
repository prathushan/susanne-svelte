<script>
    import logo from "./assets/logo.png";

    let isMenuOpen = false;

    let navLinks = [
        { name: "VENUE & SERVICE", id: "venue-service" },
        { name: "OCCASIONS", id: "occasions" },
        { name: "WAKES & FUNERALS", id: "wakes-funerals" },
        { name: "ROSY'S FOOD", id: "rosys-food" },
        { name: "ROSY'S STORY", id: "rosys-story" },
        { name: "LOCATION & CONTACT", id: "location-contact" }
    ];

    function scrollToSection(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        isMenuOpen = false; // Close menu after click
    }
</script>

<nav class="navbar">
    <div class="nav-left">
        {#each navLinks.slice(0, 3) as link}
            <a on:click={() => scrollToSection(link.id)}>{link.name}</a>
        {/each}
    </div>

    <div class="logo">
        <img src="{logo}" alt="Rosy's Logo" />
    </div>

    <div class="nav-right">
        {#each navLinks.slice(3) as link}
            <a on:click={() => scrollToSection(link.id)}>{link.name}</a>
        {/each}
    </div>

    <!-- Hamburger Button -->
    <button class="hamburger" on:click={() => (isMenuOpen = !isMenuOpen)} aria-label="Toggle menu">
        {#if isMenuOpen}
            <!-- X icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
        {:else}
            <!-- Hamburger icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
        {/if}
    </button>
</nav>

{#if isMenuOpen}
    <div class="mobile-menu">
        {#each navLinks as link}
            <a on:click={() => scrollToSection(link.id)}>{link.name}</a>
        {/each}
    </div>
{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: white;
        position: relative;
        z-index: 10;
    }

    .nav-left, .nav-right {
        display: flex;
        gap: 1rem;
    }

    .logo img {
        height: 50px;
    }

    a {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #46C43A;
        text-decoration: none;
        cursor: pointer;
    }

    .hamburger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    .hamburger svg {
        width: 24px;
        height: 24px;
    }

    .mobile-menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem 2rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .mobile-menu a {
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
    }

    @media (max-width: 480px) {
        .nav-left,
        .nav-right {
            display: none;
        }

        .hamburger {
            display: block;
        }

        .mobile-menu {
            display: flex;
        }
    }
</style>
