const express = require("express");
const app = require("../../app");

const router = express.Router();

const logWelcomeMessage = (req,res,next)=> {
  console.log('Yeni Istek Geldi.');
  next();
}

const logPostMessage =(req,res,next)=>{
  console.log('Post Istegi İcin İstek Gönderildi.');
  next();
}

router.use(logWelcomeMessage);
 
router.get('/',(req,res)=>{
  res.status(200).json({
      message: 'Merhaba, Get Istegi Attınız.'
  })
})

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get Istegi Urunler Ekraninda Calısıyor",
  });
});

router.post("/",logPostMessage, (req, res) => {
  res.status(200).json({
    message: " Post Istegi Urunler Ekraninda Calısıyor ",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id == umut) {
    res.status(200).json({
      message: "Merhabalar Yaratici Hosgeldiniz!",
      id: id,
    });
  } else {
    res.status(200).json({
      message: 'Id Hatali',
    });
  }
});
router.put(':/',(req,res,next)=>{
  res.status(200).json({
    message: 'Merhabalar Put Request Attiniz',
  })
})

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Urunler Guncellendi",
  });
});

router.delete('/:productId',(req,res,next)=>{
  res.status(200).json({
    message: 'Urunler Sılındı',
  })
})

module.exports = router;