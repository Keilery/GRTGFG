# NexusMarket

Маркетплейс игровых предметов, услуг и автоматизации в стиле **Apple iOS 26**
(чёрный фон, liquid glass, полосы 45°).

> **Статус:** MVP / каркас. Создан как стартовая точка для полной реализации
> платформы согласно спецификации (см. раздел [Спецификация](#спецификация)).

---

## 🚀 Быстрый старт

### Frontend (Next.js 14)

```bash
cd frontend
npm install
npm run dev
# открой http://localhost:3000
```

### Backend (Express)

```bash
cd backend
npm install
cp .env.example .env
npm run dev
# API на http://localhost:4000
# проверка здоровья: curl http://localhost:4000/api/health
```

### Полный стек через Docker

```bash
docker compose up -d
# frontend → http://localhost:3000
# backend  → http://localhost:4000
# postgres → localhost:5432
# redis    → localhost:6379
```

---

## 📂 Структура проекта

```
nexusmarket/
├── frontend/                  # Next.js 14 (App Router)
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/        # login, register, forgot-password, verify
│   │   │   ├── marketplace/   # маркетплейс + категории + объявление
│   │   │   ├── shop/          # официальный магазин
│   │   │   ├── automation/    # боты + интеграции (FunPay/Steam/...)
│   │   │   ├── rental/        # аренда игр
│   │   │   ├── support/       # FAQ, тикеты, live chat
│   │   │   ├── profile/       # профиль, кошелёк, настройки
│   │   │   ├── admin/         # админ-панель (10 разделов)
│   │   │   └── api/           # mock API routes
│   │   ├── components/
│   │   │   ├── ui/            # Button, Card, Badge, Avatar, GlassPanel...
│   │   │   ├── layout/        # Header, Footer, MobileNav, AdminSidebar
│   │   │   └── marketplace/   # ProductCard, FilterPanel, CategoryNav
│   │   ├── lib/               # utils, constants, mock-data
│   │   └── types/             # TypeScript типы домена
│   ├── tailwind.config.ts     # iOS 26 цвета и анимации
│   └── package.json
│
├── backend/                   # Express + Zod + JWT
│   ├── src/
│   │   ├── index.ts           # точка входа
│   │   └── api/
│   │       ├── health.routes.ts
│   │       └── v1/
│   │           ├── auth/      # /api/v1/auth/*
│   │           ├── users/     # /api/v1/users/*
│   │           ├── listings/  # /api/v1/listings/*
│   │           └── orders/    # /api/v1/orders/*
│   ├── prisma/
│   │   └── schema.prisma      # полная схема БД (PostgreSQL)
│   └── package.json
│
├── docker/                    # Dockerfile для frontend и backend
│   ├── Dockerfile.frontend
│   └── Dockerfile.backend
├── nginx/                     # обратный прокси
│   └── nginx.conf
├── docker-compose.yml         # frontend + backend + postgres + redis
└── README.md
```

---

## 🎨 Дизайн-система (iOS 26)

| Токен        | Значение                  | Использование |
|--------------|---------------------------|---------------|
| Background   | `#000000`                 | основной фон |
| Stripes      | `rgba(255,255,255,0.05)` 45° | паттерн на героях |
| Glass        | `rgba(255,255,255,0.08)`  | панели, карточки |
| Border       | `rgba(255,255,255,0.12)`  | границы glass |
| Success      | `#30D158`                 | успешные статусы |
| Warning      | `#FF9F0A`                 | предупреждения |
| Error        | `#FF453A`                 | ошибки |
| Скругления   | `22px` (`rounded-ios`)    | основной радиус |
| Шрифт        | SF Pro Display / Inter    | UI |

Эффекты: `backdrop-filter: blur(40px)`, spring-анимации (Framer Motion),
повторяющийся 45° градиент полос, неоморфные тени.

---

## ✅ Что реализовано

### Frontend (43 маршрута)

- **Главная:** hero, статистика, фичи, популярные игры, горячие лоты
- **Авторизация:** login / register / forgot-password / verify (с OAuth-кнопками)
- **Маркетплейс:** список лотов, категории, фильтры, страница лота, форма продажи (3 шага), поиск
- **Магазин:** каталог, категории, страница товара (Steam Wallet, Game Pass, Nitro и т.д.)
- **Автоматизация:** дашборд, страница ботов, интеграции (FunPay/Starvell/Playerok), скрипты
- **Аренда:** список игр, страница игры с тарифами (день/неделя/месяц), мои аренды
- **Поддержка:** FAQ (аккордеон), тикеты, страница тикета, live-chat
- **Профиль:** свой профиль, публичный профиль, настройки, заказы, кошелёк
- **Админ-панель:** дашборд, пользователи, товары, заказы, финансы, модерация, аналитика, тикеты, логи, настройки

### Backend (REST API stub)

- `/api/health` — проверка здоровья
- `/api/v1/auth/*` — login, register, refresh, logout (Zod validation, JWT)
- `/api/v1/users/*` — список и профиль пользователя
- `/api/v1/listings/*` — поиск и просмотр лотов
- `/api/v1/orders/*` — просмотр и создание заказов
- Helmet, CORS, rate limiting, morgan logging
- Полная **Prisma-схема** со всеми моделями (User, Listing, Order, Transaction, Bot, Rental, Ticket, Notification, Coupon и т.д.)

---

## ❌ Что ещё не реализовано

Это MVP / каркас. Полноценная production-реализация требует значительно больше
работы. Не входит в текущий релиз:

- Реальная БД и миграции (схема готова, но не запущена)
- Реальная авторизация: bcrypt-хэширование, refresh-токены, OAuth-провайдеры
  (Google/Discord/Steam/VK), 2FA/TOTP
- Платежи: интеграция с эквайрингом (карты), СБП, крипто-кошельки, эскроу-логика
- Боты: реальные подключения FunPay/Starvell/Playerok через их API
- WebSocket-сервер: уведомления, статус заказа, чат, логи ботов в реальном
  времени
- Файловое хранилище: загрузка изображений в S3 / Cloudflare R2
- Поиск: Elasticsearch / Meilisearch индекс по лотам
- Кэш: Redis для горячих запросов и сессий
- Email / SMS / Telegram нотификации (SMTP, Twilio, Bot API)
- Rate limiting, CAPTCHA, KYC-верификация
- E2E-тесты (Playwright), unit-тесты (Vitest)
- CI/CD-пайплайн, деплой в Docker / Kubernetes / Vercel
- Локализация (RU/EN) — сейчас только русский интерфейс

---

## 🛠 Технологический стек

| Слой        | Технологии |
|-------------|------------|
| Frontend    | Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, Zustand, Lucide Icons |
| Backend     | Node.js 22, Express, Zod, JWT (jsonwebtoken), bcrypt, Helmet, CORS, rate-limit |
| Database    | PostgreSQL 16 (через Prisma), Redis 7 (кэш) |
| Infra       | Docker Compose, Nginx (обратный прокси) |
| Тесты       | (планируется) Vitest, Playwright |

---

## 📜 Скрипты

### Frontend (`frontend/`)

```bash
npm run dev        # dev-сервер на :3000
npm run build      # продакшен-сборка
npm run start      # запуск собранного приложения
npm run lint       # ESLint
npm run typecheck  # TypeScript проверка
```

### Backend (`backend/`)

```bash
npm run dev        # tsx watch на :4000
npm run build      # компиляция в dist/
npm run start      # запуск из dist/
npm run lint       # ESLint
npm run typecheck  # TypeScript проверка
```

---

## 🔐 Безопасность (запланировано)

- Helmet.js — HTTP заголовки безопасности
- Rate limiting (express-rate-limit)
- CSRF токены, XSS sanitization (DOMPurify)
- SQL Injection — параметризованные запросы (Prisma)
- bcrypt для паролей (cost: 12)
- AES-256 шифрование чувствительных данных (deliveryData)
- JWT + Refresh tokens, доверенные устройства
- HTTPS only (HSTS), Cloudflare Turnstile

---

## 📄 Спецификация

Полная функциональная спецификация (250 функций, схема БД, API endpoints,
дизайн-система, 8 уровней пользователей, 10+ интеграций) предоставлена
владельцем проекта. Этот репозиторий реализует **архитектурный каркас**
и UI всех 43 ключевых страниц, готовый к подключению реальных сервисов.

---

## 🤝 Лицензия

Proprietary. Все права защищены © 2026.
