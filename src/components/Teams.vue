<script setup lang="ts"></script>

<template>
  <div class="w-3/5">
    <table
      class="w-full table border border-solid border-primary text-center border-collapse"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Players</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Saves</th>
          <th>Games</th>
          <th>Win Ratio</th>
          <th>Draw Ratio</th>
          <th>Loss Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="w-min">Flames</td>
          <td class="w-min">Glaxer, Fuzz, TPD</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td class="w-min">Flames</td>
          <td class="w-min">Glaxer, Fuzz, TPD</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td class="w-min">Flames</td>
          <td class="w-min">Glaxer, Fuzz, TPD</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td class="w-min">Flames</td>
          <td class="w-min">Glaxer, Fuzz, TPD</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td class="w-min">Flames</td>
          <td class="w-min">Glaxer, Fuzz, TPD</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td class="w-min">Flames</td>
          <td class="w-min">Glaxer, Fuzz, TPD</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td class="w-min">Flames</td>
          <td class="w-min">Glaxer, Fuzz, TPD</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table td {
  padding: 15px;
}
table thead th {
  background-color: var(--color-primary);
  color: var(--color-white);
}
table tbody td {
  font-weight: 400;
  border-color: var(--color-dark);
  border-width: 1px;
  border-style: solid;
}
table tbody tr:nth-child(even) {
  background-color: var(--color-gray);
}
</style>
