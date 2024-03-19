export const validator = {
    userName: (name) => /^[a-zA-Z]+\s?[a-zA-Z]+$/.test(name.trim()),
    email: (email) => {
        const atIndex = email.trim().indexOf("@");
        return(atIndex !== -1 && atIndex !== 0 && atIndex !== email.trim().length - 1);
    }
}