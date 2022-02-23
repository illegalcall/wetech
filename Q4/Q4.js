


const validateUserName = function(userName){

    const invalidID = document.getElementById("invalid");
    const emptyID = document.getElementById("empty");
	if(userName.length==0){
		emptyID.style.display='block';
		invalidID.style.display = 'none';
		return 0;
	}
	else if(userName.length>10){
        invalidID.style.display = 'block';
        emptyID.style.display = 'none';
        return 0;
	}
	else{
		for(let i=0;i<userName.length;i++){
			if((userName[i]>='a'&&userName[i]<='z')||(userName[i]=='_')||(userName[i]>='0'&&userName[i]<='9'))
				continue;
			else{
				invalidID.style.display = 'block';
				emptyID.style.display = 'none';
				return 0;
			}
		}
		invalidID.style.display = 'none';
		emptyID.style.display = 'none';

	}

}

const validatePassword = function(passWord){
	let countUpper=0, countLower=0;
	const emptypwd = document.getElementById('emptypwd');
	const invalidpwd = document.getElementById('invalidpwd');

	  if(passWord.length==0){
	  	emptypwd.style.display = 'block';
	  	invalidpwd.style.display = 'none';
	  }

      else if(passWord.length<6||passWord.length>10){
      	invalidpwd.style.display = 'block';
      	emptypwd.style.display = 'none';
      	return 0;
      }else{
          for(let i=0;i<passWord.length;i++){
          	if(passWord[i]>='A'&&passWord[i]<='Z')
          		countUpper++;
          	if(passWord[i]>='a'&&passWord[i]<='z')
          		countLower++;
          }

          if(countUpper==0&&countLower==0){
          	invalidpwd.style.display = 'block';
          	emptypwd.style.display = 'none';
          	return 0;
          }
          invalidpwd.style.display = 'none';
          emptypwd.style.display = 'none';
      }
}


function validateData() {
	const userName = document.getElementById('usernamefield').value;
	const passWord = document.getElementById('passwordfield').value;
	validateUserName(userName);
	validatePassword(passWord);
}


const submit = document.querySelector('.submit-button');

submit.addEventListener('click', validateData);