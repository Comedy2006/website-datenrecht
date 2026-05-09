<script setup></script>
<template>
    <article class="legal-page">
        <div class="container-narrow">
            <header class="page-header">
                <h1>Barrierefreiheitserklärung</h1>
                <p class="page-lead">
                    Informationen über die Konformität mit dem <strong>Barrierefreiheitsgesetz (BaFG)</strong>
                    gemäß $ 14 Abs. 2 in Verbindung mit Anlage 3 BaFG. Die Lapis Software GmbH ist bemüht, den Websop
                    barrierefrei zugänglich zu machen.
                </p>
            </header>
            
            <nav aria-labelledby="tos-title" class="tos">
                <h2 id="tos-title">Inhaltsverzeichnis</h2>
                    <ol>
                        <li><a href="#scope">Geltungsbereich dieser Erklärung</a></li>
                        <li><a href="#description">Beschreibung der Dienstleistung</a></li>
                        <li><a href="#features">Umgesetzte Maßnahmen</a></li>
                        <li><a href="#assessment">Erstellung der Erklärung</a></li>
                        <li><a href="#feedback">Feedback und Korrekturmaßnahmen</a></li>
                    </ol>
            </nav>

            <section id="scope" aria-labelledby="scope-title">
                <h2 id="scope-title">1. Geltungsbereich dieser Erklärung</h2>
                <p>
                    Diese Erklärung gilt für die Website <a href="https://queucare.at">queuecare.at</a> der Lapis Software
                    GmbH einschließlich aller darauf angebotenen elektronischen Geschäftsdienste (insbesondere Anfragen für Lizenzen,
                    Kontaktformulare und Newsletter-Anmeldung).
                </p>
                <p>
                    Die Anwendung "QueueCare" selbst wird im Rahmen der jeweiligen Lizenzvereinbarung gesondert auf Barrierefreiheit
                    dokumentiert.
                </p>
            </section>
            
            <section id="description" aria-labelledby="description-title">
                <h2 id="description-title">2. Beschreibung der Dienstleistung</h2>
                <p>
                    Die Website queuecare.at ermöglicht Interessent:innen, Informationen zur Software "QueueCare" abzurufen,
                    individuelle Angebote anzufragen und Kontakt mit der Lapis Software GmbH aufzunehmen.
                </p>
                <p>
                    <strong>Funktionsweise in barrierefreier Form:</strong> Sämtliche Informationen werden über mehrere Kanäle bereitgestellt
                    (visuell, auditiv, Screenreader). Texte sidn als echte HTML-Texte umgesetzt - nicht als Bilder. Bildinhalt verfügen über
                    aussagekräfte Alternativtexte. Des Weiteren ist die Website vollständige mit der Tastatur bedienbar und ebenso kompatibel
                    mit Spracheingabe, Bildschirmvergrößerung und Screenreader.
                </p>
            </section>
            
            <section id="features" aria-labelledby="features-title">
                <h2 id="features-title">3. Umgesetzte Maßnahmen</h2>

                <h3>3.1 Wahrnehmbarkeit</h3>
                <ul>
                    <li>Alle Texte erfüllen die Mindestkontraste nach WCAG 2.2 (Punkt 1.4.3 "Contrast")</li>
                    <li>Information wird nie ausschließlich über Farbe vermittelt - immer ergänzt durch Text, Symbol oder Form</li>
                    <li>Alle informativen Bilder vefügen über aussagekräftigen Alternativtexte; rein dekorative Bilder sind als solche
                        gekennzeichnet
                    </li>
                    <li>
                        Die Schriftgröße ist über den Browser-Zoom bis 200% skalierbar, ohne dass Inhalte verloren gehen oder sich überlappen.
                    </li>
                    <li>Es wurde auf eine angemessene Schriftart gesetzt "Atkinson Hyperlegible"</li>
                </ul>

                <h3>3.2 Bedienbarkeit</h3>
                <ul>
                    <li>Vollständige Bedienbarkeit über die Tastatur, ohne Tastaturfallen</li>
                    <li>Sichtbarer Fokus-Indikator mit hohem Kontrast nach WCAG 2.2 (Punkt 2.4.7 & 2.4.11)</li>
                    <li>"Direkt zum Inhalt springen" als erstes fokussierbares Element auf jeder Seite</li>
                    <li>Keine zeitkritischen Interaktionen, keine blinkenden oder flackernden Inhalte</li>
                    <li>Berücksichtigung der Nutzer:innen-Einstellung <code>prefers-reduced-motion</code></li>
                </ul>

                <h3>3.3 Verständlichkeit</h3>
                <ul>
                    <li>Sprachattribut auf jeder Seite (<code>&lt;html lang="de"&gt;</code>)</li>
                    <li>Klare, einfache Sprache</li>
                    <li>Fachbegriffe werden bei Verwendung erklärt.</li>
                    <li>Pflichtfelder in Formularen sind sowohl textlich als auch visuell gekennzeichnet.</li>
                    <li>Aussagekräftige Weiterleitungen (Linktexte; kein "hier klicken")</li>
                </ul>

                <h3>3.4 Robustheit</h3>
                <ul>
                    <li>Validierter, semantischer HTML-Code</li>
                    <li>Verwendung nativer HTML-Elemente vor ARIA-Attributen</li>
                    <li>Kompatibilität mit aktuellen Versionen gängiger Screenreader</li>
                </ul>
            </section>
            
            <section id="assessment" aria-labelledby="assessment-title">
                <h2 id="assessment-title">4. Erstellung der Erklärung</h2>
                <p>
                    Diese Erklärung wurde am <strong>08. Mai 2026</strong> erstellt und zuletzt am <strong>10. Mai 2026</strong>
                    geändert und überprüft.
                </p>
                <p>
                    Die Bewertung der Vereinbarkeit der Website mit dem BaFG erfolgte in Form eines internen Selbsttests 
                    <!--Danke Mama fürs drüberschauen-->
                    unter Verwendung folgender Werkzeuge und Verfahren:
                </p>
                <ul>
                    <li>Die Website wurde mit der Tastatur von mehreren Nutzern manuell bedient</li> <!--Danke Mama und Papa-->
                    <li>Prüfung der Farbkontraste mit WebAIM Contrast Checker.</li>
                    <li>WCAG 2.2 AA Checkliste</li>
                </ul>
            </section>
            
            <section id="feedback" aria-labelledby="feedback-title">
                <h2 id="feedback-title">5. Feedback und Korrekturmaßnahmen</h2>
                <p>
                    Sollten Ihnen Mängle in der Barrierefreiheit auffallen, so freuen wir uns auf eine Rückmeldung von Ihnen.
                    Mittels Kontaktformular bearbeiten wir Ihre Anfrage in wenigen Werktagen. Wir sehen uns bemüht, die Website so
                    benutzerfreundlich wie möglich zu machen.<br/>
                    Alternativ können Sie und auch über folgende Kontakmöglichkeiten erreichen:
                </p>
                <address class="contact-block">
                    <strong>Lapis Software GmbH</strong><br/>
                    Abteilung für Barrierefreiheit<br/>
                    Musterstraße 29<br/>
                    2275 Bernhardsthal, Niederösterreich<br/><br/>
                    E-Mail: <a href="mailto:accessibility@queuecare.at">accessibility@queuecare.at</a>
                    Tel: <a href="tel:+4366412345678">+43 664 1234 5678</a>
                </address>
            </section>

            <p class="last-updated">Stand: Mai 2026</p>
        </div>
    </article>
</template>