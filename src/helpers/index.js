export function randomDataFunc(data, kacKereDoncek, hangiSayiyaKadar) {
    const randomData = [];
    for (let i = 0; i <= kacKereDoncek; i++) {
        const randomNumber = Math.floor(Math.random() * hangiSayiyaKadar);
        randomData.push(data?.[randomNumber])
    }
    return randomData
}