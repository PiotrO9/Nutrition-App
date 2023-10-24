<template>
    <footer class="footer">
        <ul class="footer__wrapper">
            <DashboardFooterItem v-for="item in footerContent" :key="item" :iconName="item.iconName" :text="item.text"
                :selected="item.isSelected" />
        </ul>
    </footer>
</template>

<script setup lang="ts">

interface FooterItemProps {
    iconName: string,
    text: string,
    isSelected: boolean
}

const footerContent: FooterItemProps[] = [
    {
        iconName: "tabler:chef-hat",
        text: "Przepisy",
        isSelected: false
    },
    {
        iconName: "vaadin:cutlery",
        text: "Jadłospis",
        isSelected: true
    },
    {
        iconName: "iconamoon:menu-burger-horizontal",
        text: "Menu",
        isSelected: false
    },
]
</script>

<style scoped lang="scss">
.footer {
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    background-color: $pure-black;

    @include breakpoint-up(xl) {
        height: 90px;
    }

    &__wrapper {
        max-width: 1024px;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
}
</style>