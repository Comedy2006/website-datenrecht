<template>
  <section class="hero">
    <div class="container">
      <p class="eyebrow">Über Uns</p>
      <h1>Software, die zuverlässig ist.</h1>
      <p class="hero-lead">
        Lapis Software GmbH entwickelt digitale Werkzeuge für die präklinische Notfallmedizin. 
        Wir entwickeln unsere Software gemeinsam mit den Menschen, die sie täglich anwenden. 
        Aus Bernhardsthal mit einer Mission für Niederösterreichs Einsatzkräfte.
      </p>
    </div>
  </section>

  <section class="section section-soft">
    <div class="container story-grid">
      <div>
        <h2>Unsere Geschichte</h2>
        <p>
          Lapis Software GmbH wurde 2026 in Bernhardsthal gegründet, und zwar aus einem ganz konkreten Grund: 
          Bei Großeinsätzen und Ambulanzdiensten dokumentieren Einsatzkräfte heutzutage primär noch auf 
          Stift und Papier.
        </p>
        <p>
          Wir sind ein Team bestehend aus 4 Personen (aktive/ehemalige Rettungssanitätern), welche jahrelange Erfahrung im Rettungsdienst 
          haben. Im Rettungsdienst ist uns aufgefallen, dass man gewisse Sachen automatisieren bzw. vereinfachen könnte.
          Daraus entstand QueueCare: ein Werkzeug, welches die Probleme löst, die uns in Ambulanzdiensten 
          widerfahren sind.
        </p>
        <p>
          Des Weiteren arbeiten wir eng mit Rettungsorganisationen zusammen, um jedes Feature so ideal wie 
          möglich zu gestalten. Unser Produkt wird in Einsatzproben verwendet, um die zuverlässigkeit und Qualität 
          zu gewährleisten.
        </p>
      </div>

      <aside class="company-facts">
        <h3>Auf einen Blick</h3>
        <dl class="facts-list">
          <div class="fact">
            <dt>Gegründet</dt>
            <dd>2026</dd>
          </div>
          <div class="fact">
            <dt>Sitz</dt>
            <dd>Bernhardsthal, Niederösterreich</dd>
          </div>
          <div class="fact">
            <dt>Mitarbeitende</dt>
            <dd>4</dd>
          </div>
          <div class="fact">
            <dt>Rechtsform</dt>
            <dd>GmbH</dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Was uns am Herzen liegt</h2>
      <p class="section-intro">
        Unsere Grundsätze, um die Qualität unseres Produktes zu gewährleisten
      </p>

      <div class="values-grid">
        <article class="value-card">
          <h3>Praxiserfahrung</h3>
          <p>
            Software für den Rettungsdienst wird nicht von Heute auf Morgen erfunden. QueueCare ist 
            das Ergebnis jahrelanger Erfahrung und monatelanger Entwicklung. Wir entwickeln nicht für Einsatzkräfte, 
            sondern mit Einsatzkräften.
          </p>
        </article>

        <article class="value-card">
          <h3>Datenschutz aus Österreich</h3>
          <p>
            Patient:innendaten gehören zu den sensiblen Daten. Diesbezüglich befinden sich Diese in einem 
            zertifizierten EU-Rechenzentrum (DSGVO-Konform). Wir hosten ausschließlich in Wien, Frankfurt und Amsterdam.
          </p>
        </article>

        <article class="value-card">
          <h3>Barrierefreiheit ist Minimum bei uns</h3>
          <p>
            Eine Software, die mit Einsatzhandschuhen im grellen Sonnenlicht unbedienbar ist, ist keine Gute. 
            Barrierefreiheit ist für uns keine Option, sondern eine Mindestanforderung (auch in unserem Webshop).
          </p>
        </article>

        <article class="value-card">
          <h3>Transparenz</h3>
          <p>
            Keine versteckten Kosten, keine Funktion hinter einer Paywall, die eigentlich zur Sicherheit gehören. 
            Was wir versprechen, halten wir.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .story-grid{
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .story-grid p{
    font-size: var(--font-size-base);
    line-height: 1.6;
    margin-bottom: 1.25rem;
    max-width: 60ch;
  }

  .company-facts{
    padding: 2rem;
    background-color: var(--color-bg);
    border-radius: 8px;
    border-left: 4px solid var(--color-accent);
  }

  .company-facts h3{
    margin: 0 0 1.5rem 0;
    font-size: var(--font-size-lg);
    color: var(--color-primary);
  }

  .facts-list{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .fact{
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-border);
  }

  .fact:last-child{
    border-bottom: none;
    padding-bottom: 0;
  }

  .fact dt{
    font-size: var(--font-size-xs);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .fact dd {
    margin: 0;
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text);
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }

  .value-card {
    padding: 2rem;
    background-color: var(--color-bg-soft);
    border-radius: 8px;
  }

  .value-card h3 {
    margin: 0 0 1rem 0;
    font-size: var(--font-size-lg);
    color: var(--color-primary);
  }

  .value-card p {
    margin: 0;
    line-height: 1.6;
    color: var(--color-text);
  }

  @media (max-width: 900px) {
    .story-grid,
    .values-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>