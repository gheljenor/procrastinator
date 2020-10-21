<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let text: string;

    let self;

    const dispatch = createEventDispatcher();

    function onKeyPress(event: KeyboardEvent) {
        if (event.charCode === 13) {
            dispatch("submit");
            self.blur();
        }
    }
</script>

<style lang="less">
    input {
        flex: 1 1 auto;
        margin: 0 10px 0 0;
        padding: 6px 5px;
        border: none;
        outline: none;
        background: none;
        transition: all 0.3s ease;

        &:focus {
            background: #fff;
            box-shadow: 0 0 5px rgba(#7ebee6, 0.5);
        }
    }
</style>

<input type="text"
        bind:value={text}
        bind:this={self}
        on:keypress={onKeyPress}
        on:blur
/>
