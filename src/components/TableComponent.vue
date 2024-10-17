<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Kriteria Penilaian</th>
          <th>Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in kriteria" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.text }}</td>
          <td><input type="number" v-model="item.score" class="form-control" /></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-danger" @click="reset">Reset</button>
    <Putton class="btn btn-primary" @click="preview">Preview</Putton>
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
    },
    preview() {
      this.$emit("showPreview", this.kriteria);
    },
  },
};
</script>
