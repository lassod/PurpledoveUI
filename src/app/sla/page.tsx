"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "../components/landingPage/Header";
import {
  FOOTER_CONTENT,
  navContent,
} from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { Reveal3 } from "../components/animations/Text";
import WhatsApp from "../components/WhatsApp";

type Block =
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } };
type Section = { id: string; title: string; blocks: Block[] };

const LAST_UPDATED = "November 2026";
const VERSION = "1.2";

const intro = [
  "This Service Level Agreement (the “SLA”) explains the service standards that Lassod Consulting Ltd, trading as PurpleDove ERP (“PurpleDove”, “we”, “us” or “our”), commits to for customers who subscribe to PurpleDove ERP (“you”). It forms part of the PurpleDove ERP Terms and Conditions. Words with capital letters have the meaning given in those Terms.",
];

const sections: Section[] = [
  {
    id: "uptime",
    title: "1. Uptime commitment",
    blocks: [
      {
        p: "1.1 We aim to keep the Platform available for at least 99.5 percent of the time in each calendar month (the “Availability Target”). Availability is measured by us at the point where the Platform connects to the public internet, and it covers the core Platform and the apps in your plan.",
      },
      {
        p: "1.2 A 99.5 percent target in a 30 day month allows about 3 hours and 36 minutes of unplanned downtime.",
      },
      {
        p: "1.3 The Platform is treated as unavailable when Users cannot log in or cannot use the main functions of the apps in your plan, because of a fault in the hosting environment or the Platform that we are responsible for. A slow response, or a problem with only one feature, is handled as a support issue under section 4 and is not counted as downtime unless the feature is completely unusable.",
      },
      {
        p: "1.4 Availability for a month is worked out like this: the total minutes in the month, less the minutes of unplanned downtime and the minutes of excluded downtime, divided by the total minutes in the month less the minutes of excluded downtime, and the result is shown as a percentage.",
      },
    ],
  },
  {
    id: "planned-maintenance",
    title: "2. Planned maintenance",
    blocks: [
      {
        p: "We need to carry out maintenance from time to time to keep the Platform secure and up to date. Planned maintenance is done outside normal business hours in Nigeria, normally between 11:00 pm and 5:00 am West Africa Time. We will give you at least 48 hours’ notice by email to your nominated contact person. Planned maintenance is not counted as downtime. Unless you agree, planned maintenance will not take more than 8 hours in a calendar month.",
      },
      {
        p: "We may need to carry out emergency maintenance to deal with a security threat or a serious fault. We will give you as much notice as we can and will tell you when the work is complete. Emergency maintenance counts as downtime only if it goes beyond what is reasonably needed.",
      },
    ],
  },
  {
    id: "support-hours",
    title: "3. Support hours and how to contact us",
    blocks: [
      {
        p: "3.1 Standard support hours are 9:00 am to 5:00 pm West Africa Time, Monday to Friday, except public holidays in Lagos, Nigeria. Where your Order Form includes premium support, the hours stated in it apply.",
      },
      {
        p: "3.2 Please report issues in writing, by email to info@purpledove.net, or to the support contact named during your onboarding. For urgent matters, you may also call 07064699173 during support hours. A report should include your organisation’s name, the name of the User who is affected, the module in which the issue happened, a description of what you saw, the time it started, and any screenshots or error messages.",
      },
      {
        p: "3.3 Only your nominated contact person and any additional contacts that you name may open support requests. This helps us to protect your data.",
      },
      {
        p: "3.4 Your support request is logged when we confirm it by email. Response times are counted from that moment and only during support hours.",
      },
    ],
  },
  {
    id: "support-priorities",
    title: "4. Support priorities and response times",
    blocks: [
      {
        p: "When you report an issue, we assign a priority and tell you what it is. If you disagree, we will review it with you.",
      },
      {
        table: {
          head: [
            "Priority",
            "Description",
            "First response",
            "Target workaround or fix",
          ],
          rows: [
            [
              "1 Critical",
              "The Platform is not available, or a core function such as login, invoicing, payments or payroll cannot be used by most Users, or there is a suspected security breach or loss of data.",
              "Within 2 business hours",
              "Updates every 4 business hours. Workaround or fix within 1 business day",
            ],
            [
              "2 High",
              "An important function is not working properly or is very slow, and there is no easy workaround.",
              "Within 4 business hours",
              "Within 2 business days",
            ],
            [
              "3 Medium",
              "A function is not working as expected, but a workaround exists or most Users can carry on working.",
              "Within 1 business day",
              "Within 5 business days",
            ],
            [
              "4 Low",
              "A question about how to use the Platform, a cosmetic problem or a request for a new feature.",
              "Within 2 business days",
              "Answer within 5 business days. Feature requests are reviewed for a future release",
            ],
          ],
        },
      },
      {
        p: "A “business hour” and a “business day” mean time within the support hours. The first response means that a qualified member of our team has acknowledged the issue and started to work on it. Fix times are targets that start once we have the information we need from you, and we will tell you promptly if we think one will be missed.",
      },
    ],
  },
  {
    id: "nrs-support",
    title: "5. NRS electronic invoicing support",
    blocks: [
      {
        p: "If you use the PurpleDove NRS electronic invoicing app, we will handle problems that arise from the Platform side of the connection under the priorities in section 4. A failure to submit an invoice that is caused by the app, or by how it is set up, is treated as Priority 2, or as Priority 1 if no invoices at all can be submitted. If the problem is caused by the NRS Service being slow, unavailable or rejecting data, we will help you to identify the cause and to prepare any request you need to make to the NRS, but the NRS Service is outside our control. When the NRS changes its technical requirements, we will make reasonable efforts to update the app within a reasonable time, and we will tell you about the change and the timeline. Downtime of the NRS Service does not count against the Availability Target.",
      },
    ],
  },
  {
    id: "wallet",
    title: "6. Wallet and payment solution",
    blocks: [
      {
        p: "The wallet and payment solution depends on a licensed financial institution or payment service provider and on banking networks. We will respond to issues with it as set out in section 4, but we cannot control the availability of the partner or of the banks, and we do not count their downtime against the Availability Target. Disputes about individual transactions are handled under the partner’s rules and the law, and we will help you to log them with the partner.",
      },
    ],
  },
  {
    id: "backups",
    title: "7. Backups and data recovery",
    blocks: [
      {
        p: "7.1 We take a full backup of the Customer Data every day. We keep daily backups for at least 30 days and weekly backups for 8 weeks.",
      },
      {
        p: "7.2 We test the restoration of backups at least once every 6 months.",
      },
      {
        p: "7.3 If the live system fails, we aim to restore the Platform and your latest backup within 12 hours for a problem affecting one server, and within 24 hours for a disaster that affects a whole data centre. You may lose up to 24 hours of work, which is the interval between backups (the recovery point objective). These recovery times are targets, and they depend on events outside our control.",
      },
      {
        p: "7.4 You can export your data from the Platform at any time, using the export and reporting tools. We recommend that you do this regularly for records that you must keep by law.",
      },
      {
        p: "7.5 If you ask us to restore data that you deleted by mistake, we will try to help from a backup within 5 business days. We may charge a reasonable fee if the request is not caused by a fault on our side.",
      },
    ],
  },
  {
    id: "security",
    title: "8. Security",
    blocks: [
      {
        p: "We protect the Platform with role based access control, audit trails, encrypted connections, regular updates and monitoring, and we limit staff access to Customer Data to those who need it for their work. If we confirm a breach that affects your Customer Data, we will notify you within 48 hours so that you can meet your duty to report to the Nigeria Data Protection Commission within 72 hours under the Nigeria Data Protection Act 2023. Our Refund and Privacy Policy gives more detail.",
      },
    ],
  },
  {
    id: "exclusions",
    title: "9. What is not counted as downtime",
    blocks: [
      {
        p: "The Availability Target and the support commitments do not cover, and downtime does not include, a failure or delay caused by:",
      },
      {
        ul: [
          "planned maintenance carried out in line with section 2;",
          "your own equipment, network, internet connection or browser, or the failure of your internet provider;",
          "your actions or omissions, or those of your Users, including incorrect settings, bad data, or use of the Platform in breach of the Terms;",
          "changes or code that were not made by us, including customisations made by someone else;",
          "the NRS Service, a licensed wallet partner, banks, telecommunications networks, power supply or other third party systems that we do not control;",
          "a cyber attack or other event that could not reasonably have been prevented by the security measures described in section 8;",
          "suspension of your account under the Terms, for example for non payment or misuse;",
          "an event of force majeure as described in the Terms; or",
          "trial, test or training environments, unless we have agreed otherwise in writing.",
        ],
      },
    ],
  },
  {
    id: "service-credits",
    title: "10. Service credits",
    blocks: [
      {
        p: "10.1 If the actual availability in a calendar month is below the Availability Target, you may claim a service credit. The credit is a percentage of one twelfth of the annual subscription fee that you paid for the Platform, as shown in this table.",
      },
      {
        table: {
          head: ["Availability in the month", "Service credit"],
          rows: [
            ["Below 99.5 percent but at least 99.0 percent", "3 percent"],
            ["Below 99.0 percent but at least 98.0 percent", "5 percent"],
            ["Below 98.0 percent but at least 95.0 percent", "10 percent"],
          ],
        },
      },
      {
        p: "10.2 You must make a written claim to info@purpledove.net within 30 days after the end of the month in which the shortfall happened. Please state the dates and times and describe what happened. We will check our records and reply within 10 business days.",
      },
      {
        p: "10.3 Approved credits are applied against your next renewal invoice or, if you are not renewing, paid to you after the end of the term. Credits have no other cash value. The total credit for all shortfalls in one month cannot be more than 10 percent of one twelfth of your annual subscription fee.",
      },
      {
        p: "10.4 Service credits are your only remedy for failing to meet the Availability Target. However, if availability falls below 95 percent in any three months of a rolling period of six months, you may end the subscription by written notice within 30 days and we will refund the fees for the full months that remain in the term, in line with clause 3 of our Refund Policy.",
      },
    ],
  },
  {
    id: "responsibilities",
    title: "11. Your responsibilities",
    blocks: [
      { p: "For us to meet this SLA, you agree to:" },
      {
        ul: [
          "keep your nominated contact person details up to date and use the support channels in section 3;",
          "give us the information we ask for, and a knowledgeable person who can work with us on Priority 1 and Priority 2 issues;",
          "keep your Users’ login details secure and tell us at once of any suspected unauthorised use;",
          "use supported browsers and devices, and keep your own network and equipment in good working order;",
          "check your reports, invoices and payroll results before you rely on them; and",
          "export and keep the records that the law requires you to keep.",
        ],
      },
    ],
  },
  {
    id: "escalation",
    title: "12. Escalation",
    blocks: [
      {
        p: "If you are not satisfied with how an issue is being handled, you may escalate it in this order.",
      },
      {
        table: {
          head: ["Level", "Contact", "When to escalate"],
          rows: [
            ["1", "Level 1 support, info@purpledove.net", "At any time"],
            [
              "2",
              "Level 2 support, michael.akeni@lassod.com",
              "If a target is missed, or the issue is not resolved 2 business days after level 1",
            ],
          ],
        },
      },
      { p: "We will acknowledge an escalation within 1 business day." },
    ],
  },
  {
    id: "changes",
    title: "13. Changes to this SLA",
    blocks: [
      {
        p: "We may improve or update this SLA from time to time. We will give you at least 30 days’ notice of a change that reduces the service levels, and the change will not apply to you before your next renewal unless you agree.",
      },
    ],
  },
];

