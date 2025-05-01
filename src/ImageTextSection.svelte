<script>
    import { onMount } from "svelte";
    import { createClient } from "@sanity/client";
    import { writable } from "svelte/store";

    const sectionData = writable({
        sectionImage: "",
        textFields: [],
    });

    const client = createClient({
        projectId: "d28l9drw",
        dataset: "production",
        useCdn: true,
        apiVersion: "2023-01-01",
    });

    onMount(async () => {
        try {
            const data = await client.fetch(
                `*[_type == "imageTextSection"][0]{ 
                    sectionImage{asset->{url}}, 
                    textFields 
                }`
            );
            console.log("Image & Text Section Data:", data);

            if (data) {
                sectionData.set({
                    sectionImage: data.sectionImage?.asset?.url || "",
                    textFields: data.textFields || [],
                });
            }
        } catch (error) {
            console.error("Error fetching section data:", error);
        }
    });
</script>

<section class="image-text-section">
    <div class="container">
        <!-- Left side: Image -->
        <div class="image-box">
            <img src="{$sectionData.sectionImage}" alt="" />
        </div>

        <!-- Right side: Text fields -->
        <div class="text-box">
            {#each $sectionData.textFields as text (text)}
                <div class="text-item">
                    <p>{text}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .image-text-section {
        width: 100%;
        padding: 60px 0;
        background-color: #46C43A;
        
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        gap: 40px;
    }

    .image-box {
        flex: 1;
        max-width: 50%;
    }

    .image-box img {
        width: 100%;
        height: auto;
    }

    .text-box {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .text-item p {
        font-size: 22px;
        font-family: 'Poppins', sans-serif;
        color: #ffffff;
        text-align: left;
        margin:18px;
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            text-align: center;
        }

        .image-box {
            max-width: 100%;
            margin-bottom: 20px;
        }

        .text-box {
            align-items: center;
        }

        .text-item {
            text-align: left;
            width: 90%;
        }
    }
    @media(max-width:480px){
  p{
    font-size:14px !important;
  }
  h1,  h2{
    font-size: 20px important;
  }
  body h3, body h4{
    font-size:18px !important;
  }
  h5,h6{
    font-size:16px !important;
  }
}
</style>
