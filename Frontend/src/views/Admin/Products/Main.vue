<template>
   <router-view/>
</template>
<script lang="ts">
import GridViewAccount from '../Products/list-view/GridView.vue';
import TableView from '../Products/list-view/TableView.vue';
export default {
   name:'Main',
   components: {GridViewAccount,TableView}
}
</script>