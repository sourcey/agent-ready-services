# Contributing

Contributions declare an exact vendor, product, and funnel for independent
assessment. They never author a Sourcey observation, readiness state, grade,
certification, or current Report Card.

## Before editing YAML

1. Search the open issues and pull requests for the vendor and product funnel.
2. Open an [assessment request](https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml).
3. Sourcey will confirm or allocate the stable `entity_id`, any related
   `offer_id`, and the exact base revision digest(s). Startup Offers and Agent
   Readiness use the same vendor identity; do not invent or reuse IDs.
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
      offer_id: off_01k00000000000000000000001
    base:
      entity_revision_digest: sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      offer_revision_digest: sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    entrypoints:
      - entrypoint_id: pricing
        role: pricing
        uri: https://acme.example/pricing
      - entrypoint_id: signup
        role: sign_up
        uri: https://acme.example/signup
      - entrypoint_id: operations
        role: operations
        uri: https://acme.example/docs
    ard:
      specification_version: "1"
      catalog_url: https://acme.example/.well-known/ai-catalog.json
      publisher_domain: acme.example
      resource_ids:
        - acme-db
    interfaces:
      - interface_id: public-api
        role: api
        uri: https://acme.example/openapi.json
        standards:
          - namespace: openapi
            version: 3.1.1
            requirement_id: document
            relation: implements
    source_ids:
      - source_acme_docs
      - source_acme_signup
    authority_intent: community
    declared_at: 2026-08-05T00:00:00.000Z
    assessment_reason: Assess whether an agent can evaluate, sign up for, provision, and operate Acme DB through the self-serve funnel.
```

Omit `offer_id` and `offer_revision_digest` together when the funnel does not
concern a Sourcey Catalog Offer. ARD and interface blocks are optional. Do not
add a field for a presumed result such as “ready,” “blocked,” “CAPTCHA,” a
stage outcome, an overall grade, or a remediation. Those are derived only from
admitted evidence and policy.

## Pull request rules

- Keep vendor YAML changes separate from documentation and workflow changes.
- Every URL must be public HTTPS material for the declared vendor or funnel.
- Keep stable IDs stable and update base digests when the underlying Entity or
  Offer revision changes.
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
