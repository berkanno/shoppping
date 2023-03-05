<template>
    <v-footer color="white">
        <v-row justify="center">
            <v-col cols="3" v-for="item in footerİnformations" :key="item">
                <v-card class="text-center" flat>
                    <v-card-title class="text-uppercase font-weight-bond">
                        {{ item.title }}
                    </v-card-title>
                <v-card-text class="text-overline">
                    {{ item.text }}
                </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="text-center" flat>
                    <v-card-text>
eXe © - 2002
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
            
        
    </v-footer>
</template>
<script>
export default {
    data() {
        return {
            footerİnformations: [
                { title: "about", text: " dolor sit amet consectetur adipisicing elit. Libero eveniet maiores inventore nobis blanditiis exercitationem!" },
                { title: "History", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quibusdam voluptatem, possimus autem totas incidunt harum tempora?" },
            {title:"design",text:"eat quod sapiente sequi alias nemo facere a reiciendis! Molestiae quasi assumenda quos velit eos incidunt harum tempora?"}
        ]
    }}
}
</script>