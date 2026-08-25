# Repository boundary

This repository is the public declaration and acquisition surface for Sourcey
Agent Readiness. It is not an application, runtime, package, schema owner,
scanner, evidence store, grade authority, release store, or current-data
mirror.

The private Sourcey integration workspace mounts this repository as a pinned
authoring submodule. That placement does not make it a runtime dependency or
truth store. Sourcey and Agent Ready Services brand publications consume the
same private brand-neutral fact/dependency projection; generated content,
scores, and assessment outcomes never enter this repository.

Allowed contents are Entity declaration YAML, documentation, legal files,
CODEOWNERS, pull-request and issue guidance, and minimal GitHub workflow YAML
that invokes the digest-pinned Sourcey Catalog Verifier.

Do not add executable product code, package manifests, copied schemas, tests,
captures, observations, stage outcomes, grades, certifications, current
profiles, generated indexes, release artifacts, operational queues, or
compatibility readers. Do not infer an Entity or Offer relation from a name or
URL. Sourcey allocates exact identities and admits the exact merged blob before
assessment.

The only executable contract authority is Sourcey's Catalog. A declaration is
an assessment trigger and evidence source, never proof that a service is ready.
Git merge activates an exact admitted Git declaration. Authenticated forms and
governed operator skills may use the same Catalog-owned proposal/admission lane
without a synthetic pull request or any executable code here.

The public `sourcey/validation` status must start automatically for every
opened or updated declaration pull request. It runs this repository's exact
digest-pinned changed-closure verifier and DCO check without executing
pull-request code. `sourcey/admission` remains Sourcey's separate private
evidence gate.
