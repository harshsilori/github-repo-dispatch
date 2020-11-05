import { getInput, setFailed } from '@actions/core';
import { context } from '@actions/github';

try {
  const clientPayload = getInput('client-payload');
  console.log(`payload name: ${clientPayload}`);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  setFailed(error.message);
}