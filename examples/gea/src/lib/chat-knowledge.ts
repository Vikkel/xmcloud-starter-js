export type ChatSource = { title: string; href: string };

const ANSWERS: { test: RegExp; text: string; href: string; title: string }[] = [
  {
    test: /milk|powder|spray.?dry|gas|co2|carbon/,
    text: "Milk-powder spray drying is the dairy process line. It covers evaporation, spray drying, and how AddCool® cuts gas use.",
    href: "/dairy-processing/milk-powders",
    title: "Milk powders",
  },
  {
    test: /msd|niro|dryer/,
    text: "The MSD® spray dryer is the product page for milk-powder plants, with the drying test center as the next step.",
    href: "/products/dryers-particle-processing/spray-dryers/msd-spray-dryer",
    title: "MSD® spray dryer",
  },
  {
    test: /addcool|arla|case|customer/,
    text: "The Arla AddCool® case is the customer story for cutting energy in milk-powder drying.",
    href: "/customer-cases/arla-addcool",
    title: "Arla AddCool®",
  },
  {
    test: /test.?cent|trial|book/,
    text: "The Drying Test Center is where a plant trial is booked after the product and case pages.",
    href: "/products/dryers-particle-processing/spray-dryers/drying-test-center",
    title: "Drying Test Center",
  },
  {
    test: /optipartner|digital/,
    text: "OptiPartner® is the digital layer on the milk-powder line.",
    href: "/dairy-processing/milk-powders",
    title: "Milk powders",
  },
  {
    test: /dairy|industry/,
    text: "Dairy processing is the industry landing, with milk powders as the application page.",
    href: "/dairy-processing",
    title: "Dairy processing",
  },
  {
    test: /contact|quote|call|help/,
    text: "Get a quote starts on the contact page.",
    href: "/contact",
    title: "Contact",
  },
];

export function answerChat(query: string): {
  text: string;
  sources: ChatSource[];
} {
  const hit = ANSWERS.find((item) => item.test.test(query));
  if (hit) {
    return {
      text: hit.text,
      sources: [{ title: hit.title, href: hit.href }],
    };
  }
  return {
    text: "I can point you to milk-powder spray drying, the MSD® dryer, the Arla AddCool® case, or the Drying Test Center.",
    sources: [
      { title: "Milk powders", href: "/dairy-processing/milk-powders" },
    ],
  };
}

export function suggestedPrompts(): string[] {
  return [
    "Cut gas in spray drying",
    "MSD spray dryer",
    "Arla AddCool case",
    "Book a drying test",
  ];
}
