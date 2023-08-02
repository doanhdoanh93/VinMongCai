function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
  };


const serviceID = "service_2vw8lza";
const templeId = "template_5akrgsk";

emailjs.send(serviceID, templeId, params).then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  console.log('res: ', res);
  alert("Bạn đã gửi thành công")
})
.catch((err)=>console.log('err: ', err));
}