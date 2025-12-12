// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType, expectAssignable } from 'tsd';
import { StepConfiguration } from '../lib/utils';

// Test StepConfiguration interface with all properties
const fullConfig: StepConfiguration = {
    stepSuccessMetric: true,
    stepDurationMetric: false,
    continueOnStepFailure: true,
    continueOnHttpStepFailure: false,
    stepsReport: true
};
expectType<StepConfiguration>(fullConfig);

// Test StepConfiguration with partial properties
const partialConfig: StepConfiguration = {
    stepSuccessMetric: true
};
expectType<StepConfiguration>(partialConfig);

// Test StepConfiguration with undefined values
const undefinedConfig: StepConfiguration = {
    stepSuccessMetric: undefined,
    stepDurationMetric: undefined,
    continueOnStepFailure: undefined,
    continueOnHttpStepFailure: undefined,
    stepsReport: undefined
};
expectType<StepConfiguration>(undefinedConfig);

// Test empty StepConfiguration
const emptyConfig: StepConfiguration = {};
expectType<StepConfiguration>(emptyConfig);

// Test individual property types
expectAssignable<StepConfiguration>({ stepSuccessMetric: true });
expectAssignable<StepConfiguration>({ stepSuccessMetric: false });
expectAssignable<StepConfiguration>({ stepDurationMetric: true });
expectAssignable<StepConfiguration>({ continueOnStepFailure: false });
expectAssignable<StepConfiguration>({ continueOnHttpStepFailure: true });
expectAssignable<StepConfiguration>({ stepsReport: false });