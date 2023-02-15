import bus from '@/utils/bus.js';
// mixin
export default {

    created(){
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST',this.$route.name)
        .then(() => {
            bus.$emit('end:spinner');
        })
        .catch((error) => {
            console.log(error);
        });
      }

}