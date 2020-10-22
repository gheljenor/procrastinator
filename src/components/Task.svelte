<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import Button from "./Button.svelte";
    import Editable from "./Editable.svelte";

    const dispatch = createEventDispatcher();

    const dispatchEvent = (event: string) => () => dispatch(event);

    export let current: boolean;
    export let title: string;
</script>

<style lang="less">
    * {
        color: #333;
    }

    task-panel {
        display: block;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding: 0;
        background: #fafafa;
        border: 1px #e6e6e6 solid;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: all 2s ease;
        margin-bottom: 5px;

        &:hover {
            background: #fff;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        }
    }

    task-line {
        display: flex;
        flex-flow: nowrap row;
        align-items: baseline;
        margin-bottom: 5px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    spacer {
        width: 10px;
    }
</style>

<task-panel>
    <task-line>
        {#if !current}
            <Button title="Today" on:click={dispatchEvent('moveLeft')} />
            <spacer />
        {/if}

        <Editable bind:text={title} on:blur={() => dispatch('changed', title)} />

        <Button title="Done" on:click={dispatchEvent('close')} />
    </task-line>

    {#if current}
        <task-line>
            <Button title="Hurry" big={true} on:click={dispatchEvent('moveUp')} />
            <Button title="Wait" big={true} on:click={dispatchEvent('moveDown')} />

            <spacer />

            <Button title="Now" big={true} on:click={dispatchEvent('moveTop')} />
            <Button title="Later" big={true} on:click={dispatchEvent('moveBottom')} />

            <spacer />

            <Button title="Tomorrow" big={true} on:click={dispatchEvent('moveRight')} />
        </task-line>
    {/if}
</task-panel>
