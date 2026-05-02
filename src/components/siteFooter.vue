<script setup>
    const currYr = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="site-footer">
            <div class="container footer-grid">
                <div class="footer-col">
                    <p class="footer-brand">
                        Queue<span class="brand-orange">Care</span>
                    </p>
                    <p class="footer-tagline">
                        QueueCare - Patient:innendokumentation für Einsatzkräfte in der präklinischen Notfallmedizin.
                    </p>
                    <address class="footer-address">
                        Lapis Software GmbH<br/>
                        Musterstraße 29, 2275 Bernhardsthal,<br/>
                        Österreich
                    </address>
                </div>

                <nav class="footer-col" arial-label="Rechtliches">
                    <h2 class="footer-heading">Rechtliches</h2>
                    <ul class="footer-links">
                        <li><RouterLink to="/imprint">Impressum</RouterLink></li>
                        <li><RouterLink to="/datenschutz">Datenschutzerklärung</RouterLink></li>
                        <li><RouterLink to="/licensing">Lizenzbedingungen</RouterLink></li>
                        <li><RouterLink to="/accessibility">Barrierefreiheit</RouterLink></li>
                        <li><RouterLink to="/copyright">Urheberrechtsbedingungen</RouterLink></li>
                    </ul>
                </nav>

                <nav class="footer-col" aria-label="Unternehmen">
                    <h2 class="footer-heading">Unternehmen</h2>
                    <ul class="footer-links">
                        <li><RouterLink to="/about">Über Uns</RouterLink></li>
                        <li><RouterLink to="/contact">Kontakt</RouterLink></li>
                        <li><RouterLink to="/pricing">Preise</RouterLink></li>
                    </ul>
                </nav>
            </div>

            <div class="container footer-bottom">
                <p>&copy; {{ currYr }} Lapis Software GmbH. Alle Rechte vorbehalten.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .site-footer{
        margin-top: 6rem;
        padding: 3rem 0 1.5rem 0;
        background-color: var(--color-bg-soft);
        border-top: 1px solid var(--color-border);
    }

    .footer-grid{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 3rem;
    }

    .footer-col{
        font-size: var(--font-size-base);
        color: var(--color-text-muted);
    }

    .footer-brand{
        margin: 0 0 1rem 0;
        font-size: var(--font-size-xl);
        font-weight: 700;
        color: var(--color-primary);
    }

    .brand-orange{
        color: var(--color-accent);
    }

    .footer-tagline{
        margin: 0 0 1.5rem 0;
        max-width: 35ch;
    }

    .footer-address{
        font-style: normal;
        line-height: 1.6;
        color: var(--color-text-muted);
    }

    .footer-heading{
        margin: 0 0 1rem 0;
        font-size: var(--font-size-base);
        font-weight: 700;
        color: var(--color-text);
    }

    .footer-links{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .footer-links li {
        margin-bottom: 0.5rem;
    }

    .footer-links a {
        color: var(--color-text);
        text-decoration: none;
    }

    .footer-links a:hover {
        color: var(--color-primary);
        text-decoration: underline;
    }

    .footer-bottom {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--color-border);
        text-align: center;
    }

    .footer-bottom p {
        margin: 0;
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
    }

    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
</style>