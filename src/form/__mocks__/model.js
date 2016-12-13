/**
 * Copyright (с) 2015, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule UIKernel
 */

let ValidationErrors = require('../../common/validation/ValidationErrors');
let data = {
  name: '',
  surname: '',
  phone: '',
  age: '',
  gender: 1
};
module.exports = {
  getData: function () {
    return data;
  },
  submit: function (data) {
    if (data.name === 'Error') {
      throw ValidationErrors.createFromJSON({name: 'error in name'});
    }
  },
  isValidRecord: function (data) {
    let error = {
      isEmpty: () => true,
      clone: () => error,
      clearField: () => null,
      clear: () => null
    };
    if (data.name === 'globalError') {
      throw 'global error exist';
    }
    if (data.name === 'Error') {
      return ValidationErrors.createFromJSON({name: 'error in name'});
    }
    return error;
  },
  getValidationDependency: function () {
    return [];
  },
  on: jest.fn(),// eslint-disable-line
  off: jest.fn(),// eslint-disable-line
  listenerCount: function () {
    let count = this.on.mock.calls.length - this.off.mock.calls.length;
    return count > 0 ? count : 0;
  }
};