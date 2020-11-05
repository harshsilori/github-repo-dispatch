# Javascript action to print the name of client payload to console log

This action prints name tag of the client payload passed with repo dispatch event

## Example usage

with:
    client-payload: ${{ toJson(github.event.client_payload) }}"
