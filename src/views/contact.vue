<template>
  <section class="hero">
    <div class="container">
      <p class="eyebrow">Kontakt</p>
      <h1>Wir freuen uns mit Ihnen Kontakt aufzunehmen.</h1>
      <p class="hero-lead">
        Egal ob individuelles Angebot, Testzugang oder technische Auskunft - kontaktieren Sie uns. 
        Wir antworten in der Regel innerhalb eines Werktages.
      </p>
    </div>
  </section>

  <section class="contact">
    <div class="container contact-grid">
      <div class="contact-form-wrapper">
        <h2>Nachricht senden</h2>

        <form class="contact-form" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label for="salutation">Anrede</label>
              <select id="salutation" name="salutation">
                <option value="">Bitte wählen</option>
                <option>Frau</option>
                <option>Herr</option>
                <option>Divers</option>
                <option>Keine Anrede</option>
              </select>
            </div>

            <div class="form-field">
              <label for="name">Name <span class="required">*</span></label>
              <input id="name" name="name" type="text" required autocomplete="name" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="email">E-Mail-Adresse <span class="required">*</span></label>
              <input id="email" name="email" type="email" required autocomplete="email" />
            </div>

            <div class="form-field">
              <label for="organisation">Organisation</label>
              <input id="organisation" name="organisation" type="text" autocomplete="organization" />
            </div>
          </div>

          <div class="form-field">
            <label for="topic">Anfragetyp <span class="required">*</span></label>
            <select id="topic" name="topic" required>
              <option value="">Bitte wählen</option>
              <option>Individuelles Angebot anfordern</option>
              <option>Testzugang anfordern</option>
              <option>Technische Frage</option>
              <option>Schulung &amp; Onboarding</option>
              <option>Pressekontakt</option>
              <option>Sonstiges</option>
            </select>
          </div>

          <div class="form-field">
            <label for="message">Ihre Nachricht <span class="required">*</span></label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <div class="form-field form-checkbox">
            <input id="privacy" name="privacy" type="checkbox" required />
            <label for="privacy">
              Ich habe die <RouterLink to="/datenschutz">Datenschutzerklärung</RouterLink>
              gelesen und bin mit der Verarbeitung meiner Daten zur Beantwortung
              meiner Anfrage einverstanden. <span class="required">*</span>
            </label>
          </div>

          <button type="submit" class="btn btn-accent">
            Anfrage absenden
          </button>

          <p class="form-required-info">
            <span class="required">*</span> Pflichtfeld
          </p>
        </form>
      </div>

      <aside class="contact-info">
        <h2>Direkter Kontakt</h2>

        <div class="info-block">
          <h3>Anschrift</h3>
          <address>
            Lapis Software GmbH<br />
            Musterstraße 29<br />
            2275 Bernhardsthal, Österreich
          </address>
        </div>

        <div class="info-block">
          <h3>E-Mail</h3>
          <p>
            Allgemein: <a href="mailto:hallo@queuecare.at">hallo@queuecare.at</a><br />
            Support: <a href="mailto:support@queuecare.at">support@queuecare.at</a><br />
            Datenschutz: <a href="mailto:datenschutz@queuecare.at">datenschutz@queuecare.at</a>
          </p>
        </div>

        <div class="info-block">
          <h3>Telefon</h3>
          <p>
            <a href="tel:+4366412345678">+43 664 1234 5678</a><br />
            Mo-Fr 9:00-17:00 Uhr (MEZ)
          </p>
        </div>

        <div class="info-block">
          <h3>Reaktionszeit</h3>
          <p>
            Anfragen werden in der Regel innerhalb von einem Werktag
            beantwortet. Bei dringenden Support-Anfragen bestehender
            Kund:innen gilt die im jeweiligen SLA vereinbarte
            Reaktionszeit.
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
  .contact-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-form-wrapper h2,
  .contact-info h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-field label {
    font-weight: 600;
    color: var(--color-text);
  }

  .form-field input,
  .form-field select,
  .form-field textarea {
    padding: 0.75rem 1rem;
    font-family: inherit;
    font-size: var(--font-size-base);
    color: var(--color-text);
    background-color: var(--color-bg);
    border: 1px solid var(--color-border-strong);
    border-radius: 6px;
    transition: border-color 150ms ease;
  }

  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
    border-color: var(--color-primary);
  }

  .form-field textarea {
    resize: vertical;
    min-height: 120px;
  }

  .required {
    color: var(--color-error);
    font-weight: 700;
  }

  .form-checkbox {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .form-checkbox input {
    width: 20px;
    height: 20px;
    margin-top: 4px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .form-checkbox label {
    font-weight: 400;
    line-height: 1.5;
  }

  .form-required-info {
    margin: 0;
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
  }

  .contact-info {
    padding: 2rem;
    background-color: var(--color-bg-soft);
    border-radius: 8px;
  }

  .info-block {
    margin-bottom: 1.5rem;
  }

  .info-block:last-child {
    margin-bottom: 0;
  }

  .info-block h3 {
    margin: 0 0 0.5rem 0;
    font-size: var(--font-size-base);
    font-weight: 700;
    color: var(--color-primary);
  }

  .info-block p,
  .info-block address {
    margin: 0;
    font-style: normal;
    line-height: 1.6;
    color: var(--color-text);
  }

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .form-row {
      grid-template-columns: 1fr;
    }
  }
</style>