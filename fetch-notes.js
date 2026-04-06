import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const PAGE_ID = process.env.NOTION_PAGE_ID;

if (!NOTION_API_KEY || !PAGE_ID) {
  console.error("Ошибка: в .env не хватает NOTION_API_KEY или NOTION_PAGE_ID");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

async function getNotes() {
  try {
    console.log('Подключаюсь к Notion API...');
    const mdblocks = await n2m.pageToMarkdown(PAGE_ID);
    const mdString = n2m.toMarkdownString(mdblocks);
    
    // В новых версиях notion-to-md это объект с 'parent'
    const content = typeof mdString === 'object' ? mdString.parent : mdString;
    
    fs.writeFileSync('NOTION_NOTES.md', content || '');
    console.log('Успех! Заметки скачаны в файл NOTION_NOTES.md в корне проекта.');
  } catch (error) {
    console.error("Ошибка при скачивании из Notion:", error.message);
  }
}

getNotes();
