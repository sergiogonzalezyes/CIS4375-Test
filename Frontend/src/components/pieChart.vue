<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <canvas ref="attendance_Chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

// Define the component
export default {
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    }
  },
  async mounted() {
    const backgroundColor = this.chartData.map(() => this.getColor())
    const borderColor = backgroundColor.map((e) =>
      e.replace(/[\d\.]+\)$/g, '1)')
    )
    // Create a new chart instance using the canvas element and data

    await new Chart(this.$refs.attendance_Chart, {
      type: 'pie',
      data: {
        labels: this.label,
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: this.chartData
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
    })
  },
  // Define the getColor method used to generate random RGBA colors

  methods: {
    getColor() {
      let channel = () => Math.random() * 255
      return `rgba(${channel()}, ${channel()}, ${channel()}, 0.2)`
    }
  }
}
</script>
