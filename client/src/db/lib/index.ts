import bcrypt from "bcryptjs"

export const hashPw = (password: string) => {
    return bcrypt.hashSync(password)
}