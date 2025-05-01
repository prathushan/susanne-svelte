# Suzanne Eats – Svelte Frontend

This repository contains the **Svelte frontend** for [Suzanne Eats](https://www.suzanneeats.com), a bespoke private catering venue. The Svelte-based frontend interacts with the Sanity CMS to provide a seamless experience for visitors to explore the venue, services, testimonials, and more.

---

## 🏡 About Suzanne Eats

Suzanne Eats is the digital home of a beautifully serene and unique **private dining and celebration venue**. From intimate lunches to joyous family celebrations, the venue offers a refined, warm, and peaceful setting nestled within a lush garden and pavilion space.

The platform highlights:
- A Japanese-style all-season pavilion with capacity for seated or standing events
- Customizable event planning and catering options
- A unique “Bring Your Own” drinks policy
- On-site parking and strong public transport connectivity

---

## 🧰 Tech Stack

| Feature             | Stack/Tool                                                                     |
|---------------------|--------------------------------------------------------------------------------|
| **Frontend**         | [Svelte](https://svelte.dev/), JavaScript/TypeScript, Sanity UI, Vite          |
| **Hosting**          | [Vercel](https://vercel.com/)                                                   |
| **Backend**          | Sanity CMS (Content Lake), WebSockets, GROQ                                    |
| **APIs**             | Sanity API, GROQ, Webhooks                                                     |
| **Customization**    | Svelte Store, Custom Components, Svelte Routing, Sanity Integration            |
| **CSS Framework**    | Tailwind CSS                                                        |

> 🔗 **Backend Source Code**  
> The backend for Suzanne Eats is built with **Sanity CMS**. You can check out the backend source code here: [GitHub Repo – Suzanne Eats Backend]( https://github.com/prathushan/susanne-sanity.git )

---

## ✨ Features

- **Dynamic Content**: Displays information fetched from the Sanity CMS, including venue details, services, and testimonials.
- **Svelte Store**: Manage state and data across the application.
- **Event Booking**: Display options and services available for booking events at the venue.
- **Gallery**: Beautiful event and venue photo galleries.
- **Contact Form**: Integrated form for users to get in touch with the venue.
- **SEO Optimized**: Pre-rendered HTML for better SEO performance.
  
---

## 📂 Project Structure

```bash
/
├── src/
│   ├── assets/                # Static files such as images
│   ├── components/            # Reusable Svelte components
│   ├── routes/                # Svelte routes (pages of the app)
│   ├── stores/                # Svelte stores for state management
│   ├── styles/                # Global styles (CSS, Tailwind setup)
│   └── App.svelte             # Main Svelte application
├── public/                    # Static assets served (index.html, icons, etc.)
└── package.json               # Project dependencies and scripts
