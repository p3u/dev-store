Ia representar o catalogo de devs através de lista ou tabela.  
Percebi que ia ficar uma droga quando visto em celular.  
Optei por cards, assim, no celular, consigo mostrar a informação completa sem ter que dar scroll horizontal.

Descobri depois de muita dor de cabeça que Object.assign() só faz uma shallow copy.
Não entendia porque meu redux state estava mudando. Quando descobri usei JSON.parse(JSON.stringify(developersInCart))
