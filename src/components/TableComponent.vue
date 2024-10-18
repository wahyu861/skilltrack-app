<template>
  <div class="container">
    <div class="row">
      <label class="mt-2 fw-bold" style="font-size: 12px; margin-left: -35px; color: #000">Tabel Penilaian</label>
    </div>
    <table class="table table-striped table-bordered mt-3">
      <thead>
        <tr class="table-warning">
          <th class="text-center">No</th>
          <th class="text-center">Kriteria Penilaian</th>
          <th class="text-center">Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in kriteria" :key="index">
          <td class="text-center">{{ index + 1 }}</td>
          <td class="text-start">{{ item.text }}</td>
          <td class="text-center">
            <input type="number" v-model="item.score" class="form-control" min="1" max="5" @input="validateScore(item)" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-end">
      <button class="btn btn-danger" @click="reset">Reset</button>
      <button class="btn btn-primary" @click="preview">Preview</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      kriteria: [
        { text: "Mengerti tentang Bahasa Pemrograman PHP", score: 0 },
        { text: "Mengerti tentang Bahasa pemrograman HTML & Javascript", score: 0 },
        { text: "Pernah/menggunakan salah satu/beberapa sistem database (MySQL, SQL Server, PostgreSQL, dsb)", score: 0 },
        { text: "Paham konsep OOP (Object-Oriented Programming)", score: 0 },
        { text: "Paham konsep dasar system Git", score: 0 },
        { text: "Memiliki pengalaman menggunakan framework web (Laravel, CodeIgniter, Vue js, Express, dll )", score: 0 },
        { text: "Mampu bekerja secara tim dengan baik", score: 0 },
        { text: "Lancar berbahasa Inggris", score: 0 },
      ],
    };
  },
  methods: {
    reset() {
      this.kriteria.forEach((item) => (item.score = 0));
      this.$emit("resetPreview");
    },
    preview() {
      this.$emit("showPreview", this.kriteria);
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
