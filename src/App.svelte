<script lang="ts">
    import type {TaskData} from "./types";

    import TaskList from "./components/TaskList.svelte";
    import Editable from "./components/Editable.svelte";
    import Button from "./components/Button.svelte";
    import type {TaskListStore} from "./stores/task-list";
    import {createTaskListStore} from "./stores/task-list";

    const [initialCurrent, initialNext] = [
        loadStateComponent("current"),
        loadStateComponent("next"),
    ];

    export let current: TaskListStore = createTaskListStore(initialCurrent);
    export let next: TaskListStore = createTaskListStore(initialNext);

    let newTask: string = "";
    let fromHistory: boolean = false;

    let counter: number = Math.max(0,
        ...initialCurrent.map(({id}) => id),
        ...initialNext.map(({id}) => id),
    ) + 1;

    $: console.debug("counter", counter);

    $: storeStateComponent("current", $current);
    $: storeStateComponent("next", $next);
    $: storeHistory({current: $current, next: $next});

    $: if (!$current.length) {
        current.set($next);
        next.set([]);
    }

    history.replaceState({current: initialCurrent, next: initialNext}, document.title);

    function storeStateComponent(key: string, value: TaskData[]) {
        localStorage.setItem(key, JSON.stringify(value));
        console.debug("stored", key, JSON.stringify(value));
    }

    function loadStateComponent(key): TaskData[] {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : [];
    }

    function storeHistory(state) {
        if (fromHistory) {
            fromHistory = false;
        } else {
            history.pushState(state, document.title);
            console.debug("saved", "state", JSON.stringify(state));
        }
    }

    function onPopState(event: PopStateEvent) {
        fromHistory = true;

        current.set(event.state.current);
        next.set(event.state.next);

        console.debug("loaded", JSON.stringify(event.state));
    }

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

        <column class="next">
            <TaskList current={false} taskList={next} on:left={event => current.add(event.detail)} />
        </column>
    </tasks>
</main>
