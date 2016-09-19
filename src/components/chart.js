'use strict';

import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default ({ data, color, units }) => {

    return (
        <div>

            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color}></SparklinesLine>
                <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
            </Sparklines>

            <div>{average(data, units)} {units === 'K' ? 'Fahrenheit' : units}</div>
        </div>
    );
}

function average (data, units) {
    const averageValue = data && data.length > 0 ? _.round(_.sum(data) / data.length) : 0;
    return units === 'K' ? Math.round((averageValue - 273.15) * 9/5 + 32) : averageValue;
}
