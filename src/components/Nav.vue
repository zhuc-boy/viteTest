<template>
    <div class="Layout">
        <div class="Top">
        </div>
        <div class="LeftNav">
            <router-link to="/DiyForm">Go to DiyForm</router-link>
            <!-- <br />
            <router-link to="/input">Go to input</router-link>
            <br />
            <router-link to="/alert">Go to alert</router-link>
            <br/>
            <router-link to="/request">Go to request</router-link> -->
        </div>
        <div class="MainContent">
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
.Layout {
    display: grid;
    min-width: 100vw;
    min-height: 100vh;
    grid-template-areas:
        "Top Top"
        "Leftnav content";
    grid-template-rows: 50px 1fr;
    grid-template-columns: 200px 1fr;
}
.Top {
    /* height: 100px; */
    grid-area: Top;
}
.LeftNav {
    grid-area: Leftnav;
}
.MainContent {
    grid-area: content;
}
</style>