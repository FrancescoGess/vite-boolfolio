<script>
export default {
    name: "ProjectCard",
    props: [
        propsElement
    ],
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <div class="col">
        <figure>
            <router-link :to="{ name: 'single-project', params: { slug: propsElement.slug } }">
                <img :src="'http://127.0.0.1:8000/storage/' + propsElement.cover_image" alt="">
            </router-link>
            
        </figure>
        <div class="info">
             <router-link :to="{ name: 'single-project', params: { slug: propsElement.slug } }" class="no-decoration">
                 <h3>{{ propsElement.title }}</h3>

             </router-link>
            <p>{{ propsElement.description }}</p>
            <span v-if="propsElement.type">Type: {{ propsElement.type.type }}</span>
            <p v-if="propsElement.technologies.length > 0 ">
                Technologies:
                <span v-for="(item, index) in propsElement.technologies" :key="item.id">
                    {{ item.name + ', ' }}
                </span>
            </p>

        </div>
    </div>
</template>