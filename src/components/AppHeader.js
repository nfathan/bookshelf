import AppLogo from "./AppLogo"

function AppHeader() {
  return (
    <div className="AppHeader">
      <div className="container">
        <div className="AppHeader-logo">
          <AppLogo />
        </div>
      </div>
    </div>
  )
}

export default AppHeader