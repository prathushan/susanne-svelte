<script>
    import { onMount } from "svelte";
    import { createClient } from "@sanity/client";
    import { writable } from "svelte/store";

    const bannerData = writable({
        bannerImage: "",
        descriptionOne: "",
        descriptionTwo: "",
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
                `*[_type == "bannerContent"][0]{ 
                    bannerImage{asset->{url}}, 
                    descriptionOne, 
                    descriptionTwo 
                }`
            );
            console.log("Banner Data:", data);

            if (data) {
                bannerData.set({
                    bannerImage: data.bannerImage?.asset?.url || "",
                    descriptionOne: data.descriptionOne || "",
                    descriptionTwo: data.descriptionTwo || "",
                });
            }
        } catch (error) {
            console.error("Error fetching banner content:", error);
        }
    });
</script>

<div class="banner-container" style="background-image: url({$bannerData.bannerImage});">
    <div class="content">
        <div class="description-box">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="white" d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/>
            </svg>
            <p class="dec">{$bannerData.descriptionOne}</p>
        </div>

        <div class="description-box">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="white" d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/>
            </svg>
            <p class="dec">{$bannerData.descriptionTwo}</p>
        </div>
    </div>
</div>

<style>
    .icon{
        position:absolute;
    }
    .dec{
        text-indent:15%;
    }
    .banner-container {
        width: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 40px 0;
        margin-top:5%;
        margin-bottom:5%;
    }
    @media(min-width:750px){
        .banner-container{
            height:600px;
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        width: 80%;
        max-width: 1200px;
    }

    .description-box {
        flex: 1;
        padding: 20px;
        background: #46C43A;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        
    }

    .description-box svg {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }

    .description-box p {
        font-size: 25px; 
        font-family: 'Perpetua MT', serif;
        color: #ffffff;
        text-align:left;
        
    }

    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            align-items: center;
        }

        .description-box {
            width: 90%;
        }
    }
</style>
