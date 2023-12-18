"use server"


export const searchProvince = async (formData: FormData) => {
        const prov = formData.get("province")

        console.log(prov);
}