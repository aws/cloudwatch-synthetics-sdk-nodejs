// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType, expectAssignable } from 'tsd';
import { synthetics } from '../lib/index';

// Extract StepConfiguration type from synthetics.executeStep parameter
type StepConfiguration = NonNullable<Parameters<typeof synthetics.executeStep>[2]>;

// Test addExecutionError method
expectType<void>(synthetics.addExecutionError('error message'));
expectType<void>(synthetics.addExecutionError('error message', new Error()));

// Test getter methods return types
expectType<string>(synthetics.getCanaryName());
expectType<string>(synthetics.getCanaryArn());
expectType<string>(synthetics.getCanaryUserAgentString());
expectType<string | undefined>(synthetics.getRuntimeVersion());

// Test log level methods
expectType<number>(synthetics.getLogLevel());
expectType<void>(synthetics.setLogLevel(0));
expectType<void>(synthetics.setLogLevel(3));

// Test executeStep method
expectType<Promise<void>>(synthetics.executeStep('stepName', async () => {}));
expectType<Promise<void>>(synthetics.executeStep('stepName', async () => {}, {}));

const stepConfig: StepConfiguration = {};
expectType<Promise<void>>(synthetics.executeStep('stepName', async () => {}, stepConfig));

// Test executeHttpStep method
expectType<Promise<void>>(synthetics.executeHttpStep('stepName', 'https://example.com'));
expectType<Promise<void>>(synthetics.executeHttpStep('stepName', { url: 'https://example.com' }));
expectType<Promise<void>>(synthetics.executeHttpStep('stepName', 'https://example.com', async (response) => {}));
expectType<Promise<void>>(synthetics.executeHttpStep('stepName', 'https://example.com', async (response) => {}, stepConfig));

// Test StepConfiguration interface
expectAssignable<StepConfiguration>({});
expectAssignable<StepConfiguration>({ stepSuccessMetric: true });
expectAssignable<StepConfiguration>({ stepDurationMetric: false });
expectAssignable<StepConfiguration>({ continueOnStepFailure: true });
expectAssignable<StepConfiguration>({ continueOnHttpStepFailure: true });
expectAssignable<StepConfiguration>({ stepsReport: true });
