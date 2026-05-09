<script setup></script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-text">
        <p class="eyebrow">Für Einsatzkräfte in der präklinischen Notfallmedizin</p>
        <h1>Die Patient:innenanhängekarte des 21. Jahrhunderts</h1>
        <p class="hero-lead">
          Schluss mit Zettelchaos und unleserlichen Notfallprotokollen im Einsatz. 
          QueueCare bietet eine strukturierte digitale Dokumentation, die rechtskonform, lesbar und in
          sekundenschnelle an das Weiterversorgungszentrum übertragen werden kann.
        </p>

        <div class="hero-actions">
          <RouterLink to="/pricing" class="btn btn-primary">Preis vereinbaren</RouterLink>
          <RouterLink to="/product" class="btn btn-secondary">QueueCare entdecken</RouterLink>
        </div>

        <p class="hero-trust">30 Tage Probephase · 24/7 Support · keine versteckten Kosten</p>
      </div>

      <div class="hero-visual">
        <img src="../assets/ECG_Intervals.svg.png" alt="homepage ecg">
      </div>
    </div>
  </section>

  <section class="problem section-soft">
    <div class="container problem-grid">
      <div>
        <h2>Schluss mit Zettelwirtschaft!</h2>
        <p>
          In der präklinischen Notfallmedizin zählt teilweise jede Sekunde. Im Regelrettungsdienst in Niederösterreich
          wird bereits eine digitale Dokumentationssoftware verwendet, allerdings setzt man bei Großeinsätzen und
          Ambulanzdiensten immer noch auf die analoge Alternative.
        </p>
        <p>
          QueueCare löst dieses Problem. Strukturierte Eingabemasken, vorgefertigte Abfrageschema und eine 
          direkte Verbindung mit dem Weiterversorgungszentrum ermöglichen einen reibungslosen und schnellen Transport.
        </p>
      </div>
        <ul class="problem-stats">
          <li>
            <span class="stat-number">~ 15 Min.</span>
            <span class="stat-label">durchschnittliche Zeitersparnis im Einsatz</span>
          </li>
          <li>
            <span class="stat-number">100%</span>
            <span class="stat-label">vollständig ausgefüllte Pflichtfelder dank Plausibilitätsprüfung</span>
          </li>
          <li>
            <span class="stat-number">0</span>
            <span class="stat-label">unleserliche Übergabeprotokolle</span>
          </li>
        </ul>
    </div>
  </section>

  <section class="cta">
    <div class="container cta-inner">
      <h2>Jetzt 30 Tage kostenlos testen.</h2>
      <p>
        Kein Vertrag, Keine versteckten Kosten, Rund um die Uhr Support
        Wir freuen uns auf Ihre Anfrage.
      </p>
      <div class="cta-actions">
        <RouterLink to="/contact" class="btn btn-accent">Testzeit beantragen</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

  .hero-grid{
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .hero-actions{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .hero-trust{
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
    margin: 0;
  }

  .img-placeholder{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 4 / 3;
    background-color: var(--color-bg-soft);
    border: 2px dashed var(--color-border-strong);
    border-radius: 12px;
    color: var(--color-text-muted);
    font-weight: 600;
  }

  .problem-grid{
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .problem-stats{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .problem-stats li {
  padding: 1.25rem 1.5rem;
  background-color: var(--color-bg);
  border-left: 4px solid var(--color-accent);
  border-radius: 8px;
}

.stat-number {
  display: block;
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.1;
}

.stat-label {
  display: block;
  margin-top: 4px;
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
}

.problem-grid p{
  font-size: var(--font-size-lg);
  line-height: 1.6;
  max-width: 55ch;
  margin-bottom: 1.25rem;
}

  @media (max-width: 900px){
    .hero-grid,
    .problem-grid{
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .hero{
      padding: 3rem 0;
    }
  }
</style>