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
  name: "HomeView",
  components: {
    FormComponent,
    TableComponent,
    PreviewComponent,
  },
  data() {
    return {
      selectedKaryawan: null,
      kriteria: [],
      showPreviewSection: false,
    };
  },
  methods: {
    setEmployee(employee) {
      this.selectedEmployee = employee;
    },
    showPreview(kriteria) {
      this.kriteria = kriteria;
      this.showPreviewSection = true;
      this.$emit("showPreviewSection");
    },
    hidePreview() {
      this.showPreviewSection = false;
    },
    updateSelectedKaryawan(karyawan) {
      this.selectedKaryawan = karyawan;
    },
  },
};
</script>
