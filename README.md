<h1 align="center">Agent-ready services</h1>

<p align="center">
  <b>Open listings of services and the job an agent should be able to do with each.</b><br>
  <sub><em>A listing is not a rating. Sourcey checks each service and publishes what it found.</em></sub>
</p>

<p align="center">
  <a href="https://sourcey.com/agent-readiness">Browse report cards</a> ·
  <a href="https://sourcey.com/agent-readiness.json">agent-readiness.json</a> ·
  <a href="https://sourcey.com/companies">Companies</a> ·
  <a href="CONTRIBUTING.md">Contribution guide</a> ·
  <a href="https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml">Request a listing</a> ·
  <a href="https://sourcey.com/support">Claim or correct a record</a> ·
  <a href="https://github.com/sourcey/agent-ready-services/issues/new?template=report-outdated.yml">Report outdated evidence</a>
</p>

---

Can an AI agent do a service's job on its own: create a repository, send a
text message, stream a completion that calls a tool?

This repository lists services for Sourcey to check. Each file describes one
company. Each listing in it names one product and one job from Sourcey's job
library, the public pages, endpoints and interfaces a person already knows
about, and the request that does the job on each interface. Sourcey sends that
request with no key (or, where the job has no public endpoint, reads it in the
vendor's OpenAPI document), follows where the answer leads, reads the vendor's
own machine-readable documents, and publishes what it found as an
[Agent Readiness report card](https://sourcey.com/agent-readiness) on the
company's [Sourcey record](https://sourcey.com/companies).

A card belongs to one company, one product and one job. GitHub REST API and
GitHub Enterprise Server are listed separately, each with the job "Create a
repository".

## What a report card shows

Sourcey follows the job along six steps:

| Step | What Sourcey checks |
| --- | --- |
| Discover | Can an agent find the job's interface, and a machine-readable description that covers the job, from the company's own documents (descriptors on its domains, OpenAPI, `llms.txt`, auth.md, documentation served as markdown)? |
| Authority | What does the job's request need: nothing, a payment inside it, a credential the agent obtains itself, your consent, a key a person hands over, or the vendor's decision? |
| Onboard | Can the agent register itself (auth.md, a sign-up API, its own OAuth client), does a person claim later what it made or turn its access on once, or does a person sign up for it? |
| Pay | How is the job paid for: nothing, within the request, a card a person puts on file at the vendor's checkout, or a balance a person tops up by hand? |
| Confirm | Can the agent tell a failure from a success by typed errors? |
| Sustain | Can the agent keep its access alive and revoke it without a person? |

**Job verified** appears only after a verified run completes the job. Finding
an interface is part of the assessment, not proof that the job was completed.

Every card carries one letter, from A+ to F, for the kind of person-step the
path needs: the heaviest kind anywhere on the path sets it, and A allows one
step (a listing that names no interface for the job is F):

| Letter | The path |
| --- | --- |
| A+ | An agent gets in, pays and recovers with no person: no account needed, payment within the request, or the agent registers itself. |
| A | One light, one-time human step: your consent to the agent's own OAuth client, or claiming the account later. |
| B+ | A person signs up and hands over a key. |
| B | A card on file. |
| C | Human steps that recur, such as manual top-ups or keys that expire with no renewal API, or checking results the agent cannot read. |
| D | Access depends on sales or approval. |
| F | No machine interface for the job. |

Every published card is graded from its listing and its probes. A
request the service did not answer (a timeout, a 5xx, a rate limit) sets no
fact, and the service is probed again; a document left unanswered on every
probe for at least an hour, with no answer between, is read as absent. A job
binding adds the verified tier. It says exactly how one
interface performs the job, and a run of it is proof, not the grade: it marks
the job verified and never changes a step or the letter. Only an account
holder runs one, with Sourcey's GitHub Action, which attests the result
(**Vendor-run, verified**); Sourcey never runs a job itself. The Action is not
yet published. Sourcey holds no keys for
any listed service.

## What lives here

Only listings live here:

- the company's shared Sourcey identity and the public sources the listing
  cites;
- each product and its job from the library, and the job's request on each
  interface that performs it;
- the participants, resources, endpoints and interfaces an agent would use,
  and how they relate;
- surface exclusions, which say why a contributor left a surface out;
- standard bindings and a source for every field;
- optional relations to existing Sourcey Offers;
- optional job bindings, for the verified tier.

Nothing else belongs here: no run records, captures, step outcomes, letters,
credentials, freshness data, generated indexes or release state. A merged
listing asks Sourcey to probe it. It is not a rating or an endorsement.
Sourcey's Catalog holds every published card and its history.

## Add or improve a service

[Submit a service](https://sourcey.com/submit?type=agent-readiness) on the web,
or follow [CONTRIBUTING.md](CONTRIBUTING.md) to submit a listing in a pull
request. Both paths use the same company listing rule. Sourcey checks every
company against its existing identity records
before a listing merges, so one company has one identity across all of
Sourcey.

After a listing merges, Sourcey reads the merged commit, runs discovery and the
probes, and publishes the card once every step of
a path is settled, or at once as F when the listing names no interface for
the job. A company can then claim its card, fix what stops the agent
and ask for a re-probe. Each published card keeps its history, so an
improvement never rewrites the earlier evidence.

## Licence

Listings are [CC BY 4.0](DATA-LICENSE.md). Documentation and repository
metadata are [MIT](LICENSE). Third-party names and marks remain the property
of their owners.

---

<p align="center">Know a service agents should be able to use? <a href="CONTRIBUTING.md">List it and its job.</a></p>
