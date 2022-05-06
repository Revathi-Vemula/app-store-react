import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickChangeActiveTab} = props
  const {tabId, displayText} = tabDetails

  const getActiveTabStyle = isActive ? 'btn-select' : ''

  const setActiveTab = () => {
    onClickChangeActiveTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`btn-no-select ${getActiveTabStyle}`}
        onClick={setActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
