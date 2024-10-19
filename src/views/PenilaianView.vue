<template>
  <FormComponent @selectedKaryawan="updateSelectedKaryawan" />
  <TableComponent @showPreview="showPreview" @resetPreview="hidePreview" />
  <PreviewComponent :item="selectedKaryawan" :kriteria="kriteria" :visible="showPreviewSection" />
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import PreviewComponent from "@/components/PreviewComponent.vue";
import TableComponent from "@/components/TableComponent.vue";

export default {
  name: "PenilaianView",
  components: {
    FormComponent,
    TableComponent,
    PreviewComponent,
  },
  data() {
    return {
      selectedKaryawan: "",
      kriteria: [],
      showPreviewSection: false,
    };
  },
  methods: {
    updateSelectedKaryawan(karyawan) {
      this.selectedKaryawan = karyawan;
    },
    showPreview(kriteria) {
      if (!this.selectedKaryawan || this.selectedKaryawan === "") {
        alert("Silahkan pilih karyawan terlebih dahulu.");
        return;
      }
      this.kriteria = kriteria;
      this.showPreviewSection = true;
    },
    hidePreview() {
      this.showPreviewSection = false;
    },
  },
};
</script>
