$(function(){
	var $write = $('#write'),
		shift = false,
		capslock = false;

	$('#keyboard li').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

		// Shift keys
		if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();

			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}

		// Caps lock
		if ($this.hasClass('capslock')) {
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}

		// Delete
		if ($this.hasClass('delete')) {
			var val3= $write.val();

			$write.val(val3.substr(0, val3.length - 1));
			console.log($write.val(val3.substr(0, val3.length - 1)))
			return false;
		}

		// Borrar todo
		if ($this.hasClass('limpiar')) {
			//var val3= $write.val();

			$write.val("");
			console.log($write.val(val3.substr(0, val3.length - 1)))
			return false;
		}

		// Special characters
		if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		if ($this.hasClass('tab')) character = "\t";
		if ($this.hasClass('return')) character = "\n";

		// Uppercase letter
		if ($this.hasClass('uppercase')) character = character.toUpperCase();

		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');

			shift = false;
		}

		// Add the character
		$write.val($write.val() + character);
	});
});
