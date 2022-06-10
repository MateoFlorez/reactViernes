export async function traerCanciones(){

    const URI = 'https://api.spotify.com/v1/artists/6SYbLA9utoNsllunR1TnkM/top-tracks?market=US'
    const TOKEN = 'Bearer BQCjAjztyNMM9OFP1e1J2hesoPOwgKnC9hmspFVuPKohp21bngNOMMtFSwNem6m7oTiX7rTD3689zmIspSDaa3FoEwyqWAibIpPkRtNWIR5vpEUGkg0tb2JY7mlVFqJwwxz9SwQwQZsh5uR3N9qCJdGTD4mvSVV1EhAKNTNnEv4xlRIxr3SiBsi2Hp6DoAHA'
    const PETICION = {
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta = await fetch(URI,PETICION)
    let datosRespuesta = await respuesta.json()

    return datosRespuesta

}