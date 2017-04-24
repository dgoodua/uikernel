/**
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import callbackify from '../../../common/callbackify';
import JSONStreamStringify from 'json-stream-stringify';

const toJSON = callbackify(async function toJSON(data) {
  return {
    mime: 'application/json',
    dataStream: JSONStreamStringify({
      records: data.records,
      totals: data.totals
    })
  };
});

export default toJSON;
