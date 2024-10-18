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
      selectedKaryawan: null, // Mengubah dari string kosong menjadi null
      dataKaryawan: [
        { nama: "M. Achsan Nauval", posisi: "Developer", alamat: "Jln. Soekarno Hatta, No. A17, Lowokwaru - Malang" },
        { nama: "M. Eko Wahyudi", posisi: "Developer", alamat: "Jln. Pucangan, Purworejo - Pasuruan" },
        { nama: "M. Zainal Fanani", posisi: "Developer", alamat: "Jln. Soekarno Hatta, No. A17, Lowokwaru - Malang" },
      ],
    };
  },
  methods: {
    emitSelectedKaryawan() {
      this.$emit("selectedKaryawan", this.selectedKaryawan); // Emit seluruh objek karyawan yang dipilih
    },
  },
};
</script>
