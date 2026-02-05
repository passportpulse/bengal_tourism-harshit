export default function HomePage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1602941525421-8f8b81d6d77c)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bengal Tourism Welcomes You
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore, Experience & Expect more than your expectation!
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-600 px-6 py-3 rounded-full font-semibold">
              Explore Bengal
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
              Plan Your Trip
            </button>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Bengal Is Unlike Anywhere Else
          </h2>
          <p className="leading-relaxed">
            Come… visit & explore Bengal, the most culturally & ethically diverse
            region of India. A land where rustic village life co-exists beside
            modern metropolitan skylines — bullock carts running parallel to
            Audis, BMWs and Mercedes.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6"
          alt="Bengal life"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* ================= LEGENDS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Land of Legends & Leaders</h2>
          <p className="max-w-4xl mx-auto mb-10">
            Birthplace of Nobel Laureate Rabindranath Tagore, home of Mother
            Teresa, Oscar recipient Satyajit Ray, karmabhumi of Swami Vivekananda
            and Ramakrishna Paramhansa. Netaji Subhas Chandra Bose, Raja Ram Mohan
            Roy and Rishi Aurobindo were sons of Bengal too.
          </p>
          <img
            src="https://images.unsplash.com/photo-1585159812596-61c96e47a38b"
            alt="Tagore"
            className="mx-auto rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* ================= NATURE ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          From Mountains to Mangroves
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1588413335650-76e2c4d0a6d6",
            "https://images.unsplash.com/photo-1548013146-72479768bada",
            "https://images.unsplash.com/photo-1580655653885-65763b2597d0",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl h-64 w-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* ================= ICONS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Icons That Define Bengal
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Victoria Memorial",
              "Howrah Bridge",
              "Eden Gardens",
              "Kolkata Metro",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <p className="font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What the World Is to Others — Bengal Is to Us
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <p>Vodka → Bangla</p>
          <p>Burgers → Luchi & Aloor Dum</p>
          <p>Fish & Chips → Chops & Cutlets</p>
          <p>Alps → Kanchenjunga</p>
          <p>Amazon → Sundarbans</p>
          <p>Miami Beach → Digha</p>
        </div>
      </section>

      {/* ================= FOOD ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <img
            src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
            className="rounded-xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Taste the Soul of Bengal
            </h2>
            <p>
              Famous for Mustard Hilsa Fish, Prawn Malai Curry, rich street food
              culture and desserts like Rosogolla, Sandesh & Mishti Doi.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CULTURE ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Art, Music & Handicrafts
        </h2>
        <p className="text-center max-w-3xl mx-auto">
          Baul, Bhatiyali, Chhau, Jatra, Terracotta art, Patachitra, Bell metal and
          filigree crafts reflect Bengal’s artistic soul.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-red-600 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Come & Experience Bengal Renaissance
        </h2>
        <p className="mb-6">
          Visit Bengal Tourism before you visit West Bengal.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold">
          Join & Earn With Us
        </button>
      </section>

      {/* ================= FOOTER LINE ================= */}
      <footer className="py-8 text-center text-sm text-gray-500">
        The story continues…
      </footer>
    </main>
  )
}
