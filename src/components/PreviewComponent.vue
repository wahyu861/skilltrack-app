<template>
  <div class="container" v-if="visible">
    <h3>Nama: {{ employee }}</h3>
    <h4>Daftar Penilaian</h4>
    <ul>
      <li v-for="(item, index) in kriteria" :key="index">{{ item.text }}: {{ item.score }}</li>
    </ul>
    <h5>Total Presentase: {{ percentage }}%</h5>
    <h6>Grade: {{ grade }}</h6>
    <button class="btn btn-succes" @click="downloadPDF">Download PDF</button>
  </div>
</template>

<script>
export default {
  nama: "PreviewComponent",
  props: ["employee", "kriteria", "visible"],
  computed: {
    percentage() {
      const totalScore = this.kriteria.reduce((sum, item) => sum + item.score, 0);
      return ((totalScore / (this.kriteria.length * 5)) * 100).toFixed(2);
    },
    grade() {
      const perc = this.percentage;
      if (perc >= 90) return "A";
      if (perc >= 80) return "B";
      if (perc >= 70) return "C";
      if (perc >= 60) return "D";
      return "E";
    },
  },
};
</script>
