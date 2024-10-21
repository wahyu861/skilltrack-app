<template>
  <div class="container">
    <div class="row">
      <label class="mt-2 fw-bold" style="font-size: 12px; margin-left: -35px; color: #000">Tabel Penilaian</label>
    </div>
    <table class="table table-striped table-bordered mt-1">
      <thead>
        <tr>
          <th class="text-center" style="background-color: #a5a5a5; color: #fff">No</th>
          <th class="text-center" style="background-color: #a5a5a5; color: #fff">Kriteria Penilaian</th>
          <th class="text-center" style="background-color: #a5a5a5; color: #fff">Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in kriteria" :key="index">
          <td class="text-center">{{ index + 1 }}</td>
          <td class="text-start">{{ item.text }}</td>
          <td class="text-center">
            <input type="number" v-model="item.score" class="form-control" min="1" max="5" @input="validateScore(item)" required />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-danger" @click="reset">Reset</button>
      <button class="btn btn-primary" @click="preview">Preview</button>
    </div>
  </div>
  <div class="border-bottom border-black border-3 mx-auto" style="max-width: 950px"></div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      kriteria: [
        { text: "Mengerti tentang Bahasa Pemrograman PHP", score: null },
        { text: "Mengerti tentang Bahasa pemrograman HTML & Javascript", score: null },
        { text: "Pernah/menggunakan salah satu/beberapa sistem database (MySQL, SQL Server, PostgreSQL, dsb)", score: null },
        { text: "Paham konsep OOP (Object-Oriented Programming)", score: null },
        { text: "Paham konsep dasar system Git", score: null },
        { text: "Memiliki pengalaman menggunakan framework web (Laravel, CodeIgniter, Vue js, Express, dll )", score: null },
        { text: "Mampu bekerja secara tim dengan baik", score: null },
        { text: "Lancar berbahasa Inggris", score: null },
      ],
    };
  },
  methods: {
    reset() {
      this.kriteria.forEach((item) => (item.score = 0));
      this.$emit("resetPreview");
    },
    preview() {
      if (this.kriteria.every((item) => item.score > 0)) {
        this.$emit("showPreview", this.kriteria);
      } else {
        alert("Semua field score harus diisi dengan nilai antara 1-5.");
      }
    },
    validateScore(item) {
      if (item.score < 1) {
        item.score = 1;
      } else if (item.score > 5) {
        item.score = 5;
      }
    },
  },
};
</script>

<style>
button {
  margin-left: 20px !important;
  margin-top: 10px !important;
  width: 10%;
}
</style>
