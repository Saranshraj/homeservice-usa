# HomeService USA — 100-Article Content Plan

Created: 2026-07-24. Source: Google Search Console query/page data (Jun 8 - Jul 24, 2026) + Reddit research (r/HomeImprovement, r/hvacadvice, r/askaplumber, r/AskElectricians) via Xpoz.

## How to use this plan

This is the master roadmap. When told to "banao agle N blogs," pick the next unbuilt items **in order within a cluster**, prioritizing clusters marked Tier 1 first. Do not skip ahead across tiers unless told to. Mark each item done by moving it (or noting date) once published. Always check `src/content/blog/` for the current file list before writing, since the scheduler may add articles independently.

Every article must follow the existing content rules: empathic US-targeted tone, no emdash, answer-first opening paragraph, real cost tables, internal links to 2-4 related existing articles, Official Resources section, 1500-2500 words.

### Hard rule: no content cannibalization

Before writing any article, grep the existing `src/content/blog/*.md` files for the core keyword and subtopic you are about to cover. Two pages competing for the same search intent split ranking signal and hurt both instead of helping either. This has already happened once in this plan (flagged and fixed 2026-07-24: knob-and-tube wiring and 100-vs-200-amp panel upgrades were both already covered as subsections inside `house-rewiring-cost.md` and `electrical-panel-upgrade-cost.md`).

Rules going forward:
- If a topic is already covered as a full article OR as a substantial subsection inside an existing article, do not write a new page targeting the same query. Either skip it, or make the new angle genuinely different in search intent (identification/diagnosis vs. cost vs. comparison vs. decision-guide) and say so explicitly in the title and first paragraph.
- Prefer generic "How Much Does X Cost" titles only once per topic. A second article on a near-duplicate topic must lead with a different intent word (why, when, signs, vs., checklist, how to choose) not "cost."
- When in doubt, fold the new angle into the existing article as an added section instead of creating a new page.

## Why these clusters

- **Roofing, HVAC, Plumbing, Electrical, Painting** are already pulling impressions in Search Console (furnace, roof, exterior painting, AC warm air, electrical panel) and are the highest-CPC categories ($9.40-$14). Building topic clusters around them builds topical authority and lifts the whole cluster's rankings, not just one page.
- **Contractor Tips / Scam Protection** is a massive, recurring Reddit pain point (unpermitted work disputes, contractor holding money hostage, fake liens, painters damaging property, mid-job contractor collapse). High trust value, cheap to rank since less competition than pure cost-guides.
- **Home Warranty / Insurance** already ranks reasonably (home-warranty-worth-it is a top page). Expanding this cluster captures adjacent long-tail queries.
- **Foundation / Siding / Gutters / Windows-Doors / Garage** fill a structural gap; no articles exist yet despite being common repair categories.
- **Homeowner Basics / Seasonal / Financing** support first-time buyers and seasonal search spikes (winterizing already published and getting traction).
- **Pest Control** has only 1 article; expanding covers a full CPC-relevant category almost untouched.
- **Smart Home / Aging in Place** are lower search volume but very low competition and good for AdSense diversity.

---

## Progress log

