<!-- src/lib/Header.svelte -->
<script>
    import { urlFor } from './sanityClient';
    export let header;
    let menuOpen = false;
  </script>
  
  <style>
    header {

      padding: 1rem;
      position: relative;
      
    }
  
    .menu-container {
      /* display: flex;
      flex: 1; */
      justify-content: space-between; 
      align-items: center;
      display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    }
  
    .menu-left, .menu-right {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
    }
  
    .logo {
      display: flex;
      justify-content: center;
      flex: 1;
    }
  
    .logo img {
      height: 60px;
      max-width: 100%;
    }
  
    .hamburger {
      display: none;
      cursor: pointer;
    }
  
    @media (max-width: 480px) {
      .menu-left, .menu-right {
        display: none;
      }
  
      .hamburger {
        display: block;
      }
  
      .mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 10;
      }
      .logo {

      justify-content: flex-start;

    }
    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;
    position: relative;
  }
    }
  </style>
  
  <header>
    <!-- Hamburger -->

  
    <div class="menu-container">
      <nav class="menu-left">
        {#each header.leftMenu as item}
          <a href={item.url}>{item.title}</a>
        {/each}
      </nav>
  
      <div class="logo">
        {#if header.logo?.asset?._ref}
          <img src={urlFor(header.logo).width(80).url()} alt="Logo" />
        {/if}
      </div>
  
      <nav class="menu-right">
        {#each header.rightMenu as item}
          <a href={item.url}>{item.title}</a>
        {/each}
      </nav>
    </div>

    <div class="hamburger" on:click={() => (menuOpen = !menuOpen)}>
        {#if menuOpen}
          <svg width="24" height="24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="black" stroke-width="2"/></svg>
        {:else}
          <svg width="24" height="24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="black" stroke-width="2"/></svg>
        {/if}
      </div>
  
    {#if menuOpen}
      <div class="mobile-menu">
        {#each [...header.leftMenu, ...header.rightMenu] as item}
          <a href={item.url}>{item.title}</a>
        {/each}
      </div>
    {/if}
  </header>
  