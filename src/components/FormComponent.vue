<template>
  <div class="container">
    <form>
      <div class="form-group col-3">
        <label for="name" class="row ms-1 mb-2 fw-bold" style="font-size: 12px; color: #000">Nama Karyawan</label>
        <select id="name" v-model="selectedKaryawan" @change="emitSelectedKaryawan" class="form-select">
          <option disabled value="">Pilih Karyawan</option>
          <option v-for="item in dataKaryawan" :key="item.nama" :value="item">{{ item.nama }}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      selectedKaryawan: "",
      dataKaryawan: [
        { nama: "M. Achsan Nauval", posisi: "Data Analyst", alamat: "Dusun Pade'an, Desa Jarangan, Rejoso - Pasuruan" },
        { nama: "M. Eko Wahyudi", posisi: "Developer", alamat: "Jln. Pucangan, Purworejo - Pasuruan" },
        { nama: "M. Zainal Fanani", posisi: "UI/UX Designer", alamat: "Jln. Soekarno Hatta, No. A17, Lowokwaru - Malang" },
      ],
    };
  },
  methods: {
    emitSelectedKaryawan() {
      if (this.selectedKaryawan) {
        this.$emit("selectedKaryawan", this.selectedKaryawan);
      } else {
        alert("Pilih karyawan terlebih dahulu.");
      }
    },
  },
};
</script>
