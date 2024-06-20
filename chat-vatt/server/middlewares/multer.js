import multer from "multer";

const multerUpload = multer({
    limits:{
        fileSize:1024*1024*5, // 5mb
    },
})

const singleAvatar = multerUpload.single("avatar");

const attachementsMulter = multerUpload.array("files",5);

export{singleAvatar,attachementsMulter};