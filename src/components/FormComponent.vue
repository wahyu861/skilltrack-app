<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="SelectEmployee">Nama Karyawan</label>
        <select id="selectEmployee" v-model="selectedEmployee" class="form-control">
          <option v-for="employee in employees" :key="employee" :value="employee">{{ employee }}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: FormComponent,
  data() {
    return {
      selectedEmployee: "",
      employees: ["M. Eko Wahyudi", "M. Achsan Nauval", "M. Zainal Fanani"],
    };
  },
};
</script>
