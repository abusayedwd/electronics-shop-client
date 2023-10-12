 


 const photos = [
   {
     src: "https://www.google.com/search?q=iphone+gallery&sca_esv=572834593&rlz=1C1CHBD_enSA1006SA1006&tbm=isch&sxsrf=AM9HkKn5nzCHYfF6O1aiAiQLcSKgFb91Ew:1697108603235&source=lnms&sa=X&ved=2ahUKEwisncObrvCBAxXHTGwGHZ1hCW4Q_AUoAXoECAEQAw&biw=1340&bih=635&dpr=1.38#imgrc=WhtqwhdXgXWn-M/800x799",
     width: 4,
     height: 3,
   },
   {
     src: "https://source.unsplash.com/3X5ExRgNt3M/800x799",
     width: 1,
     height: 1,
   },
   {
     src: "https://source.unsplash.com/s3OP_HDxebE/600x799",
     width: 3,
     height: 4,
   },

   {
     src: "https://source.unsplash.com/hSZsciVnOKo/600x799",
     width: 3,
     height: 4,
   },

   {
     src: "https://source.unsplash.com/5uDpj9z3WsY/600x799",
     width: 3,
     height: 4,
   },

   {
     src: "https://source.unsplash.com/CwFUrhWAV-g/800x599",
     width: 4,
     height: 3,
   },

   {
     src: "https://source.unsplash.com/fjptyBGkKSM/600x799",
     width: 3,
     height: 4,
   },
   {
     src: "https://source.unsplash.com/gVWm8YzlEfY/600x799",
     width: 3,
     height: 4,
   }, 
 ];

const Gallery = () => {
   return (
      <div>
           <Gallery photos = {photos}></Gallery>
      </div>
   );
};

export default Gallery;