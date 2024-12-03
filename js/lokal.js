var productnameinput = document.getElementById('productname');
var producturlinput = document.getElementById('producturl');
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var productlist = [ JSON.parse(localStorage.getItem('productitem'))   ];



if (localStorage.getItem("productitem")!==null) {
    productlist=JSON.parse(localStorage.getItem("productitem"));
    displaydata();
   
}
function addproduct() {
    if (validname()==true&&validurl()==true) {
        var product = {
            name:productnameinput.value,
            url:producturlinput.value,
        }
        if (product.url.startsWith('http://') && product.url.startsWith('https://')) {
            product.url = 'https://' + url;  // إضافة البروتوكول http:// أو https://
        }
        productlist.push(product);
        localStorage.setItem("productitem",JSON.stringify(productlist))
        displaydata();
        clearform()

    }


};
function  displaydata() {
    var data ="";
    for (var i = 0; i < productlist.length; i++) {

        data += ` <tr>
         <td>${i}</td>
         <td> ${productlist[i].name}</td>
                                                                                                                         
         <td>  <button class="btn btn-visit"> <i class="fa-solid fa-eye"></i><a target="_blank" href="${productlist[i].url}">  visit </a>   </button> </td>
         <td>  <button onclick="deletitem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> delet  </button>  </td>
       </tr> `

    };
    document.getElementById('tbody').innerHTML = data
    // JSON.parse(localStorage.getItem(productlist))

};
function clearform() {
    productnameinput.value = null;
    producturlinput.value = null;
}
function deletitem(elemntnum) {
    console.log("helo");
    productlist.splice(elemntnum,1);
    localStorage.setItem("productitem",JSON.stringify(productlist));
    displaydata()
}
function validurl() {
    var regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9.-]+(?:\/[^\s]*)?(?:\?[a-zA-Z0-9&%=._-]+)?(?:#[a-zA-Z0-9_-]+)?$/;
    var text = producturlinput.value;
    if (regex.test(text)) {
        producturlinput.classList.add("is-valid");
        producturlinput.classList.remove("is-invalid");
        p2.classList.add("d-none");
        return true;
    } else {
        producturlinput.classList.remove("is-valid");
        producturlinput.classList.add("is-invalid");
        p2.classList.remove("d-none");
        return false;
    }
}
function validname() {
    var regex=/^[A-Z](\s)*[A-Z]*[a-z]{3,30}$/i
    var text =productnameinput.value
    if (regex.test(text)==true) {

        productnameinput.classList.add("is-valid")
        productnameinput.classList.remove("is-invalid")
        p1.classList.add("d-none")
        return true
    }
    else {
        productnameinput.classList.remove("is-valid")
        productnameinput.classList.add("is-invalid")
        p1.classList.remove("d-none")
        return false
    }
}



