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
    let bannerTitle = "";
    let bannerDescription = "";
  
    onMount(async () => {
      try {
        const data = await client.fetch(`*[_type == "banner"][0]{
          title,
          description,
          image {
            asset -> {
              url
            }
          }
        }`);
  
        if (data) {
          bannerImage = data.image?.asset?.url || "";
          bannerTitle = data.title || "";
          bannerDescription = data.description || "";
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    });
  </script>
  
  <div class="Venue-block">
    <div class="text">
      <div class="title">{bannerTitle}</div>
      <div class="description">{bannerDescription}</div>
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
      src: url('./assets/Perpetua.ttf') format('truetype');
      font-weight: 400;
    }
  
    /* Import Poppins Font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  
    .Venue-block {
      width: 100%;
      background-color: #46C43A;
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
      height: auto;
      border-radius: 10px;
      display: block;
    }
  </style>
  