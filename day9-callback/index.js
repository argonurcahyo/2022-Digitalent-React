// const one = (nextStep) => {
//     setTimeout(() => {
//         console.log("one");
//         nextStep();
//     }, 5000);
// }

// const two = (nextStep) => {
//     setTimeout(() => {
//         console.log("two");
//         nextStep();
//     }, 3000);
// }

// const three = (nextStep) => {
//     setTimeout(() => {
//         console.log("three");
//         nextStep();
//     }, 1000);
// }

// const four = () => {
//     console.log("four");
// }

// one(() => two(()=>three(four)));

const uploadImage = (imageFile, nextStep) => {
  console.log(`uploading ${imageFile}`);
  const image = `fs-${imageFile}`;
  nextStep(image);
};

const cropImage = (image, nextStep) => {
  console.log(`cropping ${image}`);
  const croppedImage = `${image}-crop`;
  //   console.log(croppedImage);
  nextStep(croppedImage);
};

const addWatermark = (croppedImage, nextStep) => {
  console.log(`watermarking ${croppedImage}`);
  const watermarkedImage = `${croppedImage}-wm`;
  //   console.log(watermarkedImage);
  nextStep(watermarkedImage);
};

uploadImage("bondol.jpg", (image) =>
  cropImage(image, (cimage) =>
    addWatermark(cimage, (wmimage) =>
      console.log(`Your file is ready ${wmimage}`)
    )
  )
);
