import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                Новинка 2025
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Создавай будущее
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                вместе с нами
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Революционный подход к решению ваших задач. 
              Быстро, эффективно, современно.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl shadow-white/20 text-lg px-8 py-6 h-auto rounded-2xl font-semibold">
                Начать сейчас
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto rounded-2xl font-semibold">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {[
                { icon: "Zap", label: "Молниеносно", value: "10x" },
                { icon: "Users", label: "Клиентов", value: "50k+" },
                { icon: "Award", label: "Рейтинг", value: "4.9" },
                { icon: "TrendingUp", label: "Рост", value: "300%" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm mb-3">
                    <Icon name={stat.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-muted-foreground">
              Современные решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Rocket",
                title: "Скорость запуска",
                description: "Начните работу за считанные минуты. Никаких сложных настроек.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Ваши данные защищены по последним стандартам индустрии.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "LineChart",
                title: "Аналитика",
                description: "Полная картина результатов в режиме реального времени.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((feature) => (
              <div key={feature.title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}}></div>
                <div className="relative p-8 rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-card">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-8 shadow-2xl">
            <Icon name="Heart" size={40} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Присоединяйтесь к тысячам довольных клиентов уже сегодня
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary via-accent to-secondary text-white hover:opacity-90 shadow-2xl text-lg px-10 py-7 h-auto rounded-2xl font-semibold">
            Попробовать бесплатно
            <Icon name="Sparkles" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                YourBrand
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 Все права защищены
              </p>
            </div>
            <div className="flex gap-4">
              {["Twitter", "Github", "Linkedin"].map((social) => (
                <Button key={social} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <Icon name={social} size={20} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
