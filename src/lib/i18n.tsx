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

// All site text in both languages
export const t = {
  // Header
  header: {
    en: { name: "Jón Bjarni Steinsson", subtitle: "application for operations director", cv: "CV / RÉSUMÉ" },
    is: { name: "Jón Bjarni Steinsson", subtitle: "skilar inn umsókn um stöðu rekstrarstjóra", cv: "FERILSKRÁ (CV)" },
  },

  // Hero
  hero: {
    en: {
      tag: "Cover Letter",
      tagSub: "— atNorth ICE02 Operations Director",
      line1: "Tax Lawyer.",
      line2: "Operator.",
      line3: "Next challenge.",
      sub: "I have nearly two decades of experience in one of the most demanding industries in Iceland. I've watched most people fail. I didn't — I needed bigger challenges.",
      subBold: "That's why I'm here.",
      cta1: "Why me?",
      cta2: "Open résumé →",
    },
    is: {
      tag: "Kynningarbréf",
      tagSub: "— atNorth ICE02 rekstrarstjóri",
      line1: "Skattalögfræðingur.",
      line2: "Rekstraraðili.",
      line3: "Næsta áskorun.",
      sub: "Ég hef næstum tveggja áratuga reynslu í einum mest krefjandi iðnaði landsins. Ég hef séð flesta fara á hausinn. Mér tókst það ekki, ég þurfti meiri áskoranir.",
      subBold: "Þess vegna er ég hér.",
      cta1: "Af hverju ég?",
      cta2: "Opna ferilskrá →",
    },
  },

  // Why Me
  whyMe: {
    en: {
      label: "Why me",
      h1: "I don't come from a data center.",
      h2: "I come from real operations.",
      p1: "For nearly two decades I've run bars, venues, and nightlife in Reykjavík — one of those industries where most people go bankrupt within two years. I didn't. I built up, scaled, and learned.",
      p2: "Dillon Whiskey Bar. Pablo Discobar. Chuck Norris Grill. Over 200 live concerts a year. Operations that demand everything works – people, finances, flow, and execution – every single day.",
      cards: [
        { title: "Operations that don't fail", copy: "Payroll, HR, inventory, procurement, marketing, concert scheduling — all running simultaneously. When you run a venue there's zero margin for error. This is 24/7 operations." },
        { title: "People who come back", copy: "Hiring, training, and retaining staff in the industry with the highest turnover in the country. If you can retain people at a bar — you can retain people anywhere." },
        { title: "Pressure no textbook teaches", copy: "When 800 people are waiting outside, the band hasn't shown up, and the police are calling — you solve it. Calmly. Systematically. And everyone goes home safe." },
      ],
    },
    is: {
      label: "Af hverju ég",
      h1: "Ég kem ekki úr gagnaveri.",
      h2: "Ég kem úr raunverulegum rekstri.",
      p1: "Í næstum tvo áratugi hef ég rekið veitinga- og skemmtistaði í Reykjavík í einum þeim iðnaði þar sem flestir fara á hausinn innan tveggja ára. Ég gerði það ekki. Ég byggði upp, stækkaði, og lærði.",
      p2: "Dillon Whiskey Bar. Pablo Discobar. Chuck Norris Grill. Yfir 200 lifandi tónleikar á ári. Rekstur sem krefst þess að allt gangi upp – fólk, fjármál, flæði, og framkvæmd – á hverjum einasta degi.",
      cards: [
        { title: "Rekstur sem mistekst ekki", copy: "Launavinnsla, mannauðsmál, birgðir, innkaup, markaðssetning, tónleikaskipulag — allt keyrandi í einu. Þegar þú rekur skemmtistað er ekkert svigrúm fyrir mistök. Þetta er 24/7 rekstur." },
        { title: "Fólk sem kemur til baka", copy: "Ráðning, þjálfun, og varðveisla starfsfólks í iðnaði þar sem starfsmannavelta er hæst á landinu. Ef þú getur haldið í fólk í bar — þá getur þú haldið í fólk hvar sem er." },
        { title: "Þrýstingur sem kenningabækur kenna ekki", copy: "Þegar 800 manns bíða úti, hljómsveitin er ekki mætt, og lögreglan hringir — þá er leyst úr. Rólega. Skipulega. Og allir fara heim öruggir." },
      ],
    },
  },

  // Education
  education: {
    en: {
      label: "Education",
      h1: "Not just an operator.",
      h2: "A law-educated operator.",
      sub: "Behind the bar manager is a lawyer who wrote his thesis on international tax policy. This is not an ordinary combination of skills — and that's the point.",
      degrees: [
        { degree: "LLM in European and International Tax Law", school: "Lund University, Sweden", year: "2013–2014", thesis: "Thin Cap and Iceland — What can happen in the absence of thin capitalization rules?", note: "Taught under the Business School of Lund University" },
        { degree: "Master's in Tax Law", school: "Bifröst University, Iceland", year: "2011–2013", thesis: "What are thin capitalization tax schemes and how are they being countered by policy makers.", note: null },
        { degree: "BS in Business Law", school: "Bifröst University, Iceland", year: "2008–2011", thesis: null, note: null },
        { degree: "Communication Management & Sustainable Development", school: "In progress", year: "Now", thesis: null, note: "Studies directly connected to the future of infrastructure management" },
      ],
      extraLabel: "Additional",
      extra: [
        "All credits except thesis for ML in Law",
        "Courses in HR management and international relations, Leadership and management",
        "Digital marketing at Akademías",
        "Research on tax evasion in tourism (for SA, SAF, Ministry of Finance and Bifröst)",
      ],
    },
    is: {
      label: "Menntun",
      h1: "Ekki bara rekstraraðili.",
      h2: "Lögfræðimenntaður rekstraraðili.",
      sub: "Bak við barstjórann er lögfræðingur sem skrifaði lokaritgerð um alþjóðlega skattastefnu. Þetta er ekki venjuleg blanda af hæfni — og það er tilgangurinn.",
      degrees: [
        { degree: "LLM í evrópskum og alþjóðlegum skattarétti", school: "Háskólinn í Lundi, Svíþjóð", year: "2013–2014", thesis: "Thin Cap and Iceland — What can happen in the absence of thin capitalization rules?", note: "Kennt undir viðskiptafræðideild Lundarháskóla" },
        { degree: "Master í skattarétti", school: "Háskólinn á Bifröst", year: "2011–2013", thesis: "What are thin capitalization tax schemes and how are they being countered by policy makers.", note: null },
        { degree: "BS í viðskiptalögfræði", school: "Háskólinn á Bifröst", year: "2008–2011", thesis: null, note: null },
        { degree: "Samskiptastjórnun og sjálfbær þróun", school: "Í vinnslu", year: "Núna", thesis: null, note: "Nám sem tengist beint framtíð innviðastjórnunar" },
      ],
      extraLabel: "Aukalegt",
      extra: [
        "Allar einingar aðrar en lokaritgerð í ML í lögfræði",
        "Kúrsar í mannauðsstjórnun og alþjóðasamskiptum, Forysta og stjórnun",
        "Stafræn markaðssetning í Akademías",
        "Rannsókn á skattsvikum í ferðaþjónustu (unnið fyrir SA, SAF, Fjármálaráðuneytið og Bifröst)",
      ],
    },
  },

  // System Status
  status: {
    en: {
      title: "Competency Overview",
      subtitle: "Honest assessment",
      items: [
        { label: "Operations", value: 92 },
        { label: "HR Management", value: 88 },
        { label: "Pressure tolerance", value: 97 },
        { label: "Legal & compliance", value: 85 },
        { label: "Tech & AI", value: 90 },
        { label: "Data center experience", value: 12, lowlight: true },
        { label: "Commitment", value: 100 },
      ],
      note: "Yes, the data center experience — I know. That's why I'm here, not to pretend I know everything, but to bring everything else.",
    },
    is: {
      title: "Hæfnisyfirlit",
      subtitle: "Heiðarlegt mat",
      items: [
        { label: "Rekstrarfærni", value: 92 },
        { label: "Mannauðsstjórnun", value: 88 },
        { label: "Þrýstingsþol", value: 97 },
        { label: "Lögfræði & regluverk", value: 85 },
        { label: "Tækni & gervigreind", value: 90 },
        { label: "Gagnaversreynsla", value: 12, lowlight: true },
        { label: "Skuldbinding", value: 100 },
      ],
      note: "Já, gagnaversreynsluna veit ég. Þess vegna er ég hér, ekki til að þykjast vita allt, heldur til að koma með allt hitt.",
    },
  },

  // Eclipse / Current Scale
  eclipse: {
    en: {
      label: "Current project",
      h1: "International producers found me.",
      h2: "And hired me.",
      linkText: "www.eclipse.is →",
      linkSub: "Solar eclipse event in Iceland — culture and science festival",
      p1: "International producers decided to hold the most complex cultural and scientific event in Icelandic history and found me to ensure it went smoothly. In an Icelandic national park.",
      p2: "Coordination of municipalities, police, rescue teams, artists, suppliers, and media. Hundreds of people on site, multiple stakeholders. No mistakes allowed.",
      p3: "If I mess something up, everything falls apart – no take two. This is real-world project management at scale, in a sensitive environment, where everything has to work.",
      metrics: [
        { value: "200+", label: "Concerts & events per year" },
        { value: "5+", label: "Units managed simultaneously" },
        { value: "~20", label: "Years of experience" },
        { value: "24/7", label: "Operations-ready" },
      ],
    },
    is: {
      label: "Núverandi verkefni",
      h1: "Erlendir aðilar fundu mig.",
      h2: "Og fengu mig.",
      linkText: "www.eclipse.is →",
      linkSub: "Sólmyrkvaviðburður á Íslandi — menningar- og vísindaviðburður",
      p1: "Erlendir framleiðendur ákváðu að halda flóknasta menningar- og vísindaviðburð Íslandssögunnar og fundu mig til að tryggja að hann færi vel fram. Í íslenskum þjóðgarði.",
      p2: "Samhæfing sveitarfélaga, lögreglu, björgunarsveita, listamanna, birgja og fjölmiðla. Hundruð manna á staðnum, margir hagsmunaaðilar. Engin mistök leyfð.",
      p3: "Ef ég klúðra einhverju fer allt á hausinn – engin taka tvö. Þetta er raunveruleg framkvæmdastýring á stórum skala, í viðkvæmu umhverfi, þar sem allt verður að ganga upp.",
      metrics: [
        { value: "200+", label: "Tónleikar og viðburðir á ári" },
        { value: "5+", label: "Rekstrareiningar samtímis" },
        { value: "~20", label: "Ára starfsreynsla" },
        { value: "24/7", label: "Rekstrartilbúinn" },
      ],
    },
  },

  // Strategy
  strategy: {
    en: {
      label: "Strategic perspective",
      h1: "Tomorrow's data center needs more than",
      h2: "technical skills.",
      sub: "atNorth talks about sustainability, culture, and people. It's no coincidence that I'm simultaneously completing a degree in communication management and sustainable development — it makes sense.",
      cards: [
        { title: "Communication & trust", copy: "Uptime isn't just technical — it's between people. An operations director who understands communication between teams, clients, and stakeholders is more valuable than one who only understands the technology." },
        { title: "Sustainability as operations", copy: "Sustainability isn't marketing — it's an operational advantage. My studies in sustainable development are directly relevant if atNorth plans to continue leading in renewable energy." },
        { title: "Regulation & legal framework", copy: "Legal education and expertise in international tax law. I understand regulation, legal frameworks, compliance — and how major decisions come together." },
        { title: "Financial management at scale", copy: "ISK 20 billion in annual revenue requires financial literacy. I've had P&L responsibility in every single project I've run. Cost management is nothing new." },
      ],
    },
    is: {
      label: "Stefnumótandi sjónarmið",
      h1: "Gagnaver framtíðar þarf meira en",
      h2: "tæknilega hæfni.",
      sub: "atNorth talar um sjálfbærni, menningu og fólk. Það er ekki tilviljun að ég er á sama tíma að ljúka námi í samskiptastjórnun og sjálfbærri þróun — það er vit í því.",
      cards: [
        { title: "Samskipti og traust", copy: "Uptime er ekki bara tæknilegt — það er milli mannanna. Gagnaversstjóri sem skilur samskipti á milli teyma, viðskiptavina, og hagsmunaaðila er verðmætari en sá sem skilur bara tæknina." },
        { title: "Sjálfbærni sem rekstur", copy: "Sjálfbærni er ekki markaðssetning — hún er rekstrarlegur kostur. Nám mitt í sjálfbærri þróun kemur beint heim ef atNorth ætlar að halda áfram að vera leiðandi í endurnýjanlegri orku." },
        { title: "Regluverk og lagaumhverfi", copy: "Lögfræðimenntun og sérþekking á alþjóðlegum skattarétti. Ég skil regluverk, lagaumhverfi, compliance — og hvernig stórar ákvarðanir falla saman." },
        { title: "Fjármálastjórnun á skala", copy: "20 milljarðar í árstekjur krefst fjármálaþekkingar. P&L ábyrgð hef ég haft í hverju einasta rekstrarverkefni. Kostnaðarstjórnun er ekki nýtt." },
      ],
    },
  },

  // Final CTA
  cta: {
    en: {
      h1: "I may not be the obvious candidate.",
      h2: "But I could be",
      h2bold: "the best operator.",
      btn1: "Let's talk →",
      btn2: "Open résumé",
    },
    is: {
      h1: "Ég er kannski ekki augljósi umsækjandinn.",
      h2: "En ég gæti verið",
      h2bold: "besti rekstraraðilinn.",
      btn1: "Tölum saman →",
      btn2: "Opna ferilskrá",
    },
  },

  // Footer
  footer: {
    en: { built: "Designed and built by the applicant. Obviously.", cv: "Résumé", email: "Email" },
    is: { built: "Hannað og smíðað af umsækjanda. Því auðvitað.", cv: "Ferilskrá", email: "Tölvupóstur" },
  },

  // Language toggle
  langToggle: {
    en: { label: "IS", disclaimer: "" },
    is: { label: "EN", disclaimer: "" },
  },
};
