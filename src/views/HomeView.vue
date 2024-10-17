<template>
  <FormComponent @updateEmployee="setEmployee" />
  <TableComponent @showPreview="showPreview" />
  <PreviewComponent :employee="selectedEmployee" :kriteria="kriteria" :visible="showPreviewSection" />
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
      selectedEmployee: "",
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
    },
  },
};
</script>
