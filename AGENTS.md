# Repository boundary

This repository holds public Sourcey Agent Readiness listings. Each Entity file
lists one company's products, each with one job from Sourcey's job library,
the public surfaces an agent would use and, optionally, a job binding that
says how one interface performs that job. It is not an application, runtime,
package, schema owner, scanner, evidence store, rating authority, release
store or mirror of current data.

Allowed contents are Entity YAML under `entities/`, documentation, legal
files, CODEOWNERS, pull request and issue templates, and minimal GitHub
workflow YAML that runs the digest-pinned Sourcey Catalog Verifier.

Do not add executable product code, package manifests, copied schemas or job
libraries, tests, captures, run records, step outcomes, letters, Onboard
levels, credentials, current profiles, generated indexes, release artifacts,
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
- Every authored field is covered by a source binding to a public URL already
  listed in `sources`.
- The scope's source bindings cite public pages that document this product
  doing this job, such as the API reference for that operation, with a page
  for each step when the steps are documented apart. Fetch each one and
  confirm it answers 200 and shows the operation; never guess a URL.
- A listing needs no job binding. Add one only when its calls, endpoints and
  credentials are documented publicly; never put a credential in the file.
- Keep listing changes and documentation or workflow changes in separate pull
  requests.

Sourcey's Catalog is the only executable contract authority. A listing asks
Sourcey to run a job; it never shows that a service is ready. A Git merge
activates the exact admitted file. Sourcey's authenticated form and tools use
the same Catalog admission without a synthetic pull request or any code here.

The public `sourcey/validation` check must start automatically for every
opened or updated pull request. It runs this repository's exact digest-pinned
changed-file verifier and the DCO check without running pull request code.
`sourcey/admission` remains Sourcey's separate gate.
