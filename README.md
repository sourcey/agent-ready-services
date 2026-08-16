<h1 align="center">Agent-ready services, APIs and vendor funnels</h1>

<p align="center">
  <b>Open declarations. Independent Agent Readiness Report Cards.</b><br>
  <sub><em>Not every listed service is ready. Every published rating is evidence-bound.</em></sub>
</p>

<p align="center">
  <a href="https://sourcey.com/agent-readiness">Browse Report Cards</a> ·
  <a href="https://sourcey.com/agent-readiness/submit">Declare a service</a> ·
  <a href="CONTRIBUTING.md">Contribution guide</a> ·
  <a href="https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml">Request an assessment</a> ·
  <a href="https://sourcey.com/claim">Claim a vendor</a> ·
  <a href="https://github.com/sourcey/agent-ready-services/issues/new?template=report-outdated.yml">Report outdated evidence</a>
</p>

---

Can an AI agent discover a service, understand the commitment, obtain
authorized access, pay when required, provision what it needs, and use the
service safely?

This repository is the open contribution front door for answering that
question. Each vendor file declares one real vendor and one or more exact
product funnels, essential service targets, public resources, callable
endpoints, actors, interfaces, and exact standard bindings.

Sourcey assesses those declarations independently. The resulting
[Agent Readiness Report Card](https://sourcey.com/agent-readiness) belongs to
one vendor, product, and funnel—not vaguely to an entire company.

## What a Report Card covers

| Stage | Questions the assessment can answer |
| --- | --- |
| Evaluate | Can an agent find the exact service and decide its terms, eligibility, and cost from stable readable material? |
| Sign up | Can an agent begin access, operate the controls, cross any CAPTCHA or phone boundary lawfully, and obtain scoped identity authority? |
| Pay | When payment applies, is the commitment disclosed and can checkout and payment authorization complete through safe, resumable boundaries? |
| Provision | Can provisioning start, deliver usable access material, and expose a bounded, reconcilable result? |
| Operate | Can an agent use every essential service target with scoped authentication, stable operation and failure contracts, and supported credential recovery? |

The public card leads with the overall grade, the primary supported finding,
and plain-language context—for example, “Blocked by CAPTCHA at sign up.” It
shows each stage and the specific Ready, Limited, Blocked, or Not applicable
findings that compose the grade. Every conclusion remains tied to exact
evidence, method, tested surface, and date. Missing, failed, stale, or
contradictory evidence makes a profile unrated; Not applicable must itself be
established by evidence.

## What lives here

Only source declarations live here:

- vendor identity and public sources;
- an exact product and service-access/operating funnel with essential targets;
- declared participants, resources, endpoints, interfaces, and their relations;
- source-bound surface exclusions that explain an omitted assessment surface
  without claiming a result;
- exact standard/version bindings and field-level source bindings;
- optional explicit relations to existing Sourcey Offers; and
- a vendor or community request for independent assessment.

This repository does **not** contain observations, screenshots, private
evidence, stage outcomes, grades, freshness projections, generated indexes, or
release state. A merged declaration is an assessment trigger, not a rating or
endorsement. Sourcey's Catalog contracts, evidence pipeline, policy, and
release ledger remain the authority for every published Report Card and its
history.

## Add or improve a service

Use the [guided Sourcey declaration form](https://sourcey.com/agent-readiness/submit)
when the vendor operates one straightforward product funnel. It resolves the
existing Sourcey Entity, validates every assessment surface against the current
policy, shows the exact canonical YAML, and creates one review pull request.
Use [CONTRIBUTING.md](CONTRIBUTING.md) for a request-only path or advanced
multi-participant and multi-interface declarations. New identities are
allocated against Sourcey's existing vendor records before a declaration is
merged, so the same vendor has one stable identity across catalogs without
making an Offer part of a readiness profile.

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
