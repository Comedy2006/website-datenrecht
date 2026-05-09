<template>
  <section class="hero">
    <div class="container">
      <p class="eyebrow">Das Produkt</p>
      <h1>Überblick von QueueCare</h1>
      <p class="hero-lead">
        QueueCare ist eine mobile Anwendung für die präklinische Notfallmedizin. Verzichten Sie auf
        ein Zettelchaos und unleserliche Dokumente. Lassen Sie sich überzeugen. Die Features von QueueCare in 
        einem Überlick.
      </p>
  </div>
  </section>

  <section class="features">
    <div class="container">
      <article class="feature-row">
        <div class="feature-text">
          <h2>Strukturierte Erfassung</h2>
          <p>
            Vorgefertigte Eingabemasken nach ABCDE, SAMPLER (OPQRST), FAST, ZOPS, uvm. - 
            mit Plausibilitätsprüfung und Pflichtfeldern. Es wurde auf nichts vergessen.
            Im Handumdrehen alle Informationen auf einem Blick.
          </p>
        </div>
        <div class="feature-visual">
          <img src="../assets/Figure61_(1).svg.png" alt="ABCDE" width="384" height="384">
        </div>
      </article>

      <article class="feature-row reverse">
        <div class="feature-text">
          <h2>Vitalparameter auf einem Blick</h2>
          <p>
            Puls, Blutdruck (RR), SpO2, GCS, Blutzucker, numerische/visuelle Schmerzskala und vieles mehr - jede
            Messung mit Zeitstempel auf einer übersichtlichen Zeitachse. ACHTUNG: QueueCare warnt NICHT bei kritischen Werten
          </p>
        </div>
        <div class="feature-visual">
          <img src="../assets/Pulox_Pulse_Oximeter.JPG" alt="PulsOxy" width="512" height="384">
        </div>
      </article>

      <article class="feature-row">
        <div class="feature-text">
          <h2>Triagiersystem</h2>
          <p>
            Effizientere Triage bei Großeinsätzen nach dem Manchester-Triage-System.
          </p>
        </div>
        <div class="feature-visual">
          <img src="../assets/_Forward_Triage_,_circa_1952_edited_and_recropped.jpg" alt="Triage" width="512" height="384">
        </div>
      </article>

      <article class="feature-row reverse">
        <div class="feature-text">
          <h2>Einsatzverlauf</h2>
          <p>
            Dokumentation der im Einsatz durchgeführten Maßnahmen (Lagerung, Wundersorgung uvm.) sowie die 
            im Einsatz verabreichten Medikamente. Zusätzlich verfügt QueueCare über eine riesige Medikamentendatenbank, 
            welche die im Rettungsdienst verfügbaren Medikamente sofort auflistet. Von Sauerstoff bis hin zum Schmerzmittel, 
            alles ist dabei.
          </p>
        </div>
        <div class="feature-visual">
          <img src="../assets/Pills_2.jpg" alt="medication" width="512" height="384">
        </div>
      </article>

      <article class="feature-row">
        <div class="feature-text">
          <h2>Reverse</h2>
          <p>
            Patienten können direkt im Portal über das mobile Endgerät einen Revers unterschreiben. Dieser Revers wird 
            in der Datenbank gespeichert und kann jederzeit aufgerufen werden.
          </p>
        </div>
        <div class="feature-visual">
          <img src="../assets/Folder-documents.png" alt="Reverse">
        </div>
      </article>

      <article class="feature-row reverse">
        <div class="feature-text">
          <h2>Sicherheit</h2>
          <p>
            Konstante Sicherheitsupdates und Wartungen garantieren den besten Schutz der Daten Ihrer Patienten.
          </p>
        </div>
        <div class="feature-visual">
          <img src="../assets/Padlock.svg.png" alt="Security">
        </div>
      </article>

      <article class="feature-row">
        <div class="feature-text">
          <h2>Verbessertes User Interface</h2>
          <p>
            Größere Knöpfe für die Arbeit mit den Handschuhen. Hoher Farbkontrast um in jeder Situation uneingeschränkt 
            zu arbeiten. Des Weiteren ist das Interface intuitiv gestaltet.
          </p>
        </div>
        <div class="feature-visual">
          <img src="../assets/nitriteglove.jpg" alt="Glove" width="250" height="384">
        </div>
      </article>
    </div>
  </section>

  <section class="cta">
    <div class="container cta-inner">
      <h2>Überzeugt? Jetzt 30 Tage kostenlos testen.</h2>
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

  .features{
    padding-bottom: 5rem;
  }

  .feature-row{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    padding: 4rem 0;
    border-top: 1px solid var(--color-border);
  }

  .feature-row:first-child {
    border-top: none;
  }

  .feature-row.reverse .feature-text {
    order: 2;
  }

  .feature-row.reverse .feature-visual {
    order: 1;
  }

  .feature-text h2 {
    margin: 0 0 1rem 0;
    color: var(--color-primary);
  }

  .feature-text p {
    margin: 0;
    font-size: var(--font-size-base);
    line-height: 1.6;
    max-width: 50ch;
  }

  .feature-visual .img-placeholder {
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

  img{
    aspect-ratio: 4/3;
  }

  @media (max-width: 900px) {
    .feature-row,
    .feature-row.reverse {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 3rem 0;
    }
    .feature-row.reverse .feature-text,
    .feature-row.reverse .feature-visual {
      order: initial;
    }
    .feature-row .feature-visual {
      order: 2;
    }
    .feature-row .feature-text {
      order: 1;
    }
  }

</style>