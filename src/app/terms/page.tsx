"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "../components/landingPage/Header";
import { navContent } from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { Reveal3 } from "../components/animations/Text";
import WhatsApp from "../components/WhatsApp";

type Block = { p: string } | { ul: string[]; lead?: "def" | "sentence" };
type Section = { id: string; title: string; blocks: Block[] };

const LAST_UPDATED = "November 2026";
const VERSION = "1.2";

const intro = [
  "These terms and conditions (the “Terms”) are the agreement between Lassod Consulting Ltd, trading as PurpleDove ERP (“PurpleDove”, “we”, “us” or “our”), and the organisation that subscribes to PurpleDove ERP (the “Customer” or “you”). Lassod Consulting Ltd is registered in Nigeria with registration number RC 1784271, and its office is at Bookshop House, 13th Floor, 50/52 Broad Street, Marina, Lagos, Nigeria.",
  "By signing an order form, paying an invoice, creating an account or using PurpleDove ERP, you agree to these Terms on behalf of your organisation, and you confirm that you have authority to do so.",
];

const sections: Section[] = [
  {
    id: "definitions",
    title: "1. Definitions",
    blocks: [
      {
        lead: "def",
        ul: [
          "Platform means the PurpleDove ERP software, the apps and modules in your plan, and the hosting and related services that we provide, including any updates.",
          "Order Form means the order form, quotation, proposal or online sign up that records your plan, the number of Users, the fees and the subscription term.",
          "User means an individual whom you authorise to use the Platform under your account, including your employees and contractors. A User must have a separate login.",
          "Subscription Term means the period stated in the Order Form, which is one year unless it says otherwise.",
          "Customer Data means all data and content that you or your Users enter into or generate on the Platform.",
          "Optional Services means training, data migration, premium support, customisation and any other service that is not part of the standard annual subscription.",
          "NRS means the Nigeria Revenue Service, and NRS Service means the electronic invoicing system operated by the NRS.",
          "Business Day means a day other than Saturday, Sunday or a public holiday in Lagos, Nigeria.",
        ],
      },
    ],
  },
  {
    id: "subscription-licence",
    title: "2. Subscription and licence",
    blocks: [
      {
        p: "2.1 Your annual subscription gives you access to all the standard apps and modules available on PurpleDove ERP at the time you subscribe, and to those that we add to the standard plan during your Subscription Term. Domain specific modules, additional apps and custom work are covered in clause 5.",
      },
      {
        p: "2.2 We grant you a non exclusive, non transferable, non sublicensable right to access and use the Platform during the Subscription Term, for your own internal business purposes, for up to the number of Users on your Order Form.",
      },
      {
        p: "2.3 The Platform is provided as a hosted service. You do not receive a copy of the software or its source code, and nothing in these Terms transfers ownership of the Platform to you.",
      },
      {
        p: "2.4 You may not copy, modify, reverse engineer, decompile, resell, rent or sublicense the Platform, use it to build a competing product, or allow anyone who is not your User to use it, except where the law does not allow us to restrict this.",
      },
    ],
  },
  {
    id: "accounts-users",
    title: "3. Accounts and Users",
    blocks: [
      {
        p: "The minimum subscription is 5 Users. You are responsible for all activity under your accounts. You must keep login details confidential, give each User a separate login, switch off the accounts of people who leave your organisation, and tell us straight away if you suspect unauthorised access. You must give us accurate information about your organisation and keep it up to date. You must also nominate one main contact person for our communications and for support.",
      },
    ],
  },
  {
    id: "fees-payment",
    title: "4. Fees and payment",
    blocks: [
      {
        p: "4.1 The standard fee at the date of these Terms is NGN 100,000 per User per year, billed annually in advance, with a minimum of 5 Users. The fees for your Subscription Term are those in your Order Form.",
      },
      {
        p: "4.2 Fees do not include Value Added Tax or any other tax, levy or duty. You will pay these at the rate the law sets, and we will show them separately on the invoice.",
      },
      {
        p: "4.3 Invoices are payable within 14 days of the invoice date, unless the Order Form says otherwise. Access to the Platform starts when we receive payment or the date stated in the Order Form, whichever we agree in writing.",
      },
      {
        p: "4.4 If the law requires you to deduct withholding tax, you will deduct only what the law requires, pay it over on time and send us a valid credit note within 30 days. If you do not, we may invoice you for the amount deducted.",
      },
      {
        p: "4.5 If you add Users during the Subscription Term, we will invoice the fee for the additional Users for the months remaining in the term, and the new Users will be included at renewal.",
      },
      {
        p: "4.6 If a payment is late and not disputed in good faith, we may charge interest of 1.5 percent per month on the overdue amount. If an invoice is still unpaid 14 days after we have reminded you in writing, we may suspend access to the Platform until it is paid. We will not delete your Customer Data because of a suspension for at least 30 days.",
      },
      {
        p: "4.7 Our refund rules are in the PurpleDove ERP Refund and Privacy Policy, which forms part of these Terms.",
      },
    ],
  },
  {
    id: "optional-services",
    title: "5. Optional Services and customisation",
    blocks: [
      {
        p: "5.1 Optional Services are charged separately and under the quote or statement of work that you accept. They include virtual training, physical training, premium support after training, and data migration. Virtual training is free for small companies and paid for larger companies, and the small data migration is free while the migration of large data is paid. We decide in good faith whether you qualify for free services, and we will tell you before we start.",
      },
      {
        p: "5.2 If you ask us to build additional apps, modules or features for your specific operations, we will give you a quote with separate costs, timelines and terms. Unless the quote says otherwise, we keep the ownership of the intellectual property in anything we build on the Platform, and we give you the right to use it during your subscription.",
      },
      {
        p: "5.3 Where a customisation makes it necessary, we may need to update your configuration when the Platform is updated. We will tell you in advance about changes that affect customised features.",
      },
    ],
  },
  {
    id: "term-renewal",
    title: "6. Term, renewal and ending the subscription",
    blocks: [
      {
        p: "6.1 The Subscription Term starts on the start date in the Order Form and continues for the period stated in it.",
      },
      {
        p: "6.2 At the end of each Subscription Term, the subscription renews for another term of one year, unless either of us gives written notice that we do not want to renew before the renewal date. We will send you a reminder at least 30 days before renewal. If the notice is sent in time, the subscription ends at the end of the current term.",
      },
      {
        p: "6.3 We may change our standard price. A change applies to you only on renewal, and we will tell you at least 30 days before the renewal date. If you do not agree to the new price, you may give notice not to renew.",
      },
      {
        p: "6.4 Either of us may end the agreement immediately by written notice if the other commits a material breach and does not fix it within 30 days of written notice, or if the other becomes insolvent, enters liquidation or administration, or stops carrying on business.",
      },
      {
        p: "6.5 We may suspend or end your access immediately if you use the Platform illegally or in a way that seriously threatens the security or the other customers of the Platform, or if you have not paid after the reminders in clause 4.6.",
      },
      {
        p: "6.6 When the agreement ends, your right to use the Platform ends. You will have 30 days to export your Customer Data using the export tools in the Platform, or we will give you a copy on request. After that, we will delete the Customer Data as set out in the Refund and Privacy Policy. You are responsible for keeping the records that the law requires you to keep.",
      },
    ],
  },
  {
    id: "customer-data",
    title: "7. Customer Data",
    blocks: [
      {
        p: "7.1 You own your Customer Data. You give us the right to host, copy, process and display it only as needed to provide the Platform and Optional Services to you, to prevent or fix technical problems, and as the law requires.",
      },
      {
        p: "7.2 You are responsible for the accuracy, quality and legality of Customer Data, and for having the right to put it on the Platform, including any consent or lawful basis that data protection law requires.",
      },
      {
        p: "7.3 We will not sell Customer Data and we will not use it for advertising. We may use information about how the Platform is used, in a form that does not identify you or any individual, to run, secure and improve the Platform.",
      },
    ],
  },
  {
    id: "data-protection",
    title: "8. Data protection",
    blocks: [
      {
        p: "All parties will follow the Nigeria Data Protection Act 2023 and the other data protection laws that apply to it. You are the data controller of personal data in your Customer Data and we are your data processor. For that personal data, we will:",
      },
      {
        ul: [
          "process it only to provide the Platform and Optional Services, and on your documented instructions, unless the law requires otherwise;",
          "make sure our personnel who handle it are bound by confidentiality;",
          "keep it secure with appropriate technical and organisational measures;",
          "tell you without undue delay, and within 48 hours after we confirm it, of a breach that affects it, so that you can meet the 72 hour reporting period to the Nigeria Data Protection Commission;",
          "help you respond to requests from individuals and regulators;",
          "use subprocessors only under written contracts and as the Refund and Privacy Policy describes, with 30 days’ notice of changes that affect Customer Data;",
          "let you check our compliance by reasonable audit once a year, with notice, or sooner if there has been a breach; and",
          "delete or return the data when the agreement ends, as clause 6.6 and the Refund and Privacy Policy provide.",
        ],
      },
      {
        p: "The Refund and Privacy Policy explains in more detail how we handle personal data and forms part of these Terms.",
      },
    ],
  },
  {
    id: "nrs-invoicing",
    title: "9. NRS electronic invoicing",
    blocks: [
      {
        p: "9.1 The PurpleDove NRS electronic invoicing app lets you send sales invoices from the Platform to the NRS for validation, retrieve the NRS reference number, and store the approval status and QR code on the invoice.",
      },
      {
        p: "9.2 The NRS Service is run by the NRS and not by us. Its availability, rules, response times, requirements and any fees or penalties are decided by the NRS. We are not responsible for delays, rejections or failures caused by the NRS Service, or for changes the NRS makes to its requirements, although we will make reasonable efforts to update the app to follow them within a reasonable time.",
      },
      {
        p: "9.3 You are responsible for the accuracy and completeness of the invoice details you enter, for setting up your tax information correctly, for registering with the NRS where this is required, and for deciding whether and when invoices must be submitted.",
      },
      {
        p: "9.4 We build and configure the Platform so that it can produce the data and reports that the Nigeria Tax Act 2025 and related rules require. However, we do not give tax or legal advice, and you remain responsible for your own tax compliance, returns and filings. You should consult a qualified tax adviser on your obligations.",
      },
    ],
  },
  {
    id: "wallet-payments",
    title: "10. Wallet and payment solution",
    blocks: [
      {
        p: "The wallet and payment solution is provided together with BuyPower Micro Finance Bank Ltd. Funds in a wallet are held and handled by BP MFB under its own terms and the law, including the rules of the Central Bank of Nigeria. We are a technology provider and not a bank, and we do not accept deposits. You agree to give the verification information that the partner and the law require, to use the wallet only for lawful business purposes, and to follow the partner’s terms. We are not responsible for the acts or omissions of the partner, for bank charges, or for failures of banking networks. You must check every payment instruction before you approve it, and you are responsible for payments approved by your Users.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "11. Acceptable use",
    blocks: [
      { p: "You will not, and will not allow anyone else to:" },
      {
        ul: [
          "use the Platform for any unlawful, fraudulent or abusive purpose, including money laundering, tax evasion or the issuing of false invoices;",
          "upload malicious code, or try to interfere with, overload or gain unauthorised access to the Platform or any other customer’s data;",
          "test the security of the Platform without our written permission;",
          "send unlawful or unsolicited bulk messages through the Platform; or",
          "store content that infringes the rights of others or that the law prohibits.",
        ],
      },
      {
        p: "If you break this clause, we may suspend the account, remove the content that is involved and report the matter to the authorities where the law requires.",
      },
    ],
  },
  {
    id: "service-levels",
    title: "12. Service levels and support",
    blocks: [
      {
        p: "Our service commitments for availability, support and recovery are in the PurpleDove ERP Service Level Agreement, which forms part of these Terms. Support is given to your nominated contact person and your Users through the channels in that document.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "13. Intellectual property",
    blocks: [
      {
        p: "We and our licensors own all intellectual property in the Platform, including its software, design, documentation, trademarks and the PurpleDove name and logo. Nothing in these Terms transfers any of it to you. If you give us feedback or suggestions, we may use them freely to improve the Platform without any duty to you. You keep all rights in your Customer Data and your own trademarks.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "14. Confidentiality",
    blocks: [
      {
        p: "All parties will keep confidential the other’s non public business, technical and financial information that is marked confidential or that a reasonable person would understand to be confidential, will use it only for the purposes of this agreement, and will share it only with people who need it and are bound by similar duties. This does not apply to information that is public through no fault of the receiving party, was already lawfully known to it, is independently developed or is lawfully received from someone else. A party may disclose information where a court, regulator or the law requires, after giving notice where the law allows. These duties continue for 5 years after the agreement ends.",
      },
    ],
  },
  {
    id: "warranties",
    title: "15. Warranties and disclaimers",
    blocks: [
      {
        p: "15.1 We will provide the Platform with reasonable skill and care and in line with the Service Level Agreement. Each of us confirms that it has the authority to enter into this agreement.",
      },
      {
        p: "15.2 Apart from what is expressly stated in these Terms, and as far as the law allows, we give no other warranty, whether express or implied, including any implied warranty of fitness for a particular purpose. We do not promise that the Platform will be uninterrupted or free of every error, or that it will meet requirements that are not in your Order Form. Your financial, payroll, tax and other reports depend on the data and settings you enter, and you should check them before you rely on them.",
      },
    ],
  },
  {
    id: "liability",
    title: "16. Limit of liability",
    blocks: [
      {
        p: "16.1 Nothing in these Terms limits liability for fraud, for death or personal injury caused by negligence, or for any liability that the law does not allow to be limited.",
      },
      {
        p: "16.2 Subject to clause 16.1, neither of us is liable for loss of profit, revenue, goodwill or business opportunity, loss or corruption of data that could have been avoided by using the export and backup tools, or for any indirect or consequential loss.",
      },
      {
        p: "16.3 Subject to clause 16.1, the total liability of each party for all claims arising from this agreement is limited to the subscription fees you paid us in the 12 months before the event that gave rise to the claim.",
      },
      {
        p: "16.4 Clause 16.3 does not limit your duty to pay fees, or your liability for breach of clause 2.4 or clause 11.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "17. Indemnity",
    blocks: [
      {
        p: "You will indemnify us against third party claims, including reasonable legal costs, that arise because your Customer Data, or your use of the Platform in breach of these Terms, infringes someone’s rights or breaks the law. We will indemnify you against third party claims that the Platform, used as these Terms allow, infringes that third party’s copyright in Nigeria, provided that you tell us promptly, let us control the defence and settlement, and cooperate with us. We may change the Platform so that it no longer infringes, or end the affected feature and refund the fees for the part of the term that remains.",
      },
    ],
  },
  {
    id: "force-majeure",
    title: "18. Force majeure",
    blocks: [
      {
        p: "Neither party is liable for delay or failure to perform caused by events beyond its reasonable control, such as flood, fire, war, civil unrest, epidemic, government action, a wide failure of power, telecommunications or the internet, or a failure of third party networks, banks or government systems. The affected party must tell the other promptly and try to limit the effect. This does not excuse payment of money that is already due. If the event continues for more than 60 days, either of us may end the agreement by written notice, and we will refund the fees for the full months remaining.",
      },
    ],
  },
  {
    id: "ethics",
    title: "19. Ethics and compliance",
    blocks: [
      {
        p: "All parties will follow the laws on bribery, corruption, money laundering and sanctions that apply to it, including the Corrupt Practices and Other Related Offences Act 2000 and the Money Laundering (Prevention and Prohibition) Act 2022.",
      },
    ],
  },
  {
    id: "publicity",
    title: "20. Publicity",
    blocks: [
      {
        p: "Unless you tell us in writing that you do not agree, we may name you as a customer and use your name and logo for that purpose on our website and in our marketing materials.",
      },
    ],
  },
  {
    id: "changes",
    title: "21. Changes to these Terms",
    blocks: [
      {
        p: "We may update these Terms from time to time, for example to follow changes in the law or in the Platform. We will give you at least 30 days’ notice of a material change by email or in the Platform. If you do not agree with the change, you may end the subscription before it takes effect and we will refund the fees for the full months remaining. If you continue to use the Platform after the change takes effect, you accept it.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "22. Governing law and disputes",
    blocks: [
      {
        p: "These Terms and the agreement are governed by the laws of the Federal Republic of Nigeria. If a dispute arises, we will first try to settle it through discussions between our contact persons and then senior management, for 21 days after one of us gives written notice of the dispute. If it is not resolved, it will be referred to arbitration in Lagos under the Arbitration and Mediation Act 2023, before a single arbitrator chosen by agreement or, if there is no agreement within 14 days, appointed under that Act. The language of the arbitration is English and the award is final and binding. Either of us may apply to the courts in Lagos State for urgent interim relief, including to protect confidential information or intellectual property.",
      },
    ],
  },
  {
    id: "general",
    title: "23. General",
    blocks: [
      {
        lead: "sentence",
        ul: [
          "Entire agreement. The Order Form, these Terms, the Refund and Privacy Policy and the Service Level Agreement are the whole agreement and replace earlier discussions about the Platform. If they conflict, the Order Form prevails on the point it deals with, then these Terms, then the other documents.",
          "Assignment. You may not transfer your rights or duties without our written consent. We may transfer ours to a group company or to a buyer of our business, and we will tell you.",
          "Severability. If any part is found invalid or unenforceable, the rest continues in force.",
          "No waiver. A delay in enforcing a right does not mean it has been given up.",
          "Independent parties. Nothing in this agreement makes either party the partner, agent or employee of the other.",
          "Notices. Notices must be in writing and sent by email to the address in the Order Form or to info@purpledove.net, and are treated as received on the next Business Day after sending if no delivery failure message is returned.",
          "Electronic acceptance. Each party agrees that acceptance by electronic signature, by clicking to accept, or by payment is valid and binding.",
        ],
      },
    ],
  },
];

const tocItems = [
  ...sections.map((s) => ({ id: s.id, title: s.title })),
  { id: "contact", title: "24. Contact" },
];

// Brand purple used for accents and links
const ACCENT = "#A700AF";
const linkClass = "text-[#A700AF] underline underline-offset-4";

// Matches emails and mentions of the other policy documents
const LINKABLE =
  /([\w.+-]+@[\w-]+\.[\w.]+[\w]|Refund and Privacy Policy|Service Level Agreement)/g;

// Emails become mailto links; policy names link to their pages
function linkify(text: string) {
  return text.split(LINKABLE).map((chunk, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{chunk}</Fragment>;
    if (chunk.includes("@"))
      return (
        <a key={i} href={`mailto:${chunk}`} className={linkClass}>
          {chunk}
        </a>
      );
    return (
      <Link
        key={i}
        href={chunk.startsWith("Refund") ? "/privacy" : "/sla"}
        className={linkClass}
      >
        {chunk}
      </Link>
    );
  });
}

// Bold the lead-in of a list item: "Platform means" or "Entire agreement."
function renderItem(text: string, mode?: "def" | "sentence") {
  let end = -1;
  if (mode === "def") {
    const m = text.match(/^(.+?\bmeans\b)/);
    if (m) end = m[1].length;
  } else if (mode === "sentence") {
    const i = text.indexOf(". ");
    if (i !== -1) end = i + 1;
  }
  if (end === -1) return linkify(text);
  return (
    <>
      <span className="font-semibold">{text.slice(0, end)}</span>
      {linkify(text.slice(end))}
    </>
  );
}

// Bold clause numbers like "4.1" at the start of a paragraph
function renderParagraph(text: string) {
  const m = text.match(/^(\d+\.\d+)\s/);
  if (!m) return linkify(text);
  return (
    <>
      <span className="mr-1 font-semibold">{m[1]}</span>
      {linkify(text.slice(m[1].length + 1))}
    </>
  );
}

const Terms = () => {
  const [activeId, setActiveId] = useState(tocItems[0].id);
  const tocRef = useRef<HTMLDivElement>(null);

  // Scroll-spy: the active section is the last one whose top has passed the offset
  useEffect(() => {
    const OFFSET = 140;
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(tocItems[tocItems.length - 1].id);
        return;
      }
      let current = tocItems[0].id;
      for (const { id } of tocItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= OFFSET) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keep the active link visible inside the sidebar's own scroll area
  useEffect(() => {
    const box = tocRef.current;
    const link = box?.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    if (!box || !link) return;
    const boxRect = box.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    if (linkRect.top < boxRect.top)
      box.scrollTop -= boxRect.top - linkRect.top + 8;
    else if (linkRect.bottom > boxRect.bottom)
      box.scrollTop += linkRect.bottom - boxRect.bottom + 8;
  }, [activeId]);

  return (
    <div>
      <Header headerData={navContent} />

      {/* Hero */}
      <section className="flex flex-col items-start gap-6 pt-36 sm:pt-48 pb-12 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
        <p className="inline-block rounded-full border border-[#F6E5F7] bg-[#F6E5F7]/40 px-4 py-1.5 text-sm font-medium">
          Last updated: {LAST_UPDATED} · Version {VERSION}
        </p>
        <h1>PurpleDove ERP Terms and Conditions</h1>
        <Reveal3>
          <p className="max-w-2xl">
            The agreement between Lassod Consulting Ltd, trading as PurpleDove
            ERP, and the organisations that subscribe to PurpleDove ERP.
          </p>
        </Reveal3>
      </section>

      {/* Content */}
      <section className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 pb-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
        {/* Table of contents */}
        <nav aria-label="Table of contents" className="hidden lg:block">
          <div
            ref={tocRef}
            className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
          >
            <p className="mb-3 text-sm font-bold">On this page</p>
            <ul className="space-y-2 border-l border-[#F6E5F7] text-sm">
              {tocItems.map(({ id, title }) => {
                const active = id === activeId;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      data-id={id}
                      aria-current={active ? "location" : undefined}
                      className={`-ml-px block border-l py-0.5 pl-4 text-sm transition-colors focus-visible:outline-none ${
                        active
                          ? "border-[#A700AF] font-semibold text-[#A700AF]"
                          : "border-transparent hover:border-[#A700AF] hover:text-[#A700AF] focus-visible:border-[#A700AF] focus-visible:text-[#A700AF]"
                      }`}
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Terms body */}
        <article className="min-w-0 max-w-3xl space-y-12">
          <div className="space-y-4">
            {intro.map((t, i) => (
              <p key={i} className="text-base leading-relaxed">
                {t}
              </p>
            ))}
          </div>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 space-y-4">
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              {s.blocks.map((b, i) =>
                "p" in b ? (
                  <p key={i} className="text-base leading-relaxed">
                    {renderParagraph(b.p)}
                  </p>
                ) : (
                  <ul
                    key={i}
                    className="list-disc space-y-2 pl-6 marker:text-[#A700AF]"
                  >
                    {b.ul.map((item, j) => (
                      <li key={j} className="text-base leading-relaxed">
                        {renderItem(item, b.lead)}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}

          <section id="contact" className="scroll-mt-28 space-y-4">
            <h3 className="text-2xl font-semibold">24. Contact</h3>
            <address className="not-italic text-base leading-relaxed">
              <span className="font-semibold">
                PurpleDove ERP, a product of Lassod Consulting Ltd
              </span>
              <br />
              Bookshop House, 13th Floor, 50/52 Broad Street, Marina, Lagos,
              Nigeria
              <br />
              Email:{" "}
              <a href="mailto:info@purpledove.net" className={linkClass}>
                info@purpledove.net
              </a>
            </address>
          </section>

          {/* Related policies */}
          <nav
            aria-label="Related policies"
            className="space-y-6 border-t border-[#F6E5F7] pt-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/privacy"
                className="block rounded-2xl border border-[#F6E5F7] p-5 transition-colors hover:border-[#A700AF] focus-visible:border-[#A700AF] focus-visible:outline-none"
              >
                <span className="block text-sm">Next</span>
                <span className="mt-1 block text-lg font-semibold">
                  Refund and Privacy Policy
                </span>
                <span className="mt-1 block text-sm">
                  When we refund fees and how we handle personal data.
                </span>
              </Link>
              <Link
                href="/sla"
                className="block rounded-2xl border border-[#F6E5F7] p-5 transition-colors hover:border-[#A700AF] focus-visible:border-[#A700AF] focus-visible:outline-none"
              >
                <span className="block text-sm">Also read</span>
                <span className="mt-1 block text-lg font-semibold">
                  Service Level Agreement
                </span>
                <span className="mt-1 block text-sm">
                  Our commitments on availability, support and recovery.
                </span>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium underline underline-offset-4"
              style={{ color: ACCENT }}
            >
              Back to top
            </button>
          </nav>
        </article>
      </section>

      <Footer footerData={navContent} />
      <WhatsApp />
    </div>
  );
};

export default Terms;
