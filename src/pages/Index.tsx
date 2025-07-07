import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      {/* Diagonal gold stripes background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            #FFD700 0px,
            #FFD700 2px,
            transparent 2px,
            transparent 40px
          )`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-12 text-center">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-full text-sm tracking-wide uppercase shadow-lg">
                🎥 Видеолекция
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight font-montserrat">
              «Как не потерять себя в отношениях с избегающим мужчиной»
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Реальная первая помощь при отношениях с эмоционально закрытым
              партнером
            </p>
          </CardContent>
        </Card>

        {/* For Whom Section */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Для кого это видео
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Ты находишься в отношениях с мужчиной, который:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon
                      name="Heart"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">эмоционально закрыт</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon
                      name="Shield"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">избегает близости</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon
                      name="AlertTriangle"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">пугается твоих чувств</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon
                      name="Ghost"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      сближается, а потом исчезает без объяснений
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Ты постоянно думаешь:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon
                      name="MessageCircle"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      «Я что-то не так сказала?»
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon
                      name="User"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      «Наверное, проблема во мне…»
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon
                      name="RotateCcw"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      «Как мне его вернуть?»
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon
                      name="Repeat"
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">
                      «Почему я снова оказалась в таких отношениях?»
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What You'll Learn Section */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Я помогу тебе разобраться в твоих чувствах и объясню:
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Кто такие мужчины с избегающим типом привязанности
                    </h3>
                    <p className="text-gray-600">Чего они хотят от отношений</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Почему ты в таких отношениях?
                    </h3>
                    <p className="text-gray-600">
                      Что в тебе притягивает таких партнёров?
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Чем это опасно для твоей психики?
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Что делать прямо сейчас
                    </h3>
                    <p className="text-gray-600">
                      чтобы не разрушаться в этих отношениях?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Результат</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <Icon
                  name="Eye"
                  className="text-yellow-500 mx-auto mb-4"
                  size={48}
                />
                <p className="text-lg text-gray-700 font-medium">
                  Ты получишь чёткую картину своих отношений
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <Icon
                  name="Target"
                  className="text-yellow-500 mx-auto mb-4"
                  size={48}
                />
                <p className="text-lg text-gray-700 font-medium">
                  Вместо тревоги и самообвинения - направишь внимание на себя
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-2 border-red-200">
                <Icon
                  name="Heart"
                  className="text-red-500 mx-auto mb-4"
                  size={48}
                />
                <p className="text-lg text-gray-700 font-medium">
                  Эта лекция - реальная первая помощь при отношениях с холодным
                  мужчиной
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Section */}
        <Card className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-2xl border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold mb-8 text-white">
              Инвестиция в твоё психологическое здоровье
            </h2>
            <div className="text-6xl font-black mb-4 text-white tracking-wider">
              <span className="text-red-600 bg-white px-4 py-2 rounded-lg shadow-lg">
                499 ₽
              </span>
            </div>
            <p className="text-white text-lg opacity-90">
              Доступ к видеолекции навсегда
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
