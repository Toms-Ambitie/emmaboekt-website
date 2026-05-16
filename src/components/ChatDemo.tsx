'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const Spark = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"/>
  </svg>
)

const PaperclipIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
  </svg>
)

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
)

type DocRow = [string, string]
interface Doc { title: string; amount: string; rows: DocRow[]; status?: string }
interface Step {
  kind: 'user' | 'emma' | 'emma-confirm' | 'typing'
  text?: string
  attach?: string
  actions?: string[]
  doc?: Doc
}

const SCENARIOS: Record<string, { title: string; side: { h: string; p: string; items: [string,string][] }; pkg: string; steps: Step[] }> = {
  boeken: {
    title: 'Factuur boeken',
    side: {
      h: 'Sleep een PDF, maak een foto, of plak een bedrag.',
      p: 'Emma herkent leveranciers, boekt op de juiste grootboekrekening, verwerkt BTW, en zet alles netjes in je boekhoudpakket.',
      items: [
        ['Slimme herkenning', 'PDF, foto, of plain tekst. Emma leest leverancier, bedrag en datum.'],
        ['BTW & grootboek', 'Categorisering gebeurt automatisch. Twijfelgeval? Ze vraagt het na.'],
        ['Direct in je pakket', 'Geboekt in Moneybird, e‑Boekhouden of Yuki. Inloggen niet nodig.'],
      ],
    },
    pkg: 'Moneybird',
    steps: [
      { kind: 'user', text: "Heb een factuur van KPN, €76,80. Boek je 'm even?", attach: 'KPN-factuur-mei.pdf · 124 kB' },
      { kind: 'typing' },
      { kind: 'emma', text: 'Even kijken… 📄' },
      { kind: 'emma-confirm', text: 'Klaar. Geboekt op Telefonie/Internet, BTW 21% verwerkt. Boekstuk #2026‑INK‑042.', doc: {
        title: 'KPN · Mobiele telefonie', amount: '€76,80',
        rows: [['Categorie','Telefonie/Internet'],['BTW','21% (€13,33)'],['Datum','5 mei 2026'],['Pakket','Moneybird']],
        status: 'Geboekt'
      }},
      { kind: 'user', text: 'Top. Geldt deze ook voor volgende maand?' },
      { kind: 'typing' },
      { kind: 'emma', text: "Klopt, vaste lasten. Ik herken 'm voortaan automatisch en boek 'm zonder vragen. Wil je dat?", actions: ['Ja, automatisch','Eerst altijd vragen'] },
    ],
  },
  maken: {
    title: 'Factuur maken',
    side: {
      h: 'Vertel Emma wat erop moet. Klaar.',
      p: 'Geen formulieren, geen klantkaart aanmaken, geen "regel toevoegen". Eén zin is genoeg.',
      items: [
        ['Eén zin → factuur', '"8 uur voor Studio Vier à €95" en klaar.'],
        ['Klant onthouden', "Studio Vier zit er al in. Nieuwe klant? Emma vraagt 't."],
        ['Verstuur of bewerk', 'Even controleren, of meteen mailen.'],
      ],
    },
    pkg: 'Moneybird',
    steps: [
      { kind: 'user', text: 'Maak een factuur voor Studio Vier, 8 uur consultancy à €95.' },
      { kind: 'typing' },
      { kind: 'emma', text: "Doe ik. Hetzelfde mailadres als vorige keer (martijn@studiovier.nl)?" },
      { kind: 'user', text: 'Yes.' },
      { kind: 'typing' },
      { kind: 'emma-confirm', text: "Concept klaar. Even nakijken voor ik 'm verstuur?", doc: {
        title: 'Factuur 2026-038 · Studio Vier', amount: '€919,60',
        rows: [['8 uur consultancy','€760,00'],['BTW 21%','€159,60'],['Vervaldatum','30 dagen'],['Pakket','Moneybird']],
        status: 'Concept'
      }, actions: ['Ja, verstuur naar Martijn','Open in Moneybird'] },
      { kind: 'user', text: "Verstuur 'm maar." },
      { kind: 'typing' },
      { kind: 'emma', text: "Verstuurd. ✨ Bij niet-betalen na 14 dagen stuur ik automatisch een vriendelijke herinnering." },
    ],
  },
  offerte: {
    title: 'Offerte maken',
    side: {
      h: 'Beschrijf de deal. Emma maakt een nette offerte.',
      p: 'Inclusief regelitems, geldigheidsduur, en de juiste algemene voorwaarden. Versturen of eerst nog tweaken, jij kiest.',
      items: [
        ['Vrije omschrijving', "Geen rigide template. Emma bouwt 'm rond jouw beschrijving."],
        ['Voorwaarden eronder', 'Standaard 30 dagen geldig, jouw AV automatisch eronder.'],
        ['Eén klik om te accepteren', 'De klant tekent online. Geaccepteerd? Direct als concept-factuur klaar.'],
      ],
    },
    pkg: 'e‑Boekhouden',
    steps: [
      { kind: 'user', text: 'Offerte voor Bakker & Co: website redesign €22.000, plus €1.200/maand onderhoud.' },
      { kind: 'typing' },
      { kind: 'emma', text: "Helder. Eenmalig project plus abonnement. Zet ik in één offerte met twee regels. Geldigheid 30 dagen, jouw standaard AV eronder. Akkoord?" },
      { kind: 'user', text: "Doe maar. En kun je de eerste betaling 50% bij start zetten?" },
      { kind: 'typing' },
      { kind: 'emma-confirm', text: "Voorstel staat. Even meekijken?", doc: {
        title: 'Offerte O-2026-014 · Bakker & Co', amount: '€22.000',
        rows: [['Website redesign (eenmalig)','€22.000'],['Onderhoud','€1.200/mnd'],['Bij start','50% (€11.000)'],['Geldig tot','15 juni 2026']],
        status: 'Concept'
      }, actions: ['Verstuur naar Bakker & Co','Pas regel aan'] },
      { kind: 'user', text: "Verstuur 'm." },
      { kind: 'typing' },
      { kind: 'emma', text: "Verstuurd via DocuSign-link. Zodra ze tekenen krijg je een seintje, en ik zet 'm meteen klaar als factuur. 🎉" },
    ],
  },
}

