<template>
  <table>
    <caption>
      <h3>You have the <span>opportunity</span> to get a maximum <span>of 5 codes to win</span></h3>
    </caption>
    <thead class="t-head">
      <th class="id">ID</th>
      <th class="code">Win Code</th>
      <th class="data">Buy Data</th>
    </thead>
    <tbody>
      <tr>
        <td class="id">1</td>
        <td class="code">312312312312312</td>
        <td class="data">25.10.12</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="scss" scoped>
  table {
    width: 60rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--white-color);
    .id, .data, .code {
      height: 2rem;
    }
    .t-head {
      .id, .data, .code {
        height: 2.5rem;
        font-size: 1.5rem;
      }
    }
    .id, .data {
      text-align: start;
      width: 7rem;
      font-size: 1rem;
    }
    .code {
      text-align: center;
      font-size: 1rem;
    }
  }
</style>
