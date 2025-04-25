<script>
  

  
export const footerQuery = `
  *[_type == "footer"][0] {
    ecoBadge { asset->{url} },
    ecoText,
    companyLinks,
    contactEmail,
    contactNote,
    companyLogo { asset->{url} },
    copyright,
    footerButtons
  }
`;

</script>

{#if footer}
  <footer class="footer">
    <div class="eco-section">
      <img src={footer.ecoBadge?.asset?.url} alt="Eco Friendly" />
      <p>{footer.ecoText}</p>
    </div>

    <div class="company-section">
      <h3>Company</h3>
      <ul>
        {#each footer.companyLinks as link}
          <li><a href={link.url} target="_blank">{link.label}</a></li>
        {/each}
      </ul>
    </div>

    <div class="contact-section">
      <h3>Contact</h3>
      <p>📧 {footer.contactEmail}</p>
      <p>{footer.contactNote}</p>
    </div>

    <div class="bottom-section">
      <img src={footer.companyLogo?.asset?.url} alt="Company Logo" />
      <p>{footer.copyright}</p>

      <div class="buttons">
        {#each footer.footerButtons as btn}
          <a 
            href={btn.url} 
            class={btn.style === 'primary' ? 'btn-primary' : 'btn-secondary'}
          >
            {btn.label}
          </a>
        {/each}
      </div>
    </div>
  </footer>
{/if}

<style>
  .footer {
    padding: 2rem;
    background: #f9f9f9;
  }
  .btn-primary {
    background: #f96332;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
  }
  .btn-secondary {
    border: 2px solid black;
    padding: 0.5rem 1rem;
    color: black;
    border-radius: 5px;
    text-decoration: none;
    background: white;
  }
</style>
