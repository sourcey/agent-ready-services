<h1 align="center">Agent-ready services, APIs and vendor funnels</h1>

<p align="center">
  <b>Open declarations. Independent Agent Readiness Report Cards.</b><br>
  <sub><em>Not every listed service is ready. Every published rating is evidence-bound.</em></sub>
</p>

<p align="center">
  <a href="https://sourcey.com/agent-readiness">Browse Report Cards</a> ·
  <a href="CONTRIBUTING.md">Add a service</a> ·
  <a href="https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml">Request an assessment</a> ·
  <a href="https://sourcey.com/claim">Claim a vendor</a> ·
  <a href="https://github.com/sourcey/agent-ready-services/issues/new?template=report-outdated.yml">Report outdated evidence</a>
</p>

---

Can an AI agent discover a service, understand the terms, create an account,
pay when required, receive access, and operate it successfully?

This repository is the open contribution front door for answering that
question. Each vendor file declares one real vendor and one or more exact
product funnels, their public entrypoints, and any relevant API, MCP, A2A,
authentication, commerce, or recovery interfaces.

Sourcey assesses those declarations independently. The resulting
[Agent Readiness Report Card](https://sourcey.com/agent-readiness) belongs to
one vendor, product, and funnel—not vaguely to an entire company.

## What a Report Card covers

| Stage | Questions the assessment can answer |
| --- | --- |
| Evaluate | Can an agent discover the service and understand its terms, eligibility, and price? |
| Sign up | Is there a stable, machine-operable path, or does autonomy stop at something such as CAPTCHA or phone verification? |
| Pay | When payment applies, is the price explicit and can an agent use the supported checkout and payment rails? |
| Provision | Is access activated and delivered predictably, with a machine-readable status and bounded delay? |
| Operate | Can an agent authenticate, use the service or API, understand limits and errors, and recover safely? |

The public card leads with the overall grade, the first stage that breaks
autonomy, and plain-language context—for example, “Blocked by CAPTCHA at sign
up.” Every conclusion remains tied to exact evidence, method, tested
entrypoint, and date. Unknown remains unknown. Not applicable must be
established by evidence.

## What lives here

Only source declarations live here:

- vendor identity and public sources;
- an exact product and acquisition or operating funnel;
- tested entrypoint candidates;
- declared interfaces and standards references; and
- a vendor or community request for independent assessment.

This repository does **not** contain observations, screenshots, private
evidence, stage outcomes, grades, freshness projections, generated indexes, or
release state. A merged declaration is an assessment trigger, not a rating or
endorsement. Sourcey's Catalog contracts, evidence pipeline, policy, and
release ledger remain the authority for every published Report Card and its
history.

## Add or improve a service

Start with [CONTRIBUTING.md](CONTRIBUTING.md). New identities are allocated
against Sourcey's existing vendor records before a declaration is merged, so
the same vendor has one stable identity across Startup Offers and Agent
Readiness.

After a declaration is merged, it enters private scope and evidence review.
Publication happens only when the evidence floor is met. A vendor can then
claim the exact profile, fix a blocker, submit a correction, or request a
rerun. A stronger released card creates a permanent, citable improvement
history without rewriting the original evidence.

## Licence

Vendor declarations are [CC BY 4.0](DATA-LICENSE.md). Documentation and
repository metadata are [MIT](LICENSE). Third-party names and marks remain the
property of their owners.

---

<p align="center">Know a service agents should be able to use? <a href="CONTRIBUTING.md">Declare the exact funnel.</a></p>
