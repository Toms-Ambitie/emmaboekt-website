import FAQ from '@/components/FAQ'
import ChatDemoWrapper from '@/components/ChatDemoWrapper'


const Spark = () => (
  <svg className="spark" viewBox="0 0 24 24" fill="currentColor" style={{width:10,height:10}}>
    <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"/>
  </svg>
)

export default function Home() {
  return (
    <>
      {/* EARLY ACCESS BANNER */}
      <div className="ea-banner">
        <div className="container">
          <span><span className="pulse"></span> <b>Nu in ontwikkeling.</b> Eerste maand gratis bij elk plan.</span>
          <a href="#cta">Schrijf je in →</a>
        </div>
      </div>

      {/* NAV */}
      <div className="nav-wrap">
        <div className="container nav">
          <div className="nav-left">
            <img src="/emmaboekt-logo.webp" alt="EmmaBoekt" />
          </div>
          <nav className="nav-links">
            <a href="#oplossing">Product</a>
            <a href="#hoe">Hoe het werkt</a>
            <a href="#koppelingen">Koppelingen</a>
            <a href="#prijs">Prijzen</a>
            <a href="#faq">Vragen</a>
          </nav>
          <div className="nav-right">
            <a className="signin" href="#">Inloggen</a>
            <a className="btn btn-cta" href="#cta">Probeer gratis</a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="eyebrow">
              <Spark />
              Boekhouden in chat. Bovenop jouw boekhoudpakket.
            </div>
            <h1>Boekhouden zonder gedoe.<br/><span className="em">Emma doet het voor je.</span></h1>
            <p className="hero-sub">Jouw boekhoudpakket is de motor. Emma is de stuurknop. Stuur haar een factuur, een idee of een vraag. Zij regelt het in Moneybird, e‑Boekhouden, Yuki of welk pakket je gebruikt.</p>
            <div className="hero-cta-row">
              <a href="#oplossing" className="btn btn-cta">Zie Emma in actie ↓</a>
              <a href="#prijs" className="btn btn-ghost">Wat kost het?</a>
            </div>
            <div className="hero-trust">
              <div className="stars">★★★★★</div>
              <div className="ht-text">
                <span>&ldquo;Eindelijk een boekhouding die niet aanvoelt als straf.&rdquo;</span><br/>
                <b>Mark de Vries</b> · ZZP advies · eerste tester
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="float-bubble user fb-1">
              <div className="who">Jij · 09:14</div>
              Factuur KPN deze maand, <b>€76,80</b>. Boek je &apos;m even?
            </div>
            <div className="float-bubble fb-2">
              <div className="who"><Spark /> Emma</div>
              Klaar. Geboekt op Telefonie/Internet, BTW 21% verwerkt.
            </div>
            <div className="float-bubble fb-3">
              <div className="who"><Spark /> Emma</div>
              Trouwens: factuur #2026‑037 is net betaald door Studio Vier. 🎉
            </div>
            <img className="emma-illu" src="/emma-01-laptop-staand.png" alt="Emma met laptop" />
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section id="pain" className="pain">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{marginBottom:14}}>Ken je dit?</div>
            <h2>Je gratis boekhoudpakket is gratis,<br/>maar je tijd is dat niet.</h2>
            <p>De goedkope pakketten doen wat ze moeten doen. Maar elke keer als je een factuur wilt boeken vraag je je af: hoe ging het ook alweer? Welk tabblad? Welk veld? Vier klikken later weet je het weer.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="frown">?</div>
              <h3>&ldquo;Welk veld was het ook alweer?&rdquo;</h3>
              <p>Elke maand opnieuw uitvogelen waar de BTW heen moet, welke grootboekrekening, en waarom er een foutmelding komt.</p>
              <div className="pain-mock">
                <div className="row"><span>Grootboek 4020 · Telefoonkosten</span><span className="x">✗ veld leeg</span></div>
                <div className="row"><span>BTW-categorie</span><span className="x">✗ verplicht</span></div>
                <div className="row"><span>Inkoopdagboek</span><span style={{opacity:0.4}}>leeg</span></div>
                <div className="row"><span>Boekstuknummer</span><span className="x">✗ auto?</span></div>
              </div>
            </div>
            <div className="pain-card">
              <div className="frown">↻</div>
              <h3>10 klikken voor 1 factuur</h3>
              <p>Inloggen, navigeren, formulier zoeken, PDF uploaden, velden tikken, opslaan, controleren, indelen, sluiten. Voor een factuurtje van 76 euro.</p>
              <div className="pain-mock">
                <div className="row"><span>1.</span><span>Login → 2FA</span></div>
                <div className="row"><span>2.</span><span>Inkoop → Nieuw</span></div>
                <div className="row"><span>3.</span><span>Leverancier zoeken</span></div>
                <div className="row"><span>4.</span><span>Upload PDF</span></div>
                <div className="row"><span>...</span><span>nog 6 stappen</span></div>
              </div>
            </div>
            <div className="pain-card">
              <div className="frown">⏱</div>
              <h3>Boekhouden voelt als straf</h3>
              <p>Jij wilde gewoon ondernemen. In plaats daarvan een avond per maand door je administratie ploegen omdat het &ldquo;even moet&rdquo;.</p>
              <div className="pain-mock" style={{background:'var(--navy)',color:'rgba(255,255,255,0.7)',border:'none'}}>
                <div className="row" style={{borderColor:'rgba(255,255,255,0.1)'}}><span>Maandagavond</span><span style={{color:'var(--mint)'}}>19:30</span></div>
                <div className="row" style={{borderColor:'rgba(255,255,255,0.1)'}}><span>Bonnen sorteren</span><span style={{color:'var(--apricot)'}}>45 min</span></div>
                <div className="row" style={{borderColor:'rgba(255,255,255,0.1)'}}><span>Boekingen</span><span style={{color:'var(--apricot)'}}>1u 20m</span></div>
                <div className="row" style={{borderColor:'rgba(255,255,255,0.1)'}}><span>Stemming achteraf</span><span style={{color:'#ff8a8a'}}>😩</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="compare">
        <div className="container">
          <div className="compare-head">
            <div className="eyebrow" style={{marginBottom:14}}>Één factuur, twee werelden</div>
            <h2><span className="strike">Zo doe je het nu</span>.<br/>En zo <span className="em">met Emma</span>.</h2>
            <p>Dezelfde KPN-factuur. Eens raden welke kant minder klikken kost.</p>
          </div>
          <div className="compare-grid">
            <div className="compare-card bad">
              <div className="compare-tag">
                <span className="lbl">× Zonder Emma</span>
                <span className="meta">Inkoop › Nieuw › Boekstuk #2026-INK-042</span>
              </div>
              <div className="compare-title">Boekhoudpakket · nieuw inkoopboekstuk</div>
              <div className="demo">
                <div className="bk-mock">
                  <div className="bk-tabs">
                    <span>Basis</span><span className="active">Boekingsregels</span><span>BTW</span><span>Document</span>
                  </div>
                  <div className="bk-row"><label>Leverancier</label><div className="input">KPN B.V.</div></div>
                  <div className="bk-row"><label>Datum</label><div className="input">05-05-2026</div></div>
                  <div className="bk-row"><label>Grootboek</label><div className="input error">verplicht veld</div></div>
                  <div className="bk-row"><label>BTW-categorie</label><div className="input empty"><span>Selecteer…</span></div></div>
                  <div className="bk-row"><label>Bedrag (incl.)</label><div className="input">76,80</div></div>
                  <div className="bk-warn">Boekstuknummer ontbreekt. Automatisch toewijzen?</div>
                  <div className="bk-actions">
                    <span className="b x">Annuleren</span><span className="b x">Concept</span><span className="b p">Opslaan</span>
                  </div>
                </div>
              </div>
              <div className="compare-stats">
                <div className="stat"><b>10</b><span className="u">klikken</span></div>
                <div className="stat"><b>4:32</b><span className="u">min</span></div>
                <div className="stat"><b>2</b><span className="u">foutmeldingen</span></div>
              </div>
            </div>

            <div className="compare-vs"><span>vs</span></div>

            <div className="compare-card good">
              <div className="compare-tag">
                <span className="lbl">✓ Met Emma</span>
                <span className="meta">Chat · 1 bericht</span>
              </div>
              <div className="compare-title">Emma · boek je het even?</div>
              <div className="demo em-mock">
                <div className="em-bub u">
                  Boek KPN-factuur even.
                  <div className="file">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                    KPN-factuur-mei.pdf
                  </div>
                </div>
                <div className="em-bub e">
                  <div className="who">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"/></svg>
                    Emma
                  </div>
                  Klaar. Geboekt op Telefonie/Internet, BTW 21% verwerkt.
                  <div className="recap">
                    <div className="r-row"><span>Grootboek</span><b>4020 · Telefonie</b></div>
                    <div className="r-row"><span>BTW</span><b>21% (€13,33)</b></div>
                    <div className="r-row"><span>Boekstuk</span><b>#2026-INK-042</b></div>
                  </div>
                </div>
              </div>
              <div className="compare-stats">
                <div className="stat"><b>1</b><span className="u">bericht</span></div>
                <div className="stat"><b>0:12</b><span className="u">min</span></div>
                <div className="stat"><b>0</b><span className="u">foutmeldingen</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERFACE STRIP */}
      <section className="interface-strip">
        <div className="container">
          <div className="istr-head">
            <div className="eyebrow" style={{marginBottom:12}}>Één chat → zes taken</div>
            <h2>Emma wordt <span className="em">jouw interface</span>.</h2>
            <p>Je typt wat je wilt. Emma regelt de rest. In je eigen boekhoudpakket.</p>
          </div>
          <div className="istr-grid">
            {[
              { cls:'c1', icon:<><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></>, title:'Factuur boeken', ex:'Boek deze factuur van €76,80 even.' },
              { cls:'c2', icon:<><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></>, title:'Factuur maken', ex:'Stuur Studio Vier 8 uur à €95.' },
              { cls:'c3', icon:<><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></>, title:'Offerte maken', ex:'Offerte Bakker & Co, €22.000.' },
              { cls:'c4', icon:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>, title:'Openstaand checken', ex:'Wie moet me nog betalen?' },
              { cls:'c5', icon:<><path d="M3 20h18"/><path d="M6 16V10M11 16V6M16 16v-8"/></>, title:'Cijfers bekijken', ex:'Hoeveel omzet deze maand?' },
              { cls:'c3', icon:<><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>, title:'BTW altijd klaar', ex:'Klopt mijn aangifte van Q2?' },
            ].map((c, i) => (
              <div key={i} className="istr-card">
                <div className={`istr-icon ${c.cls}`}><svg viewBox="0 0 24 24">{c.icon}</svg></div>
                <h4>{c.title}</h4>
                <div className="ex">{c.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAT DEMO */}
      <section id="oplossing" className="switch">
        <div className="container">
          <div className="switch-head">
            <div className="eyebrow" style={{marginBottom:14}}><Spark /> Vraag het Emma</div>
            <h2>Stop met <span className="strike">klikken, scrollen, zoeken</span>.<br/>Begin met <span className="em">vragen</span>.</h2>
          </div>
          <ChatDemoWrapper />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="hoe" className="how">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{marginBottom:14}}>Drie stappen</div>
            <h2>Zo zet je Emma aan het werk.</h2>
            <p>Geen migratie, geen exporteren, geen nieuw pakket leren. Emma werkt bovenop wat je al hebt.</p>
          </div>
          <div className="steps">
            <div className="step">
              <h3>Koppel je boekhoudpakket</h3>
              <p>Eén keer inloggen bij je bestaande pakket. Emma verbindt via de officiële API. Jij hoeft niks te installeren.</p>
              <div className="step-visual">
                <div className="pkg-grid">
                  <div className="pkg-tile"><div className="dot">M</div>Moneybird</div>
                  <div className="pkg-tile b"><div className="dot">e</div>e‑Boekhouden</div>
                  <div className="pkg-tile c"><div className="dot">Y</div>Yuki</div>
                  <div className="pkg-tile d"><div className="dot">E</div>Exact</div>
                  <div className="pkg-tile e"><div className="dot">S</div>Snelstart</div>
                  <div className="pkg-tile f"><div className="dot">A</div>AFAS</div>
                </div>
              </div>
            </div>
            <div className="step">
              <h3>Stuur Emma een bericht</h3>
              <p>Foto van een bon, een sleep‑en‑plak PDF, of gewoon: &ldquo;maak een offerte voor Bakker & Co, €22.000 website&rdquo;. Zij regelt het.</p>
              <div className="step-visual">
                <div className="chat-mini">
                  <div className="pill-mini">Foto van de tankbon erbij sturen…</div>
                  <div className="send-mini">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <h3>Klaar.</h3>
              <p>Emma boekt, mailt, en zet alles netjes in je administratie. Jij krijgt een bevestiging. En je avond terug.</p>
              <div className="step-visual">
                <div className="done-tile">
                  <div className="done-check">✓</div>
                  <div>
                    <div className="dt-title">Geboekt in Moneybird</div>
                    <div className="dt-sub">Tankbon Shell · €68,40 · 2 sec geleden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="prijs" className="pricing">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{marginBottom:14}}>Eerlijke prijs</div>
            <h2>€1 tot €5 per maand.<br/>Niet meer dan een kop koffie.</h2>
            <p>Je koos voor een gratis of goedkoop boekhoudpakket om geld te besparen. Logisch. Onze prijs moet onder die besparing blijven, anders heeft Emma geen punt. Eerste maand gratis, daarna pas betalen.</p>
          </div>
          <div className="roi-strip">
            <div className="roi-cell"><div className="roi-num">3 uur</div><div className="roi-lbl">boekhouden per maand</div></div>
            <div className="roi-op">×</div>
            <div className="roi-cell"><div className="roi-num">€60</div><div className="roi-lbl">jouw uurtarief als ZZP&apos;er</div></div>
            <div className="roi-op">=</div>
            <div className="roi-cell emph"><div className="roi-num">€180</div><div className="roi-lbl">aan eigen tijd, per maand</div></div>
            <div className="roi-op">vs</div>
            <div className="roi-cell you"><div className="roi-num">€2,50</div><div className="roi-lbl">wat Emma kost</div></div>
          </div>
          <div className="price-grid">
            <div className="price-card">
              <div className="pname">Basis</div>
              <h3>Boeken</h3>
              <div className="amt-row"><span className="amt">€1</span><span className="per">/maand</span></div>
              <p className="sub">Voor wie alleen wil inboeken. Geen formulier, gewoon chat.</p>
              <ul>
                <li><span className="v">✓</span> Facturen boeken via chat</li>
                <li><span className="v">✓</span> Bonnetjes per foto</li>
                <li><span className="v">✓</span> BTW & grootboek automatisch</li>
                <li><span className="v">✓</span> 1 boekhoudpakket koppeling</li>
              </ul>
              <a href="#cta" className="btn btn-ghost">Op de wachtlijst</a>
            </div>
            <div className="price-card feat">
              <div className="pop-tag">Meest gekozen</div>
              <div className="pname">Standaard</div>
              <h3>Boeken & factureren</h3>
              <div className="amt-row"><span className="amt">€2,50</span><span className="per">/maand</span></div>
              <p className="sub">De gulden middenweg voor ZZP&apos;ers. Boeken én factureren in één chat.</p>
              <ul>
                <li><span className="v">✓</span> Alles van Basis</li>
                <li><span className="v">✓</span> Facturen maken & versturen</li>
                <li><span className="v">✓</span> Automatische herinneringen</li>
                <li><span className="v">✓</span> Openstaande in één overzicht</li>
              </ul>
              <a href="#cta" className="btn btn-cta">Op de wachtlijst →</a>
            </div>
            <div className="price-card">
              <div className="pname">Premium</div>
              <h3>Alles met Emma</h3>
              <div className="amt-row"><span className="amt">€5</span><span className="per">/maand</span></div>
              <p className="sub">Voor wie ook offertes maakt. De volledige Emma.</p>
              <ul>
                <li><span className="v">✓</span> Alles van Standaard</li>
                <li><span className="v">✓</span> Offertes maken via chat</li>
                <li><span className="v">✓</span> Geaccepteerd → factuur klaar</li>
                <li><span className="v">✓</span> Voorrang in support</li>
              </ul>
              <a href="#cta" className="btn btn-ghost">Op de wachtlijst</a>
            </div>
          </div>
          <div className="price-foot">
            {[
              { icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>, title:'Eerste maand gratis', sub:'Bij elk plan. Geen creditcard tot je doorgaat.' },
              { icon: <><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/><path d="M9 12l2 2 4-4"/></>, title:'Fair use', sub:'Tot ±500 acties per maand. Meer? Dan kijken we even mee.' },
              { icon: <path d="M3 6h18M3 12h18M3 18h18"/>, title:'Maandelijks opzegbaar', sub:'Geen contract, geen gedoe. Je administratie blijft van jou.' },
              { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></>, title:'Plus je boekhoudpakket', sub:'Emma komt bóvenop. Je houdt je gratis of betaalde pakket gewoon.' },
            ].map((item, i) => (
              <div key={i} className="pf-item">
                <div className="pf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg></div>
                <div><b>{item.title}</b><div className="pf-sub">{item.sub}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROL */}
      <section className="control">
        <div className="container control-grid">
          <div className="control-illu">
            <img src="/emma-04-loep.png" alt="Emma met loep" />
          </div>
          <div className="control-text">
            <div className="eyebrow">Geen black box</div>
            <h2 style={{marginTop:14}}>Jij houdt de controle.<br/><span className="em">Altijd.</span></h2>
            <p>Emma neemt het werk over, maar nooit de beslissingen. Alles wat ze doet is zichtbaar, omkeerbaar, en staat netjes in jouw boekhoudpakket.</p>
            <div className="control-pillars">
              {[
                { icon: <><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></>, title:'Vraagt om bevestiging', body:'Twijfelt Emma over een grootboekrekening of bedrag? Ze vraagt het na. Geen stille acties.' },
                { icon: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></>, title:'Data blijft van jou', body:'Je administratie woont in Moneybird, e‑Boekhouden of Yuki. Emma slaat niets permanent op.' },
                { icon: <path d="M12 2L3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7z"/>, title:'Bank-grade veiligheid', body:'OAuth, encryptie in transit en at rest, GDPR-compliant. Net zo netjes als je telebankieren.' },
              ].map((p, i) => (
                <div key={i} className="pillar">
                  <div className="pi"><svg viewBox="0 0 24 24">{p.icon}</svg></div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="koppelingen" className="integraties">
        <div className="container">
          <h2>Emma <span className="em">verandert niets</span> aan je boekhouding.<br/>Ze maakt &apos;m alleen onzichtbaar.</h2>
          <p className="lead">Jouw data blijft in jouw boekhoudpakket. Emma praat er alleen mee, via officiële API&apos;s. Zoals een handige collega die overal toegang heeft.</p>
          <div className="logo-cloud">
            <div className="logo-pill"><span className="status beta">Eerste</span><div className="glyph">e</div><div className="name">e‑Boekhouden</div><div className="role">In ontwikkeling</div></div>
            <div className="logo-pill"><span className="status soon">Binnenkort</span><div className="glyph">M</div><div className="name">Moneybird</div><div className="role">Op de planning</div></div>
            <div className="logo-pill"><span className="status soon">Binnenkort</span><div className="glyph">S</div><div className="name">SnelStart</div><div className="role">Op de planning</div></div>
            <div className="logo-pill"><span className="status soon">Binnenkort</span><div className="glyph">J</div><div className="name">Jortt</div><div className="role">Op de planning</div></div>
            <div className="logo-pill"><span className="status soon">Binnenkort</span><div className="glyph">Y</div><div className="name">Yuki</div><div className="role">Op de planning</div></div>
            <div className="logo-pill"><span className="status soon">Op aanvraag</span><div className="glyph">+</div><div className="name">Anders?</div><div className="role">Laat het weten</div></div>
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section id="voor-wie" className="voor-wie">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{marginBottom:14}}>Voor wie</div>
            <h2>Gebouwd voor wie liever onderneemt<br/>dan administreert.</h2>
          </div>
          <div className="persona-grid">
            <div className="persona">
              <div className="tag">De ZZP&apos;er</div>
              <h3>&ldquo;Ik heb e‑Boekhouden omdat het gratis is. Niet omdat ik het snap.&rdquo;</h3>
              <p>Jij regelt klussen, klanten en koffie. De software is een noodzakelijk kwaad. Emma haalt dat kwaad eruit.</p>
              <div className="quote">&ldquo;Eerst 40 minuten per week kwijt aan bonnetjes. Nu drie berichtjes en klaar.&rdquo;</div>
            </div>
            <div className="persona feat">
              <div className="tag">Klein MKB</div>
              <h3>Te klein voor een boekhouder, te druk om alles zelf te doen.</h3>
              <p>Meerdere facturen per week, geen tijd om in te loggen, en geen zin om er een fulltime kracht op te zetten.</p>
              <div className="quote">&ldquo;Emma is goedkoper dan een uur per week boekhouder, en sneller dan ikzelf.&rdquo;</div>
              <div className="badge"><span>★ Primaire doelgroep</span></div>
            </div>
            <div className="persona">
              <div className="tag">De Starter</div>
              <h3>&ldquo;Ik wil nul tijd kwijt zijn aan boekhouding.&rdquo;</h3>
              <p>Je bent net begonnen, overweldigd door alle administratieregels. Emma legt het in normale taal uit én regelt het.</p>
              <div className="quote">&ldquo;Ik had niet eens een boekhoudpakket. Emma heeft Moneybird voor me opgezet.&rdquo;</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{marginBottom:14}}>Vragen aan Emma</div>
            <h2>Het meestgevraagde, vooraf beantwoord.</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="cta-final">
        <div className="container cta-final-grid">
          <div>
            <div className="eyebrow" style={{color:'var(--mint)'}}><Spark /> Laatste stap</div>
            <h2 style={{marginTop:14}}>Laat Emma je<br/>boekhouding<br/><span className="em">overnemen.</span></h2>
            <p>Plug-and-play. Geen creditcard, geen verkoper. Stuur Emma vanavond je eerste factuur. Morgen weet je niet meer waarom je het ooit zelf deed.</p>
            <div className="signup-form">
              <input type="email" placeholder="je@bedrijf.nl" aria-label="E-mailadres" />
              <button type="button">Zet me op de wachtlijst →</button>
            </div>
            <div className="signup-trust">
              <span><span className="v">✓</span> Eerste maand gratis</span>
              <span><span className="v">✓</span> Geen creditcard nodig</span>
              <span><span className="v">✓</span> Geen spam, beloofd</span>
            </div>
          </div>
          <div className="cta-final-illu">
            <img src="/emma-05-checklist.png" alt="Emma met checklist" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="wordmark"><span className="a">Emma</span><span className="b">Boekt.</span></div>
              <p>Een chat-laag bovenop jouw boekhoudpakket. Onderdeel van EmmaCorp, ook makers van EmmaVindt en EmmaRegelt.</p>
              <div style={{marginTop:8}}>
                <span style={{display:'inline-flex',gap:6,alignItems:'center',fontSize:12,padding:'6px 12px',background:'rgba(52,195,143,0.1)',color:'var(--mint)',borderRadius:999,fontWeight:600}}>
                  <span style={{width:6,height:6,background:'var(--mint)',borderRadius:'50%',display:'inline-block'}}></span>
                  Live in Nederland
                </span>
              </div>
            </div>
            <div>
              <h5>Product</h5>
              <ul>
                <li><a href="#oplossing">Wat doet Emma</a></li>
                <li><a href="#hoe">Hoe het werkt</a></li>
                <li><a href="#koppelingen">Koppelingen</a></li>
                <li><a href="#prijs">Prijzen</a></li>
              </ul>
            </div>
            <div>
              <h5>EmmaCorp</h5>
              <ul>
                <li><a href="#">EmmaVindt</a></li>
                <li><a href="#">EmmaRegelt</a></li>
                <li><a href="#">Over ons</a></li>
                <li><a href="#">Werken bij</a></li>
              </ul>
            </div>
            <div>
              <h5>Hulp</h5>
              <ul>
                <li><a href="#">Help & docs</a></li>
                <li><a href="#">Privacy & API</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="mailto:hallo@emmaboekt.nl">hallo@emmaboekt.nl</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2026 EmmaCorp B.V. · KvK 12345678</div>
            <div className="made">Boekhouden zonder gedoe. Emma doet het voor je.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
