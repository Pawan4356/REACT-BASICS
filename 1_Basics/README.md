Just Explored entire project structure and the workflow between files!!
```
DOM: Heavy, browser-level tree; slow to update.
VDOM: Lightweight JS version of DOM; allows efficient diffing.

React doesn’t update UI immediately — updates are batched and prioritized.

React Fiber:
- New architecture enabling async, incremental rendering.
- Each component is represented as a Fiber node.
- Implements priority scheduling, interruptible work, and reconciliation.

Reconciliation:
- Comparing old and new VDOM.
- Optimized using Fiber’s incremental work.

Keys:
- Identify list items during reconciliation.
- Prevent incorrect re-renders or state loss.

Push (old React) vs Pull (Fiber):
- Push: synchronous, blocking.
- Pull: async, scheduled, cooperative.

Fiber abilities:
- Pause and resume rendering.
- Schedule work with different priorities.
- Reuse previous computation.
- Abort outdated work.
- Prepare UI in background (Concurrent Rendering).
```