const SUGGESTIONS: Record<string, string[]> = {
  boeken:  ['Boek de KPN-factuur van €76,80', 'Bonnetje van Shell · €68,40 · zakelijk', 'Hoe staat mijn BTW deze maand?'],
  maken:   ['Stuur Studio Vier 8 uur à €95', 'Maak factuur Bakker & Co · €3.500', 'Verstuur herinneringen openstaande'],
  offerte: ['Offerte website redesign €22.000', 'Voeg €1.200/mnd onderhoud toe', 'Geldig 30 dagen · verstuur'],
}

async function getEmmaReply(msg: string, pkg: string, scenarioTitle: string): Promise<string> {
  const w = window as unknown as { claude?: { complete: (opts: unknown) => Promise<string> } }
  const lower = msg.toLowerCase()
  if (w.claude?.complete) {
    const systemPrompt = `Je bent Emma, de AI-boekhoudassistent van EmmaBoekt.nl. De gebruiker chat met je in een DEMO. Simuleer plausibele antwoorden. Antwoord in het Nederlands. Korte, menselijke zinnen. Begin een geslaagde actie met "Klaar." of "Doe ik." Wees concreet: noem bedragen, grootboekrekeningen, BTW-tarieven. Max 60 woorden. Pakket: ${pkg}. Context: ${scenarioTitle}. Begin nooit met "Hallo".`
    return await w.claude.complete({ messages: [{ role: 'user', content: `${systemPrompt}\n\nGebruiker: ${msg}\n\nEmma:` }] })
  }
  await new Promise(r => setTimeout(r, 700 + Math.random() * 500))
  if (lower.includes('kpn') || (lower.includes('boek') && lower.includes('factuur')))
    return 'Klaar. KPN geboekt op 4020 Telefoonkosten, BTW 21% verwerkt. Boekstuk #2026-INK-043 staat in je pakket.'
  if (lower.includes('boek') || lower.includes('bon'))
    return 'Klaar. Geboekt op de juiste grootboekrekening, BTW verwerkt. Wil ik dit leverancier voortaan automatisch herkennen?'
  if (lower.includes('factuur') && (lower.includes('maak') || lower.includes('stuur') || lower.includes('uur')))
    return 'Doe ik. Hetzelfde mailadres als vorige keer, of een ander adres?'
  if (lower.includes('offerte'))
    return 'Helder. Offerte klaarzetten met jouw standaard AV, geldig 30 dagen. Eenmalig of ook een abonnement erbij?'
  if (lower.includes('openstaand') || lower.includes('herinnering'))
    return 'Je hebt 3 openstaande facturen: Studio Vier €760, Bakker & Co €2.200, Krekel BV €445. Wil ik herinneringen sturen?'
  if (lower.includes('omzet') || lower.includes('cijfers'))
    return 'Omzet deze maand: €8.450. Kosten: €1.230. Winst voor belasting: €7.220.'
  if (lower.includes('btw') || lower.includes('aangifte'))
    return 'BTW Q2: te betalen €1.840. Alle boekingen kloppen, geen afwijkingen. Wil ik hem klaarzetten?'
  return 'Doe ik. Geef me even het bedrag en de leverancier, dan regel ik de rest.'
}

