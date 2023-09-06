import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000/social",
    issuerBaseURL: "https://dev-1ewp1z8fh5a1byzd.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck