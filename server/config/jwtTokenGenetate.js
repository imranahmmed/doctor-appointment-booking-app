export const jwtTokenGenerate = (user) => {
    const { _id, role } = user

    return jwt.sign({ id: _id, role: role }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })
}