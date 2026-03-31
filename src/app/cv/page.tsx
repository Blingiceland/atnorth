"use client";

import { useLang } from "@/lib/i18n";

const cv = {
  en: {
    printBtn: "Print / Save PDF",
    backLink: "← Back to cover letter",
    summary: {
      title: "Summary",
      text: "Experienced operator, entrepreneur, and manager with nearly two decades of experience running hospitality and entertainment venues alongside large-scale event management. Strong organizational skills, HR management expertise, and experience in digital marketing. Educated lawyer with specialization in international tax law.",
    },
    education: {
      title: "Education",
      degrees: [
        { degree: "LLM in European and International Tax Law", school: "Lund University, Sweden", year: "2013–2014", thesis: "Thin Cap and Iceland — What can happen in the absence of thin capitalization rules?", note: "Taught under the Business School of Lund University" },
        { degree: "Master's in Tax Law", school: "Bifröst University, Iceland", year: "2011–2013", thesis: "What are thin capitalization tax schemes and how are they being countered by policy makers.", note: null },
        { degree: "BS in Business Law", school: "Bifröst University, Iceland", year: "2008–2011", thesis: null, note: null },
      ],
      extraTitle: "Additional education & training",
      extra: [
        "All credits except thesis for ML in Law — Bifröst University",
        "Courses in HR Management, International Relations, Leadership — Bifröst University",
        "Digital Marketing — Akademías",
      ],
    },
    work: {
      title: "Work Experience",
      jobs: [
        {
          role: "Project Manager — Iceland Eclipse (www.eclipse.is)",
          year: "2025–",
          bullets: [
            "Project management for the most complex cultural and scientific event in Icelandic history",
            "Coordination of municipalities, police, rescue teams, artists, suppliers, and media",
            "Event in an Icelandic national park — sensitive environment requiring meticulous planning",
            "Commissioned by international producers who specifically sought an Icelandic project manager",
          ],
        },
        {
          role: "CEO & Owner — Dillon ehf.",
          year: "2016–2024",
          bullets: [
            "Operations of multiple venues including Dillon Whiskey Bar, Dillon Basement, and Chuck Norris Grill",
            "Daily operations management, payroll, HR, and marketing",
            "Organized 200+ live concerts annually along with various other events",
          ],
        },
        {
          role: "Owner & Board Member — Pablodisco ehf.",
          year: "2021–2023",
          bullets: [
            "Founded and launched Pablo Discobar, one of Iceland's most popular nightlife venues",
            "Oversaw marketing, staff retention, and payroll",
          ],
        },
        {
          role: "PR & Communications — Secret Solstice",
          year: "2016–2020",
          bullets: [
            "Community relations and media communications",
            "Copywriting for artist announcements and marketing materials",
          ],
        },
      ],
      otherTitle: "Other",
      other: [
        "Experience Iceland — copywriting for Icelandic destinations (for regional marketing bureaus & Promote Iceland, 2020)",
        "Research on tax evasion in tourism — for SA, SAF, Ministry of Finance & Bifröst (2013–2014)",
        "Hotel Bifröst operations management, summers 2013 & 2014",
        "Technician & customer service, Vodafone (2004–2009)",
        "Various bars and venues (1998–2012)",
      ],
    },
    skills: {
      title: "Skills & Expertise",
      items: [
        { label: "HR Management", desc: "Hiring, payroll, and staff development" },
        { label: "Operations", desc: "Planning and optimization of business operations" },
        { label: "Marketing", desc: "Strategy and execution in digital marketing" },
        { label: "Event Management", desc: "Large and small-scale event production" },
        { label: "Accounting Software", desc: "Strong knowledge of DK, experience with Navision" },
        { label: "Tech & AI", desc: "Building web solutions and automation with AI — this application is the proof" },
      ],
    },
  },
  is: {
    printBtn: "Prenta / Vista PDF",
    backLink: "← Til baka í kynningarbréf",
    summary: {
      title: "Samantekt",
      text: "Reynslumikill rekstraraðili, frumkvöðull og stjórnandi með næstum tveggja áratuga reynslu í rekstri veitinga- og skemmtistaða ásamt skipulagningu stórra og smárra viðburða. Öflugir skipulagshæfileikar, hæfni í mannauðsstjórnun og reynsla á sviði stafrænnar markaðssetningar. Menntaður lögfræðingur með sérþekkingu á alþjóðlegum skattarétti.",
    },
    education: {
      title: "Menntun",
      degrees: [
        { degree: "LLM í evrópskum og alþjóðlegum skattarétti", school: "Háskólinn í Lundi, Svíþjóð", year: "2013–2014", thesis: "Thin Cap and Iceland — What can happen in the absence of thin capitalization rules?", note: "Kennt undir viðskiptafræðideild Lundarháskóla" },
        { degree: "Master í skattarétti", school: "Háskólinn á Bifröst", year: "2011–2013", thesis: "What are thin capitalization tax schemes and how are they being countered by policy makers.", note: null },
        { degree: "BS í viðskiptalögfræði", school: "Háskólinn á Bifröst", year: "2008–2011", thesis: null, note: null },
      ],
      extraTitle: "Aukalegt nám og þekking",
      extra: [
        "Allar einingar aðrar en lokaritgerð í ML í lögfræði — Háskólinn á Bifröst",
        "Kúrsar í mannauðsstjórnun og alþjóðasamskiptum, Forysta og stjórnun — Háskólinn á Bifröst",
        "Stafræn markaðssetning í Akademías",
      ],
    },
    work: {
      title: "Starfsreynsla",
      jobs: [
        {
          role: "Verkefnastjóri — Iceland Eclipse (www.eclipse.is)",
          year: "2025–",
          bullets: [
            "Framkvæmdastýring flóknasta menningar- og vísindaviðburðar Íslandssögunnar",
            "Samhæfing sveitarfélaga, lögreglu, björgunarsveita, listamanna, birgja og fjölmiðla",
            "Viðburður í íslenskum þjóðgarði — viðkvæmt umhverfi sem krefst nákvæmrar skipulagningar",
            "Verkefni á vegum erlendra framleiðenda sem leitað höfðu sérstaklega eftir íslenskum verkefnastjóra",
          ],
        },
        {
          role: "Framkvæmdastjóri og eigandi — Dillon ehf.",
          year: "2016–2024",
          bullets: [
            "Rekstur veitingastaða og skemmtistaða, þ.m.t. Dillon Kjallarans, Dillon Whiskey Bar og Chuck Norris Grill",
            "Umsjón daglegs rekstrar, launauppgjör, mannauðsmál ásamt markaðssetningu",
            "Skipulagði yfir 200 lifandi tónleika árlega auk ýmissi annarra viðburða",
          ],
        },
        {
          role: "Eigandi og stjórnarmaður — Pablodisco ehf.",
          year: "2021–2023",
          bullets: [
            "Stofnun og uppsetning Pablo Discobar, eins vinsælasta skemmtistaðar landsins",
            "Umsjón markaðsmála, starfsmannahalds og launavinnslu",
          ],
        },
        {
          role: "Upplýsingafulltrúi o.fl. — Secret Solstice",
          year: "2016–2020",
          bullets: [
            "Grenndarkynningar og upplýsingagjöf til fjölmiðla og almennings",
            "Textaskrif fyrir listamannatilkynningar og markaðsefni",
          ],
        },
      ],
      otherTitle: "Annað",
      other: [
        "Upplifðu Ísland — textaskrif um íslenska áfangastaði (unnið fyrir markaðsstofur landshlutanna ásamt Íslandsstofu, 2020)",
        "Rannsókn á skattsvikum í ferðaþjónustu — unnið fyrir SA, SAF, Fjármálaráðuneytið ásamt Bifröst (2013–2014)",
        "Rekstur Hótels Bifröst sumurin 2013 og 2014",
        "Tæknimaður og þjónustufulltrúi, Vodafone (2004–2009)",
        "Ýmsir barir, veitinga- og skemmtistaðir (1998–2012)",
      ],
    },
    skills: {
      title: "Hæfni og þekking",
      items: [
        { label: "Mannauðsstjórnun", desc: "Ráðningar, launavinnsla og starfsmannaþróun" },
        { label: "Rekstrarþekking", desc: "Skipulagning og hagræðing rekstrarþátta" },
        { label: "Markaðssetning", desc: "Stefnumótun og framkvæmd í stafrænni markaðssetningu" },
        { label: "Viðburðahald", desc: "Viðburðastjórnun stórra og smærri viðburða" },
        { label: "Bókhaldsforrit", desc: "Mjög góð þekking á DK og reynsla á Navision" },
        { label: "Tækni & gervigreind", desc: "Þróun veflausna og sjálfvirkni með aðstoð AI — þessi umsókn er sönnunin" },
      ],
    },
  },
};

