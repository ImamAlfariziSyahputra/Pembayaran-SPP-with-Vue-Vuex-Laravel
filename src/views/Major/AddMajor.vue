<template>
  <b-modal id="modal-add-major" title="Major" scrollable hide-footer>
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Nama Jurusan -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              Nama Jurusan :
            </label>
            <ValidationProvider v-slot="{ errors }" name="nama_jurusan" rules="required|min:2">
              <b-form-input
                id="input-nama-jurusan"
                v-model="nama_jurusan"
                type="text"
                required
                placeholder="Enter Nama Jurusan"
              ></b-form-input>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Deskripsi -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              Deskripsi :
            </label>
            <ValidationProvider v-slot="{ errors }" name="deskripsi" rules="required">
              <b-form-input
                id="input-deskripsi"
                v-model="deskripsi"
                type="text"
                required
                placeholder="Enter deskripsi"
              ></b-form-input>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-button class="btn btn-primary ml-auto float-right ml-4" type="submit" variant="light-primary">
            Submit
          </b-button>
      </b-form>
    </ValidationObserver>
  </b-modal>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      nama_jurusan: null,
      deskripsi: null,
    }
  },
  computed: {
    // ...mapState('student', ['dataUpdate'])
  },
  methods: {
    resetForm() {
      this.nama_jurusan = ''
      this.deskripsi = ''
    },
    onSubmit() {
      const dataSend = {
        nama_jurusan: this.nama_jurusan,
        deskripsi: this.deskripsi,
      };
      this.$store
        .dispatch('major/addMajor', dataSend)
        .then((resp) => {
          if (resp.status === 200) {
            this.$bvModal.hide('modal-add-major');
            this.$store.dispatch('major/getMajors');
            this.resetForm()
            Swal.fire(`Success`, `Data has been added!`, 'success');
          } else {
            console.log('Add error')
            Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
        });
    },
  }
}
</script>

<style>

</style>