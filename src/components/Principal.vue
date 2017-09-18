<template>
<div class="bg-light">
  <div>
    <navbar class="mb-1"></navbar>
    <div class="row">
      <div class="col-12 d-flex justify-content-center mb-1">
        <h1 class="text-dark">Go-english</h1>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-3 bg-light">
        <side-menu></side-menu>
      </div>
      <div class="col-9">
        <div class="row d-flex justify-content-around">
          <div class="col-sm-4 pb-5">
            <texts-chart v-bind:started="texts.started"
                         v-bind:done="texts.done"
                         v-bind:todo="texts.todo">
            </texts-chart>
          </div>
          <div class="col-sm-4 pb-5">
            <sentences-chart v-bind:all="sentences.all"
                             v-bind:today="sentences.today"
                             v-bind:tomorrow="sentences.tomorrow">
            </sentences-chart>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <footer class="row border-0">
      <div class="col-12 d-flex justify-content-center">
        <p>© 2017 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </div>
    </footer>
  </div>
</div>
</template>

<script>
import getScore from '@/services/dashboard';

import Navbar from './Navbar';
import SideMenu from './SideMenu';
import TextsChart from './TextsChart';
import SentencesChart from './SentencesChart';

export default {
  name: 'principal',
  components: {
    Navbar,
    SideMenu,
    TextsChart,
    SentencesChart,
  },
  data() {
    return {
      texts: '',
      sentences: '',
      dataChart: [],
    };
  },
  mounted() {
    getScore()
      .then((response) => {
        this.texts = Object.assign({}, {
          started: parseInt(response[0].texts_started, 10),
          done: parseInt(response[0].texts_done, 10),
          todo: parseInt(response[0].texts_to_do, 10),
        });
        this.sentences = Object.assign({}, {
          all: response[0].sentences_all,
          today: response[0].sentences_today,
          tomorrow: response[0].sentences_tomorrow,
        });
      });
  },
};
</script>
