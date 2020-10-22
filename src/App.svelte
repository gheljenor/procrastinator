<script lang="ts">
    import TaskList from "./components/TaskList.svelte";
    import Editable from "./components/Editable.svelte";
    import Button from "./components/Button.svelte";
    import {current, next, storeState, onPopState} from "./state";
    import LegalLink from "./components/LegalLink.svelte";

    let newTask: string = "";

    let counter: number = Math.max(0,
        ...$current.map(({id}) => id),
        ...$next.map(({id}) => id),
    ) + 1;

    $: if (!$current.length && $next.length) {
        current.set($next);
        next.set([]);
    }
    $: storeState({current: $current, next: $next});
    $: console.debug("counter", counter);

    function createTask() {
        current.add({id: counter++, title: newTask});
        newTask = "";
    }
</script>

<style lang="less">
    create {
        display: flex;
        flex-flow: nowrap row;
        margin-bottom: 10px;
    }

    tasks {
        display: flex;
        flex-flow: wrap row;
    }

    column {
        display: block;
        flex: 2 1 400px;

        &.next {
            opacity: 0.5;
            flex: 1 1 200px;
        }
    }

    legal {
        color: #999;
    }
</style>

<svelte:window on:popstate={onPopState} />

<main>
    <create>
        <Editable bind:text={newTask} on:submit={createTask} />
        <Button title="Create" on:click={createTask} />
    </create>

    <tasks>
        <column>
            <TaskList current={true} taskList={current} on:right={event => next.add(event.detail)} />
        </column>

        {#if $next.length}
            <column class="next">
                <TaskList current={false} taskList={next} on:left={event => current.add(event.detail)} />
            </column>
        {/if}
    </tasks>
</main>

<legal>Icons made by
    <LegalLink href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs" />
    from
    <LegalLink href="https://www.flaticon.com/" title="Flaticon" />
</legal>
