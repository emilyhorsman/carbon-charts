import {
	HistogramChartBinned as HistogramChartCore,
	type HistogramChartOptions,
	type ChartTabularData
} from '@carbon/charts'
import BaseChart from './BaseChart'

export default class HistogramChartBinned extends BaseChart<HistogramChartOptions> {
	createChart(chartRef: HTMLDivElement, data: ChartTabularData, options: HistogramChartOptions) {
		return new HistogramChartCore(chartRef, { data, options })
	}
}
