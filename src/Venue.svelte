<script>
    import { onMount } from "svelte";
    import { createClient } from "@sanity/client";

    const client = createClient({
        projectId: "d28l9drw",
        dataset: "production",
        useCdn: true,
        apiVersion: "2023-01-01",
    });

    let bannerImage = "";

    onMount(async () => {
        try {
            const data = await client.fetch(
    `*[_type == "banner"][0]{image{asset->{url}}}`
       );

            if (data?.image?.asset?.url) {
                bannerImage = data.image.asset.url;
            }
        } catch (error) {
            console.error("Error fetching banner:", error);
        }
    });
</script>
<div class="Venue-block">
    <div class="text">
        <div class="title">Rosy’s</div>
        <div class="description">The perfect private catering venue in Willesden Green, London NW2</div>
    </div>

    <div class="banner">
        {#if bannerImage}
            <img src="{bannerImage}" alt="Banner Image" />
        {/if}
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
        src: url('/Users/admin/Desktop/Svelet/my-svelte-app/src/Perpetua.ttf') format('truetype');
        font-weight: 400;
    }

    /* Import Poppins Font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

    .Venue-block {
        width: 100%;
        background-color: #0066cc;
        display: flex;
        flex-direction: column; 
        align-items: flex-start;
        padding: 40px;
        gap: 20px;
        
    }
  

    .text {
        max-width: 600px;
    }

    .title {
        font-family: 'Perpetua MT', serif;
        font-size: 100px;
        font-weight: 400;
        color: white;
        text-align: left;
    }

    .description {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
        color: white;
        text-align: left;
    }

    .banner img {
        width: 100%;
        max-width: 1200px;
        height: auto;
        border-radius: 10px;
        display: block;
    }

</style>