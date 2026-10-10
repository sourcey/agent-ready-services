## Listing

- Entity:
- Product:
- Job key:
- Listing request issue:

## Contributor checks

- [ ] This pull request changes Entity YAML only, or documentation and workflow files only, not both.
- [ ] Sourcey confirmed the stable Entity ID and every related Offer ID, if any.
- [ ] `scope.job` is a key and name from Sourcey's job library.
- [ ] The scope's sources are public pages that document this product doing every step of this job.
- [ ] Every source, resource and endpoint is public HTTPS material.
- [ ] Every API or MCP interface that performs the job declares its job operation, as its documentation gives the request: an HTTP request with its OpenAPI document where published, an MCP server's tool, or the OpenAPI operation where there is no public endpoint.
- [ ] The listing names the vendor's checkout where the job needs a card on file, or rules the checkout out, bound to the vendor's pricing page, where the job is free on an account or paid per call by the offer its own request answers.
- [ ] Every authored field a source binding can cover is covered (a job binding's interface and calls included).
- [ ] Any job binding uses only declared endpoints and contains no key, token or other credential.
- [ ] The file contains no run record, step outcome, letter, report card, private evidence or generated output.
- [ ] `authority_intent` is `entity` only when Sourcey has already confirmed control of the Entity's own domain.
- [ ] Every commit has a `Signed-off-by` line for the Developer Certificate of Origin.

A merged listing asks Sourcey to probe the job. It does not mean the service is ready, or decide what letter it gets.
