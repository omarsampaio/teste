let sliderItens = document.querySelector('.carousel');
if(sliderItens.childElementCount == 1){
    document.querySelector('.nav-carousel__hero').style.display = "none";
}
$('.carousel').slick({
    appendArrows: $('.nav-carousel__hero'),
    nextArrow: $('.carousel-next'),
    prevArrow: $('.carousel-prev'),
    arrows: (sliderItens.childElementCount > 1),
    adaptiveHeight: true
});


let dataAdvice = {
    personalizationId: 'advice-campanha-vacina',
    active: true,
    title: 'Vacinação completa? Comprove e ganhe R$ 50 em uma carteira de investimentos.',
    cta: {
        text: 'Descubra como',
        href: 'https://lp.warren.com.br/vacine-e-ganhe-50',
    },
    track:{
      category: 'home',
      action: 'click-advice-bar',
      label: 'campanha-vacina'
    }
  }
  // let adviceElement = document.getElementById('wrn-advice');
  // adviceElement.style.display = "none";
  function buildAdviceBar(data) {
    if (data != null && data.active == true) {
      let contentElement = document.createElement('div')
      contentElement.classList.add('wrn-container-lg')

      let textElement = document.createElement('p')
      textElement.classList.add('text-p-5')
      textElement.innerHTML = data.title + ' '

      let linkElement = document.createElement('a')
      linkElement.classList.add('text-u-2')
      linkElement.innerHTML = data.cta.text
      linkElement.href = data.cta.href
      linkElement.setAttribute('target', "_blank")
      linkElement.addEventListener('click',() => {
        dataEvent(data.track.category, data.track.action, data.track.label)
      })
      contentElement.appendChild(textElement)
      textElement.appendChild(linkElement)
      adviceElement.appendChild(contentElement)
      adviceElement.style.display = "block"
    }
  }
  // buildAdviceBar(dataAdvice)
