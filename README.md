# AI Salesperson 24/7 - Landing Page

Лендинг для ИИ-продавца, работающего круглосуточно.

## 🚀 Быстрый деплой на Netlify

### Автоматический деплой (Рекомендуется)

1. **Войдите в Netlify**: https://app.netlify.com/
2. **Найдите проект**: `aivdele-ai-salesperson`
3. **Подключите GitHub**:
   - Site settings → Build & deploy → Configure continuous deployment
   - Link repository: `sergio2171/aivdele-ai-salesperson`
   - Build settings (уже настроены в netlify.toml):
     - Build command: `npm install && npm run build`
     - Publish directory: `dist`
4. **Deploy!** - Netlify автоматически соберет и задеплоит

### Настройка домена aivdele.com

1. В Netlify: Site settings → Domain management → Add custom domain
2. Введите: `aivdele.com`
3. Следуйте инструкциям Netlify для настройки DNS

## 🛠 Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Превью продакшен сборки
npm run preview
```

## 📦 Структура проекта

```
.
├── components/
│   ├── sections/      # Секции лендинга
│   ├── ui/           # UI компоненты
│   ├── Layout.tsx
│   └── ChatWidget.tsx
├── contexts/         # React контексты
├── index.html
├── App.tsx
└── package.json
```

## 🔧 Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS (CDN)
- Framer Motion
- Recharts
- Lucide Icons

## 📝 Особенности

- ✅ Адаптивный дизайн
- ✅ Анимации и интерактивность
- ✅ AI чат-виджет с интеграцией n8n
- ✅ Форма лидов с отправкой в n8n
- ✅ ROI калькулятор
- ✅ Кейсы и отзывы

## 🔗 Webhook эндпоинты

- Лиды: `https://n8n.aivdele.com/webhook/leads`
- AI чат: `https://n8n.aivdele.com/webhook/ai-chat`

## 📄 Лицензия

Все права защищены © 2026