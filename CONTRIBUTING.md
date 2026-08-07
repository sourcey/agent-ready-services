# Contributing

Contributions declare an exact vendor, product, and funnel for independent
assessment. They never author a Sourcey observation, readiness state, grade,
certification, or current Report Card.

## Before editing YAML

1. Search the open issues and pull requests for the vendor and product funnel.
2. Open an [assessment request](https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml).
3. Sourcey will confirm the stable `entity_id` and any exact related `offer_id`.
   Startup Offers and Agent Readiness use the same Entity authority, but remain
   separate catalogs. Do not invent or reuse IDs.
4. Use `authority_intent: vendor` only when Sourcey has proven control of the
   vendor domain. Otherwise use `community`.

Never include credentials, personal data, unpublished terms, authenticated
captures, or other private material. Public URLs are enough for a declaration;
Sourcey's evidence operations retain assessment evidence separately.

## File location and shape

A vendor lives at `vendors/{shard}/{slug}.yaml`, where `shard` is the first two
characters of the vendor slug. A file may contain several declarations for the
same vendor, but each declaration covers exactly one product and one funnel.

The executable schema is owned by the digest-pinned Sourcey Catalog Verifier.
This example illustrates the current authoring shape; it is not a duplicate
schema:

```yaml
schema_version: sourcey.agent-readiness-authoring/v1alpha1
vendor:
  entity_id: ent_01k00000000000000000000001
  slug: acme
  slug_aliases: []
  name: Acme
  domains:
    - value: acme.example
      role: primary
      valid_from: 2026-08-05T00:00:00.000Z
  category: devtools-other
  description: Acme makes a hosted database service.
  links:
    site: https://acme.example/
    pricing: https://acme.example/pricing
  sources:
    - source_id: source_acme_docs
      url: https://acme.example/docs
    - source_id: source_acme_signup
      url: https://acme.example/signup
declarations:
  - declaration_id: declaration_acme_db_self_serve
    scope:
      product:
        key: acme-db
        name: Acme DB
      funnel:
        key: self-serve
        name: Self-serve signup
    participants:
      - participant_id: acme
        roles: [subject, access_operator, operations_provider]
        identity:
          entity_id: ent_01k00000000000000000000001
    resources:
      - resource_id: documentation
        uri: https://acme.example/docs
        roles: [discovery, pricing, documentation, operations]
        operated_by_participant_id: acme
        standard_bindings: []
      - resource_id: signup
        uri: https://acme.example/signup
        roles: [sign_up]
        operated_by_participant_id: acme
        standard_bindings: []
    endpoints: []
    interfaces:
      - interface_id: public-api
        capabilities: [api]
        endpoint_ids: []
        resource_ids: [documentation]
        operated_by_participant_id: acme
        standard_bindings: []
    relations:
      - relation_id: docs-precede-signup
        kind: precedes
        from: { node_kind: resource, node_id: documentation }
        to: { node_kind: resource, node_id: signup }
    offer_relations:
      - offer_relation_proposal_id: acme-db-self-serve-offer
        offer_id: off_01k00000000000000000000001
        purpose: application_path
        applicable_stages: [evaluate, sign_up, pay, provision, operate]
    source_bindings:
      - source_binding_id: acme-declaration-scope
        source_id: source_acme_docs
        target: { node_kind: declaration, node_id: declaration_acme_db_self_serve }
        field_paths: [/scope/product/name, /scope/funnel/name]
      - source_binding_id: acme-participant
        source_id: source_acme_docs
        target: { node_kind: participant, node_id: acme }
        field_paths: [/roles, /identity]
      - source_binding_id: acme-resource-documentation
        source_id: source_acme_docs
        target: { node_kind: resource, node_id: documentation }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-resource-signup
        source_id: source_acme_signup
        target: { node_kind: resource, node_id: signup }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-interface-public-api
        source_id: source_acme_docs
        target: { node_kind: interface, node_id: public-api }
        field_paths: [/capabilities, /resource_ids, /operated_by_participant_id]
      - source_binding_id: acme-relation-docs-signup
        source_id: source_acme_signup
        target: { node_kind: relation, node_id: docs-precede-signup }
        field_paths: [/kind, /from, /to]
      - source_binding_id: acme-offer-relation
        source_id: source_acme_signup
        target: { node_kind: offer_relation, node_id: acme-db-self-serve-offer }
        field_paths: [/offer_id, /purpose, /applicable_stages]
    authority_intent: community
    declared_at: 2026-08-05T00:00:00.000Z
    assessment_reason: Assess whether an agent can evaluate, sign up for, provision, and operate Acme DB through the self-serve funnel.
```

Resources are retrievable documents or pages. Endpoints are callable network
locations. Interfaces are logical surfaces that reference those normalized
resources and endpoints. A URI appears only once in its node kind and carries
all applicable roles.

`standard_bindings` declare an exact standard and version implemented,
described, or used by a node. They do not contain Sourcey stages, signals, or
results. `source_bindings` name the exact public source supporting each material
authored field.

Offer relationships are separate from profile identity. Add an
`offer_relations` entry only when Sourcey confirmed the exact Offer. Omit the
entry for a readiness-only funnel; never create a synthetic Offer. Do not add a
field for a presumed result such as “ready,” “blocked,” “CAPTCHA,” a stage
outcome, an overall grade, or a remediation. Those are derived only from
admitted evidence and policy.

## Pull request rules

- Keep vendor YAML changes separate from documentation and workflow changes.
- Every source, resource, and endpoint URL must be public HTTPS material for
  the declared vendor or funnel.
- Keep stable declaration and graph IDs stable.
- Bind every material authored field to at least one exact source.
- Use real names in ordinary language; do not keyword-stuff fields.
- Sign every commit under the
  [Developer Certificate of Origin](https://developercertificate.org/).

```bash
git commit --signoff -m "data(readiness): declare acme db self-serve funnel"
```

The public `sourcey/validation` status parses only changed vendor blobs using the exact
digest-pinned Sourcey Catalog Verifier and confirms their identity-derived
paths and dependency closure. It does not execute pull-request code. A green
status proves declaration shape, not readiness.

For an exact local preflight from a checkout with `origin/main` fetched:

```bash
base="$(git merge-base HEAD origin/main)"
digest="$(<.github/sourcey-catalog-verifier.sha256)"
work="$(mktemp -d)"
archive="sourcey-catalog-verifier-sha256-${digest}.tar.gz"
origin="https://artifacts.sourcey.com/catalog/code/catalog-verifier/sha256-${digest}"
curl --fail --silent --show-error "${origin}/${archive}" --output "${work}/${archive}"
curl --fail --silent --show-error "${origin}/${archive}.sha256" --output "${work}/${archive}.sha256"
(cd "${work}" && shasum -a 256 --check "${archive}.sha256")
mkdir "${work}/verifier"
tar -xzf "${work}/${archive}" --strip-components=1 -C "${work}/verifier"
node "${work}/verifier/sourcey-catalog-verify.js" validate-readiness-change \
  --repository "$PWD" --base "$base" --head HEAD
rm -rf "${work}"
```

After merge, Sourcey retains the exact repository, commit, path, Git blob OID,
and SHA-256 blob digest before any private assessment begins. Identity,
authority, evidence coverage, human review, and release admission remain
separate gates.
