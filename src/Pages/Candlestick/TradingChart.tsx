import React, { FunctionComponent } from 'react';

import ReactDOM from "react-dom";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CurrentCoordinate,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  LineSeries,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize
} from "react-financial-charts";

interface Props{
  initialData: any[]
}
const TradingChart: FunctionComponent<Props> = ({initialData}) => {
  const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (d) => new Date(d.date)
  );
  const height = 700;
  const width = 900;
  const margin = { left: 0, right: 48, top: 0, bottom: 24 };

  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
    initialData
  );
  const pricesDisplayFormat = format(".2f");
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];
  const gridHeight = height - margin.top - margin.bottom;
  const elderRayHeight = 100;
  const chartHeight = gridHeight - elderRayHeight;

  const candleChartExtents = (data: any) => {
    return [data.high, data.low];
  };
  const candlesAppearance = {
    wickStroke: (d:any) => (d.close > d.open ? "#fa3c58" : "#0ecc83"),
    fill: (d:any) => (d.close > d.open ? "#fa3c58" : "#0ecc83"),
    stroke: (d:any) => (d.close > d.open ? "#fa3c58" : "#0ecc83"),
    candleStrokeWidth: 1,
    widthRatio: 0.8,
    opacity: 1,
 }

  return (
    <ChartCanvas
      height={height}
      ratio={3}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
      zoomAnchor={lastVisibleItemBasedZoomAnchor}
    >
      <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
        <XAxis 
          showGridLines 
          showTickLabel={true} 
          tickLabelFill="white"
          gridLinesStrokeStyle="black"
        />
        <YAxis 
          showGridLines 
          tickFormat={pricesDisplayFormat} 
          tickLabelFill="white" 
          gridLinesStrokeStyle="black"
        />
        <CandlestickSeries {...candlesAppearance} />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={pricesDisplayFormat}
        />
        {/* <ZoomButtons /> */}
        <OHLCTooltip 
          origin={[8, 16]} className="ohlc"
          textFill = {(d:any) => (d.close > d.open ? "#fa3c58" : "#0ecc83")}
        />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  )
}

export default TradingChart;