function DocPreview({ doc }: { doc: Doc }) {
  return (
    <div className="doc-preview">
      <div className="dp-head">
        <div className="dp-title">{doc.title}</div>
        <div className="dp-amount">{doc.amount}</div>
      </div>
      <div className="dp-rows">
        {doc.rows.map(([k, v], i) => (
          <span key={i}>{k}<b>{v}</b></span>
        ))}
      </div>
      {doc.status && <div className="dp-status">● {doc.status}</div>}
    </div>
  )
}

function Bubble({ step }: { step: Step }) {
  if (step.kind === 'user') return (
    <div className="bubble user">
      {step.text}
      {step.attach && <div className="attach"><PaperclipIcon /><span>{step.attach}</span></div>}
    </div>
  )
  if (step.kind === 'emma') return (
    <div className="bubble emma">
      {step.text}
      {step.actions && <div className="chat-actions">{step.actions.map((a, i) => <button key={i} className={i === 0 ? 'primary' : ''}>{a}</button>)}</div>}
    </div>
  )
  if (step.kind === 'emma-confirm') return (
    <div className="bubble emma confirm">
      <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:6,color:'var(--jade)',fontWeight:700,fontSize:12,letterSpacing:'0.04em',textTransform:'uppercase'}}>
        <Spark size={12} /> Emma
      </div>
      <div style={{marginBottom: step.doc ? 10 : 0}}>{step.text}</div>
      {step.doc && <DocPreview doc={step.doc} />}
      {step.actions && <div className="chat-actions">{step.actions.map((a, i) => <button key={i} className={i === 0 ? 'primary' : ''}>{a}</button>)}</div>}
    </div>
  )
  if (step.kind === 'typing') return (
    <div className="typing"><span/><span/><span/></div>
  )
  return null
}

