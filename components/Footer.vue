<template>
  <div class="footerMainContainer bg-dark">
    <div class="footerColsContainer">
      <div class="footerColumn">
        <div class="footerSiteName">
          <h3>Yoga Trainer Trainers</h3>
        </div>
        <div class="footerSiteDesc">
          Getting your Yoga Trainer has never been easier. Find talented yoga
          trainers anywhere, anytime. Book and pay for sessions with just a few
          clicks.
        </div>
      </div>
      <div class="footerColumn">
        <div class="footerSiteName">
          <h3>Links</h3>
        </div>
        <div class="footerColPagesLinks">
          <ul>
            <li>Home</li>
            <li>Find a barber</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div class="footerColumn">
        <div class="footerColTitle">
          <h3>Follow Us</h3>
        </div>
        <div class="footerColLinks">
          <a href="https://web.facebook.com/" target="_blank" rel="noreferrer">
            <i class="fab fa-facebook-square fa-3x">facebook</i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i class="fab fa-instagram-square fa-3x">instagram</i>
          </a>
          <a
            href="https://github.com/yaserananbeh/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github-square fa-3x">github</i>
          </a>
        </div>
      </div>
    </div>
    <div class="copyRightArea">ALL RIGHTS RESERVED 2022 &copy;</div>
  </div>
</template>
<style scoped>
.footerMainContainer {
  background-color: rgb(0 0 0 / 87%);
  color: white;
  padding: 1em;
  font-size: 0.8rem;
}
.footerMainContainer > .footerColsContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1em;
}
.footerMainContainer h3 {
  font-weight: 700;
  font-size: 1rem;
}
.footerMainContainer > .footerColsContainer > * {
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  text-align: center;
}
.footerMainContainer > .footerColsContainer .footerColPagesLinks * {
  text-decoration: none;
  list-style: none;
  padding: 0;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
div.footerColsContainer > div:nth-child(1) > div.footerSiteDesc {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footerMainContainer > .footerColsContainer .footerColPagesLinks {
  height: 100%;
  padding: 1em 0;
}
.footerMainContainer > .copyRightArea {
  text-align: center;
  border-top: 2px solid rgb(134, 134, 134);
  width: 50%;
  margin: auto;
  padding-top: 1em;
}

.footerMainContainer .footerColLinks {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  margin: auto;
  height: 100%;
}
.footerColLinks i.fab {
  color: rgb(196, 196, 196);
}
@media screen and (max-width: 768px) {
  .footerMainContainer > .footerColsContainer {
    grid-template-columns: 1fr;
  }
  .footerMainContainer > .footerColsContainer > * {
    padding: 10px 0;
  }
  .footerMainContainer > .footerColsContainer .footerColPagesLinks {
    padding: 0;
  }
  .footerMainContainer > .copyRightArea {
    width: 90%;
  }
}
</style>