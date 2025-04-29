<script>
    import { onMount } from "svelte";
    import { createClient } from "@sanity/client";
    import { writable } from "svelte/store";  

    const textContent = writable({ title: "Loading...", description: "Fetching data..." });

    const client = createClient({
        projectId: "d28l9drw",
        dataset: "production",
        useCdn: false,  
        apiVersion: "2023-01-01",
    });

    onMount(async () => {
        try {
            const data = await client.fetch(`*[_type == "textContentTwo"][0]{title, description}`);
            console.log("Fetched Data:", data);

            if (data) {
                textContent.set(data);
            }
        } catch (error) {
            console.error("Sanity Fetch Error:", error);
        }
    });
</script>

<div class="text-container">
    <div class="text-title">
        <h2>{$textContent.title}</h2> 
        <button>Venue & Service</button> 
    </div>
    <div class="text-description">
        <p>{$textContent.description}</p>
    </div>
</div>

<style>
     button{
        background-color:#0066cc;
        color:#ffffff;
        font-size:18px;
        font-family: 'Poppins', sans-serif;
     }
    .text-container {
        display: flex;
        max-width: 1200px;
        margin: 40px auto;
        padding: 40px;
        background: white;
        margin-top:10%;
        margin-bottom:10%;
    }

    .text-title {
        flex: 1;
        text-align: left;
        
    }

    .text-title h2 {
        font-family: 'Perpetua MT', serif;
        font-size: 60px;
        color: #0066cc;
        margin-top:0;
        line-height:80px;
        
    }

    .text-description {
        flex: 1;
        text-align: left;
    }

    .text-description p {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        color: #333;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .text-container {
            flex-direction: column;
            text-align: center;
        }

        .text-title, .text-description {
            text-align: center;
        }
    }
</style>
