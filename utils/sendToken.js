// Create Token and saving in cookie

const sendToken = (token, statusCode, res) => {
    
  
    // options for cookie
    const options = {
      maxAge: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("jwt", token.refreshToken, options).json({
      success: true,
      accessToken: token.accessToken,
    });
  };
  
  module.exports = sendToken;