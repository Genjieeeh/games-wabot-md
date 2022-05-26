let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085752423288]
│ • Axis [083181913421] Rekomendasi
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana/Shopeepay/~Gopay~ [085752423288]
│ • Bank BRI 449501004273501
│ • Bank BCA ❌
│ • Semua A/N Sadera
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
