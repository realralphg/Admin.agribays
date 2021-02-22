
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'activityChart',
  data() {
    return {
      chartdata: {
        labels: ['Oct 23', 'Oct 24'],
        datasets: [
          {
            label: 'Month One',
            backgroundColor: '#DFF8EF',
            data: [100, 20]
          },
          {
            label: 'Month One',
            backgroundColor: '#DFF8EF',
            data: [20, 50]
          },
          {
            label: 'Month One',
            backgroundColor: '#DFF8EF',
            data: [50, 60]
          },
          {
            label: 'Month One',
            backgroundColor: '#DFF8EF',
            data: [50, 80]
          },
          {
            label: 'Month One',
            backgroundColor: '#DFF8EF',
            data: [100, 120]
          },
          {
            label: 'Month One',
            backgroundColor: '#1DBC86',
            data: [50, 80]
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        lineWidth: 5,
        drawBorder: true,
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
