function useList(data = null, renderComponent, propsCreator ) {
    if (!data) {
        return <p> No data </p>
    }

    const list = [];

    for(let i in data) {
        renderComponent.key = i;
        renderComponent.props = data[i];
    }
}