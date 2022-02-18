var person = [
    //  {
    //   firstName: 'jon',
    //   lastName: 'wik',
    //   number:777777 
    // },
    //  { 
    //   firstName: 'jack',
    //   lastName: 'sparrow',
    //   number:99999
    //  },
    //  {
    //    firstName: 'deo',
    //    lastName: 'nik',
    //    number:1111
    // },
    //  {
    //    firstName: 'remo',
    //    lastName: 'diso',
    //    number:2222
    // },
    //  {
    //    firstName: 'banan',
    //    lastName: 'khn',
    //    number:333
    //  },
    //  {
    //    firstName: 'lichi',
    //    lastName: 'pop',
    //    number:333
    //  },
    //  {
    //    firstName: 'banaddddddn',
    //    lastName: 'khn',
    //    number:333
    //  },
  
  
      ];
 localStorage.setItem( "function",table() );
 function table(){
  const tableContainer = document.querySelector('.table-container');
    const htmltable =document.createElement("table")
    const tr = document.createElement("tr")
    const th_1= document.createElement("th");
    const th_2 = document.createElement("th");
    const th_3 = document.createElement("th");
    th_1.innerHTML='FIRST NAME'
    th_2.innerHTML='LAST NAME'
    th_3.innerHTML='CONTACT'
    tr.appendChild(th_1);
    tr.appendChild(th_2);
    tr.appendChild(th_3);
   
    htmltable.setAttribute('id',"customers")
    htmltable.appendChild(tr);
    tableContainer.appendChild(htmltable);
}
//  localStorage.getItem(table())



      const customers_table = document.querySelector('#customers');
      var myForm=document.getElementById('myForm');

      myForm.addEventListener('submit',function(event){
      event.preventDefault();
      
    
      var firstName=document.getElementById('fname').value;
      var lastName=document.getElementById('lname').value;
      var number=document.getElementById('contact').value;

      person.push({firstName:firstName,lastName:lastName,number:number})
    
      customers_table.innerHTML=(person.map(function (item) {
      return `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.number}</td></tr>`
    
    })).join('');
  

    console.log(person)
    })
   