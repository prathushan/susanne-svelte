<!-- src/lib/HeaderWrapper.svelte -->
<script>
    import { onMount } from 'svelte';
    import { client } from './sanityClient';
    import Header from './Header.svelte';
  
    let header = null;
  
    onMount(async () => {
      const result = await client.fetch(`*[_type == "header"][0]{
        logo,
        leftMenu,
        rightMenu
      }`);
      header = result;
    });
  </script>
  
  {#if header}
    <Header {header} />
  {:else}
    <p>Loading header...</p>
  {/if}
  