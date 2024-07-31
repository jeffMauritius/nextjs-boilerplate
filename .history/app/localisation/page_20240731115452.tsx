import MapComponent from "@/components/MapComponent"

export default function Localisation() {
  return (
    <div className="flex ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0292405537843!2d57.57574492537297!3d-20.00728744072024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217daba05da1319f%3A0xcbf840022df4f1ea!2sLa%20Cuvette%20Grand%20Bay!5e0!3m2!1sfr!2smu!4v1722412247033!5m2!1sfr!2smu"
        width="full"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
