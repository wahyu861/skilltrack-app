<template>
  <div id="app" class="container mt-4">
    <h3 class="text-center mb-4">Penilaian Absensi</h3>

    <!-- Form for Name and Address -->
    <div class="mb-3 row">
      <label for="name" class="col-sm-2 col-form-label">Nama Karyawan</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" v-model="employee.name" placeholder="Panji Gumilang" />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="position" class="col-sm-2 col-form-label">Posisi</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="position" v-model="employee.position" placeholder="Developer" />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="address" class="col-sm-2 col-form-label">Alamat</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="address" v-model="employee.address" placeholder="Jl. Soekarno Hatta, No. A17, Lowokwaru - Malang" />
      </div>
    </div>

    <!-- Table for Evaluation -->
    <table class="table table-bordered">
      <thead class="table-light">
        <tr>
          <th>No</th>
          <th>Kriteria Penilaian</th>
          <th>Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(criteria, index) in evaluation" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ criteria.title }}</td>
          <td>
            <select class="form-select" v-model="criteria.score">
              <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Buttons for Reset and Preview -->
    <div class="d-flex justify-content-between">
      <button class="btn btn-danger" @click="resetForm">Reset</button>
      <button class="btn btn-secondary" @click="previewForm">Pratinjau</button>
    </div>

    <!-- Summary Section -->
    <div class="mt-5">
      <h4 class="text-center">Ringkasan Penilaian</h4>
      <p><strong>Nama:</strong> {{ employee.name }}</p>
      <p><strong>Posisi:</strong> {{ employee.position }}</p>
      <p><strong>Alamat:</strong> {{ employee.address }}</p>

      <ul>
        <li v-for="(criteria, index) in evaluation" :key="index">{{ criteria.title }}: {{ criteria.score }} ★</li>
      </ul>

      <p><strong>Total Persentase:</strong> {{ totalPercentage }}%</p>
      <p><strong>Grade:</strong> {{ grade }}</p>

      <button class="btn btn-primary mt-3" @click="downloadReport">Download</button>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
export default {
  name: "HelloWorld",
  data() {
    return {
      employee: {
        name: "Panji Gumilang",
        position: "Developer",
        address: "Jl. Soekarno Hatta, No. A17, Lowokwaru - Malang",
      },
      evaluation: [
        { title: "Mengerti tentang Bahasa pemrograman PHP", score: 4 },
        { title: "Mengerti tentang Bahasa pemrograman HTML & Javascript", score: 5 },
        { title: "Menggunakan sistem database (MySQL, PostgreSQL, dll)", score: 4 },
        { title: "Paham konsep OOP (Object-Oriented Programming)", score: 4 },
        { title: "Paham dasar sistem Git", score: 3 },
        { title: "Pengalaman menggunakan framework web (Laravel, dll)", score: 4 },
        { title: "Mampu bekerja secara tim dengan baik", score: 4 },
        { title: "Lancar berbahasa Inggris", score: 5 },
      ],
    };
  },
  computed: {
    totalPercentage() {
      const total = this.evaluation.reduce((sum, criteria) => sum + criteria.score, 0);
      return ((total / (this.evaluation.length * 5)) * 100).toFixed(2);
    },
    grade() {
      const percentage = this.totalPercentage;
      if (percentage >= 90) return "A";
      if (percentage >= 80) return "B+";
      if (percentage >= 70) return "B";
      if (percentage >= 60) return "C";
      return "D";
    },
  },
  methods: {
    resetForm() {
      this.employee.name = "";
      this.employee.position = "";
      this.employee.address = "";
      this.evaluation.forEach((criteria) => {
        criteria.score = 0;
      });
    },
    previewForm() {
      alert("Pratinjau form tidak tersedia dalam demo ini");
    },
    downloadReport() {
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text("Ringkasan Penilaian", 10, 10);

      // Employee Details
      doc.setFontSize(12);
      doc.text(`Nama: ${this.employee.name}`, 10, 20);
      doc.text(`Posisi: ${this.employee.position}`, 10, 30);
      doc.text(`Alamat: ${this.employee.address}`, 10, 40);

      // Evaluation Table
      let yPosition = 50;
      doc.text("Daftar Penilaian:", 10, yPosition);

      this.evaluation.forEach((criteria, index) => {
        yPosition += 10;
        doc.text(`${index + 1}. ${criteria.title}: ${criteria.score} ★`, 10, yPosition);
      });

      // Total Percentage and Grade
      yPosition += 20;
      doc.text(`Total Persentase: ${this.totalPercentage}%`, 10, yPosition);
      doc.text(`Grade: ${this.grade}`, 10, yPosition + 10);

      // Save PDF
      doc.save("evaluation_report.pdf");
    },
  },
};
</script>
