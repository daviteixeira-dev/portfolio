import React from "react";

import { FormControl, FormLabel, Input, Textarea, Link } from "@chakra-ui/react"

function Contato(){
    return(
        <FormControl
            w="100%"
            id="contato"
            as="form"
            action="https://formsubmit.co/a03add9d18846a66fc3ff63eaf1f227c"
            method="POST"
        >
            <FormLabel color="#f8f8f7" for="assunto">
                Assunto
            </FormLabel>
            <Input
                mb=".5rem"
                type="txt"
                name="assunto"
                placeholder="Qual o Assunto desse e-mail?" 
            />
            <FormLabel color="#f8f8f7" for="nome">
                Seu Nome
            </FormLabel>
            <Input
                mb=".5rem"
                type="txt"
                name="nome"
                placeholder="Qual o seu nome?"
            />
            <FormLabel color="#f8f8f7" for="email">
                E-mail
            </FormLabel>
            <Input
                mb=".5rem"
                type="email"
                name="email"
                placeholder="Qual o seu e-mail? Ex: email@exemplo.com"
            />
            <FormLabel color="#f8f8f7" for="tel">
                Contato
            </FormLabel>
            <Input
                mb=".5rem"
                type="tel"
                name="tel"
                placeholder="Qual o seu contato? (__) _____-____"
            />
            <FormLabel color="#f8f8f7" for="mensagem">
                Mensagem
            </FormLabel>
            <Textarea
                mb="1rem"
                name="mensagem" 
                placeholder="Escreva a sua mensagem aqui..."
            />
            <Input 
                type="hidden" 
                name="_next" 
                value="https://daviteixeira-btm.github.io/pages/thanks.html"
            />
            <Input 
                type="hidden" 
                name="_captcha" 
                value="true"
            />
            <Link
                as="button"
                type="submit"
                p=".5rem 1rem"
                color="#f8f8f7"
                border="2px solid #f8f8f7"
                _hover={{
                    background: "#f8f8f7",
                    color: "black",
                    fontWeight: "bold"
                }}
            >
                Enviar
            </Link>
        </FormControl>
    );
};

export default Contato;