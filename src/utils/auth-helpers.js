// ===================== Global class that contain some helper functions to use within authintication module =====================
// ===============================================================================================================================
class AuthHelpers {

  setAccessToken (token) {
    // sets acces token to local storage
    localStorage.setItem('accessToken', token)
  }

  getAccessToken () {
    // returns acces token from local storage
    const token = localStorage.getItem('accessToken')
    if (this.testTokenExpiration(token)) {
      return token
    }
    return undefined
  }

  testTokenExpiration (tokenValue) {
    // tests token expiration
    if (!tokenValue) {
      return false
    }
    try {
      // parse token and extract expiration date
      const parsedToken = JSON.parse(atob(tokenValue.split('.')[1]))
      // convert dates to UTC 00:00
      const currentDateUTC = new Date()
      currentDateUTC.setTime(
        currentDateUTC.getTime() + currentDateUTC.getTimezoneOffset() * 60000
      )
      // convert exp to milliseconds
      const tokenDateUTC = new Date(parsedToken.exp * 1000) 
      tokenDateUTC.setTime(
        tokenDateUTC.getTime() + tokenDateUTC.getTimezoneOffset() * 60000
      )

      return currentDateUTC < tokenDateUTC
    } catch (err) {
      console.error(err)
      return false
    }
  }

  reset () {
    // clears local storage
    localStorage.clear()
  }
}

const authHelpers = new AuthHelpers()
export default authHelpers
