<script>
    import { onMount } from "svelte";
    import { createClient } from "@sanity/client";

    const client = createClient({
        projectId: "d28l9drw",
        dataset: "production",
        useCdn: true,
        apiVersion: "2023-01-01",
    });

    let cards = [];

    onMount(async () => {
        try {
            const data = await client.fetch(
                `*[_type == "imageContent"]{
                    title,
                    description,
                    image{asset->{url}}
                }`
            );

            if (data) {
                cards = data;
            }
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    });
</script>

<div class="Venue-block">
    <div class="text">
        <div class="title">3 reasons to choose Rosy’s</div>
        <div class="description">
            As if the location and magical venue weren’t enough, here are 3 reasons why choosing Rosy’s is what makes the most sense: for your wallet, as well as your palate.
        </div>
    </div>

    <div class="cards">
        {#each cards as card}
            <div class="card">
                <img src="{card.image.asset.url}" alt="{card.title}" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }

    /* Import Perpetua Font */
    @font-face {
        font-family: 'Perpetua MT';
        src: url('/src/assets/Perpetua.ttf') format('truetype');
        font-weight: 400;
    }

    /* Import Poppins Font */
    /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap'); */

    .Venue-block {
        width: 100%;
        background-color: #0066cc;
        display: flex;
        flex-direction: column;
        padding: 40px;
        gap: 20px;
        
        
    }

    .text {
        max-width: 600px;
        color: white;
    }

    .title {
        font-family: 'Perpetua MT', serif;
        font-size: 60px;
        font-weight: 400;
        text-align: left;
    }

    .description {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
        text-align: left;
    }

    /* Card Layout */
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        width: 100%;
        /* max-width: 1200px; */
        margin-top: 40px;
    }

    .card {
        background: white;
        text-align: center;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
    }


    .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        
    }

    .card h3 {
        margin-top: 15px;
        font-family: 'Perpetua MT', serif;
        font-size: 55px;
        color: #002a54;
        text-align:left;
        padding:10px;
    }

    .card p {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        color: #333;
        
        text-align:left;
        padding:10px;
        margin-bottom:15px;


    }

    /* Responsive */
    @media (max-width: 768px) {
        .cards {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
    }
</style>
