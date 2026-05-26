<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Phone, Zap, Battery, Cpu, Wrench, Car, ShieldCheck, Clock, MapPin, MessageCircle } from '@lucide/vue'
import heroImg from '@/assets/hero.jpg'

onMounted(() => {
  document.title = 'АвтоЭлектрик Астана — Диагностика и ремонт электрики авто 24/7'
})

const phone = '+7 778 142 0446'
const phoneHref = 'tel:+77781420446'
const currentYear = computed(() => new Date().getFullYear())

const services = [
  { icon: Cpu,         title: 'Компьютерная диагностика', desc: 'Полное сканирование всех блоков управления автомобиля' },
  { icon: Battery,     title: 'Аккумуляторы и стартеры',  desc: 'Диагностика, замена, ремонт АКБ и пусковых систем' },
  { icon: Zap,         title: 'Генераторы',               desc: 'Ремонт генераторов любой сложности с гарантией' },
  { icon: Wrench,      title: 'Электропроводка',          desc: 'Поиск обрывов, замыканий, восстановление проводки' },
  { icon: Car,         title: 'Сигнализации и автозапуск', desc: 'Установка и настройка охранных систем' },
  { icon: ShieldCheck, title: 'Подогревы и доп. оборудование', desc: 'Установка автономных подогревателей и электроники' },
]

const stats = [
  { value: '15+',  label: 'лет опыта' },
  { value: '3000+', label: 'авто отремонтировано' },
  { value: '24/7', label: 'выезд по Астане' },
  { value: '100%', label: 'гарантия качества' },
]

