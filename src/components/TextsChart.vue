<script>
  // Importing Line class from the vue-chartjs wrapper
  import { Doughnut } from 'vue-chartjs';
  // Exporting this so it can be used in other components
  export default Doughnut.extend({
    name: 'texts-chart',
    props: ['texts'],
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
              data: [this.texts.started, this.texts.done, this.texts.todo],
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
    },
  });
</script>
