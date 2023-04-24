let url = 'https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&mode=analogic&count=5'
const options = {
	method: 'GET',
	contentType: 'application/json',
};

const colorPicker = document.getElementById('colorPicker')
const theme = document.getElementById('colorStyle')

const getColors = () => {
    let selectedColor = ''
    selectedColor = colorPicker.value.slice(1)
    document.getElementById('colorList').innerHTML = ''
    url = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${theme.value}&count=5`
fetch(url, options)
    .then((resp) => resp.json())
    .then((data) => {
            for (let i = 0; i < 5; i++){
                document.getElementById('colorList').innerHTML += `
                <div class="colorWrapper">
                <div id='bgColor${i}' class="color${i} coloredBox"></div>
                <div class="hex">${data.colors[i].hex.value}</div>
            </div>
                `
                document.getElementById(`bgColor${i}`).style.backgroundColor = data.colors[i].hex.value
            }
    })
    
}

document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault()
    getColors()
})

colorPicker.addEventListener('change', function(){
    document.getElementById('colorPicker').value = `${this.value}`
})


getColors()