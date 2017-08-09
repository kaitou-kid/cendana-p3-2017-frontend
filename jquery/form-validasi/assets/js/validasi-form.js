	/*file js untuk validasi form*/

	$(document).ready(function(){
		var user_notify,email_notify, pass_notify, re_pass, phone_notify;
		// console.log("Succes");
		// var user, email, pass, re_pass, phone;
		$('#email').focus(function(){
			var user = $('#user').val();
			if (user == '') {
				$('.notify-user').html("User tidak boleh kosong");
				user_notify = false;
			}else{
				$('.notify-user').html("")
				user_notify = true;
			}
		});

		$('#pass').focus(function(){
			var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
			var email = $('#email').val();
			if(!testEmail.test(email) || email ==''){
				$('.notify-email').html("Masukkan alamat email dengan benar");
				email_notify = false;
			}else{
				$('.notify-email').html("");
				email_notify = true;
			}
		});

		$('#re-pass').focus(function(){

			/*(/^
			(?=.*\d)                //should contain at least one digit
			(?=.*[a-z])             //should contain at least one lower case
			(?=.*[A-Z])             //should contain at least one upper case
			[a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters
			$/)*/

			var testPass = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z._~\-!@#\$%\^&\*\(\)]{8,}$/);
			var pass = $('#pass').val();
			// console.log(pass);
			if (!testPass.test(pass) || pass=='') {
				$('.notify-pass').html("password harus berisi huruf besar, angka, special char dan minimal <sup>*</sup>8 karakter");
				// console.log("salah");
				pass_notify = false;
			}else{
				$('.notify-pass').html("");
				pass_notify = true;
			}
		});

		$('#hp').focus(function(){
			var pass = $('#pass').val();
			var repass = $('#re-pass').val();
			if (pass != repass || pass == "") {
				$('.notify-re-pass').html("Password tidak sama");
				re_pass = false;
			}else{
				$('.notify-re-pass').html("");
				re_pass = true;
			}
		});

		$('#hp').keyup(function(){
			var hp = $(this).val();
			var testHp = /^[0-9+]{12,14}$/i;
			if (!testHp.test(hp) || hp == '') {
				$('.notify-hp').html("Masukkan nomer hp dengan benar");
				phone_notify = false;
			}else{
				$('.notify-hp').html("");
				phone_notify = true;
			}
		});

		$('.submit').click(function(){
			console.log(user_notify+","+email_notify+","+pass_notify+","+re_pass+","+phone_notify);
			if (user_notify && email_notify && pass_notify && re_pass && phone_notify) {
				alert("Berhasil");
			}else{
				alert("Silahkan lengkapi data anda");
			}
		});
	});