import joi from "joi";

const URLSchema = joi.object({
    url:joi.string().pattern(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim)
})


export {URLSchema}