import Container from "../ui/Container"

export default function Features() {
  return (
    <section className="py-32 border-t border-white/5">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <div
              key={item}
              className="group p-8 rounded-2xl border border-white/5
                         hover:border-white/10 hover:bg-white/[0.02]
                         transition duration-300"
            >
              <h3 className="text-lg font-medium mb-4">
                Feature {item}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Modern architecture with scalable components.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}