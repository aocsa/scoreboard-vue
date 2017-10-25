<template>
   <table class="stats">
         <tbody>
         <tr>
            <td>Players:</td>
            <td>{{length}}</td>
         </tr>
         <tr>
            <td>Total Points:</td>
            <td>{{totalpoints}}</td>
         </tr>
         </tbody>
   </table>
</template>

<script>
export default {
   props: {
      length: {
         type: Number
      },
      totalpoints: {
         type: Number
      }
   }
};
</script>

<style>

.header .stats,
.header .stopwatch {
  width: 170px;
}

.stats {
  margin-top: 0;
  font-weight: normal;
}

  .stats td:first-child {
    text-align: right;
    font-weight: normal;
    letter-spacing: 2px;
    color: #666;
    font-size: .7em;
  }

  .stats td:last-child {
    text-align: left;
  }

.stopwatch {
  padding: 15px 10px 5px 10px;
  margin: -5px -10px -5px 10px;
  background: #2f2f2f;
  border-radius: 0 15px 0 0;
}

  .stopwatch-time {
    font-family: monospace;
    font-size: 2em;
  }

  .stopwatch button {
    margin: 8px 5px;
    background-color: #222;
    border-radius: 5px;
    padding: 7px 8px;
    border: none;
    color: #999;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: none;
    text-transform: uppercase;
  }

  .stopwatch button:hover {
    background: #4b71b5;
    color: #fafafa;
    cursor: pointer;
  }

  .stopwatch h2 {
    font-size: .6em;
    margin: 0;
    font-weight: normal;
    letter-spacing: 2px;
    color: #666;
  }

</style>