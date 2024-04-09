<script>
import axios from "axios";
export default {
    name: 'SingleProject',
    data () {


        return {
            project: [],
        }
    },
    methods: {
        getSingleProject(){
            axios.get(`http://127.0.0.1:8000/api/apiprojects/${this.$route.params.slug}`)
            .then( res=>{
                if(res.data.success){
                    this.project = res.data.project
                    // console.log(res.data.project)
                }else{
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    },
    mounted() {
        this.getSingleProject()
    },
}
</script>

<template>
    <div class="container">

        <figure>
                <img :src="'http://127.0.0.1:8000/storage/' + project.cover_image" alt="">
        </figure>
        <div class="info">
            <h3>{{ project.title }}</h3>
            <p><strong>Description:</strong> {{ project.description }}</p>
            <span v-if="project.type"><strong>Type:</strong> {{ project.type.type }}</span>
            <p v-if="project.technologies != ''">
                <strong>Technologies:</strong>
                <span v-for="(item, index) in project.technologies" :key="item.id">
                    {{ item.name + ', ' }}
                </span>
            </p>
    
        </div>
    </div>
</template>