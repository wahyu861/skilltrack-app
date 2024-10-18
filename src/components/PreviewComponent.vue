<template>
  <div>
    <div class="container mt-5" v-if="visible">
      <div class="card p-3 text-start w-100" ref="pdfContent">
        <h5><span class="fw-bold">Nama :</span>&nbsp;{{ item.nama }}</h5>
        <h5><span class="fw-bold">Posisi :</span>&nbsp;{{ item.posisi }}</h5>
        <h5><span class="fw-bold">Alamat :</span>&nbsp;{{ item.alamat }}</h5>
        <br />
        <h5 class="fw-bold">Daftar Penilaian</h5>
        <ol class="list-group list-group-numbered">
          <li v-for="(item, index) in kriteria" :key="index" class="list-group-item">
            {{ item.text }}
            <div v-if="item.score > 0" class="stars ms-3">
              <span v-for="n in item.score" :key="n" class="text-warning">&#9733;</span>
            </div>
          </li>
        </ol>
        <div class="d-flex justify-content-end mt-4">
          <div class="text-start">
            <h5 class="fw-bold">
              Total Presentase: <span class="text-danger">{{ percentage }}%</span>
            </h5>
            <h5 class="mt-3 fw-bold">
              Grade: <span class="text-danger">{{ grade }}</span>
            </h5>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <button class="btn btn-success download" @click="downloadPDF">Download PDF</button>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  name: "PreviewComponent",
  props: ["item", "kriteria", "visible"],
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
  methods: {
    async downloadPDF() {
      const pdfContent = this.$refs.pdfContent;

      const canvas = await html2canvas(pdfContent, {
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 20;

      // Menyimpan gambar ke PDF
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 20;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Menyimpan PDF
      pdf.save("daftar_penilaian.pdf");
    },
  },
};
</script>

<style>
.download {
  margin: 20px 0;
  width: 15%;
}
</style>
