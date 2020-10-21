<script lang="ts">
    import type {TaskData} from "./types";

    import TaskList from "./components/TaskList.svelte";
    import Editable from "./components/Editable.svelte";
    import Button from "./components/Button.svelte";
    import type {TaskListStore} from "./stores/task-list";
    import {createTaskListStore} from "./stores/task-list";
    import {derived} from "svelte/store";

    const [initialCurrent, initialNext] = [
        loadState("current"),
        loadState("next"),
    ];

    export let current: TaskListStore = createTaskListStore(initialCurrent);
    export let next: TaskListStore = createTaskListStore(initialNext);

    const fullState = derived([current, next], ([current, next]) => ({current, next}));

    let newTask: string = "";
    let fromHistory: boolean = false;

    let counter: number = Math.max(0,
        ...initialCurrent.map(({id}) => id),
        ...initialNext.map(({id}) => id),
    ) + 1;

    $: console.debug("counter", counter);

    current.subscribe(values => storeState("current", values));
    next.subscribe(values => storeState("next", values));
    fullState.subscribe(state => {
        if (!state.current.length) {
            current.set(state.next);
            next.set([]);
        } else {
            storeHistory(state);
        }
    });

    history.replaceState({initialCurrent, initialNext}, document.title);

    function storeState(key: string, value: TaskData[]) {
        localStorage.setItem(key, JSON.stringify(value));
        console.debug("saved", key, value);
    }

    function loadState(key): TaskData[] {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : [];
    }

    function storeHistory(state) {
        if (fromHistory) {
            fromHistory = false;
        } else {
            history.pushState(state, document.title);
            console.debug("saved", "state", state);
        }
    }

    function onPopState(event: PopStateEvent) {
        fromHistory = true;

        current.set(event.state.current);
        next.set(event.state.next);

        console.debug("loaded", event.state);
    }

    function moveRight(event: CustomEvent<TaskData>) {
        next.add(event.detail);
    }

    function moveLeft(event: CustomEvent<TaskData>) {
        current.add(event.detail);
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
        flex: 1 1 300px;

        &.next {
            opacity: 0.5;
        }
    }
</style>

<main>
    <svelte:window on:popstate={onPopState} />

    <create>
        <Editable bind:text={newTask} on:submit={createTask} />
        <Button title="Create" on:click={createTask} />
    </create>

    <tasks>
        <column>
            <TaskList
                    current={true}
                    taskList={current}
                    on:right={moveRight}
                    on:changed={(changed) => current = changed.detail}
            />
        </column>

        <column class="next">
            <TaskList
                    current={false}
                    taskList={next}
                    on:left={moveLeft}
                    on:changed={(changed) => next = changed.detail}
            />
        </column>
    </tasks>
</main>
