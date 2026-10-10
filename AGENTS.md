# Repository boundary

This repository holds public Sourcey Agent Readiness listings. Each Entity file
lists one company's products, each with one job from Sourcey's job library,
the public surfaces an agent would use, the request that does the job on each
interface (its job operations) and, optionally, a job binding that says how
one interface performs that job. It is not an application, runtime,
package, schema owner, scanner, evidence store, rating authority, release
store or mirror of current data.

Allowed contents are Entity YAML under `entities/`, documentation, legal
files, CODEOWNERS, pull request and issue templates, minimal GitHub workflow
YAML that runs the digest-pinned Sourcey Catalog Verifier, and what that
workflow installs and checks against: the verifier's pinned manifest and
lockfile under `.github/catalog-verifier/` with its digest, and the Sourcey
root set and its digest, under `.github/`.

Do not add executable product code, other package manifests, copied schemas
or job libraries, tests, captures, run records, step outcomes, letters,
credentials, current profiles, generated indexes, release artifacts,
queues or readers for older formats. Do not infer an Entity or Offer relation
from a name or URL, and do not pick a job the library does not have. Sourcey
allocates exact identities and admits the exact merged blob before anything
runs.

When editing a listing:

- Keep `entity_id`, slug, name, domains and category exactly as Sourcey
  allocated them.
- `scope.job` is a job library key and the library's name for it.
- `declaration_id` is `declaration_{slug}_{product key}_{job key}`, with
  hyphens as underscores. A new product or job is a new listing with a new id.
- Every authored field a source binding can cover is covered by one to a
  public URL already listed in `sources` (a job binding's are its interface
  and its calls).
- The scope's source bindings cite public pages that document this product
  doing this job, such as the API reference for that operation, with a page
  for each step when the steps are documented apart. Fetch each one and
  confirm it answers 200 and shows the operation; never guess a URL.
- Every API or MCP interface that performs the job declares one job operation:
  `kind: http` with the documented method, URL on that endpoint's origin (a
  well-formed placeholder for any account identifier or host label), required
  plain headers, body format and the vendor's OpenAPI 3 document with its key
  operations where published; `kind: mcp` with the vendor's MCP server and the
  exact tool that performs the job; or `kind: spec` with the OpenAPI document,
  method and path when the interface has no public endpoint. Declare an MCP
  server only when its documented tools perform the job. A vendor that gives
  access only through sales or approval declares its own page for that as an
  `access_request` endpoint; one that approves who calls a single interface
  (an MCP server that serves only the clients it reviewed) lists that page in
  the interface's `endpoint_ids`. An interface that starts off until a person
  on the account turns it on for agents (an organization setting for an MCP
  server's write tools) lists that setting's page as an `access_setting`
  endpoint in its `endpoint_ids`. An interface through which an agent makes
  something alone that a person claims later to keep lists the vendor's claim
  page as a `claim` endpoint in its `endpoint_ids` (one endpoint carries both
  `registration` and `claim` where the sign-up page is the claim page). An
  interface whose key the vendor expires on a fixed lifetime, with no API to
  renew it, lists the page where a person replaces it as a `key_renewal`
  endpoint in its `endpoint_ids`.
- Every listing with job operations names the vendor's checkout (a `checkout`
  resource or endpoint) where the job needs a card on file, its top-up page (a
  `top_up` endpoint) where a person tops up a balance by hand and the vendor
  offers no automatic top-up, or rules the
  checkout out with a `checkout` surface exclusion bound to the vendor's
  pricing page where the job needs none (it is free, or paid per call by the
  offer its own request answers). Body formats are the vendor's own media
  types; no header or query parameter carries a credential.
- A listing needs no job binding. Add one only when its calls, endpoints and
  credentials are documented publicly; never put a credential in the file.
  Sourcey holds no keys: it runs a binding only when the binding needs none.
- Keep listing changes and documentation or workflow changes in separate pull
  requests.

Sourcey's Catalog is the only executable contract authority. A listing asks
Sourcey to probe a job; it never shows that a service is ready. A Git merge
activates the exact admitted file. Sourcey's authenticated form and tools use
the same Catalog admission without a synthetic pull request or any code here.

The public `sourcey/validation` check must start automatically for every
opened or updated pull request. It runs this repository's exact digest-pinned
changed-file verifier and the DCO check without running pull request code.
`sourcey/admission` remains Sourcey's separate gate.
