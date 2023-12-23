<template>
  <div class="main">
    <!-- <loginComponent/> -->
    <div class="info">
      <h1>Welcome to the "Unique Codes and Opportunities" Project!</h1>
      <div class="about">
        <span class="about title">About the Project:</span>
        <br/>
        <div class="about description">We present a unique opportunity for each participant to purchase up to <span>5 special codes</span> and enter the thrilling world of potential prizes! Our project is designed for those seeking exciting emotions and unique experiences.</div>
      </div>
      <div class="work">
        <span class="work title">How It Works:</span>
        <div class="work description">
          <span>Code Acquisition:</span> Anyone can purchase up to 5 unique codes, granting participation in our regular giveaways.
          <br/>
          <span>Participation in Giveaways:</span> Code owners become participants in our regular giveaways, where each code has a chance to win <span>Exciting Prizes</span>.</div>
      </div>
      <div class="present">
        <span class="present title">Prizes</span>
        <div class="present description">Giveaways feature a variety of <span>Exciting Prizes!</span> From tech gadgets to unique experiences and travels – we have something for everyone.</div>
      </div>
      <div class="security">
        <span class="security title">Security and Fairness:</span>
        <div class="security description">We guarantee absolute security and fairness in our giveaways. Winner selection algorithms are designed to ensure fairness and randomness.</div>
      </div>
      <div class="join">
        <span class="join title">Join us now and open the door to a world of thrilling possibilities!</span>
        <div class="join description">Don't miss your chance to own unique prizes – your code could be the key to an exciting adventure! <span>Stay Tuned</span> for updates on our platforms and participate in the giveaways!</div>
      </div>
    </div>
  </div>
</template>
<script>
// import loginComponent from './loginComponent.vue'
export default {
  components: {
    // loginComponent
  }
}
</script>
<style lang="scss" scoped>
.main {
    color: var(--white-color);
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    width: 80rem;
    gap: 2rem;
    margin: 0 auto;
    .info {
        .about, .work, .present, .security, .join {
            .description {
                margin: 0;
                margin-left: 1.3rem;
            }
        }
    }
}</style>