const tocItems = [
  ...sections.map((s) => ({ id: s.id, title: s.title })),
  { id: "contact", title: "14. Contact" },
];

// Brand purple used for accents and links
const ACCENT = "#A700AF";
const linkClass = "text-[#A700AF] underline underline-offset-4";

// Matches emails, the support phone number and mentions of the other policy documents
const LINKABLE =
  /([\w.+-]+@[\w-]+\.[\w.]+[\w]|0\d{10}|Refund and Privacy Policy|Refund Policy|Terms and Conditions)/g;

// Emails become mailto links, the phone number a tel link, policy names link to their pages
function linkify(text: string) {
  return text.split(LINKABLE).map((chunk, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{chunk}</Fragment>;
    if (chunk.includes("@"))
      return (
        <a key={i} href={`mailto:${chunk}`} className={linkClass}>
          {chunk}
        </a>
      );
    if (/^\d+$/.test(chunk))
      return (
        <a key={i} href={`tel:${chunk}`} className={linkClass}>
          {chunk}
        </a>
      );
    return (
      <Link
        key={i}
        href={chunk.startsWith("Terms") ? "/terms" : "/privacy"}
        className={linkClass}
      >
        {chunk}
      </Link>
    );
  });
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

const SLA = () => {
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
        <h1>PurpleDove ERP Service Level Agreement</h1>
        <Reveal3>
          <p className="max-w-2xl">
            Our commitments on availability, support, backups and recovery for
            organisations that subscribe to PurpleDove ERP.
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

        {/* SLA body */}
        <article className="min-w-0 max-w-3xl space-y-6 sm:space-y-12">
          <div className="space-y-4">
            {intro.map((t, i) => (
              <p key={i} className="text-base leading-relaxed">
                {linkify(t)}
              </p>
            ))}
          </div>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold">{s.title}</h3>
              {s.blocks.map((b, i) => {
                if ("p" in b)
                  return (
                    <p key={i} className="text-base leading-relaxed">
                      {renderParagraph(b.p)}
                    </p>
                  );
                if ("ul" in b)
                  return (
                    <ul
                      key={i}
                      className="list-disc space-y-2 pl-6 marker:text-[#A700AF]"
                    >
                      {b.ul.map((item, j) => (
                        <li key={j} className="text-gray-500 leading-relaxed">
                          {linkify(item)}
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
                                {linkify(cell)}
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
          ))}

          <section id="contact" className="scroll-mt-28 space-y-4">
            <h3 className="text-lg sm:text-2xl font-semibold">14. Contact</h3>
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
                <span className="block text-sm">Previous</span>
                <span className="mt-1 block text-lg font-semibold">
                  Refund and Privacy Policy
                </span>
                <span className="mt-1 block text-sm">
                  When we refund fees and how we handle personal data.
                </span>
              </Link>
              <Link
                href="/terms"
                className="block rounded-2xl border border-[#F6E5F7] p-5 transition-colors hover:border-[#A700AF] focus-visible:border-[#A700AF] focus-visible:outline-none"
              >
                <span className="block text-sm">Also read</span>
                <span className="mt-1 block text-lg font-semibold">
                  Terms and Conditions
                </span>
                <span className="mt-1 block text-sm">
                  The agreement between PurpleDove and its customers.
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

      <Footer footerData={FOOTER_CONTENT} />
      <WhatsApp />
    </div>
  );
};

export default SLA;
