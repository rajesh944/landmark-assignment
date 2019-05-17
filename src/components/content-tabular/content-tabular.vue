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
        table {
    width: 100%;
    border-collapse: collapse;
}
tr:nth-of-type(odd) {
    background: #eee;
}

th {
    background: #333;
    color: white;
    font-weight: bold;
}

td,
th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: left;
}

@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    table, thead, tbody, th, td, tr {
        display: block;
    }
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    tr {
        border: 1px solid #ccc;
    }
    td {
        /* Behave  like a "row" */
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
    }
    td:before {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
    }
    td:nth-of-type(1):before {
        content: "ID";
    }
    td:nth-of-type(2):before {
        content: "Name";
    }
    td:nth-of-type(3):before {
        content: "Phone";
    }
    td:nth-of-type(4):before {
        content: "Email";
    }
    td:nth-of-type(5):before {
        content: "Pswrd";
    }
    td:nth-of-type(6):before {
        content: "Time";
    }
}
   }
</style>