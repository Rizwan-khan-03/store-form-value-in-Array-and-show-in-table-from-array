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
     

  
      var myForm=document.getElementById('myForm');
      myForm.addEventListener('submit',function(event){
      event.preventDefault();
      var firstName=document.getElementById('fname').value;
      var lastName=document.getElementById('lname').value;
      var number=document.getElementById('contact').value;
      if (firstName==null || firstName=='' ||firstName==number){
        alert('Please Type Correct Name')
      }
      if (isNaN(number)){
        alert('Enter Numeric Value only here')
      }
      person.push({firstName:firstName,lastName:lastName,number:number})
      localStorage.setItem("array",person);
      localStorage.getItem("ayyay",person.firstName)

      const table = document.querySelector('#table-body');
  
      table.innerHTML=(person.map(function (item) {
         return `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.number}</td></tr>`
      
       })).join('')
    

    console.log(person)
    })
   