'use client'
import { useState } from 'react'

const items = [
  { q: 'Vervangt EmmaBoekt mijn boekhoudpakket?', a: 'Nee. Emma is een laag bovenop je bestaande pakket. Moneybird, e‑Boekhouden, Yuki en alle andere blijven gewoon je administratie draaien. Emma maakt het alleen prettig om mee te werken.' },
  { q: 'Wat als Emma iets fout boekt?', a: 'Voor elke boeking laat Emma kort zien wat ze gaat doen voor ze het definitief maakt. Niet akkoord? Eén berichtje terug en ze past het aan. Alles staat ook gewoon in je boekhoudpakket. Daar kun je het altijd aanpassen.' },
  { q: 'Werkt Emma met mijn boekhouder?', a: 'Zeker. Je boekhouder werkt gewoon door in jouw bestaande pakket. Niks verandert daar. Emma zorgt alleen dat er minder werk klaarligt als hij of zij inlogt.' },
  { q: 'Hoe veilig is mijn data?', a: 'Je data blijft bij je boekhoudpakket. Emma slaat niets permanent op. De koppeling loopt via officiële API\'s met OAuth, zoals je dat gewend bent van Tikkie of je telebankieren.' },
  { q: 'Wat als ik nog geen boekhoudpakket heb?', a: 'Begin je net? Stel Emma een vraag, dan zet zij Moneybird of e‑Boekhouden voor je op (allebei hebben een gratis startpakket). Dan kun je meteen door.' },
  { q: 'Wat gaat het kosten?', a: '€1 tot €5 per maand, zie de prijzen hierboven. Eerste maand gratis bij elk plan. Onze regel: Emma moet onder je tijdsbesparing blijven, anders heeft het geen punt.' },
  { q: 'Kan ik opzeggen wanneer ik wil?', a: 'Ja. Maandelijks opzegbaar, geen vragen. Je administratie staat in je boekhoudpakket. Die houd je gewoon.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}<span className="chev">+</span>
          </button>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  )
}
