<script>
  // Importing Line class from the vue-chartjs wrapper
  import { Doughnut } from 'vue-chartjs';
  // Exporting this so it can be used in other components
  export default Doughnut.extend({
    name: 'sentences-chart',
    props: ['sentences'],
    data() {
      return {
        datacollection: {
        // Data to be represented on x-axis
          labels: ['All', 'Today', 'Tomorrow'],
          datasets: [
            {
              label: 'Data Sentences',
              backgroundColor: ['#007bff', '#FF2A19', '#125FB2'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              // Data to be represented on y-axis
              data: [this.sentences.all, this.sentences.today, this.sentences.tomorrow],
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
            text: 'Studied sentences',
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
