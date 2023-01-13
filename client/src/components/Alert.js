import { useAppContext } from '../context/appContext'

function Alert() {
  const { showAlert, alertText, alertType } = useAppContext()
  return (
    <>
      {showAlert && (
        <div className={`alert alert-${alertType}`}>{alertText}</div>
      )}
    </>
  )
}
export default Alert
