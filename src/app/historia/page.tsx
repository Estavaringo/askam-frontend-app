export const metadata = {
  title: "História da ASKAM",
  description: "Conheça a história da Associação de Karatê Manoel (ASKAM)",
};

export default function HistoriaPage() {
  // O texto estático foi extraído de public/historia.txt
  const historia = `Askam (Associação de Karatê Manoel), fundada em 26 de março de 2002, administrada pelo professor de Karatê e Defesa Pessoal Manoel Laurentino de Oliveira Filho.
O Sensei Manoel Laurentino começou a praticar artes marciais especificamente o KARATÊ no ano de 1979 aos 15 anos de idade.

Inicialmente por causa de uma desavença entre os colegas da rua onde morava e seu irmão, pelo seu vizinho ser mais velho e maior em tamanho e força, ele e o irmão levaram desvantagem, pensando como de vingar-se, tomou a decisão de freqüentar a Associação da Sudene(na época com modalidades de esportes incluindo o Karatê, o qual hoje não há mais esta opção), no bairro Engenho do Meio, Recife, PE, Brasil.

Após algumas aulas com o seu primeiro professor Douglas de Menezes, aprendeu a correta disciplina do karatê, esqueceu a vingança e começou a amar, dedicar-se, disciplinar-se, conter o espírito de agressão, equilíbrio emocional e respeitar acima de tudo.

Por ser de família humilde, despediu-se de seu papai muito cedo, aos dez anos, teve que trabalhar muito jovem e lutar pelos seus ideais sozinho. Com muita coragem e determinação dedicou-se ao karatê ao máximo, que em pouco tempo ainda na faixa roxa já administrava aulas de karatê juntamente com seu professor na Associação da Sudene, a qual assumiu sozinho por dois anos, quando o professor Douglas se afastou. Neste período por indicação do professor Douglas procurou o professor Hayashi Kawamura para dá continuidade a seus treinamentos, melhoria dos conhecimentos técnicos e chegar a tão sonhada faixa preta.

Em Recife, no Boa Viagem Praia Clube num domingo à tarde dia 17 de novembro de 1989, foi realizado o exame de faixa preta 1º DAN, após anos de dedicação estava se concretizando um dos sonhos do professor Manoel Laurentino.

Outro de seus sonhos se realizou no dia 26 de março de 2002, quando fundou a sua associação: ASKAM. A Askam tem como objetivo auxiliar crianças e jovens carentes na educação, disciplina, coordenação motora, formar futuros atletas para representar nosso Estado / País em campeonatos nacionais e internacionais.

Sensei Manoel Laurentino, hoje, faixa preta 4º DAN, árbitro nacional (CBK_Confederação Brasileira de Karatê) e internacional (CSK_ConfederaçãoSulamericana de Karatê), diretor técnico (FPK_Federação Pernambucana de karatê).

“Obrigada Deus, pelo esforço, pelo estimulo, pela dedicação, pela paciência, e pela nobreza de espírito, com que me tornasse um homem: esforçado, estimulado, dedicado, paciente, nobre de espírito e faixa preta de Karatê”. Oss...

Sensei Manoel Laurentino`;

  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", background: "#181818", borderRadius: 12, boxShadow: "0 4px 24px #0005", padding: 32 }}>
      <h1 style={{ color: "#fff", marginBottom: 24, textAlign: 'center', fontWeight: 700, fontSize: 32, letterSpacing: 1 }}>História da ASKAM</h1>
      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', color: '#fff', fontSize: 18, lineHeight: 1.7 }}>{historia}</pre>
    </div>
  );
}
