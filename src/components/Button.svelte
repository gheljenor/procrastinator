<script lang="ts">
    export let title: string;
    export let big: boolean = false;
</script>

<style lang="less">
    button {
        cursor: pointer;
        padding: 5px;
        margin: 0;
        position: relative;

        transition: all 0.1s ease;
        background: #eee;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border: 1px #ddd solid;
        border-radius: 2px;

        &:hover {
            background: #f7f7f7;
        }

        &:focus, &:active {
            border-color: #7ebee6;
        }

        &:active {
            color: #304a59;
            background: #fff;
            box-shadow: 0 0 10px 1px rgba(#7ebee6, 0.5);
            transform: scale(0.95, 0.9);
        }
    }

    .big {
        flex: 1 1 auto;
    }
</style>

<button on:click class:big>
    {title}
</button>
