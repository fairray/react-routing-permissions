export const getUser = () => {
    const user = {
        name: 'test',
        role: 'admin'
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 2000);
    })
}