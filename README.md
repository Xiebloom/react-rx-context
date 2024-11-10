# React RxJS Context

React Context
React Provider
RxJS

- 设计了一种 UI 和模型层分离的结构，将状态逻辑集中在模型层，避免了业务逻辑和 UI 逻辑的耦合。
- 在模型层构建了状态的流式树状拓扑结构，通过 RxJS 流的声明式组合，在模型层构建联动关系，实现状态联动管理，同时保证业务逻辑清晰可维护。
- 通过 React Context + RxJS Observable 的组合，利用 Observable 的不变性减少不必要的重渲染，显著优化了跨层级状态访问的性能和便捷性。
- 开发了自定义 hook 以消费 RxJS 流，形成状态管理的闭环。实现了跨层级组件的状态共享和高性能响应式数据流管理。
