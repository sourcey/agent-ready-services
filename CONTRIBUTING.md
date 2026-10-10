# Contributing

A contribution lists a service: one company, one product and the job an agent
should be able to do with it. You can also add a job binding that tells
Sourcey exactly how to run that job. A contribution never states a result. Run
records, step outcomes, letters and report cards come only from Sourcey's own
runs.

Published report card facts may also appear in facts-only datasets, including
on Hugging Face, for discovery, analysis and possible AI training. Sourcey
does not export private submission details, run evidence or credentials in
those datasets. The [public data terms](https://sourcey.com/terms) cover reuse,
attribution and corrections.

## Choose a path

1. **Request a listing** when the company is new to Sourcey, or when you know
   the service but not the file format. Open a
   [listing request](https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml)
   and Sourcey writes the listing.
2. **Write the listing yourself** as YAML in a pull request. The example below
   is the bar for review.

Sourcey's own listing form, API and MCP tool write the same
`sourcey.agent-readiness-authoring/v1alpha1` file. There is no shorthand
format.

## Before you edit

1. Search the open issues and pull requests for the company and product.
2. Open a [listing request](https://github.com/sourcey/agent-ready-services/issues/new?template=request-assessment.yml)
   first if the company has no file here yet, so Sourcey can confirm its
   identity.
3. Sourcey confirms the company's stable `entity_id`. Startup Offers and Agent
   Readiness share that identity but stay separate catalogs, so do not copy a
   credit or deal into a listing.
4. Use `authority_intent: entity` only when Sourcey has already confirmed that
   you control the company's own domain. Otherwise use `community`.

Never include keys, tokens, passwords, personal data, unpublished terms or
captures from a signed-in session. Public URLs are enough.

## File location

A company lives at `entities/{shard}/{slug}.yaml`, where `shard` is the first
two characters of its slug. A file can hold several listings for the same
company, each one an entry under `declarations`. Each listing covers exactly
one product and one job, and a company can list each product and job pair
only once.

## Pick the job

Sourcey's job library has one job per kind of service. A listing names the job
for its product's category, so every service in a category is checked on the
same job. The digest-pinned Sourcey Catalog Verifier holds the library and
refuses a job that is not in it. These are the jobs today:

| Job key | Category | Name |
| --- | --- | --- |
| `bounty-claim` | bounty-board | Claim a bounty |
| `bucket-create` | cloud-platform | Create a storage bucket |
| `chat-message-post` | team-chat | Post a message |
| `crm-contact-create` | crm | Create a contact |
| `database-create` | database | Create a database deployment |
| `deployment-create` | frontend-hosting | Create a deployment |
| `dns-resolve` | dns-resolver | Resolve a name |
| `email-send` | email | Send an email |
| `error-event-report` | error-tracking | Report an error |
| `feature-flag-create` | feature-flags | Create a feature flag |
| `model-chat-stream-tool` | model-api | Stream a completion with a tool call |
| `monitor-create` | monitoring | Create a monitor |
| `payment-create` | payments | Create a payment link |
| `repository-create` | repository-hosting | Create a repository |
| `search-record-find` | search | Find a record by search |
| `sms-send` | sms-messaging | Send a text message |
| `user-create` | auth | Create a user |
| `vector-upsert-query` | vector-database | Find a vector by query |
| `workspace-page-create` | workspace | Create a page |

Write the job's key and name in `scope.job` exactly as the library has them.
The product you list must actually do that job. If no job fits the service,
say so in a listing request rather than picking the nearest one.

## A listing

A listing is what a person already knows about the service: its product, its
job, the public pages that describe it and the interfaces an agent would use.
It needs no job binding. The Catalog Verifier owns the schema; this example
shows its current shape:

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
  - source_id: source_acme_create_database
    url: https://acme.example/docs/api/create-database
  - source_id: source_acme_terms
    url: https://acme.example/terms
  - source_id: source_acme_pricing
    url: https://acme.example/pricing
  - source_id: source_acme_signup
    url: https://acme.example/signup
declarations:
  - declaration_id: declaration_acme_acme_db_database_create
    scope:
      product: { key: acme-db, name: Acme DB }
      job: { key: database-create, name: Create a database deployment }
    job_bindings: []
    participants:
      - participant_id: acme
        roles: [subject, access_operator, identity_provider, operations_provider]
        identity: { entity_id: ent_01k00000000000000000000001 }
    resources:
      - resource_id: documentation
        uri: https://acme.example/docs
        roles: [discovery, provisioning, operations, recovery, authentication, documentation]
        operated_by_participant_id: acme
        standard_bindings: []
      - resource_id: create-database
        uri: https://acme.example/docs/api/create-database
        roles: [provisioning, operations, documentation]
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
    endpoints: []
    interfaces:
      - interface_id: public-api
        modality: network_api
        functions: [service_operation, authentication]
        endpoint_ids: []
        resource_ids: [documentation, create-database]
        operated_by_participant_id: acme
        standard_bindings: []
    relations:
      - relation_id: signup-precedes-api
        kind: precedes
        from: { node_kind: resource, node_id: signup }
        to: { node_kind: interface, node_id: public-api }
    offer_relations: []
    source_bindings:
      - source_binding_id: acme-scope
        source_id: source_acme_create_database
        target: { node_kind: declaration, node_id: declaration_acme_acme_db_database_create }
        field_paths: [/scope/product/name, /scope/job/name]
      - source_binding_id: acme-participant
        source_id: source_acme_docs
        target: { node_kind: participant, node_id: acme }
        field_paths: [/roles, /identity]
      - source_binding_id: acme-resource-documentation
        source_id: source_acme_docs
        target: { node_kind: resource, node_id: documentation }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-resource-create-database
        source_id: source_acme_create_database
        target: { node_kind: resource, node_id: create-database }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-resource-terms
        source_id: source_acme_terms
        target: { node_kind: resource, node_id: terms }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-resource-pricing
        source_id: source_acme_pricing
        target: { node_kind: resource, node_id: pricing }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-resource-signup
        source_id: source_acme_signup
        target: { node_kind: resource, node_id: signup }
        field_paths: [/uri, /roles, /operated_by_participant_id]
      - source_binding_id: acme-interface-public-api
        source_id: source_acme_docs
        target: { node_kind: interface, node_id: public-api }
        field_paths: [/modality, /functions, /resource_ids, /operated_by_participant_id]
      - source_binding_id: acme-relation-signup
        source_id: source_acme_signup
        target: { node_kind: relation, node_id: signup-precedes-api }
        field_paths: [/kind, /from, /to]
      - source_binding_id: acme-exclusion-eligibility
        source_id: source_acme_terms
        target: { node_kind: surface_exclusion, node_id: no-separate-eligibility }
        field_paths: [/role, /rationale]
    surface_exclusions:
      - exclusion_id: no-separate-eligibility
        role: eligibility
        rationale: Access conditions are part of the service terms; there is no separate eligibility page.
    authority_intent: community
    declared_at: 2026-08-05T00:00:00.000Z
```

Once this merges, Sourcey runs discovery for the listing. Its card shows a
dash and "The job has not run yet." until a binding exists.

### The parts of a listing

- **`declaration_id`** is `declaration_{slug}_{product key}_{job key}`, with
  hyphens turned into underscores. Sourcey's form and API use the same
  scheme. Keep it stable: a different product or job is a new listing with a
  new id.
- **Participants** are the parties involved. Exactly one has the `subject`
  role and carries the company's `entity_id`. Add a third party, such as a
  separate identity or payment provider, only when the service really relies
  on it.
- **Resources** are pages and documents a person or agent can read. A URL
  appears once and carries every role it serves.
- **Endpoints** are network locations an agent calls. List an endpoint only
  when a public source names it.
- **Interfaces** are what an agent uses. Each one points at its resources or
  endpoints. `modality` says how it is used (`web_application`,
  `network_api`, `command_line`, `software_library`, `tool_server` or
  `agent_service`) and `functions` say what it does (`service_operation`,
  `authentication`, `commerce`, `events` or `recovery`). Protocol names go in
  `standard_bindings`, never in these fields.
- **Relations** connect surfaces: `describes`, `authenticates`, `requires`,
  `alternative_to` and `precedes`.
- **`standard_bindings`** name an exact standard and version a resource,
  endpoint or interface implements, describes or uses, such as MCP or OpenAPI.
  Declaring one is not evidence that it works.
- **`surface_exclusions`** say why a surface role is missing, for example when
  the terms already cover eligibility. An exclusion is not a result.
- **`offer_relations`** are optional links to an existing Sourcey Offer of the
  same company. Most listings use `offer_relations: []`. Add one only when
  Sourcey has confirmed the Offer.
- **`source_bindings`** tie every field you wrote to a public source. The
  verifier checks the coverage: the product and job names, each participant's
  roles and identity, and every field of each resource, endpoint, interface,
  relation, exclusion and job binding.
- **The scope's sources** must be public pages that document this product
  doing this job, such as the API reference for the operation. In the example,
  that is the page about creating a database. When the job has two steps on
  different pages, such as writing a record and then reading it back, cite a
  page for each. A product overview, a pricing page or a page about other
  operations does not establish the job.

Never add a field for a result, such as "ready", "blocked", a step outcome, a
letter or a fix. Those come only from Sourcey's runs.

## Optional: add a job binding

A binding is for a vendor, or anyone who knows the service well, who wants
the job run now rather than waiting for Sourcey to write one. It says exactly
how one declared interface performs the job. The job library still says what
success is, so a binding can locate the evidence but never decide whether it
passes.

To bind the Acme DB listing above, give the interface the endpoint its calls
use:

```yaml
    endpoints:
      - endpoint_id: api
        uri: https://api.acme.example
        transport: http
        roles: [service]
        operated_by_participant_id: acme
        standard_bindings: []
    interfaces:
      - interface_id: public-api
        modality: network_api
        functions: [service_operation, authentication]
        endpoint_ids: [api]
        resource_ids: [documentation, create-database]
        operated_by_participant_id: acme
        standard_bindings: []
```

Then add the binding in place of `job_bindings: []`:

```yaml
    job_bindings:
      - binding_id: acme-db-create
        interface_id: public-api
        calls:
          - kind: http
            call_id: create
            endpoint_id: api
            method: POST
            url: https://api.acme.example/v1/databases
            headers: []
            body: { media_type: application/json, json: { name: "{{run.nonce}}" } }
            credentials: [api_key]
          - kind: http
            call_id: read
            endpoint_id: api
            method: GET
            url: https://api.acme.example/v1/databases/{{call.create/id}}
            headers: []
            body: null
            credentials: [api_key]
        assertions:
          - assertion: deployment_created
            observations:
              - { name: id, call: create, source: json, pointer: /id }
          - assertion: read_back
            observations:
              - { name: created_id, call: create, source: json, pointer: /id }
              - { name: read_id, call: read, source: json, pointer: /id }
              - { name: content, call: read, source: json, pointer: /name }
        error_probe:
          call:
            kind: http
            call_id: invalid-name
            endpoint_id: api
            method: POST
            url: https://api.acme.example/v1/databases
            headers: []
            body: { media_type: application/json, json: { name: "not a valid name!" } }
            credentials: [api_key]
          expect: { kind: http_error, status_class: 4xx, error_pointer: /error/code }
        delegation:
          kind: entered
          credentials:
            - role: api_key
              placement: { scheme: bearer, header_name: authorization }
              endpoint_ids: [api]
              methods: [GET, POST, DELETE]
        payment: { kind: none }
        sustain:
          rotation: { kind: manual }
          revocation: { kind: manual }
        cleanup:
          - kind: http
            call_id: delete
            endpoint_id: api
            method: DELETE
            url: https://api.acme.example/v1/databases/{{call.create/id}}
            headers: []
            body: null
            credentials: [api_key]
```

And bind sources for what changed. The interface now lists an endpoint, so its
binding covers `/endpoint_ids` too:

```yaml
      - source_binding_id: acme-endpoint-api
        source_id: source_acme_docs
        target: { node_kind: endpoint, node_id: api }
        field_paths: [/uri, /transport, /roles, /operated_by_participant_id]
      - source_binding_id: acme-interface-public-api
        source_id: source_acme_docs
        target: { node_kind: interface, node_id: public-api }
        field_paths: [/modality, /functions, /endpoint_ids, /resource_ids, /operated_by_participant_id]
      - source_binding_id: acme-binding-create
        source_id: source_acme_create_database
        target: { node_kind: job_binding, node_id: acme-db-create }
        field_paths: [/interface_id, /calls]
```

What each part of a binding does:

- **`calls`** run in order, over HTTP or MCP, and each uses one of the
  interface's declared endpoints. A call URL keeps its endpoint's origin, so a
  binding can never send a credential anywhere the listing does not name.
  Templates can use only `{{input.<name>}}` from the job,
  `{{run.nonce}}`, `{{sink.<name>}}` and `{{call.<call id><JSON pointer>}}`
  from an earlier call's response.
- **`assertions`** map each of the job's assertions to where its evidence is
  in a response. The library defines the assertions and how each one passes.
- **`error_probe`** is one safe, invalid request that should get a clear,
  typed error. This is the Confirm step.
- **`delegation`** says how the agent gets authority: `none`, `entered` (a
  person enters a key the service issued), `oauth`, or `minted` (an entered
  key mints the one the job uses). It names each credential by role and
  limits where it may be sent.
- **`payment`** is `none`, `prepaid_balance` or `per_call` (x402 or MPP).
- **`sustain`** says how the credential is rotated and revoked: by a call, or
  by a person (`manual`). It is `not_applicable` exactly when the job needs no
  credential.
- **`cleanup`** removes what the job created. A job that changes something
  must clean up after itself.

A binding never contains a key or token. It only names a credential's role.
Sourcey holds credentials in its own custody, outside this repository, and
the next run with a binding rates the job.

## Pull request rules

- Keep listing changes separate from documentation and workflow changes. The
  validation check refuses a pull request that mixes them.
- Every source, resource and endpoint URL is public HTTPS material for the
  company and product.
- Keep listing ids and the ids inside a listing stable.
- Bind every field you write to at least one exact public source.
- Use real names in plain language.
- Sign off every commit under the
  [Developer Certificate of Origin](https://developercertificate.org/).

```bash
git commit --signoff -m "data(readiness): list acme db"
```

## Validation

The public `sourcey/validation` check reads only the files a pull request
changes, with the exact lockfile-pinned `@sourcey/catalog-verifier` package. It
checks each file's shape, its path, every source binding and each job against
the job library, and it checks any binding against its job. It never runs code
from the pull request. A green check means the listing is well formed, not
that the service is ready. The check starts by itself when a pull request is
opened or updated.

To run the same check locally from a checkout with `origin/main` fetched:

```bash
base="$(git merge-base HEAD origin/main)"
work="$(mktemp -d)"
npm ci --prefix .github/catalog-verifier --ignore-scripts --no-audit --no-fund
verifier=".github/catalog-verifier/node_modules/.bin/sourcey-catalog-verify"
curl --fail-with-body --silent --show-error https://api.sourcey.com/v1/release \
  --output "${work}/release.json"
release_id="$(jq -er '.release_id' "${work}/release.json")"
root_digest="$(<.github/sourcey-root-set.digest)"
test "$(jq -er '.descriptor.snapshot_core.root_set_digest' "${work}/release.json")" = "$root_digest"
"$verifier" identity-context-request agent-readiness \
  --repository "$PWD" --base "$base" --head HEAD \
  --live-parent-release-id "$release_id" > "${work}/query.json"
curl --fail-with-body --silent --show-error -H 'content-type: application/json' \
  --data-binary @"${work}/query.json" \
  https://api.sourcey.com/v1/catalog-verifier/identity-contexts \
  | jq -e '.data' > "${work}/identity-context.json"
"$verifier" validate agent-readiness \
  --repository "$PWD" --base "$base" --head HEAD \
  --identity-context "${work}/identity-context.json" \
  --root-set .github/sourcey-root-set.json --trusted-root-digest "$root_digest" \
  --verified-at "$(node -p 'new Date().toISOString()')" --format human
```

This is the same package, signed identity context and trust root that CI
uses. Sourcey issues the identity context for your exact changes, and the
final validation runs offline over those bytes.

## After merge

Sourcey reads the merged commit and the pull request that merged it, and keeps
the exact repository, commit, path, Git blob id and SHA-256 digest of each
file. It then runs discovery for each new or changed listing, and the job for
each listing with a binding. Company identity, authority and publication stay
separate checks.
