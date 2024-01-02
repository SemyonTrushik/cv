<template>
  <div class="account-wrapper">
    <div class="info">
      <div class="user-icon icon"/>
      <div class="name">SEMEN</div>
      <div class="surname">TRUSHIK</div>
      <div class="year">27 y.o</div>
    </div>
    <div class="history">
      <div class="history-title">History</div>
      <div class="history-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit alias quae ullam. Perspiciatis facilis suscipit odit quo voluptatem fugit commodi doloribus ex adipisci saepe, aliquid aspernatur deserunt repellat quidem.</div>
      <div class="history-buy">you buy 30 ticks and spent 900$</div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.account-wrapper {
  color: var(--white-color);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 2rem;
  .info {
    width: 100%;
    text-align: center;
    .icon {
      margin: 0 auto;
    }
    .name, .surname, .year, .description {
      margin-top: 0.3rem;
      align-self: center;
    }
  }
  .history {
    margin-top: 5rem;
    .history-title {
      text-align: center;
    }
    .history-description {
      margin-top: 2rem;
    }
  }
}
</style>
