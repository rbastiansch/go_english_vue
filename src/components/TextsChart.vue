<script>
  import Vue from 'vue';
  // Importing Line class from the vue-chartjs wrapper
  import { Doughnut } from 'vue-chartjs';
  // Exporting this so it can be used in other components
  export default Doughnut.extend({
    name: 'texts-chart',
    props: {
      started: {
        default: 1,
      },
      done: {
        default: 1,
      },
      todo: {
        default: 1,
      },
    },
    data() {
      return {
        datacollection: {
          labels: ['Started', 'Done', 'To do'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['#007bff', '#FF2A19', '#125FB2'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              // Data to be represented on y-axis
              data: [this.started, this.done, this.todo],
            },
          ],
        },
        // Chart.js options that controls the appearance of the chart
        options: {
          legend: {
            display: true,
            labels: {
              fontSize: 16,
            },
          },
          title: {
            display: true,
            text: 'Texts',
            fontSize: 14,
          },
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 80,
        },
      };
    },
    mounted() {
      this.renderChart(this.datacollection, this.options);
      this.updateChart();
    },
    watch: {
      started() {
        this.updateChart();
      },
      done() {
        this.updateChart();
      },
      todo() {
        this.updateChart();
      },
    },
    methods: {
      updateChart() {
        Vue.set(this.datacollection.datasets[0], 'data', [this.started, this.done, this.todo]);
        this.renderChart(this.datacollection, this.options);
      },
    },
  });
</script>
