// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * Configuration options for individual steps in Synthetics canaries.
 * These options can override global Synthetics configuration at the step level.
 */
export interface StepConfiguration {
    /** Whether to emit the StepSuccess metric for this step. */
    stepSuccessMetric?: boolean | undefined;
    /** Whether to emit the Duration metric for this step. */
    stepDurationMetric?: boolean | undefined;
    /** Whether to continue with running the canary script after a step fails (executeStep function). */
    continueOnStepFailure?: boolean | undefined;
    /** Whether to continue with running the canary script after an HTTP step fails (executeHttpStep function). */
    continueOnHttpStepFailure?: boolean | undefined;
    /** Whether to include this step in the steps execution report. */
    stepsReport?: boolean | undefined;
}