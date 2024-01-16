export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Priyanshu-Ganatra')
    const data = await res.json()
    return data
}