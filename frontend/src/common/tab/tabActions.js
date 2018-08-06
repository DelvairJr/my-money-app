export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }

}

export function showTabs(...tabsId) {
    const tabsToShow = {}
    tabsId.forEach(element => tabsToShow[element] = true)
    return {
        type: 'TABS_SHOWED',
        payload: tabsToShow
    }
}