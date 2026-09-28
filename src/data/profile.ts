// ─────────────────────────────────────────────────────────────────────────
// All editable content for the site lives in this one file.
// Replace the placeholder contact fields and resumeUrl before deploying.
// ─────────────────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  duration?: string;
  bullets: string[];
  tags: string[];
  featured?: boolean;
  dateNote?: string;
}

export interface CareerJourneyStop {
  year: string;
  company: string;
  title: string;
  note?: string;
}

export const profile = {
  name: "Vijesh PR",
  role: "RCU & Risk Operations Professional",
  location: "Wayanad, Kerala",

  contact: {
    phone: "+91 9074348257",
    email: "vijeshvip@gmail.com",
  },

  // Portrait used in the hero section — lives in public/images
  photo: "/images/vijesh-pr.jpg",

  // Resume PDF served from public/resume/ (replace the file to update it)
  resumeUrl: "/resume/Vijesh-PR-Resume.pdf",

  heroSummary:
    "Banking and NBFC professional with 15+ years of experience across RCU field investigation, loan document verification, banking operations, branch operations, debt recovery and team management.",

  highlights: [
    { value: "15+", label: "Years in Banking & NBFC" },
    { value: "5+ Yrs", label: "Dedicated RCU Experience" },
    { value: "6", label: "Verification Document Types" },
    { value: "Excel & MIS", label: "Reporting Proficiency" },
  ],

  about: {
    heading: "Grounded in verification, moving toward risk",
    paragraphs: [
      "I've spent the last 15+ years inside the operational side of banking and NBFC lending — the part of the business where a loan file is only as reliable as the person who checked it. That work has taken me to customer premises, business addresses and branch counters across Kerala and beyond, matching what's written in a file against what's actually true on the ground.",
      "The center of gravity in my career has been RCU: verifying loan documents, identity records, land tax and property papers, RC copies, and customer or business profiles, then cross-checking every detail against field conditions and flagging what doesn't add up. That habit of accuracy carried into branch operations at Manappuram Finance and into recovery and collections work at HDFC Bank, Conneqt and HDB Financial Services, where I've also led and coached collection teams.",
      "Alongside the fieldwork, I've built a working command of MS Excel, VLOOKUP, Pivot Tables and MIS reporting — the tools that turn field findings into something a risk or credit team can act on. I'm now looking to bring that verification discipline and reporting ability into a full-time RCU, Risk Operations or Credit Operations role.",
    ],
  },

  expertise: {
    categories: [
      {
        key: "rcu",
        title: "RCU & Risk",
        items: [
          "RCU Operations",
          "Loan Document Verification",
          "Field Investigation",
          "Document Verification",
          "Address Verification",
          "Risk Verification",
          "Discrepancy Identification",
        ],
      },
      {
        key: "banking",
        title: "Banking & Finance",
        items: [
          "Banking Operations",
          "NBFC Operations",
          "Loan Operations",
          "Branch Operations",
          "Customer Verification",
        ],
      },
      {
        key: "tech",
        title: "Technology & Reporting",
        items: [
          "MS Excel",
          "VLOOKUP",
          "Pivot Tables",
          "MIS Reporting",
          "Data Management",
        ],
      },
      {
        key: "leadership",
        title: "Leadership",
        items: [
          "Team Management",
          "Target Management",
          "Customer Handling",
          "Negotiation",
          "Operational Coordination",
        ],
      },
    ],
  },

  experience: [
    {
      company: "HDB Financial Services",
      title: "Field Collection Associate — Heavy Construction Equipment Finance",
      period: "May 2023 – Present",
      bullets: [
        "Handle field-level collection activities for overdue accounts related to heavy construction equipment financing.",
        "Conduct customer visits and follow up on outstanding payments.",
        "Communicate with customers regarding overdue accounts and repayment requirements.",
        "Negotiate suitable repayment arrangements within company guidelines.",
        "Maintain regular follow-up on assigned accounts and collection cases.",
        "Coordinate with internal teams regarding account status and field-level updates.",
        "Maintain accurate collection-related records and reports.",
        "Handle challenging customer situations professionally while following company processes.",
      ],
      tags: ["Field Collection", "Customer Handling", "Reporting"],
    },
    {
      company: "Conneqt",
      title: "Team Leader — Debt Collection Operations",
      period: "[TO BE CONFIRMED]",
      bullets: [
        "Managed day-to-day activities of a debt collection team.",
        "Monitored team performance against assigned collection targets.",
        "Allocated and followed up on collection activities.",
        "Reviewed individual and team performance and provided operational guidance.",
        "Handled escalations and customer-related collection issues.",
        "Prepared and monitored collection-related reports and performance data.",
        "Supported team members in achieving operational objectives.",
        "Coordinated with management regarding daily performance and target status.",
      ],
      tags: ["Team Management", "Target Management", "Reporting"],
      dateNote: "Employment dates to be confirmed.",
    },
    {
      company: "JRSCA Consulting & Advisory Pvt. Ltd.",
      title: "Executive — Field Operations (RCU)",
      period: "01 February 2015 – 31 March 2020",
      duration: "5 Years 2 Months",
      featured: true,
      bullets: [
        "Conducted RCU (Risk Control Unit) field investigations and verification for loan applications.",
        "Visited client/customer offices and business premises to verify loan-related information.",
        "Verified loan documents and supporting records submitted by customers.",
        "Verified Aadhaar/identity documents.",
        "Verified Land Tax documents.",
        "Verified RC (Registration Certificate).",
        "Verified property-related records.",
        "Verified customer/business profiles.",
        "Conducted physical customer address verification.",
        "Conducted business address and location verification.",
        "Cross-checked submitted documents with actual field-level information and site conditions.",
        "Identified discrepancies or inconsistencies during document and field verification.",
        "Collected relevant field information required for the verification process.",
        "Prepared and submitted field verification findings/reports.",
        "Coordinated with internal teams regarding verification findings and discrepancies.",
        "Maintained confidentiality and accuracy while handling customer and loan-related information.",
      ],
      tags: [
        "RCU",
        "Loan Verification",
        "Field Investigation",
        "Document Verification",
      ],
    },
    {
      company: "HDFC Bank Ltd. (Off-Roll)",
      title: "Debt Recovery Agent",
      period: "September 2013 – October 2016",
      bullets: [
        "Handled high-volume incoming and outgoing calls for past-due accounts.",
        "Followed up with customers regarding overdue payments and outstanding accounts.",
        "Negotiated repayment arrangements.",
        "Performed customer/account follow-up and skip-tracing activities.",
        "Maintained collection-related records.",
        "Worked toward monthly collection targets.",
        "Followed company procedures and customer communication guidelines.",
      ],
      tags: ["Debt Recovery", "Customer Handling"],
    },
    {
      company: "Manappuram Finance Ltd.",
      title: "Assistant Manager — Gold Loan / Branch Operations",
      period: "February 2006 – February 2009",
      bullets: [
        "Handled day-to-day branch operations.",
        "Assisted with gold loan operational processes.",
        "Performed gold purity checking.",
        "Handled cash transactions and cashier-related responsibilities.",
        "Supported branch management and daily operational activities.",
        "Maintained customer and financial records.",
        "Assisted in branch documentation and operational processes.",
      ],
      tags: ["Branch Operations", "Gold Loans"],
      dateNote: "Career progression: Junior Assistant – Gold Loan → Assistant Branch Manager.",
    },
  ] as ExperienceEntry[],

  rcuProcess: [
    {
      title: "Premises Visit",
      description:
        "Visit the client or business premises in person to begin the verification.",
    },
    {
      title: "Loan Document Verification",
      description:
        "Check loan documents and supporting records submitted by the customer.",
    },
    {
      title: "Identity & Aadhaar Verification",
      description: "Verify identity documents and Aadhaar details against the file.",
    },
    {
      title: "Land Tax & Property Verification",
      description:
        "Cross-check land tax records and property-related documents.",
    },
    {
      title: "RC Verification",
      description: "Verify the Registration Certificate against submitted details.",
    },
    {
      title: "Profile Verification",
      description:
        "Confirm the customer or business profile matches what has been declared.",
    },
    {
      title: "Address Verification",
      description:
        "Physically verify the customer's residential and business address.",
    },
    {
      title: "Field Investigation",
      description:
        "Gather further field-level information relevant to the case.",
    },
    {
      title: "Cross-Checking",
      description:
        "Compare submitted paperwork against actual on-site conditions.",
    },
    {
      title: "Discrepancy Identification",
      description:
        "Flag inconsistencies between documents and field findings.",
    },
    {
      title: "Verification Reporting",
      description:
        "Prepare and submit the completed field verification report.",
    },
  ],

  careerJourney: [
    { year: "2006", company: "Manappuram Finance Ltd.", title: "Assistant Manager, Branch Operations" },
    { year: "2013", company: "HDFC Bank Ltd.", title: "Debt Recovery Agent" },
    { year: "2015", company: "JRSCA Consulting & Advisory", title: "RCU / Field Operations", note: "Featured" },
    { year: "2023", company: "HDB Financial Services", title: "Field Collection Associate" },
  ] as CareerJourneyStop[],

  careerJourneyUnplaced: {
    company: "Conneqt",
    title: "Team Leader, Debt Collection Operations",
    note: "Employment dates to be confirmed",
  },

  careerJourneyNote:
    "Some employment periods shown here overlap as they were recorded — for example, HDFC Bank (2013–2016) and JRSCA (2015–2020). Dates are presented exactly as provided rather than adjusted to appear sequential, and any dates still being confirmed are marked accordingly.",

  education: [
    {
      qualification: "Bachelor of Commerce (B.Com) — Commerce",
      institution: "Annamalai University, Chidambaram",
      period: "2017 – 2019",
    },
    {
      qualification: "Higher Secondary (Class XII)",
      institution: "Kerala",
      period: "2005",
    },
    {
      qualification: "SSLC (Class X)",
      institution: "Kerala",
      period: "2003",
    },
  ],

  certifications: [
    {
      name: "Debt Recovery Agent Certificate",
      issuer: "Indian Institute of Banking & Finance (IIBF)",
      note: "Valid from October 2020 — no expiry",
    },
    {
      name: "Business Analytics with Excel",
      issuer: "Simplilearn",
    },
    {
      name: "Adobe Photoshop for Beginners",
      issuer: "Mindluster",
    },
    {
      name: "Diploma in Computer Hardware & Networking",
      issuer: "[TO BE CONFIRMED]",
    },
  ],

  careerObjective:
    "I'm looking to build on 15+ years in financial services by moving fully into RCU, Risk Operations, Loan Verification, Credit Operations or Field Investigation within Banking and NBFC Operations — roles where my experience in document verification, on-ground field checks and operational reporting can be put to direct use.",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "RCU Experience", href: "#rcu-experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Profile = typeof profile;
