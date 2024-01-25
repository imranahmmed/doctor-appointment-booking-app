const upload_preset = import.meta.env.VITE_UPLOAD_PRESET
const cloud_name = import.meta.env.VITE_CLOUD_NAME

const uploadCloudinary = async (file) => {
    const uploadData = new FormData()

    uploadData.append("file", file)
    uploadData.append("upload_preset", upload_preset)
    uploadData.append("cloud_name", cloud_name)

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "post",
        body: uploadData
    })

    const uploadedData = await response.json()

    return uploadedData
}

export default uploadCloudinary