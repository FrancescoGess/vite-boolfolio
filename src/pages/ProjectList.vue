<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "ProjectList",
    components: {
        ProjectCard
    },
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
    <main class="container">
        <div class="row"> 
                <ProjectCard v-for="(element, index) in arrayProjects" :key="element.id" :propsElement="element" />
        </div>

        <div class="pagination">
           
            <ul>
                <li>
                    <button @click="getApiProjects( currentPage - 1 )" :class="{'disabled': currentPage === 1}">
                        <i class="fa-solid fa-arrow-left"></i> Prev
                    </button>
                </li>

                <li v-for="(item, index) in lastPage" :key="index">
                    <button @click="getApiProjects( item )" :class="{'active': currentPage === item}">{{ item }}</button>
                </li>

                <li>
                    <button @click="getApiProjects( currentPage + 1 )" :class="{'disabled': currentPage === lastPage}">
                        Next <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </li>
            </ul>
        </div>
    </main>
</template>