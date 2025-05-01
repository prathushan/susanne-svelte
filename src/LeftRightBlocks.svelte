<script>
    import { onMount } from 'svelte';
  
    import { imageTextBlockQuery } from './lib/queries/imgTextBlock';
    import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "d28l9drw",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-01-01",
});
  
    let content = {};
  
    onMount(async () => {
      content = await client.fetch(imageTextBlockQuery);
    });
  </script>
  
  {#if content.heading}
    <div class="image-text-block">
      <div class="images-column">
        <img src={content.leftImage1.asset.url} alt="" />
        <img src={content.leftImage2.asset.url} alt="" />
      </div>
      <div class="text-column">
        <h2>{content.heading}</h2>
        <p>{content.paragraph}</p>
      </div>
    </div>
  {/if}
  

  <style>
    .image-text-block{
      max-width:100%;
    }

    
    .images-column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    

    .images-column img {
      object-fit: cover;
      border-radius: 0.5rem;
    }
    
    .text-column h2 {
      font-size: 1.75rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      font-family: 'Perpetua MT', serif;
    }
    
    .text-column p {
      font-size: 1rem;
      color: #fff;
      
      font-family: 'Poppins', sans-serif;
    }
    @media(max-width:480px){
        .images-column img {
      width: 100%;
      height: auto;

    }
    .text-column p {
      color: #000;
    }
    }

    @media(min-width:750px){
      .images-column img {
      width: 560px;
      height: 420px;
      }
        .text-column h2 {
      font-size: 68px;
      line-height: 60px;
    }
    .text-column p {
        font-size:28px;
        line-height: 43px;
    }
    .image-text-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      /* align-items: center; */
      padding: 1rem 0;
      background:#46C43A;
      padding:30px;
      margin-bottom:10px;
    }
    }
    </style>
    