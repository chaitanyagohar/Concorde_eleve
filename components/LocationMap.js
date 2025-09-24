export default function LocationMap() {
  return (
    <section id="location-map" className="pb-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#572f1f]">
            Location Map
          </h2>
        </div>

        {/* MODIFIED: Added a wrapper with max-width and mx-auto to center the map */}
        <div className="max-w-6xl mx-auto">
          {/* MODIFIED: Reverted to the padding-bottom trick for a responsive 16:9 aspect ratio */}
          <div className="relative w-full h-[60vh] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.279633803152!2d77.7118318758826!3d13.017833014168054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae111c6d36637b%3A0x3b9015c60989b531!2sConcorde%20Eleve%20~%20Apartments%20on%20Old%20Madras%20Road!5e0!3m2!1sen!2sin!4v1727072221625!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-[60vh] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Concorde Eleve Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}