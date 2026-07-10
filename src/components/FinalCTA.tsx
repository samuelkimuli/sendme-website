export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-brand-500 text-white w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
          What can SendMe do for you today?
        </h2>
        <p className="mt-4 text-white/80 text-xl">
          Join customers, runners, and businesses already using SendMe across Uganda.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://app.sendmeafrica.com"
            className="bg-white text-brand-600 rounded-full px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl hover:bg-brand-50 transition"
          >
            Use SendMe →
          </a>
          <a
            href="https://runner.sendmeafrica.com"
            className="border-2 border-white text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-white hover:text-brand-600 transition"
          >
            Become a Runner
          </a>
          <a
            href="https://merchant.sendmeafrica.com"
            className="border-2 border-white/50 text-white rounded-full px-8 py-4 text-base font-semibold hover:border-white hover:bg-white/10 transition"
          >
            Register Your Business
          </a>
        </div>
      </div>
    </section>
  );
}