const benefits = [
  { icon: Clock,       t: 'Приедем в течение часа',     d: 'Мобильная служба по всей Астане' },
  { icon: Cpu,         t: 'Современное оборудование',   d: 'Дилерские сканеры Launch, Autel, осциллограф' },
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">

    <!-- NAV -->
    <header class="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-md bg-gradient-amber flex items-center justify-center shadow-glow">
            <Zap class="w-5 h-5 text-primary-foreground" :stroke-width="2.5" />
          </div>
          <span class="font-display text-xl tracking-wide">carelectric<span class="text-gradient-amber">.kz</span></span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" class="hover:text-foreground transition">Услуги</a>
          <a href="#why" class="hover:text-foreground transition">Преимущества</a>
          <a href="#contact" class="hover:text-foreground transition">Контакты</a>
        </nav>
        <a :href="phoneHref" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-amber text-primary-foreground font-semibold text-sm hover:shadow-glow transition">
          <Phone class="w-4 h-4" /> Позвонить
        </a>
      </div>
    </header>

    <!-- HERO -->
    <section id="top" class="relative pt-32 pb-24 overflow-hidden bg-gradient-hero">
      <div class="absolute inset-0 opacity-40">
        <img :src="heroImg" alt="Автоэлектрик за работой" width="1600" height="1200" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>
      <div class="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-widest text-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-spark" /> Астана · круглосуточно
          </div>
          <h1 class="font-display text-5xl md:text-7xl uppercase leading-[0.95] mb-6">
            Авто<span class="text-gradient-amber">электрик</span><br />который чинит<br />с первого раза
          </h1>
          <p class="text-lg text-muted-foreground mb-8 max-w-lg">
            Диагностика, ремонт электрики и установка оборудования. Выезд к вам или приём в боксе. Честно, быстро, с гарантией.
          </p>
          <div class="flex flex-wrap gap-3">
            <a :href="phoneHref" class="inline-flex items-center gap-2 px-6 py-4 rounded-md bg-gradient-amber text-primary-foreground font-bold uppercase tracking-wide hover:shadow-glow transition">
              <Phone class="w-5 h-5" /> {{ phone }}
            </a>
            <a href="https://wa.me/77781420446" class="inline-flex items-center gap-2 px-6 py-4 rounded-md border border-border bg-card hover:bg-secondary font-semibold transition">
              <MessageCircle class="w-5 h-5" /> WhatsApp
            </a>
          </div>
          <div class="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div v-for="s in stats" :key="s.label">
              <div class="font-display text-3xl text-gradient-amber">{{ s.value }}</div>
              <div class="text-xs text-muted-foreground uppercase tracking-wider mt-1">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div class="text-primary text-sm uppercase tracking-widest mb-3">Что мы делаем</div>
            <h2 class="font-display text-4xl md:text-5xl uppercase">Услуги автоэлектрика</h2>
          </div>
          <p class="text-muted-foreground max-w-md">От замены лампочки до восстановления проводки после ДТП — закрываем весь спектр электрики.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="s in services"
            :key="s.title"
            class="group relative p-7 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-elegant"
          >
            <div class="w-12 h-12 rounded-md bg-gradient-amber flex items-center justify-center mb-5 group-hover:shadow-glow transition">
              <component :is="s.icon" class="w-6 h-6 text-primary-foreground" :stroke-width="2" />
            </div>
            <h3 class="font-display text-xl uppercase mb-2">{{ s.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section id="why" class="py-24 px-6 bg-card/30 border-y border-border">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-primary text-sm uppercase tracking-widest mb-3">Почему мы</div>
          <h2 class="font-display text-4xl md:text-5xl uppercase mb-6">Без «приедь завтра» и «надо менять всё»</h2>
          <p class="text-muted-foreground mb-8">Работаем по делу: находим причину, согласовываем цену, чиним. Никаких накруток и навязанных запчастей.</p>
          <ul class="space-y-4">
            <li v-for="b in benefits" :key="b.t" class="flex gap-4">
              <div class="shrink-0 w-11 h-11 rounded-md bg-secondary border border-border flex items-center justify-center">
                <component :is="b.icon" class="w-5 h-5 text-primary" />
              </div>
              <div>
                <div class="font-semibold">{{ b.t }}</div>
                <div class="text-sm text-muted-foreground">{{ b.d }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="relative aspect-square rounded-xl overflow-hidden shadow-elegant border border-border">
          <img :src="heroImg" alt="Работа автоэлектрика" loading="lazy" width="1200" height="1200" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>

    <!-- CTA / CONTACT -->
    <section id="contact" class="py-24 px-6">
      <div class="max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-hero p-10 md:p-16 shadow-elegant">
        <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-amber opacity-20 blur-3xl" />
        <div class="relative">
          <h2 class="font-display text-4xl md:text-6xl uppercase mb-4">Машина не заводится?</h2>
          <p class="text-lg text-muted-foreground mb-8 max-w-2xl">Позвоните прямо сейчас — проконсультируем бесплатно и подскажем, что делать.</p>
          <div class="grid sm:grid-cols-3 gap-4 mb-10">
            <a :href="phoneHref" class="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition">
              <Phone class="w-5 h-5 text-primary" />
              <div>
                <div class="text-xs text-muted-foreground uppercase">Телефон</div>
                <div class="font-semibold">{{ phone }}</div>
              </div>
            </a>
            <div class="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Clock class="w-5 h-5 text-primary" />
              <div>
                <div class="text-xs text-muted-foreground uppercase">График</div>
                <div class="font-semibold">24 / 7</div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <MapPin class="w-5 h-5 text-primary" />
              <div>
                <div class="text-xs text-muted-foreground uppercase">Локация</div>
                <div class="font-semibold">Астана</div>
              </div>
            </div>
          </div>
          <a :href="phoneHref" class="inline-flex items-center gap-3 px-8 py-5 rounded-md bg-gradient-amber text-primary-foreground font-bold uppercase tracking-wide hover:shadow-glow transition text-lg">
            <Phone class="w-5 h-5" /> Вызвать электрика
          </a>
        </div>
      </div>
    </section>

    <footer class="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
      © {{ currentYear }} prod by <a href="https://t.me/css_dev/" target="_blank" class="text-gradient-amber font-semibold hover:opacity-80 transition">Akhmetkhanov Zhannur</a>
    </footer>

  </div>
</template>
