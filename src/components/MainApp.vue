<script>
import axios from 'axios';
export default {
  name: "MainApp",
  data() {
    return {
      arrayProject: [],
      currentPage: '',
      lastPage: ''
    }
  },
  methods: {
    getApiProject(apiPage) {
      axios.get('http://127.0.0.1:8000/api/apiproject',
        {
          params: {
            page: apiPage
          }
        }
      )
      .then(res => {

        console.log(res.data.projects.data)

        this.arrayProject= res.data.projects.data
        this.currentPage=res.data.projects.data.current_page
        this.this.lastPage= res.data.projects.data.last_page
      })
    }
  },
  mounted(){
    this.getApiProject()
  }
}

</script>

<template>
  <h1>
    
  </h1>
</template>

<style scoped></style>
