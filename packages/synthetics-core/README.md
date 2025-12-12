# AWS CloudWatch Synthetics Type Support for Node.js Runtime

TypeScript type definitions for the AWS CloudWatch Synthetics Node.js runtime library.

## Installation

```bash
npm install @aws/synthetics-core
```

## Usage

```typescript
import { synthetics } from '@aws/synthetics-core';

// Execute a step with custom configuration
await synthetics.executeStep('checkHomepage', async () => {
    // Your test logic here
}, {
    includeRequestHeaders: true,
    includeResponseHeaders: true,
    restrictedHeaders: ['authorization'],
    includeRequestBody: true,
    includeResponseBody: true
});
```

## TypeScript Support

This package provides complete TypeScript type definitions for the AWS CloudWatch Synthetics Node.js runtime, enabling full IntelliSense support and type checking in your canary scripts.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.