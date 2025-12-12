// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expectType } from 'tsd';
import { synthetics } from '../lib/index';
import { SyntheticsCore } from '../lib/synthetics-core';

// Test that synthetics is exported and is of type SyntheticsCore
expectType<SyntheticsCore>(synthetics);