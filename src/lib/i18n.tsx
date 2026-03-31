"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "is";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "is" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export const t = {
  // Header
  header: {
    en: { name: "Jón Bjarni Steinsson", subtitle: "application for operations director", cv: "CV / RÉSUMÉ" },
    is: { name: "Jón Bjarni Steinsson", subtitle: "umsókn um stöðu rekstrarstjóra", cv: "FERILSKRÁ (CV)" },
  },

  // Hero
  hero: {
    en: {
      tag: "Application",
      tagSub: "— atNorth ICE02 Operations Director",
      line1: "Operations Leader.",
      line2: "Legal Background.",
      line3: "20 Years of Execution.",
      sub: "Nearly two decades leading high-reliability, 24/7 operations across hospitality, entertainment, and large-scale event production — industries where failure is immediate, visible, and unforgivable.",
      subBold: "Now ready for critical infrastructure.",
      cta1: "Why I'm relevant",
      cta2: "View full CV",
    },
    is: {
      tag: "Umsókn",
      tagSub: "— atNorth ICE02 rekstrarstjóri",
      line1: "Rekstrarfræðingur.",
      line2: "Lögfræðimenntun.",
      line3: "20 ára framkvæmd.",
      sub: "Næstum tveggja áratuga reynsla af rekstri sem krefst 24/7 áreiðanleika — í veitingaþjónustu, skemmtistöðum og stórviðburðum — þar sem mistök eru strax sýnileg og óafturkræf.",
      subBold: "Tilbúinn í mikilvæga innviðastjórnun.",
      cta1: "Hvers vegna ég",
      cta2: "Sjá fulla ferilskrá",
    },
  },

  // Core Experience (was WhyMe)
  whyMe: {
    en: {
      label: "Operational background",
      h1: "High-reliability operations.",
      h2: "Not theory — real execution.",
      p1: "For nearly 20 years, I've managed multi-unit, continuous operations in one of the most failure-prone industries in Iceland. Every night is a live event. Every failure is public. Every system — staffing, logistics, compliance, finances — must work in real time, without exception.",
      p2: "Dillon Whiskey Bar. Pablo Discobar. Chuck Norris Grill. 200+ live events per year. Five operational units running simultaneously. Full P&L responsibility across every entity.",
      cards: [
        {
          title: "24/7 Operational Discipline",
          copy: "Payroll, HR, inventory, procurement, vendor management, and live event logistics — all running in parallel. Zero tolerance for system failure. This is continuous operations management, not project work.",
        },
        {
          title: "Team Reliability in High-Turnover Environments",
          copy: "Recruiting, training, and retaining staff in Iceland's highest-turnover industry. Building teams that perform consistently — night after night, under pressure, without supervision gaps.",
        },
        {
          title: "Crisis and Incident Management",
          copy: "When capacity hits 800, a performer cancels, and emergency services call in — there is no escalation path. You resolve it. Calmly, methodically, and with full accountability for outcome.",
        },
      ],
    },
    is: {
      label: "Rekstrarreynsla",
      h1: "Rekstur sem krefst áreiðanleika.",
      h2: "Ekki kenning — raunveruleg framkvæmd.",
      p1: "Í næstum 20 ár hef ég stýrt samfelldri starfsemi margra eininga í einum þeim iðnaði á Íslandi þar sem mistök eru algengust. Hvert kvöld er lifandi viðburður. Hvert kerfi — mannauður, aðfangakeðja, reglufylgni, fjármál — verður að virka í rauntíma, undantekningarlaust.",
      p2: "Dillon Whiskey Bar. Pablo Discobar. Chuck Norris Grill. 200+ lifandi viðburðir á ári. Fimm rekstrareiningar samtímis. Full P&L ábyrgð á öllum einingum.",
      cards: [
        {
          title: "24/7 rekstraragi",
          copy: "Launavinnsla, mannauðsmál, birgðir, innkaup, birgðastjórnun og viðburðaskipulag — allt keyrir samsíða. Engin mistök leyfð. Þetta er samfelld rekstrarstjórnun, ekki verkefnavinna.",
        },
        {
          title: "Stöðugleiki teyma í krefjandi umhverfi",
          copy: "Ráðning, þjálfun og varðveisla starfsfólks í iðnaði með hæstu starfsmannaveltu á landinu. Teymi sem standa sig stöðugt — kvöld eftir kvöld, undir álagi, án eftirlitsgata.",
        },
        {
          title: "Kreppustjórnun og úrlausn atvika",
          copy: "Þegar rýmið fyllist, listamenn falla frá og neyðarþjónustur hringja — þá er enginn framar í keðjunni. Þú leysir málið. Rólega, skipulega, með fulla ábyrgð á útkomuni.",
        },
      ],
    },
  },

  // Education
  education: {
    en: {
      label: "Education & Legal Background",
      h1: "Compliance-ready.",
      h2: "Legally trained operations leader.",
      sub: "An LLM in international tax law is not a typical operations background — but it means I bring native fluency in regulatory frameworks, contractual structures, compliance requirements, and cross-border legal considerations that most operators learn on the job.",
      degrees: [
        { degree: "LLM in European & International Tax Law", school: "Lund University, Sweden", year: "2013–2014", thesis: "Thin Cap and Iceland — What can happen in the absence of thin capitalization rules?", note: "Taught under Lund University School of Economics and Management" },
        { degree: "Master's in Tax Law", school: "Bifröst University, Iceland", year: "2011–2013", thesis: "What are thin capitalization tax schemes and how are they being countered by policy makers.", note: null },
        { degree: "BS in Business Law", school: "Bifröst University, Iceland", year: "2008–2011", thesis: null, note: null },
        { degree: "Communication Management & Sustainability", school: "In progress", year: "Current", thesis: null, note: "Directly relevant to stakeholder management and ESG operations" },
      ],
      extraLabel: "Additional",
      extra: [
        "All credits except thesis for ML in Law",
        "HR management, international relations, and leadership coursework",
        "Digital marketing certification — Akademías",
        "Research on tax evasion in tourism (commissioned by SA, SAF, Ministry of Finance, and Bifröst University)",
      ],
    },
    is: {
      label: "Menntun og lögfræðigrunnur",
      h1: "Tilbúinn í reglufylgni.",
      h2: "Lögfræðimenntaður rekstrarstjóri.",
      sub: "LLM í alþjóðlegum skattarétti er ekki dæmigerður rekstrargrunnur — en það þýðir að ég hef innfædda þekkingu á regluverkum, samningsskipulagi, reglufylgni, og lagalegum þáttum yfir landamæri sem flestir rekstrarstjórar þurfa að læra á eigin vegum.",
      degrees: [
        { degree: "LLM í evrópskum og alþjóðlegum skattarétti", school: "Háskólinn í Lundi, Svíþjóð", year: "2013–2014", thesis: "Thin Cap and Iceland — What can happen in the absence of thin capitalization rules?", note: "Kennt undir viðskiptafræðideild Lundarháskóla" },
        { degree: "Master í skattarétti", school: "Háskólinn á Bifröst", year: "2011–2013", thesis: "What are thin capitalization tax schemes and how are they being countered by policy makers.", note: null },
        { degree: "BS í viðskiptalögfræði", school: "Háskólinn á Bifröst", year: "2008–2011", thesis: null, note: null },
        { degree: "Samskiptastjórnun og sjálfbærni", school: "Í vinnslu", year: "Núna", thesis: null, note: "Tengist beint hagaðilastjórnun og ESG rekstri" },
      ],
      extraLabel: "Aukalegt",
      extra: [
        "Allar einingar aðrar en lokaritgerð í ML í lögfræði",
        "Mannauðsstjórnun, alþjóðasamskipti, forysta og stjórnun",
        "Stafræn markaðssetning í Akademías",
        "Rannsókn á skattsvikum í ferðaþjónustu (unnið fyrir SA, SAF, Fjármálaráðuneytið og Bifröst)",
      ],
    },
  },

  // Key Capabilities (replaces SystemStatus percentage bars)
  capabilities: {
    en: {
      title: "Key Capabilities",
      subtitle: "Directly transferable to data center operations",
      items: [
        { icon: "⚡", label: "24/7 Operations Leadership", desc: "Nearly 20 years running continuous, no-downtime operations where every system must function in real time." },
        { icon: "👥", label: "HR & Team Reliability", desc: "Building, training, and retaining high-performing teams in Iceland's most demanding staffing environment." },
        { icon: "🔒", label: "Crisis & Incident Management", desc: "Direct accountability for resolution when systems fail — no escalation path, no second chances." },
        { icon: "📊", label: "P&L Ownership", desc: "Full financial responsibility across multiple simultaneous business units. Budget control is not new." },
        { icon: "⚖️", label: "Legal & Compliance Fluency", desc: "LLM-level understanding of regulation, contracts, cross-border tax structures, and compliance frameworks." },
        { icon: "🤖", label: "Technology & AI Adoption", desc: "Active use of AI tools for automation, development, and operational efficiency. This application was built as proof." },
      ],
      note: "I don't come from a data center. I come from an environment where failure is equally unacceptable — and I've spent 20 years ensuring it doesn't happen.",
    },
    is: {
      title: "Lykilhæfni",
      subtitle: "Beint yfirfæranleg yfir í gagnaversrekstur",
      items: [
        { icon: "⚡", label: "24/7 rekstrarstjórnun", desc: "Næstum 20 ára reynsla af samfelldri starfsemi þar sem hvert kerfi verður að virka í rauntíma." },
        { icon: "👥", label: "Mannauður og teymi", desc: "Uppbygging, þjálfun og varðveisla afkastamikilla teyma í krefjandasta mannauðsumhverfi Íslands." },
        { icon: "🔒", label: "Kreppustjórnun", desc: "Bein ábyrgð á úrlausn þegar kerfi bila — engin stigvaxandi leið, engin önnur tækifæri." },
        { icon: "📊", label: "P&L ábyrgð", desc: "Full fjárhagsleg ábyrgð á mörgum rekstrareiningum samtímis. Kostnaðarstjórnun er ekki nýtt." },
        { icon: "⚖️", label: "Lögfræði og reglufylgni", desc: "LLM-stigs skilningur á regluverkum, samningum, skattaskipulagi yfir landamæri og reglufylgni." },
        { icon: "🤖", label: "Tækni og gervigreind", desc: "Virk notkun AI tóla til sjálfvirkni, þróunar og rekstrarhagkvæmni. Þessi umsókn var smíðuð sem sönnun." },
      ],
      note: "Ég kem ekki úr gagnaveri. Ég kem úr umhverfi þar sem bilun er jafn óásættanleg — og ég hef eytt 20 árum í að tryggja að hún gerist ekki.",
    },
  },

  // Eclipse / Current Project
  eclipse: {
    en: {
      label: "Current project",
      h1: "Multi-stakeholder coordination.",
      h2: "At national scale.",
      linkText: "www.eclipse.is →",
      linkSub: "Iceland Eclipse — large-scale cultural and scientific event",
      p1: "International producers commissioned Iceland's most complex combined cultural and scientific event — and selected me to lead on-the-ground operations. The venue: an Icelandic national park.",
      p2: "Multi-agency coordination across municipalities, law enforcement, search and rescue, artists, vendors, and national media. Hundreds of people on site. Multiple stakeholder groups. Sensitive protected environment.",
      p3: "If execution fails, it's immediate and irreversible — there is no second take. This is real-world project management at scale, in a high-risk environment, where every dependency must hold.",
      metrics: [
        { value: "200+", label: "Events managed per year" },
        { value: "5+", label: "Concurrent operational units" },
        { value: "~20", label: "Years of experience" },
        { value: "24/7", label: "Operational readiness" },
      ],
    },
    is: {
      label: "Núverandi verkefni",
      h1: "Samhæfing margra hagaðila.",
      h2: "Á landsvísu.",
      linkText: "www.eclipse.is →",
      linkSub: "Iceland Eclipse — stór menningar- og vísindaviðburður",
      p1: "Erlendir framleiðendur komu að flóknasta sameinaða menningar- og vísindaviðburð Íslandssögunnar — og völdu mig til að stjórna framkvæmdum á staðnum. Vettvangurinn: íslenskur þjóðgarður.",
      p2: "Samhæfing á vettvangi margra stofnana — sveitarfélaga, lögreglu, björgunarsveita, listamanna, birgja og landsfræguðra fjölmiðla. Hundruð manna á staðnum. Margir hópar hagaðila. Viðkvæmt verndarsvæði.",
      p3: "Ef framkvæmdin mistekst er það strax og óafturkræft — engin taka tvö. Þetta er raunveruleg verkefnastjórnun á stórum skala, í áhættuumhverfi, þar sem hvert háð hlutfall verður að halda.",
      metrics: [
        { value: "200+", label: "Viðburðir á ári" },
        { value: "5+", label: "Rekstrareiningar samtímis" },
        { value: "~20", label: "Ára reynsla" },
        { value: "24/7", label: "Rekstrartilbúinn" },
      ],
    },
  },

  // Strategic Value (was Strategy)
  strategy: {
    en: {
      label: "Strategic value",
      h1: "What I bring beyond",
      h2: "technical operations.",
      sub: "atNorth emphasizes sustainability, culture, and people alongside infrastructure. My background maps directly to the non-technical dimensions of this role.",
      cards: [
        {
          title: "Stakeholder Communication",
          copy: "Uptime isn't only technical — it's relational. An operations director who understands how to communicate across teams, clients, regulators, and community stakeholders creates more resilient operations than one who only understands systems.",
        },
        {
          title: "Sustainability as Operational Strategy",
          copy: "Currently completing studies in sustainability and communication management. If atNorth's competitive edge is renewable energy and ESG positioning, that needs to be operationally embedded — not just marketed.",
        },
        {
          title: "Regulatory & Compliance Depth",
          copy: "Legal education with specialization in international tax law. Native understanding of regulatory frameworks, contractual risk, compliance obligations — the kind of knowledge that prevents costly mistakes before they happen.",
        },
        {
          title: "Financial Control at Scale",
          copy: "ISK 20B+ in managed annual revenue across multiple entities. Full P&L ownership in every operational role. Financial discipline is foundational, not supplementary.",
        },
      ],
    },
    is: {
      label: "Stefnumótandi gildi",
      h1: "Hvað ég kem með umfram",
      h2: "tæknilegan rekstur.",
      sub: "atNorth leggur áherslu á sjálfbærni, menningu og fólk samhliða innviðum. Bakgrunnur minn varpar ljósi á ótæknilega víddir þessa hlutverks.",
      cards: [
        {
          title: "Samskipti við hagaðila",
          copy: "Uptime er ekki bara tæknilegt — það er samskiptalegt. Rekstrarstjóri sem skilur hvernig á að eiga samskipti á milli teyma, viðskiptavina, eftirlitsaðila og samfélagsaðila byggir öflugri rekstur en sá sem skilur bara kerfin.",
        },
        {
          title: "Sjálfbærni sem rekstrarstefna",
          copy: "Nú að ljúka námi í sjálfbærni og samskiptastjórnun. Ef samkeppnisforskot atNorth er endurnýjanleg orka og ESG staðsetning, þá þarf það að vera innbyggt í rekstrinum — ekki bara markaðssett.",
        },
        {
          title: "Dýpt í regluverki og reglufylgni",
          copy: "Lögfræðimenntun með sérþekkingu á alþjóðlegum skattarétti. Innfæddur skilningur á regluverkum, samningsáhættu, reglufylgni — þekking sem kemur í veg fyrir kostnaðarsamar villur áður en þær gerast.",
        },
        {
          title: "Fjármálastjórnun á skala",
          copy: "20+ milljarðar í stýrðum árstekjum á mörgum einingum. Full P&L ábyrgð í hverju rekstrarhlutverki. Fjárhagslegur agi er grunnur, ekki viðbót.",
        },
      ],
    },
  },

  // Final CTA
  cta: {
    en: {
      h1: "Not the conventional candidate.",
      h2: "But built for",
      h2bold: "operational leadership.",
      btn1: "Let's talk →",
      btn2: "View full CV",
    },
    is: {
      h1: "Ekki hefðbundni umsækjandinn.",
      h2: "En byggður fyrir",
      h2bold: "rekstrarstjórnun.",
      btn1: "Tölum saman →",
      btn2: "Sjá fulla ferilskrá",
    },
  },

  // Footer
  footer: {
    en: { built: "Application designed and built by the candidate.", cv: "Résumé", email: "Email" },
    is: { built: "Umsókn hönnuð og smíðuð af umsækjanda.", cv: "Ferilskrá", email: "Tölvupóstur" },
  },
};
