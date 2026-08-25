# Contributing

Contributions declare an exact Entity, product, and funnel for independent
assessment. They never author a Sourcey observation, readiness state, grade,
certification, or current Report Card.

## Choose the smallest honest path

1. **Request an assessment** when the Entity is new to Sourcey, you know the
   service but not its complete graph, or you want Sourcey to research it.
   Open the [assessment request](https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml).
2. **Author canonical YAML** for declarations with third-party
   operators, several interfaces, several standards, explicit relations, or
   exact Offer relationships. The complete example below is the review bar.

The form, API, MCP tool, and manual path all produce the same sole durable
`sourcey.agent-readiness-authoring/v1alpha1` document. There is no shorthand
format or hidden conversion schema.

## Before editing YAML

1. Search the open issues and pull requests for the Entity and product funnel.
2. For manual YAML, open an [assessment request](https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml)
   before editing so identity and scope can be checked.
3. Sourcey will confirm the stable `entity_id`. Startup Offers and Agent
   Readiness use the same Entity authority, but remain separate catalogs. Do
   not copy a credit or deal into the readiness declaration. An optional Offer
   relation is proposed only when Sourcey has confirmed a real downstream
   relationship; it never scopes or identifies the profile.
4. Use `authority_intent: entity` only when Sourcey has proven control of the
   Entity's authoritative domain. Otherwise use `community`.

Never include credentials, personal data, unpublished terms, authenticated
captures, or other private material. Public URLs are enough for a declaration;
Sourcey's evidence operations retain assessment evidence separately.

## File location and shape

An Entity lives at `entities/{shard}/{slug}.yaml`, where `shard` is the first two
characters of the Entity slug. A file may contain several declarations for the
same Entity, but each declaration covers exactly one product and one funnel.

The executable schema is owned by the digest-pinned Sourcey Catalog Verifier.
This example illustrates the current authoring shape; it is not a duplicate
schema:

```yaml
schema_version: sourcey.agent-readiness-authoring/v1alpha1
entity:
  entity_id: ent_01k00000000000000000000001
  slug: acme
  slug_aliases: []
  name: Acme
  domains:
    - value: acme.example
      role: primary
      valid_from: 2026-08-05T00:00:00.000Z
  category: devtools-other
sources:
  - source_id: source_acme_docs
    url: https://acme.example/docs
  - source_id: source_acme_terms
    url: https://acme.example/terms
  - source_id: source_acme_pricing
    url: https://acme.example/pricing
  - source_id: source_acme_signup
    url: https://acme.example/signup
  - source_id: source_acme_billing
    url: https://acme.example/docs/billing
declarations:
  - declaration_id: declaration_acme_db_api_lifecycle
    scope:
      product:
        key: acme-db
        name: Acme DB
      funnel:
        key: api-service-lifecycle
        name: API service lifecycle
    assessment_targets:
      - target_id: manage-databases
        name: Create, inspect, and recover Acme databases
        interface_ids: [public-api]
    participants:
      - participant_id: acme
        roles: [subject, access_operator, operations_provider]
        identity:
          entity_id: ent_01k00000000000000000000001
    resources:
      - resource_id: documentation
        uri: https://acme.example/docs
        roles: [discovery, provisioning, operations, recovery, authentication, status, documentation]
        operated_by_participant_id: acme
        standard_bindings: []
      - resource_id: terms
        uri: https://acme.example/terms
        roles: [terms]
        operated_by_participant_id: acme
        standard_bindings: []
      - resource_id: pricing
        uri: https://acme.example/pricing
        roles: [pricing]
        operated_by_participant_id: acme
        standard_bindings: []
      - resource_id: signup
        uri: https://acme.example/signup
        roles: [access]
        operated_by_participant_id: acme
        standard_bindings: []
      - resource_id: billing
        uri: https://acme.example/docs/billing
        roles: [checkout, documentation]
        operated_by_participant_id: acme
        standard_bindings: []
    endpoints: []
    interfaces:
      - interface_id: public-api
        modality: network_api
        functions: [service_operation]
        endpoint_ids: []
        resource_ids: [documentation]
        operated_by_participant_id: acme
        standard_bindings: []
      - interface_id: api-authentication
        modality: network_api
        functions: [authentication]
        endpoint_ids: []
        resource_ids: [documentation]
        operated_by_participant_id: acme
        standard_bindings: []
    relations:
      - relation_id: docs-precede-signup
        kind: precedes
        from: { node_kind: resource, node_id: documentation }
        to: { node_kind: resource, node_id: signup }
      - relation_id: authentication-authenticates-api
        kind: authenticates
        from: { node_kind: interface, node_id: api-authentication }
        to: { node_kind: interface, node_id: public-api }
    offer_relations: []
    source_bindings:
      - source_binding_id: acme-assessment-target
        source_id: source_acme_docs
        target: { node_kind: assessment_target, node_id: manage-databases }
        field_paths: [/name, /interface_ids]
      - source_binding_id: acme-declaration-scope
        source_id: source_acme_docs
        target: { node_kind: declaration, node_id: declaration_acme_db_api_lifecycle }
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
      - source_binding_id: acme-resource-terms
        source_id: source_acme_terms
        target: { node_kind: resource, node_id: terms }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-resource-pricing
        source_id: source_acme_pricing
        target: { node_kind: resource, node_id: pricing }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-resource-billing
        source_id: source_acme_billing
        target: { node_kind: resource, node_id: billing }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-interface-public-api
        source_id: source_acme_docs
        target: { node_kind: interface, node_id: public-api }
        field_paths: [/modality, /functions, /resource_ids, /operated_by_participant_id]
      - source_binding_id: acme-interface-authentication
        source_id: source_acme_docs
        target: { node_kind: interface, node_id: api-authentication }
        field_paths: [/modality, /functions, /resource_ids, /operated_by_participant_id]
      - source_binding_id: acme-relation-docs-signup
        source_id: source_acme_signup
        target: { node_kind: relation, node_id: docs-precede-signup }
        field_paths: [/kind, /from, /to]
      - source_binding_id: acme-relation-authentication
        source_id: source_acme_docs
        target: { node_kind: relation, node_id: authentication-authenticates-api }
        field_paths: [/kind, /from, /to]
      - source_binding_id: acme-exclusion-eligibility
        source_id: source_acme_terms
        target: { node_kind: surface_exclusion, node_id: no-separate-eligibility-resource }
        field_paths: [/role, /rationale]
    surface_exclusions:
      - exclusion_id: no-separate-eligibility-resource
        role: eligibility
        rationale: Applicable access conditions are documented with the service terms; no separate eligibility resource is declared.
    authority_intent: community
    declared_at: 2026-08-05T00:00:00.000Z
```

