import axiosInstace from "./Api";

export const FetchProducts = async () => {
    try {
        const response = await axiosInstace.get("/product");
        return response.data;
    } catch(error) {
        console.error("Erro");
        throw error;
    }
}