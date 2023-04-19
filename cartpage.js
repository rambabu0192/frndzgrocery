function display()
{
	var a=document.getElementsByClassName('productpage1')[0]
	var products=document.querySelector('.cartitem')
	if(a.style.display=="block"||products===null)
	{
		a.style.display="none"
	}
	else{
		a.style.display="block"
	}
}




	
