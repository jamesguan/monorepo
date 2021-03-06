import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from '@visx/xychart';
import styled from 'styled-components';

import Nav from '../components/Nav';

const Container = styled.div``;

const accessors = {
  xAccessor: d => d.x,
  yAccessor: d => d.y,
};

const data1 = [
  { x: '2022-01-25', y: 50 },
  { x: '2022-01-26', y: 10 },
  { x: '2022-01-27', y: 20 },
];

const data2 = [
  { x: '2022-01-25', y: 30 },
  { x: '2022-01-26', y: 40 },
  { x: '2022-01-27', y: 80 },
];

const Dashboard = () => {

  return (
    <>
      <Nav />
      <Container>
        <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
          <AnimatedAxis orientation="bottom" />
          <AnimatedGrid columns={false} numTicks={4} />
          <AnimatedLineSeries dataKey="Line 1" data={data1} {...accessors} />
          <AnimatedLineSeries dataKey="Line 2" data={data2} {...accessors} />
          <Tooltip
            snapTooltipToDatumX
            snapTooltipToDatumY
            showVerticalCrosshair
            showSeriesGlyphs
            renderTooltip={({ tooltipData, colorScale }) => (
              <div>
                <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                  {tooltipData.nearestDatum.key}
                </div>
                {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                {', '}
                {accessors.yAccessor(tooltipData.nearestDatum.datum)}
              </div>
            )}
          />
        </XYChart>
      </Container>
    </>
  )
};

export default Dashboard;