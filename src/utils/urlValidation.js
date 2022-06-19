export const validateIcon = (url) => {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null &&
        (url.includes("https://") || url.includes("https://")));
}