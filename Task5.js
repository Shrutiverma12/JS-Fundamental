let typeOfPackage = "standard";

switch (typeOfPackage) {
  case "standard":
    console.log("Delivery might take 3-5 days");
    break;
  case "express":
    console.log("Delivered in 1-2 days");
    break;
  case "overnight":
    console.log("Delivered on the next day");
    break;

  default:
    console.log("Please choose the right package");
    break;
}
