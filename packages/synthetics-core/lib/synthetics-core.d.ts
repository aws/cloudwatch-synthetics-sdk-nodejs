// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { StepConfiguration } from './utils';
/**
 * Base class for CloudWatch Synthetics providing core functionality for canary execution.
 */
export declare class SyntheticsCore {
    /**
     * Adds an execution error to the canary without interrupting script execution.
     * Use for non-critical errors that shouldn't fail the canary or impact successPercent metrics.
     *
     * @param errorMessage - Description of the error
     * @param ex - Optional exception that was encountered
     */
    addExecutionError(errorMessage: string, ex?: Error): void;
    /**
     * Returns the name of the canary.
     *
     * @returns The canary name
     */
    getCanaryName(): string;
    /**
     * Returns the ARN of the canary.
     *
     * @returns The canary ARN
     */
    getCanaryArn(): string;
    /**
     * Returns the custom user agent string of the canary.
     *
     * @returns The canary user agent string
     */
    getCanaryUserAgentString(): string;
    /**
     * Returns the Synthetics runtime version of the canary.
     * Available on runtime version syn-nodejs-3.0 and later.
     *
     * @returns The runtime version (e.g., 'syn-nodejs-3.0')
     */
    getRuntimeVersion(): string | undefined;
    /**
     * Retrieves the current log level for the Synthetics library.
     *
     * @returns Log level: 0 (Debug), 1 (Info), 2 (Warn), 3 (Error)
     */
    getLogLevel(): number;
    /**
     * Sets the log level for the Synthetics library.
     *
     * @param logLevel - Log level: 0 (Debug), 1 (Info), 2 (Warn), 3 (Error)
     */
    setLogLevel(logLevel: number): void;
    /**
     * Executes a step with automatic logging, metrics, and error handling.
     * Emits SuccessPercent and Duration metrics, and adds execution summary to the canary report.
     *
     * @param stepName - Name of the step (used for metrics and logging)
     * @param functionToExecute - Async function containing the step logic
     * @param stepConfig - Optional step-level configuration overrides
     * @returns Promise that resolves when the step completes
     */
    executeStep(stepName: string, functionToExecute: () => Promise<void>, stepConfig?: StepConfiguration): Promise<void>;
    /**
     * Executes an HTTP request as a step with automatic metrics and reporting.
     * Publishes SuccessPercent and Duration metrics, and adds detailed HTTP request/response data to the report.
     *
     * @param stepName - Name of the step
     * @param requestOptions - URL string or HTTP request options object
     * @param callback - Optional callback function to handle the HTTP response
     * @param stepConfig - Optional step-level configuration overrides
     * @returns Promise that resolves when the HTTP step completes
     */
    executeHttpStep(stepName: string, requestOptions: any, callback?: (response: any) => Promise<void>, stepConfig?: StepConfiguration): Promise<void>;
}