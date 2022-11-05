<script setup lang="ts"></script>

<template>
  <div class="w-3/5">
    <table
      class="w-full table border border-solid border-primary text-center border-collapse"
    >
      <thead>
        <tr>
          <th>Position</th>
          <th>Teams</th>
          <th>Played</th>
          <th>Won</th>
          <th>Tied</th>
          <th>Lost</th>
          <th>Game Difference</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="w-min">Atsarlis</td>
          <td>9</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>25</td>
          <td>27</td>
        </tr>
        <tr>
          <td>1</td>
          <td class="w-min">Atsarlis</td>
          <td>9</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>25</td>
          <td>27</td>
        </tr>
        <tr>
          <td>1</td>
          <td class="w-min">Atsarlis</td>
          <td>9</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>25</td>
          <td>27</td>
        </tr>
        <tr>
          <td>1</td>
          <td class="w-min">Test</td>
          <td>9</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>25</td>
          <td>27</td>
        </tr>
        <tr>
          <td>1</td>
          <td class="w-min">klsdfkjh23kjh4kj2hrkjhdsfkgjh</td>
          <td>9</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>25</td>
          <td>27</td>
        </tr>
        <tr>
          <td>1</td>
          <td class="w-min">klsdfkjh23kjh4kj2hrkjhdsfkgjh</td>
          <td>9</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>25</td>
          <td>27</td>
        </tr>
        <tr>
          <td>1</td>
          <td class="w-min">klsdfkjh23kjh4kj2hrkjhdsfkgjh</td>
          <td>9</td>
          <td>9</td>
          <td>0</td>
          <td>0</td>
          <td>25</td>
          <td>27</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table td {
  padding: 10px;
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
table tbody tr:first-child {
  background-color: var(--color-lgreen);
}

table tbody tr:nth-child(2),
table tbody tr:nth-child(3) {
  background-color: var(--color-lyellow);
}

table tbody tr:nth-last-child(2),
table tbody tr:nth-last-child(3) {
  background-color: var(--color-lorange);
}

table tbody tr:last-child {
  background-color: var(--color-lred);
}
</style>
