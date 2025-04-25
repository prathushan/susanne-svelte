<script>
    import NavBar from "./NavBar.svelte";
    import Venue from "./Venue.svelte";
    import Occasions from "./Occasions.svelte";
    import Wakes from "./Wakes.svelte";
    import Banner from "./Banner.svelte";
    import ImageTextSection from "./ImageTextSection.svelte";

</script>

<NavBar />

<section id="venue-service">
    <Venue />
</section>

<section id="occasions">
    <Wakes />
</section>

<section id="wakes-funerals">
    <Occasions />
</section>

<section id="rosys-food">
    <Banner />
</section>

<section id="rosys-story">
    <ImageTextSection />
</section>

<style>
    section {
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
