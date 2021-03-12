jQuery(function($){

  var productList1 = [];
  var productList2 = [];
  var productList3 = [];

  productList1.push({
    name: 'Geladeira Brastemp Frost Free Duplex Evox - 375L BRM45 HKANA',
    altName: 'Geladeira Brastemp Frost Free Duplex Evox - 375 LITROS CINZA MODELO BRM45 HKANA',
    valorDe: 'R$ 4.970,00',
    valorPor: 'R$ 2.698,00',
    pathImage: 'img/img01.jpg',
  });

  productList1.push({
    name: 'Impressora Multifuncional Epson EcoTank L3150 - Tanque de Tinta Wi-Fi Colorida USB',
    altName: 'Impressora Multifuncional Epson EcoTank MODELO L3150 DE COR PRETA - Tanque de Tinta Wi-Fi Colorida USB',
    valorDe: 'R$ 1.449,00',
    valorPor: 'R$ 1.253,00',
    pathImage: 'img/img02.jpg',
  });

  productList1.push({
    name: 'Notebook Samsung Book E20 Intel Celeron Dual-Core - 4GB 500GB 15,6 Windows 10',
    altName: 'Notebook Samsung Book BRANCO PROCESSADOR E20 Intel Celeron Dual-Core - MEMORIA 4 GIGABYTES HD 500 GIGABYTES 15,6 Windows 10',
    valorDe: 'R$ 3.299,00',
    valorPor: 'R$ 2.299,00',
    pathImage: 'img/img03.jpg',
  });

  productList1.push({
    name: 'Smartphone Samsung Galaxy A31 128GB Branco 4G - Octa-Core 4GB RAM Tela 6,4” Câm.Quádrupla + Selfie',
    altName: 'Smartphone Samsung Galaxy A31 128GB Branco 4G - Octa-Core 4GB RAM Tela 6,4” Câm.Quádrupla + Selfie',
    valorDe: 'R$ 2.299,00',
    valorPor: 'R$ 1.439,00',
    pathImage: 'img/img04.jpg',
  });

  var productHtml = '';

  $.each(productList1, function(i, product) {
    productHtml += `
                <li>
                  <figure>
                    <a class="aa-product-img" href="#"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                      <figcaption>
                      <h4 class="aa-product-title"><a href="#">${product.name}</a></h4>
                      De <span class="aa-product-price"><del>${product.valorDe}</del></span> por <span class="aa-product-price"><b>${product.valorPor}</b></span>
                    </figcaption>
                  </figure>
                </li>
                `;
  });

  $('.productList1').html(productHtml);

  productList2.push({
    name: 'Kit Fraldas Huggies Supreme Care',
    altName: 'Kit Fraldas Huggies Supreme Care TAMANHGO G COM 64 UNIDADES',
    valorDe: 'R$ 319,00',
    valorPor: 'R$ 209,00',
    pathImage: 'img/img05.jpg',
  });

  productList2.push({
    name: 'Jogo de Panelas Tramontina Antiaderente',
    altName: 'Jogo de Panelas Tramontina Antiaderente FRIGIDEIRA, PANELA, COLHER, ESPATULA',
    valorDe: 'R$ 399,00',
    valorPor: 'R$ 250,00',
    pathImage: 'img/img08.jpg',
  });

  productList2.push({
    name: 'Smartphone LG K22+ 64GB Titan 4G Quad-Core 3GB RAM',
    altName: 'Smartphone LG K22+ 64 gigabyte Titan 4G Quad-Core 3 gigabytes RAM',
    valorDe: 'R$ 1.099,00',
    valorPor: 'R$ 789,90',
    pathImage: 'img/img06.jpg',
  });

  productList2.push({
    name: 'Cartucho de Tinta HP',
    altName: 'Cartucho de Tinta HP preto modelo 664',
    valorDe: 'R$ 49,00',
    valorPor: 'R$ 35,00',
    pathImage: 'img/img07.jpg',
  });

  var productHtml = '';

  $.each(productList2, function(i, product) {
    productHtml += `
                <li>
                  <figure>
                    <a class="aa-product-img" href="#"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                      <figcaption>
                      <h4 class="aa-product-title"><a href="#">${product.name}</a></h4>
                      De <span class="aa-product-price"><del>${product.valorDe}</del></span> por <span class="aa-product-price"><b>${product.valorPor}</b></span>
                    </figcaption>
                  </figure>
                </li>
                `;
  });

  $('.productList2').html(productHtml);

  productList3.push({
    name: 'Kit Ferramentas Sparta 129 Peças 13564',
    altName: 'Kit Ferramentas Sparta 129 Peças modelo 13564 cabo preto com detalhe laranja',
    valorDe: 'R$ 169,00',
    valorPor: 'R$ 79,00',
    pathImage: 'img/img09.jpg',
  });

  productList3.push({
    name: 'Smart TV Full HD LED 43” Samsung 43T5300A',
    altName: 'Smart TV Full HD LED 4 polegadas Samsung modelo 43T5300A cor preta',
    valorDe: 'R$ 2.900,00',
    valorPor: 'R$ 1.900,00',
    pathImage: 'img/img10.jpg',
  });

  productList3.push({
    name: 'iPhone XR Apple 128GB Branco 6,1” 12MP iOS',
    altName: 'iPhone XR Apple 128 gigabytes Branco 6,1 polegadas 12 megapizels iOS',
    valorDe: 'R$ 5.500,00',
    valorPor: 'R$ 4.400,00',
    pathImage: 'img/img11.jpg',
  });

  productList3.push({
    name: 'iPhone SE Apple 64GB Preto 4,7” 12MP iOS',
    altName: 'iPhone SE Apple 64 gigabytes Preto 4,7 polegadas 12 megapixels iOS',
    valorDe: 'R$ 3.700,00',
    valorPor: 'R$ 3.050,00',
    pathImage: 'img/img12.jpg',
  });

  var productHtml = '';

  $.each(productList3, function(i, product) {
    productHtml += `
                <li>
                  <figure>
                    <a class="aa-product-img" href="#"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                      <figcaption>
                      <h4 class="aa-product-title"><a href="#">${product.name}</a></h4>
                      De <span class="aa-product-price"><del>${product.valorDe}</del></span> por <span class="aa-product-price"><b>${product.valorPor}</b></span>
                    </figcaption>
                  </figure>
                </li>
                `;
  });

  $('.productList3').html(productHtml);

  /**
   * Events
   */

  $('#formSearch').on('submit', function(e) {
      e.preventDefault();

      var search = $('#search').val();
      var productListAll = [];

      productListAll = productListAll.concat(productList1).concat(productList2).concat(productList3);

      // const filtered = productListAll.filter(e => e.name.match("/"+$('#search').val()+"/"));
      const filtered = productListAll.filter((item)=>{return item.name.toUpperCase().match(search.toUpperCase())});

      if (filtered.length > 0 && search != '') {
          $('.aa-product-area').hide();
          $('.aa-product-area-search').show();

          var productHtml = '';

          $.each(filtered, function(i, product) {
              productHtml += `
                        <li>
                          <figure>
                            <a class="aa-product-img" href="#"><img src="${product.pathImage}" alt="${product.altName}" height="200"></a>
                              <figcaption>
                              <h4 class="aa-product-title"><a href="#">${product.name}</a></h4>
                              De <span class="aa-product-price"><del>${product.valorDe}</del></span> por <span class="aa-product-price"><b>${product.valorPor}</b></span>
                            </figcaption>
                          </figure>
                        </li>
                        `;
          });

          $('.productListSearch').html(productHtml);
          $('.navbar').hide();
          // $('#buttonSearch').attr('disabled', true);
          $('#tituloProdutosEncontrados').html(filtered.length == 1 ? filtered.length+' Produto Encontrado:' : filtered.length+' Produtos Encontrados:');
          $('.aa-product-img').focus();
      } else {
          // $('#buttonSearch').attr('disabled', false);
          $('.navbar').show();
          $('.aa-product-area').show();
          $('.aa-product-area-search').hide();
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
    
});