Resources are retrievable documents or pages. Endpoints are callable network
locations. Interfaces are logical surfaces that reference those normalized
resources and endpoints. Assessment targets name the essential useful outcomes
the Report Card must evaluate and list alternative interfaces that can satisfy
them. A URI appears only once in its node kind and carries only roles the exact
source performs or documents.

Interface `modality` describes how it is used (`web_application`,
`network_api`, `command_line`, `software_library`, `tool_server`, or
`agent_service`). Interface `functions` describe what it does
(`service_operation`, `authentication`, `commerce`, `events`, or `recovery`).
Protocol names never enter either field.

`standard_bindings` declare an exact standard and version implemented,
described, or used by a node. They do not contain Sourcey stages, signals, or
results, and their presence never proves readiness. `source_bindings` name the
exact public source supporting each material authored field. A
`surface_exclusion` explains why a contributor did not declare a surface role;
it is planning input, not a Not applicable result.

Offer relationships are optional downstream joins, separate from profile
identity and assessment scope. Most service declarations should use
`offer_relations: []`. Add a relation only when Sourcey confirmed the exact
same-Entity Offer and the precise stage relationship; never create a synthetic
Offer or use a credit application as the service funnel. Do not add a field for
a presumed result such as “ready,” “blocked,” “CAPTCHA,” a stage outcome, an
overall grade, or a remediation. Those are derived only from admitted evidence
and policy.

## Pull request rules

- Keep Entity YAML changes separate from documentation and workflow changes.
- Every source, resource, and endpoint URL must be public HTTPS material for
  the declared Entity or funnel.
- Keep stable declaration and graph IDs stable.
- Bind every material authored field to at least one exact source.
- Use real names in ordinary language; do not keyword-stuff fields.
- Sign every commit under the
  [Developer Certificate of Origin](https://developercertificate.org/).

```bash
git commit --signoff -m "data(readiness): declare acme db self-serve funnel"
```

The public `sourcey/validation` status parses only changed Entity blobs using the exact
digest-pinned Sourcey Catalog Verifier and confirms their identity-derived
paths and dependency closure. It does not execute pull-request code. A green
status proves declaration shape, not readiness.
Validation starts automatically when a pull request is opened or updated; contributors do not
need a maintainer to approve the workflow before seeing the result.

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
