/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import FeatureNameStatistics from 'goog:proto.featureStatistics.FeatureNameStatistics';
import * as utils from '../../common/utils';

Polymer({
  is: 'facets-overview-row-legend',

  properties: {
    type: Object,
    showWeighted: Boolean,
    hasCustom: Boolean,
    dataModel: Object,
    _entries: {
      type: Array,
      computed: '_getEntries(type, showWeighted, hasCustom)'
    },
  },
  _getEntries: function(type: FeatureNameStatistics.Type, showWeighted: boolean,
                        hasCustom: boolean) {
    return utils.getLegendEntries(type, showWeighted, hasCustom);
  },
});
