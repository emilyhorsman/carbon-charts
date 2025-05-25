import { HistogramChartBinned, type HistogramChartOptions } from '@carbon/charts'
import { chartFactory } from './chartFactory'
export default chartFactory<HistogramChartOptions>(HistogramChartBinned, 'CcvHistogramBinnedChart')
