"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "../components/landingPage/Header";
import { navContent } from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { Reveal3 } from "../components/animations/Text";
import WhatsApp from "../components/WhatsApp";

type Block =
  | { p: string }
  | { ul: string[]; lead?: "sentence" }
  | { table: { head: string[]; rows: string[][] } };
type Section = { id: string; title: string; part: string; blocks: Block[] };

const LAST_UPDATED = "November 2026";
const VERSION = "1.2";

const PART_ONE = "Part One: Refund Policy";
const PART_TWO = "Part Two: Privacy Policy";

const intro = [
  "PurpleDove ERP is provided by Lassod Consulting Ltd, trading as PurpleDove ERP (“PurpleDove”, “we”, “us” or “our”). Lassod Consulting Ltd is registered in Nigeria with registration number RC 1784271, and its office is at Bookshop House, 13th Floor, 50/52 Broad Street, Marina, Lagos, Nigeria.",
  "This document has two parts. Part One explains when we refund payments for PurpleDove ERP subscriptions and related services. Part Two explains how we handle personal data on purpledove.net and inside the PurpleDove ERP platform. In this document, “you” means the organisation that subscribes to PurpleDove ERP (the “Customer”), and where it makes sense, the people who use it on the Customer’s behalf.",
];

const sections: Section[] = [
  /* ---------------- PART ONE: REFUND POLICY ---------------- */
  {
    id: "refund-subscription-fees",
    part: PART_ONE,
    title: "1. Subscription fees",
    blocks: [
      {
        p: "PurpleDove ERP is billed annually in advance. The standard price is NGN 100,000 per user per year, with a minimum of 5 users. The minimum annual subscription is therefore NGN 500,000, before tax. Your order form or invoice shows the exact amount you pay.",
      },
    ],
  },
  {
    id: "refund-seven-day",
    part: PART_ONE,
    title: "2. Seven day cancellation right",
    blocks: [
      {
        p: "You may cancel a new subscription and receive a full refund of the subscription fee if you tell us in writing within 7 days of the date your account is activated, and you have not, in that time, started using the platform for live business transactions such as issuing invoices to your customers or running payroll. We will deduct only the transaction charges that our payment provider keeps and that we cannot recover.",
      },
      {
        p: "The seven day right applies once, to your first subscription. It does not apply to renewals.",
      },
    ],
  },
  {
    id: "refund-after-seven-days",
    part: PART_ONE,
    title: "3. After the first 7 days",
    blocks: [
      {
        p: "After the 7 day period, the subscription fee for the year is not refundable, because the platform is made available to you for the whole year. There are three exceptions.",
      },
      {
        lead: "sentence",
        ul: [
          "Failure to provide the service. If PurpleDove ERP is materially unavailable or unusable because of a fault on our side, and we do not fix it within 30 days of your written notice, you may cancel and we will refund the fees for the full months that remain in your subscription term.",
          "Termination by us. If we end your subscription for reasons other than your breach of our Terms and Conditions, we will refund the fees for the full months that remain.",
          "Billing errors. If you were charged twice or charged the wrong amount, we will refund the difference in full.",
        ],
      },
    ],
  },
  {
    id: "refund-changing-users",
    part: PART_ONE,
    title: "4. Changing the number of users",
    blocks: [
      {
        p: "If you add users during the year, we charge the fee for the additional users from the date you add them until the end of the subscription year, calculated for the months remaining. Reducing the number of users during a subscription year does not lead to a refund. You can reduce users at renewal, but the subscription cannot go below the minimum of 5 users.",
      },
    ],
  },
  {
    id: "refund-renewals",
    part: PART_ONE,
    title: "5. Renewals",
    blocks: [
      {
        p: "Subscriptions renew each year as the Terms and Conditions describe. We will send a reminder at least 30 days before the renewal date. If you do not want to renew, you must tell us in writing before the renewal date. If you were charged for a renewal after you told us in time that you did not want to renew, we will refund the renewal fee in full.",
      },
    ],
  },
  {
    id: "refund-other-services",
    part: PART_ONE,
    title: "6. Other services",
    blocks: [
      {
        lead: "sentence",
        ul: [
          "Virtual training. Where it is charged, the fee is refundable if you cancel at least 3 business days before the session. Otherwise we will reschedule it once without charge.",
          "Physical training. If you cancel at least 7 days before the date, we will refund the training fee, less travel and accommodation costs that we have already paid and cannot recover. If you cancel later, we will reschedule once, and you will bear costs that we cannot recover.",
          "Data migration. The fee is refundable only for the part of the migration that we have not started. Migration work that has been done is not refundable.",
          "Customisation and new modules. Refunds are governed by the quote or statement of work that you accepted. Work that we have delivered and that you have accepted is not refundable.",
          "Premium support. This is charged for a set period. If you cancel during a period, the fee for that period is not refundable, but we will not renew it afterwards.",
        ],
      },
    ],
  },
  {
    id: "refund-wallet",
    part: PART_ONE,
    title: "7. Wallet and payment solution",
    blocks: [
      {
        p: "Money that you place in a PurpleDove wallet belongs to you. A refund of the subscription does not automatically move wallet balances. Withdrawals, reversals and refunds of wallet funds follow the rules of the licensed financial institution that holds the funds, and the Central Bank of Nigeria rules that apply. Transaction fees charged by banks and payment providers are not refundable.",
      },
    ],
  },
  {
    id: "refund-how-to-ask",
    part: PART_ONE,
    title: "8. How to ask for a refund",
    blocks: [
      {
        p: "Email info@purpledove.net with the name of your organisation, your invoice number, the amount, the reason and any supporting documents. We will reply within 7 business days. Approved refunds are paid within 14 business days to the account or card that made the original payment, in Naira, unless we agree another arrangement.",
      },
    ],
  },
  {
    id: "refund-taxes",
    part: PART_ONE,
    title: "9. Taxes",
    blocks: [
      {
        p: "We refund Value Added Tax together with the fee that it relates to, to the extent that we are able to recover it from the tax authority or reverse it on our records.",
      },
    ],
  },
  {
    id: "refund-legal-rights",
    part: PART_ONE,
    title: "10. Your legal rights",
    blocks: [
      {
        p: "Nothing in this policy affects any right you have under the Federal Competition and Consumer Protection Act 2018 or other laws that apply to you.",
      },
    ],
  },

  /* ---------------- PART TWO: PRIVACY POLICY ---------------- */
  {
    id: "privacy-roles",
    part: PART_TWO,
    title: "1. Two roles for personal data",
    blocks: [
      {
        p: "We handle personal data in two different ways, and it helps to understand the difference.",
      },
      {
        p: "First, we are the data controller for the information we collect about you and your organisation in order to sell, bill, support and secure the platform. This includes account details, billing records, support requests and website data.",
      },
      {
        p: "Second, we are a data processor for the information that you and your users put into PurpleDove ERP, such as the records of your employees, customers, suppliers, patients, students and invoices (the “Customer Data”). You are the controller of Customer Data. You decide what goes in and why, and you remain responsible for having a lawful basis for it. We process it only to provide the service and on your instructions.",
      },
      {
        p: "Our Data Protection Officer can be reached at Michael.akeni@lassod.com. We keep our registration with the Nigeria Data Protection Commission (the “NDPC”) up to date where the law requires it.",
      },
    ],
  },
  {
    id: "privacy-laws",
    part: PART_TWO,
    title: "2. The laws we follow",
    blocks: [
      {
        p: "We follow the Nigeria Data Protection Act 2023 (the “NDPA”), the NDPC’s General Application and Implementation Directive 2025, the Cybercrimes (Prohibition, Prevention, etc.) Act 2015 as amended, and the data requirements of the Nigeria Tax Act 2025 where the platform is used for tax and invoicing records.",
      },
    ],
  },
  {
    id: "privacy-collect",
    part: PART_TWO,
    title: "3. What we collect as a controller",
    blocks: [
      {
        lead: "sentence",
        ul: [
          "Account and contact data. Organisation name, registration and tax identification details, the names, work emails and phone numbers of your administrators and users, and their job titles.",
          "Sign in and security data. Usernames, passwords stored in protected form, login times, IP addresses, device and browser information, and records of actions in the system (audit trails).",
          "Billing data. Invoices, payments made and the details of the payment reference. We do not store card numbers. Payments are handled by licensed payment providers.",
          "Support data. Tickets, emails, call notes and screenshots that you send us.",
          "Website data. Information collected through cookies and similar tools on purpledove.net, as described in section 12.",
          "Training data. Names, contact details and attendance of people who take part in our training.",
        ],
      },
    ],
  },
  {
    id: "privacy-customer-data",
    part: PART_TWO,
    title: "4. Customer Data we process for you",
    blocks: [
      {
        p: "Depending on the modules you use, Customer Data may include:",
      },
      {
        ul: [
          "employee and payroll records, including names, bank details, salaries, tax and pension details and attendance;",
          "customer, supplier and contact records, quotations, orders and invoices;",
          "accounting records, assets, inventory and project information;",
          "records in the education, healthcare, manufacturing, agriculture or not for profit modules, which can include student records and health information of patients; and",
          "internal communications such as memos and approval logs.",
        ],
      },
      {
        p: "Some of this data, including health data, is sensitive personal data under the NDPA and needs extra care. If you use the healthcare module or put other sensitive data on the platform, you must have a valid legal ground for doing so and must tell us if you need additional safeguards.",
      },
    ],
  },
  {
    id: "privacy-nrs",
    part: PART_TWO,
    title: "5. NRS electronic invoicing",
    blocks: [
      {
        p: "If you use the PurpleDove NRS electronic invoicing app, the invoice details you choose to submit, such as seller and buyer details, tax identification numbers, items, amounts and taxes, are sent to the Nigeria Revenue Service (the “NRS”) so it can validate the invoice. We receive back the NRS reference number, the approval status and the QR code, and we store them on the invoice. The NRS is a government authority and handles the data it receives under its own legal powers and policies. It is not our processor.",
      },
    ],
  },
  {
    id: "privacy-wallet",
    part: PART_TWO,
    title: "6. Wallet and payment solution",
    blocks: [
      {
        p: "The wallet and payment solution is provided with BuyPower Micro Finance Bank Ltd. If you use it, BuyPower MFB will collect the identity and verification information that financial regulations require, and it will process your payment data under its own terms and the law. We process the transaction records that appear in your PurpleDove account so that you can reconcile and report on them. We do not hold your money, unless an agreement with you says otherwise.",
      },
    ],
  },
  {
    id: "privacy-lawful-basis",
    part: PART_TWO,
    title: "7. Why we use data and our lawful basis",
    blocks: [
      {
        table: {
          head: ["Purpose", "Lawful basis under the NDPA"],
          rows: [
            [
              "Setting up and running your account and providing the service",
              "Performance of a contract",
            ],
            [
              "Billing, collecting payment and keeping financial records",
              "Performance of a contract and compliance with a legal obligation",
            ],
            ["Customer support and training", "Performance of a contract"],
            [
              "Securing the platform, preventing fraud and misuse, and keeping audit logs",
              "Our legitimate interest",
            ],
            [
              "Improving the platform using usage information that does not identify individuals",
              "Our legitimate interest",
            ],
            [
              "Sending product updates, offers and invitations",
              "Consent, which you may withdraw at any time. Service messages are not marketing",
            ],
            [
              "Responding to regulators and courts",
              "Compliance with a legal obligation",
            ],
          ],
        },
      },
      {
        p: "We do not use Customer Data for advertising, and we do not sell it.",
      },
    ],
  },
  {
    id: "privacy-commitments",
    part: PART_TWO,
    title: "8. Our commitments on Customer Data",
    blocks: [
      { p: "When we process Customer Data for you, we will:" },
      {
        ul: [
          "process it only to provide the service and on your documented instructions, unless the law requires otherwise, in which case we will tell you first where the law allows;",
          "make sure everyone on our side who can access it is bound by confidentiality;",
          "use appropriate technical and organisational measures to protect it, which include role based access control, audit trails, encrypted connections, regular backups and access limited to those who need it;",
          "tell you without undue delay, and in any case within 48 hours, after we confirm a breach that affects your Customer Data, so that you can meet the 72 hour period for reporting to the NDPC under the NDPA;",
          "pass on to you promptly any request from an individual about their data in your account, and help you respond;",
          "tell you if we think an instruction breaks data protection law;",
          "give you the information you reasonably need to show that we comply, and allow reasonable audits with notice, during working hours, and not more than once a year unless there has been a breach; and",
          "delete or return Customer Data at the end of your subscription as described in section 11.",
        ],
      },
      { p: "These commitments are repeated in our Terms and Conditions." },
    ],
  },
  {
    id: "privacy-subprocessors",
    part: PART_TWO,
    title: "9. Subprocessors",
    blocks: [
      {
        p: "We use trusted service providers to run the platform. Each is bound by a written agreement that requires it to protect personal data and to use it only for our instructions. We will update our customers if anything changes. If a change affects Customer Data, we will give you at least 30 days’ notice by email. If you object on reasonable data protection grounds, we will talk with you about options, and if we cannot find one, you may end the subscription and receive a refund for the full months remaining.",
      },
    ],
  },
  {
    id: "privacy-retention",
    part: PART_TWO,
    title: "10. How long we keep data",
    blocks: [
      {
        table: {
          head: ["Type of data", "How long we keep it"],
          rows: [
            ["Customer Data", "While your subscription is active"],
            [
              "Customer Data after the subscription ends",
              "Available to you for export for 30 days after the end date. After that we delete it within 90 days, unless the law requires us to keep it",
            ],
            [
              "Backup copies",
              "Overwritten in the normal backup cycle, within 90 days after deletion from the live system",
            ],
            [
              "Billing and contract records",
              "At least 6 years, or longer where the law requires",
            ],
            ["Support tickets", "3 years after the ticket is closed"],
            [
              "Security and audit logs",
              "Up to 12 months, unless needed for an investigation",
            ],
            ["Website and cookie data", "Up to 12 months"],
          ],
        },
      },
      {
        p: "Please note that you may have your own legal duty to keep accounting, payroll and tax records for a number of years. Export your records before your subscription ends, because we cannot recover data after the deletion period.",
      },
    ],
  },
  {
    id: "privacy-cookies",
    part: PART_TWO,
    title: "11. Cookies",
    blocks: [
      {
        p: "The PurpleDove website uses cookies that keep the site working, remember your preferences and measure visits. You can control cookies in your browser settings. Blocking essential cookies may stop parts of the site from working. Where the law requires your consent for non essential cookies, we will ask for it first.",
      },
    ],
  },
  {
    id: "privacy-rights",
    part: PART_TWO,
    title: "12. Your rights",
    blocks: [
      {
        p: "Under the NDPA, individuals have the right to access their data, to have it corrected or deleted, to restrict or object to its use, to receive it in a common electronic format, to withdraw consent, and not to be subject only to automated decisions that significantly affect them.",
      },
      {
        p: "For the data we control, write to info@purpledove.net and mark your message for the Data Protection Officer. We respond within one month. If your request concerns data in a Customer’s PurpleDove account, such as an employee asking about their payroll record, we will pass it to the Customer, who decides how to respond.",
      },
    ],
  },
  {
    id: "privacy-children",
    part: PART_TWO,
    title: "13. Children",
    blocks: [
      {
        p: "PurpleDove ERP is a business product and is not directed at children. Customers who use the education module are responsible for obtaining any consent from parents or guardians that the NDPA requires for the data of children.",
      },
    ],
  },
  {
    id: "privacy-complaints",
    part: PART_TWO,
    title: "14. Complaints",
    blocks: [
      {
        p: "Please contact us first at info@purpledove.net so that we can try to fix the problem.",
      },
    ],
  },
  {
    id: "privacy-changes",
    part: PART_TWO,
    title: "15. Changes to this policy",
    blocks: [
      {
        p: "We may update this policy from time to time. The effective date shows the latest version. If we make a material change, we will tell you by email or in the platform before it takes effect.",
      },
    ],
  },
];

