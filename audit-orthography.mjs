import fs from 'fs';
import path from 'path';

// Função para buscar arquivos recursivamente
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Mapeamento de termos críticos sem acento vs Correto
const targetWords = {
  // --- SERVIÇOS E SOLUÇÕES ---
  'Solucoes': 'Soluções',
  'solucoes': 'soluções',
  'Integracoes': 'Integrações',
  'integracoes': 'integrações',
  'Agencia': 'Agência',
  'Agencias': 'Agências',
  'Governanca': 'Governança',
  'Seguranca': 'Segurança',

  // --- ESTRATÉGIA E PERFORMANCE ---
  'Estrategia': 'Estratégia',
  'Estrategias': 'Estratégias',
  'Eficiencia': 'Eficiência',
  'Experiencia': 'Experiência',
  'Tecnologica': 'Tecnológica',
  'Tecnologico': 'Tecnológico',
  'Analise': 'Análise',
  'Analises': 'Análises',
  'Gestao': 'Gestão',
  'Automatizacao': 'Automatização',

  // --- INTERFACE (UX/UI) ---
  'Pagina': 'Página',
  'Paginas': 'Páginas',
  'Conteudo': 'Conteúdo',
  'Video': 'Vídeo',
  'Videos': 'Vídeos',
  'Botao': 'Botão',
  'Botoes': 'Botões',
  'Opcao': 'Opção',
  'Opcoes': 'Opções',
  'Modulo': 'Módulo',
  'Modulos': 'Módulos',
  'Icone': 'Ícone',
  'Icones': 'Ícones',
  'Usuario': 'Usuário',
  'Usuarios': 'Usuários',

  // --- CONTATO E SUPORTE ---
  'Duvida': 'Dúvida',
  'Duvidas': 'Dúvidas',
  'Endereco': 'Endereço',
  'Atencao': 'Atenção',
  'Horario': 'Horário',
  'Telefonico': 'Telefônico',
  'Formulario': 'Formulário',

  // --- ENGENHARIA E CÓDIGO ---
  'Codigo': 'Código',
  'Codigos': 'Códigos',
  'Automatico': 'Automático',
  'Dinamico': 'Dinâmico',
  'Estatico': 'Estático',
  'Relatorio': 'Relatório',
  'Relatorios': 'Relatórios',
  'Manutencao': 'Manutenção',
};

function audit() {
  const files = getAllFiles('src');

  console.log(`🔍 Iniciando auditoria em ${files.length} arquivos...`);
  let issuesFound = 0;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Ignorar linhas que parecem URLs ou caminhos
      if (line.includes('/') || line.includes('http') || line.includes('href') || line.includes('canonical') || line.includes('url')) {
        return;
      }
      Object.keys(targetWords).forEach(wrong => {
        // Regex para achar a palavra exata
        const regex = new RegExp(`\\b${wrong}\\b`, 'g');

        if (regex.test(line)) {
          console.log(`⚠️  [ERRO] Arquivo: ${file} | Linha: ${index + 1}`);
          console.log(`   Encontrado: "${wrong}" -> Deveria ser: "${targetWords[wrong]}"`);
          console.log(`   Contexto: ${line.trim()}`);
          console.log('---');
          issuesFound++;
        }
      });
    });
  });

  if (issuesFound === 0) {
    console.log('✅ Nenhuma inconsistência ortográfica encontrada!');
  } else {
    console.log(`❌ Total de ${issuesFound} erros encontrados.`);
  }
}

audit();