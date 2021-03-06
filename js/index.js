jQuery(function($) {

  var productList1 = [];
  var productList2 = [];
  var productList3 = [];
  var productList4 = [];

  productList1.push({
    id: 1,
    name: 'Geladeira Brastemp Frost Free Duplex Evox - 375L BRM45 HKANA',
    altName: 'Geladeira Brastemp Frost Free Duplex Evox - 375 LITROS CINZA MODELO BRM45 HKANA',
    valorDe: 'R$ 4.970,00',
    valorPor: 'R$ 2.698,00',
    valorParcelado: 'R$ 3.400,00',
    valorParcelas: 'R$ 340,00',
    pathImage: 'img/img01.jpg',
    descricao: 'A geladeira BRM45HK 375 litros faz parte de uma nova geração de produtos da Brastemp. Além de ser Duplex e Frost Free, possui uma porção de compartimentos especiais que vão deixar sua vida muito mais fácil. O Espaço Adapt, por exemplo, te oferece múltiplas combinações para que você possa guardar itens de diversos tamanhos. Já o porta latas e long necks se encaixa perfeitamente no freezer ou na geladeira, te dando a opção da escolha. Ou o Cold Room, um compartimento extra-frio que gela as bebidas mais rápido e conserva melhor frios e laticínios. E ainda tem a gaveta Fresh Room feita especialmente para frutas e verduras que vai deixar tudo fresco por mais tempo. E eu nem falei do compartimento de Acesso Rápido onde você vai colocar tudo aquilo que você mais usa e do nicho para temperos.Depois de tudo isso, nem é preciso falar do design sofisticado, o acabamento perfeito, do painel touch screen com mostrador frontal de temperatura, por onde você acessa funções especiais como Turbo Freezer, Festa, Compras e Férias. E ela ainda conta com a tecnologia EVOX!Admita: com essa geladeira, sua vida vai mudar.',
  });

  productList1.push({
    id: 2,
    name: 'Impressora Multifuncional Epson EcoTank L3150 - Tanque de Tinta Wi-Fi Colorida USB',
    altName: 'Impressora Multifuncional Epson EcoTank MODELO L3150 DE COR PRETA - Tanque de Tinta Wi-Fi Colorida USB',
    valorDe: 'R$ 1.449,00',
    valorPor: 'R$ 1.253,00',
    valorParcelado: 'R$ 1.700,00',
    valorParcelas: 'R$ 170,00',
    pathImage: 'img/img02.jpg',
    descricao: 'A Epson EcoTank L3150 é uma impressora multifuncional colorida compacta que proporciona baixo custo de impressão com alto rendimento. Livre-se dos cartuchos com o sistema tanque de tinta. Com conexão wireless e Wi-Fi Direct integrado, imprima e digitalize sem fios diretamente de seu smartphone, tablet ou PC. O novo sistema ECOFIT permite que você encaixe e abasteça de maneira Simples, sem sujeira e sem desperdício. Seu tanque frontal permite fácil monitoramento dos níveis de tinta. É ideal para famílias, estudantes e pequenas empresas.'
  });

  productList1.push({
    id: 3,
    name: 'Notebook Samsung Book E20 Intel Celeron Dual-Core - 4GB 500GB 15,6 Windows 10',
    altName: 'Notebook Samsung Book BRANCO PROCESSADOR E20 Intel Celeron Dual-Core - MEMORIA 4 GIGABYTES HD 500 GIGABYTES 15,6 Windows 10',
    valorDe: 'R$ 3.299,00',
    valorPor: 'R$ 2.299,00',
    valorParcelado: 'R$ 2.700,00',
    valorParcelas: 'R$ 270,00',
    pathImage: 'img/img03.jpg',
    descricao: 'Se você precisa de uma máquina potente e extremamente funcional para executar as tarefas do dia a dia com agilidade, sua opção certeira é o Notebook Samsung Book E20. Sua configuração conta com processador Intel Celeron Dual-Core e 4GB de memória RAM, garantindo um ótimo desempenho e maior eficiência. O amplo armazenamento, com HD de 500GB, permite que você guarde uma infinidade de arquivos, documentos e programas com segurança. Se surpreenda com as imagens deslumbrantes e cores vivas da tela LED de 15,6" com resolução HD e tecnologia antirreflexo. Além disso, ele possui bateria de longa duração e um design fino e elegante para você carregar para todos os lugares com conforto e praticidade.'
  });

  productList1.push({
    id: 4,
    name: 'Smartphone Samsung Galaxy A31 Celular 128GB Branco 4G - Octa-Core 4GB RAM Tela 6,4” Câm.Quádrupla + Selfie',
    altName: 'Smartphone Samsung Galaxy A31 128GB Branco 4G - Octa-Core 4GB RAM Tela 6,4” Câm.Quádrupla + Selfie',
    valorDe: 'R$ 2.299,00',
    valorPor: 'R$ 1.439,00',
    valorParcelado: 'R$ 1.900,00',
    valorParcelas: 'R$ 190,00',
    pathImage: 'img/img04.jpg',
    descricao: 'O Samsung Galaxy A31 vai te proporcionar uma nova experiência com smartphone. Com tela infinita de 6,4" com resolução FHD+ oferece incrível qualidade de cor e uma impressionante visão cinematográfica. A câmera é poderosa mesmo à noite, sendo a câmera traseira Quádrupla de 48MP (Principal) + 8MP (Ulta Wide) + 5MP (Profundidade) + 5MP (Macro) e selfie com 20MP. Salve todas as suas fotos e filmagens, com 128GB de armazenamento e 4GB RAM. Este produto tem um processador Octa-Core para garantir um desempenho consistente e muito rápido! Sua bateria de 5000mAh acompanha o ritmo do dia a dia, além de contar com carregamento rápido de 15W. A cor branca é moderna, destaca o design do Galaxy A31 e combina com seu estilo. Fique sempre conectado na internet com a tecnologia 4G em um aparelho dual chip!'
  });

  var productHtml = '';

  $.each(productList1, function(i, product) {
    productHtml += `
                <li>
                  <figure>
                    <a tabindex="0" class="aa-product-img" href="product-detail.html?${product.id}#tituloPagina"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                      <figcaption>
                      <h4 class="aa-product-title" >
                        <a href="product-detail.html?${product.id}#tituloPagina" tabindex="-1">${product.name}
                          <p tabindex="0">De <b class="aa-product-price">${product.valorDe}</b> por <b class="aa-product-price">${product.valorPor}</b></p>
                          <p>Clique para saber mais</p>
                        </a>
                      </h4>
                    </figcaption>
                  </figure>
                </li>
                `;
  });

  $('.productList1').html(productHtml);

  productList2.push({
    id: 5,
    name: 'Kit Fraldas Huggies Supreme Care',
    altName: 'Kit Fraldas Huggies Supreme Care TAMANHGO G COM 64 UNIDADES',
    valorDe: 'R$ 319,00',
    valorPor: 'R$ 209,00',
    valorParcelado: 'R$ 520,00',
    valorParcelas: 'R$ 52,00',
    pathImage: 'img/img05.jpg',
    descricao: 'A Fralda descartável Supreme Care da Huggies tamanho G, foi desenvolvida com características que a torna mais confortável para os pequenos! É a melhor maneira de mantê-los seguros e livres ao mesmo tempo, deixando os movimentos fluidos sem incomodar. O pacote hiper vem com 64 unidades para deixar seu bebê sequinho por mais tempo. A tecnologia Xtra-Flex ajuda na adaptação da fralda aos movimentos do bebê.'
  });

  productList2.push({
    id: 6,
    name: 'Jogo de Panelas Tramontina Antiaderente',
    altName: 'Jogo de Panelas Tramontina Antiaderente FRIGIDEIRA, PANELA, COLHER, ESPATULA',
    valorDe: 'R$ 399,00',
    valorPor: 'R$ 250,00',
    valorParcelado: 'R$ 600,00',
    valorParcelas: 'R$ 60,00',
    pathImage: 'img/img08.jpg',
    descricao: 'Sua cozinha merece uma renovada nos utensílios, principalmente aqueles que são mais utilizados no dia a dia. E nossa dica é este conjunto de panelas Tramontina Turim. Neste modelo as panelas são super resistentes e ainda proporcionam praticidade na sua rotina. Essa embalagem contempla 12 peças, sendo elas: uma forma canela para bolos e tortas, duas frigideiras, duas caçarolas, duas panelas, um fervedor, uma colher de arroz, uma espátula, uma concha e um pegador de massas. Completo, não é mesmo? E o principal é que as panelas são fabricadas em alumínio e revestidos com o exclusivo selo antiaderente Starflon T1, uma tecnologia que garante qualidade, resistência e durabilidade e os alimentos não grudam. Sem falar que reduz o uso de óleo nas receitas e facilita na hora da limpeza. Podem ser utilizadas em fogão a gás, elétrico e vitrocerâmico (resistência elétrica) e levadas à máquina de lavar louças. Design moderno, na cor vermelha, leva charme à sua mesa.'
  });

  productList2.push({
    id: 7,
    name: 'Conjunto Sala de Jantar Mesa Tampo MDF 6 Cadeiras Clarice Espresso Móveis Animalle Chocolate/Off White/Café',
    altName: 'Conjunto Sala de Jantar Mesa Tampo MDF Seis Cadeiras Clarice Espresso Móveis Animalle Chocolate/Off White/Café',
    valorDe: 'R$ 2.461,11',
    valorPor: 'R$ 1.777,94 ',
    valorParcelado: 'R$ 3.000,00',
    valorParcelas: 'R$ 300,00',
    pathImage: 'img/img06.jpg',
    descricao: 'Quanto charme neste conjunto de mesa Clarice com 6 cadeiras de jantar Clarice, não é mesmo? Tudo começa com esta linda combinação de cores clássicas e que são bem fáceis de inserir em um lar-style aconchegante e sofisticado. Outro ponto positivo são os detalhes: reparou que a estrutura da mesa tem essas linhas retas como toque final do visual? Demais!.'
  });

  productList2.push({
    id: 8,
    name: 'Cartucho de Tinta HP',
    altName: 'Cartucho de Tinta HP preto modelo 664',
    valorDe: 'R$ 49,00',
    valorPor: 'R$ 35,00',
    valorParcelado: 'R$ 70,00',
    valorParcelas: 'R$ 7,00',
    pathImage: 'img/img07.jpg',
    descricao: 'Imprima todas as suas fotos e documentos com cores mais nítidas, pretos mais intensos e durabilidade superlativa usando os cartuchos de tinta HP originais. Dê as suas idéias mais vida, otimizando recursos com a qualidade e confiabilidade que você só obtém com a HP.'
  });

  var productHtml = '';

  $.each(productList2, function(i, product) {
    productHtml += `
                <li>
                  <figure>
                    <a class="aa-product-img" href="product-detail.html?${product.id}#tituloPagina"  tabindex="0"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                      <figcaption>
                      <h4 class="aa-product-title" ><a href="product-detail.html?${product.id}#tituloPagina" tabindex="-1">${product.name}

                      <p tabindex="0">De <b class="aa-product-price">${product.valorDe}</b> por <b class="aa-product-price">${product.valorPor}</b></p>
                      <p>Clique para saber mais</p>
                      </a></h4>
                    </figcaption>
                  </figure>
                </li>
                `;
  });

  $('.productList2').html(productHtml);

  productList3.push({
    id: 9,
    name: 'Kit Ferramentas Sparta 129 Peças 13564',
    altName: 'Kit Ferramentas Sparta 129 Peças modelo 13564 cabo preto com detalhe laranja',
    valorDe: 'R$ 169,00',
    valorPor: 'R$ 79,00',
    valorParcelado: 'R$ 120,00',
    valorParcelas: 'R$ 12,00',
    pathImage: 'img/img09.jpg',
    descricao: 'Gente, não dá pra fazer pequenos reparos em casa sem as ferramentas certas, né? Por isso o kit de ferramentas13564 da Sparta é ideal para você! Com 129 peças, ele é perfeito para os pequenos trabalhos do dia a dia pois tem alicates, chaves, estilete, martelo, parafusos, pregos entre outros itens. Na maleta, todas as ferramentas estão acomodadas para uma melhor visualização e de fácil manuseio. Cada peça é produzida em aço com cabos emborrachados, assim seus trabalhos serão concluídos da melhor maneira possível.'
  });

  productList3.push({
    id: 10,
    name: 'Smart TV Full HD LED 43” Samsung 43T5300A',
    altName: 'Smart TV Full HD LED 4 polegadas Samsung modelo 43T5300A cor preta',
    valorDe: 'R$ 2.900,00',
    valorPor: 'R$ 1.900,00',
    valorParcelado: 'R$ 2.400,00',
    valorParcelas: 'R$ 240,00',
    pathImage: 'img/img10.jpg',
    descricao: 'Curta seus filmes, série e programas favoritos com a máxima qualidade de imagem e som com a Smart TV Samsung 43T5300A. Com uma tela LED de 43" e resolução Full HD, ela oferece uma quantidade muito maior de detalhes, mais nitidez e cores vibrantes que vão surpreender você e todos seus amigos e familiares. A conectividade Wi-Fi Direct e as diversas entradas HDMI, USB e ethernet vão manter você sempre conectado e por dentro de tudo. Além disso, ela também conta com sistema operacional Tizen, processador Hyper Real, HDR e sistema de espelhamento de smartphone para TV.'
  });

  productList3.push({
    id: 11,
    name: 'iPhone XR Apple Celular 128GB Branco 6,1” 12MP iOS',
    altName: 'iPhone XR Apple 128 gigabytes Branco 6,1 polegadas 12 megapizels iOS',
    valorDe: 'R$ 5.500,00',
    valorPor: 'R$ 4.400,00',
    valorParcelado: 'R$ 4.900,00',
    valorParcelas: 'R$ 490,00',
    pathImage: 'img/img11.jpg',
    descricao: 'O iPhone XR tem tela Liquid Retina de 6,1 polegadas** e seis lindas cores. Face ID avançado para desbloquear o aparelho e acessar apps só com o olhar. Chip A12 Bionic, que usa aprendizado de máquina em tempo real para transformar sua maneira de interagir com fotos, jogos, realidade aumentada e muito mais. Sistema de câmera de 12 MP com modo Retrato, Iluminação de Retrato, efeito bokeh aperfeiçoado e Controle de Profundidade para retratos com qualidade de estúdio. Tudo em um design lindo e resistente a água***Avisos legais:*A duração da bateria varia de acordo com o uso e a configuração. Consulte o site do fabricante para obter mais informações.**A tela tem cantos arredondados. Quando medida como um retângulo, a tela do iPhone XR tem 6,06 polegadas na diagonal. A área real de visualização é menor.***O iPhone XR é resistente a respingos, água e poeira e foi testado em condições controladas em laboratório, classificado como IP67 segundo a norma IEC 60529 (profundidade máxima de um metro por até 30 minutos). A resistência a respingos, água e poeira não é uma condição permanente e pode diminuir com o tempo. Não tente recarregar um iPhone molhado. Veja instruções no Manual do Usuário para limpeza e secagem. Danos decorrentes de contato com líquidos não estão incluí dos na garantia.****Carregadores sem fio padrão Qi vendidos separadamente.*****Como parte dos esforços da Apple para atingir seus objetivos ambientais, o iPhone XR não vem com adaptador de energia nem EarPods. Você pode usar o adaptador de energia e os fones de ouvido da Apple que já tenha ou comprar esses acessórios separadamente.'
  });

  productList3.push({
    id: 12,
    name: 'iPhone SE Apple Celular 64GB Preto 4,7” 12MP iOS',
    altName: 'iPhone SE Apple 64 gigabytes Preto 4,7 polegadas 12 megapixels iOS',
    valorDe: 'R$ 3.700,00',
    valorPor: 'R$ 3.050,00',
    valorParcelado: 'R$ 3.505,00',
    valorParcelas: 'R$ 350,50',
    pathImage: 'img/img12.jpg',
    descricao: 'O iPhone SE é o iPhone de 4,7 polegadas* mais poderoso até hoje. Ele vem com o chip A13 Bionic, o mais rápido em um smartphone, e desempenho impressionante em apps, jogos e fotos. Modo Retrato para você fazer fotos com qualidade de estúdio e seis efeitos de iluminação. Nova geração do HDR Inteligente que revela detalhes surpreendentes em luzes e sombras. E vídeo 4K com qualidade de cinema. Ele ainda tem todos os recursos avançados do iOS, bateria de longa duração** e é resistente à água***. Tudo o que você adora no iPhone, agora em um formato mais compacto.Avisos legais*O tamanho da tela é medido na diagonal.**A duração da bateria varia de acordo com o uso e a configuração. Consulte o site do fabricante para obter mais informações.***O iPhone SE é resistente a respingos, água e poeira e foi testado em condições controladas em laboratório, classificado como IP67 segundo a norma IEC 60529 (profundidade máxima de um metro por até 30 minutos). A resistência a respingos, água e poeira não é uma condição permanente e pode diminuir com o tempo. Não tente recarregar um iPhone molhado. Veja instruções de limpeza e secagem no Manual do Usuário. Danos decorrentes de contato com líquidos não estão incluídos na garantia.****Carregadores sem fio padrão Qi vendidos separadamente.*****Como parte dos esforços da Apple para atingir seus objetivos ambientais, o iPhone SE não vem com adaptador de energia nem EarPods. Você pode usar o adaptador de energia e os fones de ouvido da Apple que já tenha ou comprar esses acessórios separadamente.'
  });

  var productHtml = '';

  /**
   * HOME
   */

  $.each(productList3, function(i, product) {
    productHtml += `
                <li>
                  <figure>
                    <a class="aa-product-img" href="product-detail.html?${product.id}#tituloPagina"  tabindex="0"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                      <figcaption>
                      <h4 class="aa-product-title" ><a href="product-detail.html?${product.id}#tituloPagina" tabindex="-1">${product.name}

                      <p tabindex="0">De <b class="aa-product-price">${product.valorDe}</b> por <b class="aa-product-price">${product.valorPor}</b></p>
                      <p>Clique para saber mais</p>
                      </a></h4>
                    </figcaption>
                  </figure>
                </li>
                `;
  });

  $('.productList3').html(productHtml);

  productList4.push({
    id: 13,
    name: 'Geladeira Frost Free Electrolux 454 Litros Inverse Branca (DB53)',
    altName: 'Geladeira Branca Frost Free Electrolux 454 Litros Inverse Branca (DB53)',
    valorDe: 'R$ 4.279,00',
    valorPor: 'R$ 3.068,07',
    valorParcelado: 'R$ 3.505,00',
    valorParcelas: 'R$ 350,50',
    pathImage: 'img/img13.jpg',
    descricao: 'Tenha mais espaço e comodidade para guardar seus alimentos com o Refrigerador Frost Free Bottom Freezer 454 Litros DB53 . Com espaços específicos para todo tipo de alimento, você poderá organizá-los da melhor maneira possível. O Refrigerador Frost Free da Electrolux conta com prateleiras deslizantes para facilitar a sua vida e otimizar seu tempo. Ele também vem com espaços criados para ovos, frutas e legumes e um espaço no freezer para alimentos que precisam ser armazenados em temperaturas baixas.Tudo isso somado a um design que une praticidade e elegância, com o freezer na parte de baixo e a geladeira na parte de cima. Assim você terá mais facilidade no seu dia-a-dia. CONSUMIDOR, ESTE PRODUTO POSSUI DISPOSITIVO QUE ACUMULA ÁGUA DE DEGELO!'
  });

  productList4.push({
    id: 14,
    name: 'Notebook 2 em 1 Dell Inspiron 5406-M30S 14” Full HD Touch 11ª Geração Intel Core i7 8GB 256GB SSD Windows 10 McAfee',
    altName: 'Notebook Branco 2 em 1 Dell Inspiron 5406-M30S 14” Full HD Touch 11ª Geração Intel Core i7 8GB 256GB SSD Windows 10 McAfee',
    valorDe: 'R$ 7.550,00',
    valorPor: 'R$ 6.479,10',
    valorParcelado: 'R$ 7.199,00',
    valorParcelas: 'R$ 719,90',
    pathImage: 'img/img14.jpg',
    descricao: 'Tenha mais espaço e comodidade para guardar seus alimentos com o Refrigerador Frost Free Bottom Freezer 454 Litros DB53 . Com espaços específicos para todo tipo de alimento, você poderá organizá-los da melhor maneira possível. O Refrigerador Frost Free da Electrolux conta com prateleiras deslizantes para facilitar a sua vida e otimizar seu tempo. Ele também vem com espaços criados para ovos, frutas e legumes e um espaço no freezer para alimentos que precisam ser armazenados em temperaturas baixas.Tudo isso somado a um design que une praticidade e elegância, com o freezer na parte de baixo e a geladeira na parte de cima. Assim você terá mais facilidade no seu dia-a-dia. CONSUMIDOR, ESTE PRODUTO POSSUI DISPOSITIVO QUE ACUMULA ÁGUA DE DEGELO!'
  });

  var productHtml = '';

  /**
   * HOME
   */

  $.each(productList4, function(i, product) {
    productHtml += `
                <li>
                  <figure>
                    <a class="aa-product-img" href="product-detail.html?${product.id}#tituloPagina"  tabindex="0"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                      <figcaption>
                      <h4 class="aa-product-title" ><a href="product-detail.html?${product.id}#tituloPagina" tabindex="-1">${product.name}

                      <p tabindex="0">De <b class="aa-product-price">${product.valorDe}</b> por <b class="aa-product-price">${product.valorPor}</b></p>
                      <p>Clique para saber mais</p>
                      </a></h4>
                    </figcaption>
                  </figure>
                </li>
                `;
  });

  $('.productList4').html(productHtml);

  $('#celulares').on('click', function(e) {
    searchProducts('ids', [4, 11, 12]);
  });

  $('#moveis').on('click', function(e) {
    searchProducts('ids', [7]);
  });

  $('#eletrodomestricos').on('click', function(e) {
    searchProducts('ids', [1, 13]);
  });

  $('#tvVideo').on('click', function(e) {
    searchProducts('ids', [10]);
  });

  $('#informatica').on('click', function(e) {
    searchProducts('ids', [2,3,8, 14]);
  });

  $('#formSearch').on('submit', function(e) {
      e.preventDefault();

      var search = $('#search').val();
      searchProducts(search);
  });

  function searchProducts(search, products) {
    var productListAll = [];
    var filtered = [];

    productListAll = productListAll.concat(productList1).concat(productList2).concat(productList3).concat(productList4);

    if (search == 'ids') {
      filtered = productListAll.filter((item)=>{return products.includes(item.id)});
    } else {
      filtered = productListAll.filter((item)=>{return item.name.toUpperCase().match(search.toUpperCase())});
    }

    if (filtered.length == '0') {
      alert("Nenhum Produto Encontrado!");
      return false;
    }

    if (filtered.length > 0 && search != '') {
        if (search != 'ids') {
          $('.navbar').hide();
        }
        $('.aa-product-area').hide();
        $('.aa-product-area-search').show();
        

        var productHtml = '';

        $.each(filtered, function(i, product) {
          productHtml += `
                      <li>
                        <figure>
                          <a class="aa-product-img" href="product-detail.html?${product.id}#tituloPagina"  tabindex="0"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                            <figcaption>
                            <h4 class="aa-product-title" ><a href="product-detail.html?${product.id}#tituloPagina" tabindex="-1">${product.name}
      
                            <p tabindex="0">De <b class="aa-product-price">${product.valorDe}</b> por <b class="aa-product-price">${product.valorPor}</b></p>
                            <p>Clique para saber mais</p>
                            </a></h4>
                          </figcaption>
                        </figure>
                      </li>
                      `;
        });

        $('.productListSearch').html(productHtml);
        // $('#buttonSearch').attr('disabled', true);
        $('#tituloProdutosEncontrados').html(filtered.length == 1 ? filtered.length+' Produto Encontrado:' : filtered.length+' Produtos Encontrados:');
        $('.productListSearch .aa-product-img:first').focus();
    } else {
        // $('#buttonSearch').attr('disabled', false);
        $('.navbar').show();
        $('.aa-product-area').show();
        $('.aa-product-area-search').hide();
    }

  }

  $('body').on('keyup', function(e) {
    // console.log(e.keyCode);
    if (e.keyCode == 225) {
      history.go(-1)
    }
  });

  $('#formSearch').on('keyup', function(e) {
    if (e.keyCode === 27) {
      $('#search').val('');
      $('#buttonSearch').attr('disabled', false);
      $('.navbar').show();
      $('.aa-product-area').show();
      $('.aa-product-area-search').hide();
    }
  });

  /**
   * Cadastro
   */

  $(document).on('click', '#btnCadastrar', function() {
    if (!$('[name="tipoConta"]').prop('checked')) {
      alert('O campo Tipo de Conta é obrigatório');
      $('[name="tipoConta"]').focus();
      return false;
    }

    if ($('#email').val() == '') {
      alert('O campo Email é obrigatório');
      $('#email').focus();
      return false;
    }
    
    if ($('#cpf').val() == '') {
      alert('O campo CPF é obrigatório');
      $('#cpf').focus();
      return false;
    }
    
    if ($('#nome').val() == '') {
      alert('O campo Nome Completo é obrigatório');
      $('#nome').focus();
      return false;
    }
    
    if ($('#senha').val() == '') {
      alert('O campo Senha é obrigatório');
      $('#senha').focus();
      return false;
    }
      
    alert('Usuário cadastrado com sucesso!');
    setTimeout(() => window.location.href = "index.html", 2500);
  });

  /**
   * PRODUCT DETAIL
   */

  $('#cepInputText').on('keyup', function(e) {

    str = $(this).val();
    str = str.replace(/[^0-9]/gi,'');

    if (str.length == 8) {
      $('#cepInputText').val(str.substring(0,2)+'.'+str.substring(2,5)+'-'+str.substring(5,8));
      $('.valorFrete').html('Valor do Frete: R$ 35,00').attr('tabindex', '0');
    } else {
      $('#cepInputText').val(str);
      $('.valorFrete').html('').attr('tabindex', '-1');
    }
  });

  // localStorage.setItem("lastname", "Smith");
  // alert(localStorage.getItem("lastname"));
  // localStorage.removeItem("key");

  var productListAll = []; 
  var idProduto = (window.location.search).substring(1);

  productListAll = productListAll.concat(productList1).concat(productList2).concat(productList3); 

  if (idProduto != '') {

    var produtoAtual = productListAll.filter(e => e.id == idProduto);

    $('.productName').html(produtoAtual[0]['name']);
    $('.productImg').attr('src', produtoAtual[0]['pathImage']).attr('alt', produtoAtual[0]['altName']);
    $('.productPriceDe').html(produtoAtual[0]['valorDe']);
    $('.productPricePor').html(produtoAtual[0]['valorPor']);
    $('.productPriceParcelado').html(produtoAtual[0]['valorParcelado']);
    $('.productPriceParcelas').html(produtoAtual[0]['valorParcelas']);
    $('.productDescription').html(produtoAtual[0]['descricao']);
    $('.productNameFirst').html(produtoAtual[0]['name'].split(' ')[0] + ' ' + produtoAtual[0]['name'].split(' ')[1]);
    $('.aa-add-to-cart-btn').attr('href', 'checkout.html?'+idProduto);
  }
    
});