<template>
  <div class="main">
    <div class="info">
      <h2>Welcome to the "Unique Codes and Opportunities" Project!</h2>
      <div class="about">
        <span class="about title">Project Information:</span>
        <br/>
        <div class="about description">Welcome to the "Golden Lottery" — the thrilling world of chances and prizes! Here, you can purchase tickets to participate in exciting drawings for various prizes. Your luck might lead to winning unique gifts and thrilling experiences.</div>
      </div>
      <div class="rules"/>
    </div>
  </div>
</template>
<script>

export default {

}
</script>
<style lang="scss" scoped>
.main {
    color: var(--white-color);
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin: 0 auto;
    padding: 0 1rem;
    .info {
        .about, .rules, .present, .security, .join {
            .description {
                margin: 0;
                margin-left: 1.3rem;
            }
        }
    }
}</style>
