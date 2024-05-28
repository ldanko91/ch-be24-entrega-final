export const existsToken = (req, res, next) => {
    const authHeader = req.headers.cookie.authToken
    if (authHeader != null) {
        return res.redirect('/api/users/current')
    }

    next()

}