- 2026-07-24: Scheduler resumed after being stalled since Jun 23. It independently published 12 articles covering: foundation-repair-cost (#67), siding-replacement-cost (#68), mold-remediation-cost (#74), garage-door-replacement-cost (#70), sewer-line-repair-cost (#27), termite-treatment-cost (#61), whole-home-generator-cost (#38/#98), attic-insulation-cost (#96), deck-building-cost (#93), heat-pump-installation-cost (related to #14), plus two off-plan bonus topics: solar-panel-installation-cost, hardwood-floor-installation-cost. These are marked DONE below with their actual published slug. Always check `src/content/blog/` before assigning new work since the scheduler runs independently and may pick items out of order.
- 2026-07-24: Cannibalization audit. Confirmed `house-rewiring-cost.md` already has a full "Knob-and-Tube Wiring" section and `electrical-panel-upgrade-cost.md` already covers 100-amp-vs-200-amp directly. Items #33 and #34 below were reframed to non-cost search intents (identification/safety, not pricing) to avoid competing with those existing pages. Item #68 (siding comparison) and #98/#38 (generator comparison) were also reframed since scheduler's generic cost guides now own the "cost" intent for those topics.

## TIER 1 — Roofing Cluster (10)

1. roof-repair-vs-replace — "How do you personally decide it's finally time to replace your roof instead of keep repairing" (real Reddit question, high engagement)
2. roof-leak-causes-and-fixes
3. how-long-does-a-roof-last-by-material
4. metal-roof-cost-vs-shingle
5. roof-inspection-cost-what-to-expect
6. hiring-a-roofer-vs-general-contractor (direct Reddit question)
7. roof-replacement-financing-options
8. hail-damage-roof-insurance-claim
9. flat-roof-repair-cost
10. gutter-and-roof-maintenance-checklist

## TIER 1 — HVAC Cluster (12)

11. furnace-not-turning-on-troubleshooting
12. how-to-choose-hvac-contractor (ties to "HVAC mafia" Reddit thread, pricing transparency angle)
13. ductless-mini-split-cost
14. ~~heat-pump-vs-furnace-cost-comparison~~ — DONE as `heat-pump-installation-cost.md` (2026-07-24, scheduler)
15. hvac-maintenance-plan-worth-it
16. thermostat-installation-cost-smart-vs-standard
17. air-duct-cleaning-cost-and-when-needed
18. furnace-vs-boiler-which-is-better
19. hvac-tonnage-sizing-guide
20. indoor-air-quality-improvement-cost
21. seer2-rating-explained-buyers-guide
22. emergency-hvac-repair-cost-weekend-vs-weekday

## TIER 1 — Plumbing Cluster (10)

23. low-water-pressure-causes-and-fixes (direct Reddit pain point: "Low Hot Water Pressure and Quote is Devastating")
24. sump-pump-installation-cost (direct Reddit question: is $6,500 quote fair)
25. septic-to-sewer-conversion-cost (direct Reddit topic)
26. clogged-drain-diy-vs-professional
27. ~~sewer-line-repair-cost~~ — DONE (2026-07-24, scheduler)
28. tankless-water-heater-installation-cost
29. pipe-leak-repair-cost
30. garbage-disposal-installation-cost
31. water-softener-cost-and-benefits
32. toilet-installation-and-replacement-cost

## TIER 1 — Electrical Cluster (8)

33. how-to-tell-if-your-house-has-knob-and-tube-wiring — identification/safety intent, NOT cost (cost already covered in house-rewiring-cost.md); direct Reddit topic: "Bought a 110 year old house, trying to replace knob and tube wiring"
34. do-you-need-a-200-amp-panel-signs-and-checklist — decision intent, NOT cost (cost already covered in electrical-panel-upgrade-cost.md); ties to Reddit permit controversy thread
35. electrical-inspection-cost-and-checklist
36. gfci-outlet-installation-cost
37. ev-charger-installation-cost
38. ~~generator-installation-cost-whole-house~~ — DUPLICATE, see whole-home-generator-cost.md (scheduler, 2026-07-24). Slot removed.
39. electrical-panel-labeling-safety-guide (direct Reddit topic)
40. outdoor-lighting-installation-cost

## TIER 1 — Painting Cluster (6)

41. how-often-should-you-repaint-house-exterior
42. cost-to-paint-a-fence
43. cabinet-painting-vs-refacing-cost
44. deck-staining-cost-and-how-often
45. lead-paint-testing-and-removal-cost
46. best-time-of-year-to-paint-house-exterior

---

## TIER 2 — Contractor Tips / Scam Protection Cluster (8)

47. red-flags-contractor-scam-checklist
48. what-to-do-if-contractor-doesnt-finish-job (direct Reddit topic: contractor closed business mid-job)
49. contractor-holding-permit-hostage-what-are-your-rights
50. how-to-read-a-contractor-quote-line-by-line
51. deposit-vs-full-payment-contractor-red-flags
52. small-claims-court-against-contractor-guide (direct Reddit topic: painter dispute, $4K settlement)
53. verifying-contractor-license-and-insurance-state-by-state
54. what-permits-do-you-actually-need-for-home-repairs (direct Reddit topic: Florida no-permit law + code enforcement violation thread)

## TIER 2 — Home Warranty / Insurance Cluster (6)

55. home-warranty-vs-homeowners-insurance-difference
56. how-to-file-a-home-warranty-claim
57. best-home-warranty-companies-comparison
58. what-does-homeowners-insurance-not-cover
59. water-damage-insurance-claim-denied-what-to-do
60. flood-insurance-do-you-need-it

## TIER 2 — Pest Control Cluster (6)

61. ~~termite-inspection-and-treatment-cost~~ — DONE as `termite-treatment-cost.md` (2026-07-24, scheduler)
62. how-to-get-rid-of-mice-in-house-safely
63. bed-bug-treatment-cost
64. mosquito-control-yard-treatment-cost
65. rodent-proofing-your-home-checklist
66. wasp-and-hornet-nest-removal-cost

## TIER 2 — Foundation / Siding / Gutters / Windows-Doors / Garage Cluster (8)

67. ~~foundation-crack-repair-cost~~ — DONE as `foundation-repair-cost.md` (2026-07-24, scheduler)
68. vinyl-vs-fiber-cement-vs-wood-siding-comparison — durability/pros-cons comparison intent, NOT cost (cost already covered in siding-replacement-cost.md, scheduler)
69. gutter-installation-and-replacement-cost
70. ~~garage-door-repair-vs-replacement-cost~~ — DONE as `garage-door-replacement-cost.md` (2026-07-24, scheduler)
71. front-door-replacement-cost
72. basement-waterproofing-cost
73. crawl-space-encapsulation-cost
74. ~~mold-remediation-cost-and-process~~ — DONE as `mold-remediation-cost.md` (2026-07-24, scheduler)

---

## TIER 3 — Homeowner Basics / Seasonal / Financing Cluster (10)

75. home-maintenance-checklist-by-season
76. how-to-budget-for-home-repairs-emergency-fund
77. home-equity-loan-vs-heloc-for-renovations
78. fha-203k-loan-for-home-repairs
79. spring-home-maintenance-checklist
80. fall-home-maintenance-checklist
81. how-to-prepare-your-home-for-hurricane-season
82. how-to-winterize-your-entire-house
83. diy-vs-hire-a-pro-decision-guide-by-project
84. energy-audit-cost-and-what-to-expect

## TIER 3 — Regional / State-Specific Cluster (3)

85. home-repair-costs-california-vs-national-average
86. home-repair-costs-texas-vs-national-average
87. home-repair-costs-florida-hurricane-considerations

## TIER 3 — Smart Home / Aging in Place Cluster (5)

88. smart-home-security-system-installation-cost
89. smart-lock-installation-cost-and-options
90. walk-in-tub-installation-cost
91. wheelchair-ramp-installation-cost
92. grab-bar-installation-cost-bathroom-safety

## TIER 3 — Additional Cost Guides / Problem Solvers (8)

93. ~~deck-building-cost-per-square-foot~~ — DONE as `deck-building-cost.md` (2026-07-24, scheduler)
94. fence-installation-cost-by-material
95. driveway-replacement-cost-concrete-vs-asphalt
96. ~~attic-insulation-cost-and-energy-savings~~ — DONE as `attic-insulation-cost.md` (2026-07-24, scheduler)
97. basement-finishing-cost
98. portable-generator-vs-whole-house-generator-which-is-right-for-you — comparison/decision intent, NOT cost (cost already covered in whole-home-generator-cost.md, scheduler)
99. why-is-my-electric-bill-so-high-troubleshooting
100. home-inspection-cost-what-it-covers

### Bonus / off-plan articles already published

- solar-panel-installation-cost.md (2026-07-24, scheduler)
- hardwood-floor-installation-cost.md (2026-07-24, scheduler)

---

## Notes for future sessions

- After publishing each batch, add internal links between the new article and 2-4 existing related articles (both directions where practical).
- Once 5+ articles exist in the same cluster, add a "related guides" cross-link block since that is when topical authority compounds.
- Re-run `npm run build`, commit, push after each batch. Push triggers GitHub Actions auto-deploy to GitHub Pages.
- Revisit this plan after 50 articles are published: pull fresh Search Console data and Reddit research to reprioritize Tier 3 based on what is actually driving impressions by then.
