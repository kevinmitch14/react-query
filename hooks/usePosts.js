function usePosts() {
    return useQuery(["posts"], async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
    });
}