export default function CVPage() {
  const { lang, toggle } = useLang();
  const c = cv[lang];

  return (
    <div className="min-h-screen bg-white text-[#0F2B46] print:bg-white">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#D9E1E8] print:hidden">
        <div className="max-w-[800px] mx-auto px-8 h-12 flex items-center justify-between">
          <a href="/" className="text-sm text-[#1F5FAF] hover:underline font-medium">
            ← {lang === "en" ? "Cover letter" : "Kynningarbréf"}
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="px-3 py-1.5 text-xs font-medium text-[#6B7F8E] border border-[#D9E1E8] rounded-lg 
                         hover:border-[#1F5FAF]/30 transition-colors cursor-pointer"
            >
              🌐 {lang === "en" ? "Íslenska" : "English"}
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 bg-[#1F5FAF] text-white text-xs font-semibold rounded-lg 
                         shadow-md hover:bg-[#2a6fc0] transition-colors cursor-pointer"
            >
              {c.printBtn}
            </button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-[800px] mx-auto px-8 py-16 pt-20 print:px-0 print:py-8 print:pt-8">
        {/* Header */}
        <header className="mb-10 pb-8 border-b-2 border-[#1F5FAF]">
          <h1 className="text-4xl font-bold text-[#0F2B46] mb-2">
            Jón Bjarni Steinsson
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#6B7F8E] mt-4">
            <span>📍 Kinnargata 29, 210 Garðabær</span>
            <span>📞 821 1111</span>
            <span>
              ✉️{" "}
              <a href="mailto:jonb.steinsson@gmail.com" className="text-[#1F5FAF] hover:underline">
                jonb.steinsson@gmail.com
              </a>
            </span>
            <span>🎂 20. {lang === "en" ? "April" : "apríl"} 1981</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#1F5FAF] uppercase tracking-wider mb-3">
            {c.summary.title}
          </h2>
          <p className="text-[#3D5A73] leading-relaxed">{c.summary.text}</p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#1F5FAF] uppercase tracking-wider mb-4">
            {c.education.title}
          </h2>
          <div className="space-y-5">
            {c.education.degrees.map((edu) => (
              <div key={edu.degree}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-[#0F2B46]">{edu.degree}</h3>
                  <span className="text-sm text-[#6B7F8E] whitespace-nowrap ml-4">{edu.year}</span>
                </div>
                <p className="text-sm text-[#6B7F8E]">{edu.school}</p>
                {edu.note && <p className="text-xs text-[#1F5FAF] italic mt-1">{edu.note}</p>}
                {edu.thesis && (
                  <p className="text-sm text-[#3D5A73] mt-1">
                    <span className="font-medium">{lang === "en" ? "Thesis:" : "Lokaverkefni:"}</span>{" "}
                    &ldquo;{edu.thesis}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-[#D9E1E8]">
            <h4 className="text-sm font-semibold text-[#0F2B46] mb-2">{c.education.extraTitle}</h4>
            <ul className="text-sm text-[#3D5A73] space-y-1 list-disc list-inside">
              {c.education.extra.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#1F5FAF] uppercase tracking-wider mb-4">
            {c.work.title}
          </h2>
          <div className="space-y-6">
            {c.work.jobs.map((job) => (
              <div key={job.role}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-[#0F2B46]">{job.role}</h3>
                  <span className="text-sm text-[#6B7F8E] whitespace-nowrap ml-4">{job.year}</span>
                </div>
                <ul className="text-sm text-[#3D5A73] mt-2 space-y-1 list-disc list-inside">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="font-semibold text-[#0F2B46] mb-2">{c.work.otherTitle}</h4>
              <ul className="text-sm text-[#3D5A73] space-y-1 list-disc list-inside">
                {c.work.other.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#1F5FAF] uppercase tracking-wider mb-4">
            {c.skills.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#3D5A73]">
            {c.skills.items.map((s) => (
              <div key={s.label}>
                <span className="font-semibold text-[#0F2B46]">{s.label}:</span> {s.desc}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#D9E1E8] text-center print:hidden">
          <a href="/" className="text-sm text-[#1F5FAF] hover:underline">
            {c.backLink}
          </a>
        </footer>
      </div>
    </div>
  );
}