const CONTACT_TITLE = "16. Contact";

const tocItems = [
  ...sections.map((s) => ({ id: s.id, title: s.title, part: s.part })),
  { id: "contact", title: CONTACT_TITLE, part: PART_TWO },
];

// Brand purple used for accents and links
const ACCENT = "#A700AF";
const linkClass = "text-[#A700AF] underline underline-offset-4";

// Matches emails and mentions of the other policy documents
const LINKABLE =
  /([\w.+-]+@[\w-]+\.[\w.]+[\w]|Terms and Conditions|Service Level Agreement)/g;

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
        href={chunk.startsWith("Terms") ? "/terms" : "/sla"}
        className={linkClass}
      >
        {chunk}
      </Link>
    );
  });
}

// Bold the lead-in of a list item: "Virtual training."
function renderItem(text: string, mode?: "sentence") {
  let end = -1;
  if (mode === "sentence") {
    const i = text.indexOf(". ");
    if (i !== -1) end = i + 1;
  }
  if (end === -1) return linkify(text);
  return (
    <>
      <span className="font-medium text-black">{text.slice(0, end)}</span>
      {linkify(text.slice(end))}
    </>
  );
}

const Privacy = () => {
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
      <section className="flex flex-col items-start gap-6 pt-32 sm:pt-36 pb-12 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
        <p className="inline-block text-center rounded-full border border-[#F6E5F7] bg-[#F6E5F7]/40 px-4 py-1.5 text-sm font-medium">
          Last updated: {LAST_UPDATED} · Version {VERSION}
        </p>
        <h1>PurpleDove ERP Refund and Privacy Policy</h1>
        <Reveal3>
          <p className="max-w-2xl">
            When we refund payments, and how we handle personal data on
            purpledove.net and inside the PurpleDove ERP platform.
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
              {tocItems.map(({ id, title, part }, idx) => {
                const active = id === activeId;
                const newPart = idx === 0 || tocItems[idx - 1].part !== part;
                return (
                  <Fragment key={id}>
                    {newPart && (
                      <li
                        className={`pl-4 text-xs font-bold uppercase tracking-wide ${
                          idx === 0 ? "" : "pt-4"
                        }`}
                      >
                        {part}
                      </li>
                    )}
                    <li>
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
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Policy body */}
        <article className="min-w-0 max-w-3xl space-y-6 sm:space-y-12">
          <div className="space-y-4">
            {intro.map((t, i) => (
              <p key={i} className="text-base leading-relaxed">
                {t}
              </p>
            ))}
          </div>

          {sections.map((s, idx) => {
            const newPart = idx === 0 || sections[idx - 1].part !== s.part;
            return (
              <Fragment key={s.id}>
                {newPart && (
                  <h2 className="border-t border-[#F6E5F7] pt-10 sm:text-4xl">
                    {s.part}
                  </h2>
                )}
                <section id={s.id} className="scroll-mt-28 space-y-4">
                  <h3 className="">{s.title}</h3>
                  {s.blocks.map((b, i) => {
                    if ("p" in b)
                      return (
                        <p key={i} className="text-base leading-relaxed">
                          {linkify(b.p)}
                        </p>
                      );
                    if ("ul" in b)
                      return (
                        <ul
                          key={i}
                          className="list-disc space-y-2 pl-6 marker:text-[#A700AF]"
                        >
                          {b.ul.map((item, j) => (
                            <li
                              key={j}
                              className="text-gray-500 leading-relaxed"
                            >
                              {renderItem(item, b.lead)}
                            </li>
                          ))}
                        </ul>
                      );
                    return (
                      <div
                        key={i}
                        className="overflow-x-auto rounded-2xl border border-[#F6E5F7]"
                      >
                        <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-base">
                          <thead className="bg-[#F6E5F7]/40">
                            <tr>
                              {b.table.head.map((h) => (
                                <th
                                  key={h}
                                  scope="col"
                                  className="px-4 py-3 font-semibold"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.table.rows.map((row, r) => (
                              <tr key={r} className="border-t border-[#F6E5F7]">
                                {row.map((cell, c) => (
                                  <td
                                    key={c}
                                    className={`px-4 py-3 align-top leading-relaxed ${
                                      c === 0
                                        ? "font-medium text-black"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
                </section>
              </Fragment>
            );
          })}

          <section id="contact" className="scroll-mt-28 space-y-4">
            <h3 className="text-lg sm:text-2xl font-semibold">
              {CONTACT_TITLE}
            </h3>
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
                href="/terms"
                className="block rounded-2xl border border-[#F6E5F7] p-5 transition-colors hover:border-[#A700AF] focus-visible:border-[#A700AF] focus-visible:outline-none"
              >
                <span className="block text-sm">Previous</span>
                <span className="mt-1 block text-lg font-semibold">
                  Terms and Conditions
                </span>
                <span className="mt-1 block text-sm">
                  The agreement between PurpleDove and its customers.
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

export default Privacy;
