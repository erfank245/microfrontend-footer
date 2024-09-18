<template>
  <div>
    <footer>
      <router-link
        class="nav-link"
        active-class="active-nav-link"
        to="/"
      >
        خانه
      </router-link>
      <router-link
        class="nav-link"
        active-class="active-nav-link"
        to="/link-1"
      >
        لینک ۱
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
  },
};
</script>

<style scoped>
footer {
  direction: rtl;
  height: 120px;
  margin: 1rem 0;
  padding: 2rem calc(calc(100vw - 700px) / 2);
  background-color: white;
  transition: left 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.navbar-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo-link .logo {
  height: 60px;
}
.logo-link .product-name {
  color: black;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
}
.nav-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}
.active-nav-link {
  font-weight: 600;
}

</style>