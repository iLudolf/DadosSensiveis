//Production

import React, { useState, useEffect } from 'react';

import './styles.css';

import NavbarProd from '../../components/NavbarProd';




function Production() {


    return (
        <>


            <NavbarProd />
            <div class="p-example-divider"></div>

            <div class="container">
                <main>
                    <div class="py-5 text-center">
                        <img class="d-block mx-auto mb-4" src="./cart-alt.svg" alt="" width="72" height="72" />
                        <h2>Finalizar Compra</h2>
                        <p class="lead">Exemplo de Transmissão de informações sensíveis na URL.</p>
                    </div>

                    <div class="row g-5">
                        <div class="col-md-5 col-lg-4 order-md-last">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">Produtos adicionados ao carrinho
                                </span>
                                <span class="badge bg-primary rounded-pill">3</span>
                            </h4>
                            <ul class="list-group mb-3">
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">Processador i9-10900</h6>
                                        <small class="text-muted">Cache 20MB, 2.8GHz</small>
                                    </div>
                                    <span class="text-muted">R$ 2.649,90</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">GeForce RTX 3080</h6>
                                        <small class="text-muted">Placa de Vídeo Asus Rog </small>
                                    </div>
                                    <span class="text-muted">R$ 18.999,90</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">Echo Dot (4ª Geração) </h6>
                                        <small class="text-muted">Amazon Smart Speaker</small>
                                    </div>
                                    <span class="text-muted">R$ 379,00</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between bg-light">
                                    <div class="text-success">
                                        <h6 class="my-0">Código promocional</h6>
                                        <small>DADOSSENSIVEIS</small>
                                    </div>
                                    <span class="text-success">−R$ 2.649,90</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Total (BRL)</span>
                                    <strong>R$ 19.378,9</strong>
                                </li>
                            </ul>


                        </div>
                        <div class="col-md-7 col-lg-8">
                            <h4 class="mb-3">Endereço de Cobrança</h4>
                            <form class="needs-validation" novalidate>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="firstName" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="lastName" class="form-label">Sobrenome</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="username" class="form-label">Nome do Usuário</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text">@</span>
                                            <input type="text" class="form-control" id="username" placeholder="Nome de Usuário" required />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">E-mail <span class="text-muted">(Opcional)</span></label>
                                        <input type="email" class="form-control" id="email" placeholder="seu-email@exemplo.com" />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">Endereço</label>
                                        <input type="text" class="form-control" id="address" placeholder="Rua Carlos Alberto Cuba Carvalheiro..." required />
                                        <div class="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>                                   

                                    <div class="col-md-5">
                                        <label for="country" class="form-label">País</label>
                                        <select class="form-select" id="country" required>
                                            <option value="">Escolher...</option>
                                            <option>Brasil</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="state" class="form-label">Estado</label>
                                        <select class="form-select" id="state" required>
                                            <option value="">Escolher...</option>
                                            <option>Espírito Santo</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="zip" class="form-label">CEP</label>
                                        <input type="text" class="form-control" id="zip" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="same-address" />
                                    <label class="form-check-label" for="same-address">O endereço de entrega é igual ao meu endereço de cobrança</label>
                                </div>

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="save-info" />
                                    <label class="form-check-label" for="save-info">Guarde esta informação para a próxima vez</label>
                                </div>

                                <hr class="my-4" />

                                <h4 class="mb-3">Pagamento</h4>

                                <div class="my-3">
                                    <div class="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                        <label class="form-check-label" for="credit">Cartão de Credito</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="debit">Cartão de Debito</label>
                                    </div>
                                </div>

                                <div class="row gy-3">
                                    <div class="col-md-6">
                                        <label for="cc-name" class="form-label">Nome no cartão</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                        <small class="text-muted">Nome completo conforme exibido no cartão</small>
                                        <div class="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="cc-number" class="form-label">Numero do cartão</label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-expiration" class="form-label">Vencimento</label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-cvv" class="form-label">CVV</label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <button class="w-100 btn btn-primary btn-lg" type="submit">Confirmar Compra</button>
                            </form>
                        </div>
                    </div>
                </main>


            </div>
            <div class="p-example-divider"></div>

        </>
    );
}





export default Production;
