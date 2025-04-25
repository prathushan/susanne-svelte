<script>
    import logo from "/Users/admin/Desktop/Svelet/my-svelte-app/src/ROSY'S_LOGO_BLUE_RGB 1.png";

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
</nav>

<style>
    /* Import Google Font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

    /* Global fix for horizontal scroll */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden; 
        width: 100%;
    }

    
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 100%; 
        padding: 15px 50px;
        overflow: hidden; 
        z-index: 1000 !important;
    }

    .nav-left, .nav-right {
        display: flex;
        gap: 30px; 
        flex-wrap: nowrap; 
        max-width: 40%; 
        flex-shrink: 1; 
    }

    .nav-left {
        justify-content: flex-start;
        flex: 1;
    }

    .nav-right {
        justify-content: flex-end;
        flex: 1;
    }

    .logo {
        flex: 0;
        text-align: center;
    }

    .logo img {
        max-height: 50px;
        max-width: 100%;
    }

    
    a {
        font-family: 'Poppins', sans-serif;
        font-size: 20px; 
        font-weight: 500;
        white-space: nowrap; 
        letter-spacing: 0%;
        text-decoration: none;
        color: #0066cc;
        cursor: pointer;
    }
</style>

