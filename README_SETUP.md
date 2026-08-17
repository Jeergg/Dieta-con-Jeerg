# Configuración — una sola vez (15-20 min), luego queda automático para siempre

## Qué hace esto
- `index.html` — la página que la gente llena (link en tu historia destacada).
- `prices.json` — los precios de los 16 alimentos, por país.
- `scripts/update_prices.py` — le pregunta a la IA (Gemini, gratis) los precios actuales, una vez al mes.
- `.github/workflows/update_prices.yml` — el robot que corre ese script automáticamente, gratis, sin que hagas nada.

## Paso 1 — Crear cuenta y repositorio en GitHub (gratis)
1. Ve a https://github.com y crea una cuenta si no tienes.
2. Crea un repositorio nuevo, por ejemplo `mi-dieta`.
3. Sube estos archivos y carpetas tal cual están (puedes arrastrar la carpeta completa desde la web de GitHub, opción "uploading an existing file").

## Paso 2 — Activar GitHub Pages (gratis, te da el link público)
1. En el repositorio: **Settings → Pages**.
2. En "Source" elige la rama `main` y la carpeta `/ (root)`.
3. Guarda. En un par de minutos tu link estará activo en algo como:
   `https://TU-USUARIO.github.io/mi-dieta/`
4. Ese es el link que pones en tu historia destacada de Instagram.

## Paso 3 — Conseguir tu llave gratis de Gemini (API key)
1. Ve a https://aistudio.google.com/apikey (con cualquier cuenta de Google).
2. Crea una API key nueva — es gratis, no pide tarjeta.
3. Cópiala, la necesitas en el siguiente paso.

## Paso 4 — Guardar la llave como secreto en GitHub (para que el robot la use)
1. En tu repositorio: **Settings → Secrets and variables → Actions → New repository secret**.
2. Nombre: `GEMINI_API_KEY`
3. Valor: pega la llave del Paso 3.
4. Guardar.

## Paso 5 — Probarlo manualmente una vez
1. En tu repositorio: pestaña **Actions**.
2. Elige "Actualizar precios mensuales" → botón **Run workflow**.
3. Espera 1-2 minutos. Si todo sale bien, verás un commit nuevo actualizando `prices.json` y aparecerá `update_log.md` con el detalle de qué cambió.
4. A partir de aquí, corre solo el día 1 de cada mes — no necesitas volver a hacer nada.

## Cómo revisar que todo esté bien (opcional, 2 min al mes)
Abre `update_log.md` en el repositorio después de cada actualización — te dice qué alimentos se actualizaron, cuáles se rechazaron por precio fuera de rango, y cuáles quedaron pendientes de revisión manual.

## Si algún precio no te convence
Edita `prices.json` directamente en GitHub (botón del lápiz ✏️), cambia el `"value"` que quieras, y pon `"locked": true` en ese alimento — así el robot nunca lo va a sobreescribir, hasta que tú quites el `locked`.

## Costo real de todo esto
- GitHub + GitHub Pages + GitHub Actions: gratis.
- Gemini API (capa gratuita): gratis, muy por debajo del límite mensual para 16 alimentos × 4 países.
- **Total: $0/mes**, sin tarjeta de crédito en ningún paso.

---

## Paso 6 — Activar publicidad (Google AdSense)
1. Ve a https://www.google.com/adsense y crea una cuenta con tu link de GitHub Pages ya activo.
2. Google revisa el sitio (puede tardar días/semanas, y con poco tráfico a veces piden esperar). La página ya tiene la política de privacidad que exige (`privacy-policy.html`).
3. Cuando te aprueben, te dan un ID tipo `ca-pub-1234567890123456`.
4. Abre `index.html`, busca el bloque comentado que dice "GOOGLE ADSENSE" cerca del inicio, reemplaza `ca-pub-XXXXXXXXXXXXXXXX` por tu ID real, y quita las líneas `<!--` y `-->` que lo envuelven.
5. En los dos lugares que dicen `<div class="ad-slot" id="adSlot1">...` y `adSlot2`, reemplaza ese `div` por el bloque `<ins class="adsbygoogle">` que Google te da al crear un "anuncio de display" — Google te da ese código exacto para copiar y pegar.

## Paso 7 — Activar enlaces de afiliado
1. Crea tu cuenta en Amazon Afiliados (o el programa de la marca que prefieras) — es gratis, aprobación casi inmediata.
2. Abre `index.html`, busca `const AFFILIATE_PRODUCTS` (cerca del final).
3. Reemplaza cada `href:"#"` por tu link de afiliado real. Puedes cambiar también el `emoji`, `name` y `desc` de cada producto, o agregar más copiando el mismo formato.
4. Guarda y sube el archivo actualizado a GitHub (Add file → Upload files, sobrescribe `index.html`).

Los enlaces de afiliado no necesitan aprobación de Google ni esperar nada — funcionan en cuanto los pegas.
