import React from 'react'
import HighchartsReact from '../../'

const StockChart = ({ options, highcharts }) => <HighchartsReact
  highcharts={highcharts}
  constructorType={'stockChart'}
  options={options}
/>

module.exports = StockChart
