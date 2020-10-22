<script lang="ts">
    export let href: string;
    export let title: string;
</script>

<style>
    a {
        color: inherit;
    }
</style>

<a rel="noreferrer" target="_blank" tabindex="-1" {href} {title}>{title}</a>
