<template>
  <section class="hero">
    <div class="container">
      <p class="eyebrow">Preise</p>
      <h1>Ein Preismodell welches zu Ihrer Organisation passt.</h1>
      <p class="hero-lead">
        Statt festen Tarifen möchten wir gemeinsam mit Ihnen eine passende Lösung finden - 
        abhängig von Größe und Anwendungsfall. So bezahlen Sie nur für das, was Sie wirklich benötigen.
      </p>
    </div>
  </section>

  <section class="section section-soft">
    <div class="container">
      <h2>Im Ihrem Paket enthalten</h2>
      <p class="section-intro">
        Unabhängig von der Größe Ihrer Organisation umfasst jedes QueueCare-Abonnement folgende Leistungen:
      </p>

      <ul class="check-list">
        <li>Vollständiger Funktionsumfang der App auf iOS und Android sowie das Webportal.</li>
        <li>Regelmäßige Sicherheits- und Funktionupdates</li>
        <li>Serverhosting in zertifizierten EU-Rechenzentren (DSGVO-konform)</li>
        <li>Rund um die Uhr technischer Support</li>
        <li>Onboarding-Materialien (Tutorials, Quick-References)</li>
        <li>Trainingsmodus für Schulungen</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Wovon hängt der Preis ab</h2>
      <p class="section-intro">
        Wir kalkulieren transparent. Diese Faktoren fließen in Ihr individuelles Angeboit ein:
      </p>

      <div class="factor-grid">
        <article class="factor-card">
          <h3>Anzahl aktiver Nutzer:innen</h3>
          <p>Wie viele Personen werden mit QueueCare arbeiten?</p>
        </article>

        <article class="factor-card">
          <h3>Einsatzbereiche und Module</h3>
          <p>
            Reichen Ihnen die Basisfunktionen? 
            Oder benötigen Sie Zusatzmodule wie Mehrsprachigkeit oder Foto-Dokumentation?
          </p>
        </article>

        <article class="factor-card">
          <h3>Hosting Modell</h3>
          <p>
            Cloud-Hosting in unserem zertifizierten EU-Rechenzentrum oder On-Premise-Installation in Ihrer
            eigenen Infrastruktur?
          </p>
        </article>

        <article class="factor-card">
          <h3>Schulung</h3>
          <p>
            Reichen Ihnen digitales Onboarding, oder wünschen Sie 
            Schulungen vor Ort und Train-the-Trainer-Programme?
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container cta-inner">
      <h2>Lassen Sie uns über Ihren Bedarf sprechen.</h2>
      <p>Wir erstellen Ihnen innerhalb weniger Werktage ein individuelles Abgebot - unverbindlich und ohne versteckte Kosten</p>
      
      <div class="cta-actions">
        <RouterLink to="/contact" class="btn btn-accent">
          Anfrage stellen
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="faq">
    <div class="container">
      <h2 style="text-align: center;">Häufig gestellte Fragen</h2>
      <div class="faq-list">
        <details class="faq-item">
          <summary>Wie lange dauert es, bis ich ein Angebot bekomme?</summary>
          <p>
            In der Regel innerhalb von zwei bis drei Werktagen nach Anfrageneingang. Bei komplexen 
            Konstellationen mit Schnittstellen-Anforderungen kann es etwas länger dauern - wir melden 
            uns in jedem Fall zeitnah mit einer Rückfrage.
          </p>
        </details>

        <details class="faq-item">
          <summary>Gibt es eine Midestvertragslaufzeit?</summary>
          <p>
            Ja, grundsätzlich sind unsere Angebote auf eine Midestvertragslaufzeit von 12 Monaten ausgelegt. Auf Wunsch
            sind auch monatlich kündbare Verträge mit Aufschlag oder mehrjährige Verträge mit Vergünstigungen möglich.
          </p>
        </details>

        <details class="faq-item">
          <summary>Wo werden meine Daten gespeichert?</summary>
          <p>
            Ausschließlich in zertifizierten Rechenzentren innerhalb der EU,
            standardmäßig in Wien und Frankfurt. Die Verarbeitung erfolgt
            DSGVO-konform - wir schließen mit Ihnen einen
            Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO ab.
          </p>
        </details>

        <details class="faq-item">
          <summary>Was passiert mit meinen Daten, wenn ich kündige?</summary>
          <p>
            Sie erhalten Ihre Daten in einem maschinenlesbaren Format
            (JSON oder CSV) zurück. 30 Tage nach Vertragsende werden alle
            Daten unwiderruflich aus unseren Systemen gelöscht - mit
            Löschprotokoll auf Anfrage.
          </p>
        </details>
      </div>
    </div>
  </section>
  
</template>

<style scoped>

  .section-intro{
    margin: 0 0 2rem 0;
    max-width: 60ch;
    color: var(--color-text-muted);
  }

  .check-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .check-list li {
    position: relative;
    padding-left: 2rem;
    line-height: 1.5;
  }

  .check-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 700;
    color: var(--color-success);
  }

  .factor-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }

  .factor-card {
    padding: 1.5rem;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  .factor-card h3 {
    margin: 0 0 0.75rem 0;
    font-size: var(--font-size-lg);
    color: var(--color-primary);
  }

  .factor-card p {
    margin: 0;
    color: var(--color-text-muted);
    line-height: 1.5;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  .faq-item {
    padding: 1.5rem;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  .faq-item summary {
    font-size: var(--font-size-base);
    font-weight: 700;
    color: var(--color-text);
    cursor: pointer;
    list-style: none;
    position: relative;
    padding-right: 2rem;
  }

  .faq-item summary::after {
    content: "+";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: var(--color-primary);
    transition: transform 200ms ease;
  }

  .faq-item[open] summary::after {
    content: "-";
  }

  .faq-item p {
    margin: 1rem 0 0 0;
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  .faq-item summary::-webkit-details-marker {
    display: none;
  }

  @media (max-width: 900px) {
    .factor-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .factor-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 700px) {
    .check-list {
      grid-template-columns: 1fr;
    }
  }
</style>