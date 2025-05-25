import { ChartModelBinned } from './binned-charts'
import { getProperty } from '@/tools'
import type { StackKeysParams } from './model'

export class ChartModelBinnedPreaggregated extends ChartModelBinned {
       override getDataValuesGroupedByKeys({ bins = null, groups = null }: StackKeysParams) {
               const options = this.getOptions()
               const { groupMapsTo } = options.data
               const countKey = getProperty(options, 'data.countMapsTo') || 'count'

               const dataGroupNames = this.getDataGroupNames()
               const stackKeys = this.getStackKeys({ bins, groups })

               if (bins) {
                       return stackKeys.map(key => {
                               const [binStart, binEnd] = key.split(':')
                               const values: any = { x0: binStart, x1: binEnd }
                               const binData = bins.find(bin => bin.x0.toString() === binStart.toString())
                               dataGroupNames.forEach(name => {
                                       values[name] = binData
                                               .filter(item => item[groupMapsTo] === name)
                                               .reduce((sum, item) => sum + Number(item[countKey] ?? 1), 0)
                               })
                               return values
                       }) as any
               }

               return super.getDataValuesGroupedByKeys({ bins, groups })
       }
}