export default function ChatDemo() {
  const [activeKey, setActiveKey] = useState('boeken')
  const [shown, setShown] = useState<Step[]>([])
  const [restartKey, setRestartKey] = useState(0)
  const [interactive, setInteractive] = useState(false)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const scenario = SCENARIOS[activeKey]

  useEffect(() => {
    if (interactive) return
    setShown([])
    timers.current.forEach(clearTimeout)
    timers.current = []
    let delay = 250
    scenario.steps.forEach((step) => {
      const dur = step.kind === 'typing' ? 900 : step.kind === 'emma-confirm' ? 1400 : 1100
      const t = setTimeout(() => {
        setShown(prev => {
          if (prev.length > 0 && prev[prev.length - 1].kind === 'typing' && step.kind !== 'typing')
            return [...prev.slice(0, -1), step]
          return [...prev, step]
        })
      }, delay)
      timers.current.push(t)
      delay += dur
    })
    const r = setTimeout(() => setRestartKey(k => k + 1), delay + 3500)
    timers.current.push(r)
    return () => timers.current.forEach(clearTimeout)
  }, [activeKey, restartKey, interactive, scenario.steps])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [shown])

  const goInteractive = useCallback(() => {
    if (interactive) return
    timers.current.forEach(clearTimeout)
    timers.current = []
    setShown(prev => prev.filter(s => s.kind !== 'typing'))
    setInteractive(true)
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [interactive])

  const sendMessage = useCallback(async (text?: string) => {
    const msg = (text ?? input).trim()
    if (!msg || sending) return
    goInteractive()
    setInput('')
    setSending(true)
    setShown(prev => [...prev, { kind: 'user', text: msg }, { kind: 'typing' }])
    try {
      const reply = await getEmmaReply(msg, scenario.pkg, scenario.title)
      setShown(prev => [...prev.filter(s => s.kind !== 'typing'), { kind: 'emma', text: reply.trim() }])
    } catch {
      setShown(prev => [...prev.filter(s => s.kind !== 'typing'), { kind: 'emma', text: 'Er ging even iets mis. Probeer het zo nog een keer.' }])
    } finally {
      setSending(false)
    }
  }, [input, sending, goInteractive, scenario.pkg, scenario.title])

  const handleTabClick = (key: string) => {
    setActiveKey(key)
    setInteractive(false)
    setRestartKey(k => k + 1)
  }

  return (
    <div>
      <div className="tab-bar-wrap">
        <div className="tab-bar" role="tablist">
          {Object.entries(SCENARIOS).map(([key, sc]) => (
            <button key={key} role="tab" className={'tab' + (key === activeKey ? ' active' : '')} onClick={() => handleTabClick(key)}>
              <Spark size={12} />{sc.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1240,margin:'0 auto 16px',padding:'0 4px'}}>
        <div className="demo-banner">
          <svg className="di" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span><b>Dit is een demo.</b> Praat gerust met Emma. Ze geeft gesimuleerde antwoorden, er wordt niets echt geboekt of verstuurd.</span>
        </div>
      </div>

      <div className="chat-stage">
        <div className="app-shell">
          <aside className="app-sidebar">
            <div className="brand">
              <img src="/emmaboekt-mark.webp" alt="Emma" />
              <b>EmmaBoekt</b>
            </div>
            <div className="app-nav-item active">
              <svg className="nv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Nieuwe chat
            </div>
            <div className="app-nav-item">
              <svg className="nv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              Gesprekken<span className="count">28</span>
            </div>
            <div className="app-nav-section">Werk</div>
            <div className="app-nav-item">
              <svg className="nv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>
              Facturen<span className="count">42</span>
            </div>
            <div className="app-nav-item">
              <svg className="nv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>
              Offertes<span className="count">7</span>
            </div>
            <div className="app-nav-item">
              <svg className="nv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
              Klanten<span className="count">19</span>
            </div>
            <div className="app-nav-section">Account</div>
            <div className="app-nav-item">
              <svg className="nv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>
              {scenario.pkg}
            </div>
            <div className="user-pill">
              <div className="av">JP</div>
              <div>
                <div className="who">Jij</div>
                <div className="biz">Studio Achterstraat</div>
              </div>
            </div>
          </aside>

          <div className="chat-window">
            <div className="chat-header">
              <div className="avatar"><img src="/emmaboekt-mark.webp" alt="Emma" /></div>
              <div>
                <div className="name">Emma <Spark size={12} /></div>
                <div className="status"><span className="dot"></span> Online · denkt mee</div>
              </div>
              <div className="pkg">
                <span style={{fontSize:11}}>verbonden met</span>
                <span className="pkg-tag">{scenario.pkg}</span>
              </div>
            </div>
            <div className="chat-body" ref={bodyRef}>
              {shown.map((step, i) => <Bubble key={i} step={step} />)}
            </div>
            {!interactive && (
              <div className="chip-row">
                {SUGGESTIONS[activeKey].map((s, i) => (
                  <button key={i} className="chip" onClick={() => sendMessage(s)} disabled={sending}>{s}</button>
                ))}
              </div>
            )}
            <div className="chat-input">
              <button className="icon-btn" aria-label="Bijlage"><PaperclipIcon /></button>
              <input ref={inputRef} className="live-input" type="text"
                placeholder={interactive ? 'Vraag iets aan Emma…' : 'Of typ je eigen vraag…'}
                value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') sendMessage() }}
                onFocus={goInteractive} disabled={sending} />
              <button className="send" aria-label="Verstuur" onClick={() => sendMessage()} disabled={sending || !input.trim()}><SendIcon /></button>
            </div>
          </div>
        </div>

        <div className="switch-side">
          <h3>{scenario.side.h}</h3>
          <p>{scenario.side.p}</p>
          <ul className="switch-list">
            {scenario.side.items.map(([t, d], i) => (
              <li key={i}>
                <span className="check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                </span>
                <span><b>{t}.</b> {d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
