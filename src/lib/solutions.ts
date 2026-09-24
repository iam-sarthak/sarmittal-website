export type WorkflowNode = {
  label: string;
  sublabel?: string;
  /** marks a friction point in manual flows */
  friction?: boolean;
  /** highlighted node (e.g. the automation engine) */
  highlight?: boolean;
};

export type Solution = {
  slug: string;
  name: string;
  category: string;
  icon: string;
  /** one-liner shown on cards */
  oneLiner: string;
  /** subheadline on the detail page hero */
  tagline: string;
  metaDescription: string;
  problem: {
    intro: string;
    /** sources feeding the manual process, shown side-by-side */
    sources: string[];
    /** the manual chain, top to bottom */
    manualFlow: WorkflowNode[];
  };
  automatedFlow: WorkflowNode[];
  before: string[];
  after: string[];
  steps: { title: string; description: string }[];
  checklist: string[];
  tech: string[];
  timeline: string;
  /** path to the cartoon illustration (in /public) */
  illustration: string;
  /** accent color key used for card + detail page styling */
  accent: "purple" | "yellow" | "coral" | "teal" | "blue";
  /** business benefits shown on the detail page */
  benefits: { title: string; description: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "lead-management",
    name: "Lead Management Automation",
    category: "Sales",
    icon: "users",
    oneLiner: "Automatically capture, organize and follow up with leads.",
    tagline:
      "Stop tracking leads manually across WhatsApp, Excel and email.",
    metaDescription:
      "Automate lead capture, assignment, follow-ups and reporting. Replace WhatsApp screenshots and Excel sheets with a single automated lead pipeline.",
    problem: {
      intro:
        "Your sales team receives leads from multiple sources. Someone manually copies the information into Excel, assigns the lead, sends a message and remembers to follow up. Every step depends on a person remembering to do it — and leads quietly slip through the cracks.",
      sources: ["WhatsApp", "Website", "Instagram", "Phone"],
      manualFlow: [
        { label: "Manual Entry", sublabel: "Someone retypes every enquiry", friction: true },
        { label: "Excel Sheet", sublabel: "Scattered across files and versions", friction: true },
        { label: "Manual Follow-Up", sublabel: "Depends on memory", friction: true },
      ],
    },
    automatedFlow: [
      { label: "Website / WhatsApp / Forms", sublabel: "Every channel, one entry point" },
      { label: "Automation Layer", sublabel: "Captures, validates, routes", highlight: true },
      { label: "CRM / Database", sublabel: "One clean record per lead" },
      { label: "Notifications", sublabel: "Right person, instantly" },
      { label: "Follow-Up", sublabel: "Scheduled automatically" },
      { label: "Analytics Dashboard", sublabel: "Live pipeline visibility" },
    ],
    before: [
      "Manual entry",
      "Scattered data",
      "Missed follow-ups",
      "Repeated work",
      "No visibility",
    ],
    after: [
      "Automatic lead capture",
      "Centralized data",
      "Automatic reminders",
      "Less manual work",
      "Real-time dashboard",
    ],
    steps: [
      { title: "Lead arrives", description: "A customer enquires on WhatsApp, your website form or Instagram." },
      { title: "Information is captured", description: "The system extracts name, contact and requirement — no retyping." },
      { title: "Lead is stored", description: "One structured record is created in your CRM or database." },
      { title: "Team is notified", description: "The right salesperson gets an instant notification with full context." },
      { title: "Follow-up is scheduled", description: "Reminders and follow-up messages are queued automatically." },
      { title: "Results appear in dashboard", description: "Pipeline, response times and conversions — visible in real time." },
    ],
    checklist: [
      "Lead capture",
      "Lead assignment",
      "Email notifications",
      "WhatsApp notifications",
      "Follow-up reminders",
      "Status tracking",
      "Dashboard",
      "Reports",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "WhatsApp", "Gmail", "AWS"],
    timeline: "2–4 weeks",
    illustration: "/illustrations/illo-leads.png",
    accent: "purple",
    benefits: [
      {
        title: "Hours back every week",
        description:
          "No more copying enquiries into Excel. Capture, storage and assignment happen without anyone touching a keyboard.",
      },
      {
        title: "More leads become customers",
        description:
          "Instant responses and scheduled follow-ups mean leads stop going cold while nobody's looking.",
      },
      {
        title: "Nothing depends on memory",
        description:
          "Every follow-up is scheduled by the system, so your team's energy goes into selling — not remembering.",
      },
      {
        title: "You finally see your pipeline",
        description:
          "A live dashboard shows every lead, its status and who owns it. No more asking around.",
      },
    ],
  },
  {
    slug: "whatsapp-leads",
    name: "WhatsApp Lead Automation",
    category: "Sales",
    icon: "message-circle",
    oneLiner: "Turn WhatsApp enquiries into structured leads and automated follow-ups.",
    tagline:
      "Your best leads arrive on WhatsApp — and stay buried in chat history.",
    metaDescription:
      "Convert WhatsApp enquiries into structured, trackable leads with automated replies, routing and follow-up sequences.",
    problem: {
      intro:
        "Customers message your business WhatsApp all day. Someone has to read each chat, figure out what the customer wants, reply, and then remember the conversation exists. There is no record outside the phone, no assignment, and no way to know which enquiries were never answered.",
      sources: ["WhatsApp Business", "WhatsApp Groups", "Missed Calls"],
      manualFlow: [
        { label: "Employee checks phone", sublabel: "Whenever they get a moment", friction: true },
        { label: "Replies manually", sublabel: "Same answers, typed again", friction: true },
        { label: "Chat scrolls away", sublabel: "No record, no follow-up", friction: true },
      ],
    },
    automatedFlow: [
      { label: "WhatsApp Enquiry", sublabel: "Customer messages as usual" },
      { label: "Automation Layer", sublabel: "Parses intent, captures details", highlight: true },
      { label: "Structured Lead", sublabel: "Saved to CRM with full chat context" },
      { label: "Instant Auto-Reply", sublabel: "Acknowledgement within seconds" },
      { label: "Team Assignment", sublabel: "Routed to the right person" },
      { label: "Follow-Up Sequence", sublabel: "Timed nudges until resolved" },
    ],
    before: [
      "Leads buried in chat history",
      "Replies depend on who's free",
      "No record of enquiries",
      "Unanswered messages go unnoticed",
      "Zero reporting",
    ],
    after: [
      "Every enquiry becomes a lead",
      "Instant acknowledgement replies",
      "Full history stored centrally",
      "Automatic escalation for silence",
      "Enquiry-to-sale tracking",
    ],
    steps: [
      { title: "Customer messages you", description: "Nothing changes for the customer — they use WhatsApp as always." },
      { title: "Message is parsed", description: "The system identifies new enquiries and extracts key details." },
      { title: "Lead is created", description: "A structured record is stored with the full conversation attached." },
      { title: "Auto-reply is sent", description: "The customer gets an immediate, useful acknowledgement." },
      { title: "Owner is assigned", description: "The enquiry is routed to the right teammate with a notification." },
      { title: "Follow-ups run on schedule", description: "If nobody responds, the system escalates before the lead goes cold." },
    ],
    checklist: [
      "WhatsApp Business API setup",
      "Enquiry detection",
      "Auto-replies",
      "Lead creation",
      "Team routing",
      "Follow-up sequences",
      "Escalations",
      "Conversation history",
    ],
    tech: ["WhatsApp", "Node.js", "PostgreSQL", "OpenAI", "AWS"],
    timeline: "2–3 weeks",
    illustration: "/illustrations/illo-whatsapp.png",
    accent: "teal",
    benefits: [
      {
        title: "Every enquiry answered in seconds",
        description:
          "Customers get an instant, useful reply — even at midnight. First impressions win deals.",
      },
      {
        title: "Leads stop drowning in chats",
        description:
          "Every enquiry becomes a structured, trackable lead instead of a message that scrolls away.",
      },
      {
        title: "More sales from the same enquiries",
        description:
          "Timed follow-ups revive silent conversations that would otherwise be lost forever.",
      },
      {
        title: "Your evenings back",
        description:
          "No more scrolling chat history to remember who wanted what. The system remembers everything.",
      },
    ],
  },
  {
    slug: "excel-to-dashboard",
    name: "Excel → Dashboard",
    category: "Operations",
    icon: "bar-chart",
    oneLiner: "Convert manual spreadsheets into a real-time business dashboard.",
    tagline:
      "Your business runs on spreadsheets that only one person understands.",
    metaDescription:
      "Replace fragile Excel workflows with a live dashboard: automatic data collection, clean structure and real-time visibility for the whole team.",
    problem: {
      intro:
        "Numbers live in spreadsheets that are updated by hand, emailed around, and broken by one wrong formula. By the time a report reaches you, the data is already old — and nobody is fully sure which version is correct.",
      sources: ["Sales Sheets", "Inventory Files", "Finance Exports", "Team Updates"],
      manualFlow: [
        { label: "Manual data entry", sublabel: "Copy-pasted from other tools", friction: true },
        { label: "Version chaos", sublabel: "final_v3_REAL.xlsx", friction: true },
        { label: "Weekly report", sublabel: "Hours of formatting, already outdated", friction: true },
      ],
    },
    automatedFlow: [
      { label: "Your Data Sources", sublabel: "Sheets, tools, exports, forms" },
      { label: "Automation Layer", sublabel: "Syncs and cleans data continuously", highlight: true },
      { label: "Central Database", sublabel: "One source of truth" },
      { label: "Live Dashboard", sublabel: "Always current, for everyone" },
      { label: "Scheduled Reports", sublabel: "Generated and sent automatically" },
    ],
    before: [
      "Hours of manual data entry",
      "Multiple conflicting versions",
      "Broken formulas",
      "Reports built by hand every week",
      "Decisions made on stale data",
    ],
    after: [
      "Data syncs automatically",
      "Single source of truth",
      "Validated, consistent numbers",
      "Reports generate themselves",
      "Live view of the business",
    ],
    steps: [
      { title: "I map your spreadsheets", description: "I identify what data matters and where it comes from." },
      { title: "Sources are connected", description: "Tools, sheets and exports feed a central database automatically." },
      { title: "Data is cleaned", description: "Validation rules catch duplicates and errors on the way in." },
      { title: "Dashboard goes live", description: "Your key numbers, updated in real time, accessible to the team." },
      { title: "Reports run on schedule", description: "Weekly and monthly reports are generated and delivered automatically." },
    ],
    checklist: [
      "Data source integration",
      "Automatic syncing",
      "Data validation",
      "Central database",
      "Live dashboard",
      "Role-based access",
      "Scheduled reports",
      "Export to Excel/PDF",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Google Sheets", "AWS"],
    timeline: "3–5 weeks",
    illustration: "/illustrations/illo-dashboard.png",
    accent: "blue",
    benefits: [
      {
        title: "No more report-building days",
        description:
          "Reports that took hours of copy-paste now generate and deliver themselves on schedule.",
      },
      {
        title: "Decisions on live numbers",
        description:
          "See today's sales, stock and cash position today — not next Monday when the sheet is updated.",
      },
      {
        title: "One version of the truth",
        description:
          "No more final_v3_REAL.xlsx. Everyone looks at the same live data, always.",
      },
      {
        title: "Energy spent on insights",
        description:
          "Your team analyses the numbers instead of assembling them.",
      },
    ],
  },
  {
    slug: "invoice-automation",
    name: "Invoice Automation",
    category: "Finance",
    icon: "file-text",
    oneLiner: "Generate invoices, send them automatically and keep records organized.",
    tagline:
      "Invoicing shouldn't be a monthly project. It should just happen.",
    metaDescription:
      "Automate invoice generation, delivery, payment tracking and reminders. Keep every record organized without manual effort.",
    problem: {
      intro:
        "Every billing cycle, someone opens a template, fills in customer details, double-checks amounts, exports a PDF, emails it, and later chases the payment. Multiply that by every customer, every month — and mistakes still slip in.",
      sources: ["Orders", "Contracts", "Bookings", "Timesheets"],
      manualFlow: [
        { label: "Fill invoice template", sublabel: "Copy details by hand", friction: true },
        { label: "Email each customer", sublabel: "One at a time", friction: true },
        { label: "Chase payments", sublabel: "Whenever someone remembers", friction: true },
      ],
    },
    automatedFlow: [
      { label: "Billing Event", sublabel: "Order completed, month ends, milestone hit" },
      { label: "Automation Layer", sublabel: "Generates the invoice instantly", highlight: true },
      { label: "Invoice Delivered", sublabel: "Email + WhatsApp with payment link" },
      { label: "Payment Tracked", sublabel: "Status updates automatically" },
      { label: "Reminders", sublabel: "Polite, automatic, persistent" },
      { label: "Records & Reports", sublabel: "Organized and audit-ready" },
    ],
    before: [
      "Invoices created by hand",
      "Errors in amounts and details",
      "Late or forgotten billing",
      "Awkward manual payment chasing",
      "Records scattered across folders",
    ],
    after: [
      "Invoices generate themselves",
      "Accurate, consistent details",
      "Billing happens on time, every time",
      "Automatic payment reminders",
      "Every record organized and searchable",
    ],
    steps: [
      { title: "A billing event occurs", description: "An order completes, a period ends, or a milestone is reached." },
      { title: "Invoice is generated", description: "Correct details, numbering and taxes — from your data, automatically." },
      { title: "Invoice is delivered", description: "Sent by email or WhatsApp with a payment link attached." },
      { title: "Payment is tracked", description: "Paid invoices are reconciled automatically via your payment gateway." },
      { title: "Reminders go out", description: "Unpaid invoices trigger scheduled, polite follow-ups." },
      { title: "Records stay organized", description: "Every invoice and payment lands in one searchable archive." },
    ],
    checklist: [
      "Invoice generation",
      "Automatic numbering & taxes",
      "Email delivery",
      "WhatsApp delivery",
      "Payment links",
      "Payment reconciliation",
      "Payment reminders",
      "Reports & archive",
    ],
    tech: ["Node.js", "PostgreSQL", "Razorpay", "Gmail", "WhatsApp"],
    timeline: "2–4 weeks",
    illustration: "/illustrations/illo-invoice.png",
    accent: "yellow",
    benefits: [
      {
        title: "Billing runs itself",
        description:
          "Invoices generate and send the moment they're due — no monthly invoice marathon.",
      },
      {
        title: "Get paid faster",
        description:
          "Payment links on every invoice and polite automatic reminders shorten the wait for your money.",
      },
      {
        title: "Zero copy-paste errors",
        description:
          "Amounts, taxes and customer details come straight from your data. No typos, no awkward corrections.",
      },
      {
        title: "Audit-ready records",
        description:
          "Every invoice and payment is archived and searchable — tax season stops being scary.",
      },
    ],
  },
  {
    slug: "follow-up-automation",
    name: "Customer Follow-Up Automation",
    category: "Customer Success",
    icon: "bell",
    oneLiner: "Automatically remind teams and customers about pending actions.",
    tagline:
      "The follow-ups you forget are the revenue you never see.",
    metaDescription:
      "Never miss a follow-up again. Automated reminders for teams and customers based on real business events and deadlines.",
    problem: {
      intro:
        "Quotes are sent and never chased. Documents are requested and never received. Renewals pass silently. Follow-ups live in people's heads, sticky notes and half-maintained reminder apps — so the important ones get missed.",
      sources: ["Pending Quotes", "Awaited Documents", "Renewals", "Service Dues"],
      manualFlow: [
        { label: "Someone remembers", sublabel: "Or doesn't", friction: true },
        { label: "Checks old chats & sheets", sublabel: "To reconstruct context", friction: true },
        { label: "Sends a follow-up", sublabel: "Days later than ideal", friction: true },
      ],
    },
    automatedFlow: [
      { label: "Business Event", sublabel: "Quote sent, document pending, renewal near" },
      { label: "Automation Layer", sublabel: "Tracks every open loop", highlight: true },
      { label: "Customer Reminder", sublabel: "Email / WhatsApp at the right moment" },
      { label: "Team Nudge", sublabel: "Internal alert if action is needed" },
      { label: "Escalation", sublabel: "Nothing stays silent too long" },
      { label: "Status Dashboard", sublabel: "Every pending item, visible" },
    ],
    before: [
      "Follow-ups depend on memory",
      "Quotes go cold silently",
      "Renewals slip past unnoticed",
      "Customers feel forgotten",
      "No list of what's pending",
    ],
    after: [
      "Every open item is tracked",
      "Reminders fire at the right time",
      "Renewals surface early",
      "Customers hear from you proactively",
      "One dashboard of pending actions",
    ],
    steps: [
      { title: "An action creates an open loop", description: "A quote, request or renewal enters the system." },
      { title: "A follow-up plan is attached", description: "Timing rules define when and how to nudge." },
      { title: "Reminders are sent", description: "Customers receive timely messages on email or WhatsApp." },
      { title: "Team gets nudged", description: "If it needs a human, the right person is alerted." },
      { title: "Escalation kicks in", description: "Stalled items get flagged before they're lost." },
      { title: "Everything is visible", description: "A live dashboard shows every pending follow-up and its status." },
    ],
    checklist: [
      "Open-item tracking",
      "Reminder scheduling",
      "Email reminders",
      "WhatsApp reminders",
      "Internal team nudges",
      "Escalation rules",
      "Snooze & resolve actions",
      "Pending-items dashboard",
    ],
    tech: ["Node.js", "PostgreSQL", "WhatsApp", "Gmail", "AWS"],
    timeline: "2–3 weeks",
    illustration: "/illustrations/illo-reminder.png",
    accent: "coral",
    benefits: [
      {
        title: "No follow-up ever missed",
        description:
          "Quotes, renewals and pending payments are tracked by the system — not by sticky notes.",
      },
      {
        title: "More deals closed",
        description:
          "Most sales happen after several follow-ups. Now every one of them actually happens.",
      },
      {
        title: "Customers feel looked after",
        description:
          "Proactive reminders make your business feel organised and attentive — because it is.",
      },
      {
        title: "Mental load, deleted",
        description:
          "Your team stops carrying open loops in their heads and starts finishing them.",
      },
    ],
  },
  {
    slug: "email-automation",
    name: "Email Automation",
    category: "Communication",
    icon: "mail",
    oneLiner: "Automatically send personalized emails based on business events.",
    tagline:
      "The right email, to the right person, at the right moment — without anyone hitting send.",
    metaDescription:
      "Event-driven email automation: onboarding sequences, confirmations, updates and re-engagement emails triggered by real business activity.",
    problem: {
      intro:
        "Your team writes the same emails over and over: confirmations, welcome messages, status updates, gentle nudges. Each one is retyped or copy-pasted, personalization is inconsistent, and busy days mean emails simply don't go out.",
      sources: ["New Customers", "Orders", "Status Changes", "Inactivity"],
      manualFlow: [
        { label: "Notice something happened", sublabel: "If anyone notices", friction: true },
        { label: "Find the last similar email", sublabel: "Copy, paste, edit", friction: true },
        { label: "Send manually", sublabel: "Typos and delays included", friction: true },
      ],
    },
    automatedFlow: [
      { label: "Business Event", sublabel: "Signup, order, status change" },
      { label: "Automation Layer", sublabel: "Picks the right template & data", highlight: true },
      { label: "Personalized Email", sublabel: "Correct details, on brand" },
      { label: "Delivery & Tracking", sublabel: "Sent, opened, clicked" },
      { label: "Follow-Up Sequence", sublabel: "Multi-step journeys, hands-free" },
    ],
    before: [
      "Same emails typed repeatedly",
      "Inconsistent tone and details",
      "Emails forgotten on busy days",
      "No idea what was opened",
      "One-off messages, no journeys",
    ],
    after: [
      "Emails trigger themselves",
      "Consistent, personalized content",
      "Nothing depends on being free",
      "Open and click tracking",
      "Multi-step sequences run alone",
    ],
    steps: [
      { title: "An event fires", description: "A customer signs up, an order ships, a status changes." },
      { title: "The right template is chosen", description: "Rules map each event to the appropriate email." },
      { title: "Content is personalized", description: "Names, order details and context are filled in automatically." },
      { title: "Email is delivered", description: "Sent instantly through a reliable delivery service." },
      { title: "Engagement is tracked", description: "Opens and clicks feed back into the system." },
      { title: "Sequences continue", description: "Follow-up emails go out on schedule until the journey completes." },
    ],
    checklist: [
      "Event triggers",
      "Template system",
      "Personalization",
      "Transactional emails",
      "Drip sequences",
      "Open & click tracking",
      "Unsubscribe handling",
      "Deliverability setup",
    ],
    tech: ["Node.js", "Gmail", "PostgreSQL", "AWS", "React"],
    timeline: "1–3 weeks",
    illustration: "/illustrations/illo-email.png",
    accent: "purple",
    benefits: [
      {
        title: "Emails send themselves",
        description:
          "Confirmations, welcomes and updates go out the second an event happens — hands-free.",
      },
      {
        title: "Personal at any scale",
        description:
          "Every email uses the customer's real details and context, whether you send ten or ten thousand.",
      },
      {
        title: "More engagement, less effort",
        description:
          "Multi-step sequences nurture customers for weeks without anyone writing a single email.",
      },
      {
        title: "You know what works",
        description:
          "Open and click tracking shows which messages land — so the system keeps getting better.",
      },
    ],
  },
  {
    slug: "appointment-automation",
    name: "Appointment Automation",
    category: "Scheduling",
    icon: "calendar",
    oneLiner: "Automate booking confirmations, reminders and follow-ups.",
    tagline:
      "Fewer no-shows, zero back-and-forth, and a calendar that manages itself.",
    metaDescription:
      "Automated appointment booking, confirmations, reminders and rescheduling. Reduce no-shows and eliminate scheduling back-and-forth.",
    problem: {
      intro:
        "Booking an appointment takes five messages back and forth. Confirmations are typed by hand, reminders are sent when someone remembers, and no-shows still happen — because the customer forgot and nobody reminded them.",
      sources: ["Phone Calls", "WhatsApp Messages", "Walk-ins", "Website"],
      manualFlow: [
        { label: "Back-and-forth messages", sublabel: "\"Does 4pm work? No? 5?\"", friction: true },
        { label: "Manual calendar entry", sublabel: "Double-bookings happen", friction: true },
        { label: "No reminders", sublabel: "No-shows cost real money", friction: true },
      ],
    },
    automatedFlow: [
      { label: "Customer Books Online", sublabel: "Sees live availability, picks a slot" },
      { label: "Automation Layer", sublabel: "Confirms, blocks calendar, notifies", highlight: true },
      { label: "Instant Confirmation", sublabel: "Email + WhatsApp" },
      { label: "Smart Reminders", sublabel: "24h and 1h before" },
      { label: "Reschedule / Cancel", sublabel: "Self-service, no phone calls" },
      { label: "Post-Visit Follow-Up", sublabel: "Feedback and rebooking" },
    ],
    before: [
      "Endless scheduling messages",
      "Double bookings",
      "Hand-typed confirmations",
      "Frequent no-shows",
      "No post-visit follow-up",
    ],
    after: [
      "Customers book themselves",
      "Calendar always in sync",
      "Instant confirmations",
      "Automatic reminders cut no-shows",
      "Follow-ups bring customers back",
    ],
    steps: [
      { title: "Customer picks a slot", description: "Live availability means no back-and-forth." },
      { title: "Booking is confirmed", description: "Calendar blocked, confirmation sent instantly." },
      { title: "Reminders go out", description: "Timed nudges on WhatsApp and email before the appointment." },
      { title: "Changes handle themselves", description: "Reschedules and cancellations update everything automatically." },
      { title: "Follow-up after the visit", description: "Feedback requests and rebooking prompts go out on their own." },
    ],
    checklist: [
      "Online booking page",
      "Live availability",
      "Calendar sync",
      "Instant confirmations",
      "WhatsApp reminders",
      "Email reminders",
      "Self-service rescheduling",
      "Post-visit follow-ups",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "WhatsApp", "Gmail"],
    timeline: "2–4 weeks",
    illustration: "/illustrations/illo-calendar.png",
    accent: "teal",
    benefits: [
      {
        title: "Fewer no-shows",
        description:
          "Automatic reminders before every appointment mean customers actually turn up.",
      },
      {
        title: "Zero back-and-forth",
        description:
          "Customers see live availability and book themselves. The five-message scheduling dance is over.",
      },
      {
        title: "A calendar that fills itself",
        description:
          "Bookings arrive around the clock — even while you're with other customers.",
      },
      {
        title: "Customers come back",
        description:
          "Post-visit follow-ups and rebooking prompts quietly grow repeat business.",
      },
    ],
  },
  {
    slug: "ai-document-processing",
    name: "AI Document Processing",
    category: "AI",
    icon: "scan-text",
    oneLiner: "Extract information from invoices, applications and documents automatically.",
    tagline:
      "Stop paying skilled people to retype what's already written on a document.",
    metaDescription:
      "AI-powered extraction of data from invoices, forms, applications and PDFs — validated, structured and pushed into your systems automatically.",
    problem: {
      intro:
        "Invoices, applications, KYC documents and forms arrive as PDFs, photos and scans. Someone reads each one and retypes the contents into your system — slowly, expensively, and with the occasional typo that causes real damage downstream.",
      sources: ["PDF Invoices", "Scanned Forms", "Photos on WhatsApp", "Email Attachments"],
      manualFlow: [
        { label: "Open each document", sublabel: "One by one", friction: true },
        { label: "Read and retype", sublabel: "Field by field", friction: true },
        { label: "Hope it's correct", sublabel: "Typos surface weeks later", friction: true },
      ],
    },
    automatedFlow: [
      { label: "Document Arrives", sublabel: "Email, upload or WhatsApp" },
      { label: "AI Extraction", sublabel: "Reads fields, tables and totals", highlight: true },
      { label: "Validation", sublabel: "Cross-checked against rules" },
      { label: "Structured Data", sublabel: "Pushed into your system" },
      { label: "Human Review Queue", sublabel: "Only for low-confidence cases" },
      { label: "Searchable Archive", sublabel: "Every document, findable" },
    ],
    before: [
      "Hours of manual data entry",
      "Typos with downstream costs",
      "Processing backlogs",
      "Documents lost in inboxes",
      "Skilled staff doing typing work",
    ],
    after: [
      "Documents process themselves",
      "Validated, consistent data",
      "Minutes instead of days",
      "Searchable document archive",
      "Humans only review exceptions",
    ],
    steps: [
      { title: "Document is received", description: "Uploaded, emailed or forwarded from WhatsApp." },
      { title: "AI reads the document", description: "Fields, line items and totals are extracted automatically." },
      { title: "Data is validated", description: "Business rules catch anomalies and inconsistencies." },
      { title: "Records are created", description: "Clean, structured data lands in your database or ERP." },
      { title: "Exceptions go to humans", description: "Only low-confidence documents need a quick review." },
      { title: "Everything is archived", description: "Original files stay linked to their data, fully searchable." },
    ],
    checklist: [
      "Document intake (email/upload/WhatsApp)",
      "AI field extraction",
      "Table & line-item extraction",
      "Validation rules",
      "System integration",
      "Review queue",
      "Searchable archive",
      "Audit trail",
    ],
    tech: ["OpenAI", "Gemini", "Node.js", "PostgreSQL", "AWS", "React"],
    timeline: "3–6 weeks",
    illustration: "/illustrations/illo-documents.png",
    accent: "blue",
    benefits: [
      {
        title: "Days of typing become minutes",
        description:
          "AI reads invoices, forms and applications in seconds — the backlog simply disappears.",
      },
      {
        title: "Fewer costly mistakes",
        description:
          "Validation rules catch anomalies that tired human eyes miss at 6pm on a Friday.",
      },
      {
        title: "Experts do expert work",
        description:
          "Your skilled people stop retyping documents and start doing the work you actually hired them for.",
      },
      {
        title: "Every document findable",
        description:
          "Originals stay linked to their extracted data in one searchable archive.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
