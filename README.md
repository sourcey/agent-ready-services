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
library, and the public pages, endpoints and interfaces a person already knows
about. Sourcey runs the job against the service and publishes the result as
an [Agent Readiness report card](https://sourcey.com/agent-readiness) on the
company's [Sourcey record](https://sourcey.com/companies).

A card belongs to one company, one product and one job. GitHub REST API and
GitHub Enterprise Server are listed separately, each with the job "Create a
repository".

## What a report card shows

Sourcey follows the job along six steps:

| Step | What Sourcey checks |
| --- | --- |
| Discover | Can an agent find the service's endpoint from the service's own published descriptors? |
| Delegation | Can the agent get its own key or login, or does a person have to hand one over? |
| Pay | When the job costs money, can the agent pay on its own? |
| Job | Does the job itself complete through the service's interface? |
| Confirm | Does a bad request get a clear, typed error the agent can read? |
| Sustain | Can the agent renew and revoke its own key? |

The card gives a letter from A+ to F. A+ means the agent, or a decision you
made as its principal, did every step. Lower letters mean a person had to step
in: once at setup, to keep a key alive, or on every run. D and F mean the
service refused the agent's key or payment, or the job itself. The card also
gives an Onboard level from 1 (no sign-up needed) to 6 (talk to sales first)
for how an agent gets started, and it names every step that has not been
checked yet.

A service that is only listed has had no job run yet. Its card shows a dash,
says "The job has not run yet." and shows what discovery found. The job runs
once a job binding exists. A binding says exactly how one interface performs
the job, and it can come from the vendor or from Sourcey. The next run rates
the job.

## What lives here

Only listings live here:

- the company's shared Sourcey identity and the public sources the listing
  cites;
- each product and its job from the library;
- the participants, resources, endpoints and interfaces an agent would use,
  and how they relate;
- surface exclusions, which say why a contributor left a surface out;
- standard bindings and a source for every field;
- optional relations to existing Sourcey Offers;
- optional job bindings, for vendors who want their job run now.

Nothing else belongs here: no run records, captures, step outcomes, letters,
credentials, freshness data, generated indexes or release state. A merged
listing asks Sourcey to run the job. It is not a rating or an endorsement.
Sourcey's Catalog holds every published card and its history.

## Add or improve a service

[CONTRIBUTING.md](CONTRIBUTING.md) shows a listing first, then how to add a job
binding. If you know the service but not the file format, open a
[listing request](https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml)
instead. Sourcey checks every company against its existing identity records
before a listing merges, so one company has one identity across all of
Sourcey.

After a listing merges, Sourcey reads the merged commit and runs discovery,
then the job once a binding exists. A company can then claim its card, fix
what blocked the agent and ask for a rerun. Each published card keeps its
history, so an improvement never rewrites the earlier evidence.

## Licence

Listings are [CC BY 4.0](DATA-LICENSE.md). Documentation and repository
metadata are [MIT](LICENSE). Third-party names and marks remain the property
of their owners.

---

<p align="center">Know a service agents should be able to use? <a href="CONTRIBUTING.md">List it and its job.</a></p>
