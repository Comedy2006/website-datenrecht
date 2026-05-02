<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
    <header class="site-header">
        <div class="container header-inner">
            <RouterLink to="/" class="brand">Queue<span class="brand-orange">Care</span></RouterLink>
            <nav id="main-navigation" class="main-nav" aria-label="Hauptnavigation"> <!--Screenreader "Hauptnavigation"-->
                <ul class="nav-list">
                    <li><RouterLink to="/" exact-active-class="active">Home</RouterLink></li>
                    <li><RouterLink to="/product">Produkt</RouterLink></li>
                    <li><RouterLink to="/pricing">Preise</RouterLink></li>
                    <li><RouterLink to="/contact">Kontakt</RouterLink></li>
                    <li><RouterLink to="/about">Über uns</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    .site-header{
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
    }

    .header-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1rem;
        padding-bottom: 1rem;
        gap: 1.5rem;
    }

    .nav-list{
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .nav-list a{
        display: inline-flex;
        align-items: center;
        min-height: 44px;
        padding: 0.5rem 1rem;
        color: var(--color-text);
        font-weight: 600;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        font-size: var(--font-size-base);
    }

    .nav-list a:hover{
        color: var(--color-primary);
        border-bottom-color: var(--color-primary);
    }

    .nav-list a:active{
        color: var(--color-primary);
        border-bottom-color: var(--color-primary);
    }

    .brand{
        color: var(--color-primary);
        font-weight: 700;
        font-size: 1.5rem;
        text-decoration: none;
        font-size: var(--font-size-xl);
    }

    .brand:hover{
        color: var(--color-primary-hover);
    }

    .brand-orange{
        color: var(--color-accent);
    }

    .brand:hover .brand-orange{
        color: var(--color-accent-hover);
    }

    :focus-visible{
        outline: 3px solid var(--color-focus);
        outline-offset: 2px;
        border-radius: 4px;
    }

    @media (max-width: 600px){
        .header-inner{
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }
</style>