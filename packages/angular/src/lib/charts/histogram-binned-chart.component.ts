import { Component, AfterViewInit } from '@angular/core'
import { BaseChartComponent } from './base-chart.component'
import {
	HistogramChartBinned as HistogramChartCore,
	type HistogramChartOptions
} from '@carbon/charts'

/**
 * Wrapper around `HistogramChartBinned` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
@Component({
	selector: 'ibm-histogram-binned-chart',
	template: ``
})
export class HistogramBinnedChartComponent extends BaseChartComponent implements AfterViewInit {
	override ngAfterViewInit() {
		this.chart = new HistogramChartCore(this.elementRef.nativeElement as HTMLDivElement, {
			data: this.data,
			options: this.options as HistogramChartOptions
		})

		Object.assign(this, this.chart)
	}
}
