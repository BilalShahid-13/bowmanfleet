import { cpSync } from 'fs';

cpSync('.next/static', '.next/standalone/.next/static', { recursive: true });
cpSync('public', '.next/standalone/public', { recursive: true });

console.log('✅ Static assets copied successfully');