export default function deepClone(val) {
  try {
    return JSON.parse(JSON.stringify(val)) // deep coppy
  } catch (err) {
    return null
  }
}
