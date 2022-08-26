import React from "react";

import { FormControl, FormLabel, Input, Textarea, Link } from "@chakra-ui/react"

function Contato(){
    return(
        <FormControl w="100%">
            <FormLabel color="#f8f8f7">
                Assunto
            </FormLabel>
            <Input
                mb=".5rem"
                type="txt"
                placeholder="Qual o Assunto desse e-mail?" 
            />
            <FormLabel color="#f8f8f7">
                Seu Nome
            </FormLabel>
            <Input
                mb=".5rem"
                type="txt"
                placeholder="Qual o seu nome?"
            />
            <FormLabel color="#f8f8f7">
                E-mail
            </FormLabel>
            <Input
                mb=".5rem"
                type="email"
                placeholder="Qual o seu e-mail? Ex: email@exemplo.com"
            />
            <FormLabel color="#f8f8f7">
                Contato
            </FormLabel>
            <Input
                mb=".5rem"
                type="txt"
                placeholder="Qual o seu contato? (__) _____-____"
            />
            <FormLabel color="#f8f8f7">
                Mensagem
            </FormLabel>
            <Textarea
                mb="1rem"
                placeholder="Escreva a sua mensagem aqui..."
            />
            <Link
                as="button"
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