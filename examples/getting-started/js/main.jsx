/**
 * Copyright (с) 2015, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule UIKernel
 */

React.render(
  <UIKernel.Grid
    model={model} // Grid model
    cols={columns} // columns configuration
  />
, document.getElementById('example'));
