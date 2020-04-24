/*
 *   Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import _ from 'lodash';
import { Headers } from '../../../../src/core/server/http/router/headers';

export function filterAuthHeaders(originalHeaders: Headers, headersToKeep: string[]) {
  const normalizeHeader = function (header: string | undefined) {
    if (!header) {
      return '';
    }
    return header.trim().toLowerCase();
  };

  const headersToKeepNormalized = headersToKeep.map(normalizeHeader);
  const originalHeadersNormalized = _.mapKeys(originalHeaders, function (headerValue, headerName) {
    return normalizeHeader(headerName);
  });
  return _.pick(originalHeadersNormalized, headersToKeepNormalized);
}