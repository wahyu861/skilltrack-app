<template>
  <div id="app">
    <div class="container mt-5">
      <h1 class="mb-4 text-center">Form Pengajuan Cuti</h1>
      <form class="border p-4 shadow-sm bg-light rounded" @submit.prevent="generatePDF">
        <!-- Nama Lengkap -->
        <div class="mb-3 d-flex align-items-center">
          <label for="name" class="form-label me-3" style="width: 150px; text-align: right">Nama Lengkap:</label>
          <input type="text" id="name" class="form-control flex-grow-1" v-model="name" placeholder="Masukkan nama lengkap" required />
        </div>

        <!-- Jenis Cuti -->
        <div class="mb-3 d-flex align-items-center">
          <label for="leaveType" class="form-label me-3" style="width: 150px; text-align: right">Jenis Cuti:</label>
          <select id="leaveType" class="form-select flex-grow-1" v-model="leaveType" required>
            <option value="" disabled>Pilih Jenis Cuti</option>
            <option value="Cuti Tahunan">Cuti Tahunan</option>
            <option value="Cuti Sakit">Cuti Sakit</option>
            <option value="Cuti Bersalin">Cuti Bersalin</option>
          </select>
        </div>

        <!-- Mulai Tanggal -->
        <div class="mb-3 d-flex align-items-center">
          <label for="startDate" class="form-label me-3" style="width: 150px; text-align: right">Mulai Tanggal:</label>
          <input type="date" id="startDate" class="form-control flex-grow-1" v-model="startDate" required />
        </div>

        <!-- Sampai Tanggal -->
        <div class="mb-3 d-flex align-items-center">
          <label for="endDate" class="form-label me-3" style="width: 150px; text-align: right">Sampai Tanggal:</label>
          <input type="date" id="endDate" class="form-control flex-grow-1" v-model="endDate" required />
        </div>

        <button type="submit" class="btn btn-primary w-100">Download PDF</button>
      </form>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  name: "AbsensiView",
  data() {
    return {
      name: "",
      leaveType: "",
    };
  },
  methods: {
    getCurrentDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      return `${day}-${month}-${year}`;
    },

    generatePDF() {
      const doc = new jsPDF();
      const currentDate = this.getCurrentDate();

      // Konversi string startDate dan endDate ke objek Date
      const startDateObj = new Date(this.startDate);
      const endDateObj = new Date(this.endDate);

      // Hitung perbedaan milidetik, kemudian ubah menjadi hari
      const timeDiff = endDateObj - startDateObj;
      const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Jumlah hari

      // Margin kiri
      const leftMargin = 20;
      const rightColX = 60;
      const baseY = 30;
      const lineSpacing = 10;

      // Atur teks yang muncul di atas gambar
      doc.setFontSize(12);
      doc.text(`Malang, ${currentDate}`, leftMargin, baseY);
      // Perihal
      doc.text(`Perihal : Permohonan Izin Cuti`, leftMargin, baseY + lineSpacing);
      doc.text(`Kepada Yth.,`, leftMargin, baseY + 3 * lineSpacing);
      doc.text(`Manager Sumber Daya Manusia`, leftMargin, baseY + 4 * lineSpacing);
      doc.text(`Di tempat.`, leftMargin, baseY + 5 * lineSpacing);

      // Salam pembuka
      doc.text(`Dengan hormat,`, leftMargin, baseY + 7 * lineSpacing);
      doc.text(`Yang bertanda tangan di bawah ini:`, leftMargin, baseY + 8 * lineSpacing);

      // Nama, Jenis Cuti, Jumlah Hari - menjaga titik dua sejajar
      const contentY = baseY + 9 * lineSpacing;
      doc.text("Nama", leftMargin, contentY);
      doc.text(":", leftMargin + 35, contentY);
      doc.text(this.name, rightColX, contentY);

      doc.text("Jenis Cuti", leftMargin, contentY + lineSpacing);
      doc.text(":", leftMargin + 35, contentY + lineSpacing);
      doc.text(this.leaveType, rightColX, contentY + lineSpacing);

      doc.text("Mulai Tanggal", leftMargin, contentY + 2 * lineSpacing);
      doc.text(":", leftMargin + 35, contentY + 2 * lineSpacing);
      doc.text(this.startDate, rightColX, contentY + 2 * lineSpacing);

      doc.text("Sampai Tanggal", leftMargin, contentY + 3 * lineSpacing);
      doc.text(":", leftMargin + 35, contentY + 3 * lineSpacing);
      doc.text(this.endDate, rightColX, contentY + 3 * lineSpacing);

      // Salam penutup
      const closingY = contentY + 5 * lineSpacing;
      doc.text(`Dengan ini mengajukan permohonan cuti selama ${dayDiff} hari sesuai jenis cuti yang saya pilih.`, leftMargin, closingY);

      doc.text(`Hormat saya,`, leftMargin, closingY + 2 * lineSpacing);
      doc.text(this.name, leftMargin, closingY + 4 * lineSpacing);

      // Menyimpan PDF
      doc.save("surat-cuti.pdf");
    },
  },
};
</script>

<style>
.container {
  max-width: 900px !important;
}

footer {
  margin-top: 20px;
}
</style>
