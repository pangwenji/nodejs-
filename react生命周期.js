实例阶段：componentsWillMount() -> render() -> componentsDidMount()
存在阶段：componentsWillReceiveProps() -> shouldComponentUpdate(nextProps, preProps) -> 假如为ture componentWillUpdate() -> render() -> componentsDidUpdate()
卸载：componentsWillUnmount()