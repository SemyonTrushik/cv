<template>
  <div class="account-wrapper">
    <div class="info">
      <div class="user-icon icon"/>
      <div class="name">SEMEN</div>
      <div class="surname">TRUSHIK</div>
      <div class="year">27 y.o</div>
    </div>
    <div class="project">
      <div class="project-title">Buy AND Take</div>
      <div class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit alias quae ullam. Perspiciatis facilis suscipit odit quo voluptatem fugit commodi doloribus ex adipisci saepe, aliquid aspernatur deserunt repellat quidem.</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.account-wrapper {
  color: var(--white-color);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 70rem;
  margin-top: 2rem;
  .info {
    width: 20rem;
    text-align: center;
    .icon {
      margin: 0 auto;
    }
    .name, .surname, .year, .description {
      margin-top: 0.3rem;
      align-self: center;
    }
  }
  .project {
    margin-top: 5rem;
    .project-title {
      text-align: center;
    }
    .project-description {
      margin-top: 2rem;
    }
  }
}
</style>
