<template>
  <div class="wrapper-table" id="content-table">
        <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Pswrd</th>
                        <th>Time</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="eachRow in tabularList" >
                        <td>{{eachRow.id}}</td>
                        <td>{{eachRow.name}}</td>
                        <td>{{eachRow.phone}}</td>
                        <td>{{eachRow.email}}</td>
                        <td>{{eachRow.password}}</td>
                        <td>{{eachRow.time}}</td>
                    </tr>
                </tbody>
            </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  },
  props:['tabularList']
}
</script>

<style lang="scss" scoped>
 .wrapper-table {
        display: flex;
        justify-content: center;
        margin-left: 2rem;
        tr {
            border: 0.03rem solid black;
        }
        td,th {
            border: 0.03rem solid black;
            padding: 0.2rem;
            font-size: 1.2rem;
            white-space:pre-wrap; 
            word-wrap:break-word
        }table {
            @media only screen and (max-width: 1024px) {
                width:100%;
                font-size: 1.6rem;
          }
        }
      
   }
</style>