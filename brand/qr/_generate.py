"""Génère les QR codes Niqo Services pour cartes de visite.

Variantes :
  - niqo-qr-navy-on-ivoire.svg   (palette de marque, vectoriel)
  - niqo-qr-navy-on-ivoire.png   (PNG haute résolution, 2000 px)
  - niqo-qr-black-on-white.svg   (max contraste, fallback imprimeur)
  - niqo-qr-black-on-white.png

Toutes les variantes pointent vers https://niqo-services.com
Correction d'erreur niveau H (30%) — tolère un futur emblème central.
"""

from pathlib import Path

import qrcode
from qrcode.constants import ERROR_CORRECT_H
from qrcode.image.svg import SvgPathImage

URL = "https://niqo-services.com"
OUT = Path(__file__).parent

NAVY = "#0F172A"
IVOIRE = "#F8FAFC"


def make_qr() -> qrcode.QRCode:
    qr = qrcode.QRCode(
        version=None,                     # auto
        error_correction=ERROR_CORRECT_H, # 30% — robuste au logo central
        box_size=20,
        border=4,                          # quiet zone normative
    )
    qr.add_data(URL)
    qr.make(fit=True)
    return qr


def export_png(filename: str, fg: str, bg: str) -> None:
    qr = make_qr()
    img = qr.make_image(fill_color=fg, back_color=bg)
    # Force 2000 px côté
    img = img.resize((2000, 2000))
    path = OUT / filename
    img.save(path)
    print(f"  PNG : {path.name}")


def export_svg(filename: str, fg: str, bg: str) -> None:
    qr = make_qr()
    img = qr.make_image(
        image_factory=SvgPathImage,
        fill_color=fg,
        back_color=bg,
    )
    path = OUT / filename
    img.save(path)
    # qrcode SVG n'injecte pas le back_color par défaut — on patch.
    svg = path.read_text()
    if 'fill="#000000"' in svg:
        svg = svg.replace('fill="#000000"', f'fill="{fg}"')
    # Insère un rect de fond
    if "<svg " in svg and "<rect" not in svg.split("<path", 1)[0]:
        head, rest = svg.split(">", 1)
        bg_rect = f'><rect width="100%" height="100%" fill="{bg}"/>'
        svg = head + bg_rect + rest
    path.write_text(svg)
    print(f"  SVG : {path.name}")


def main() -> None:
    print(f"Cible : {URL}")
    print(f"Sortie : {OUT}")
    print()

    print("Variante marque (navy sur ivoire) :")
    export_svg("niqo-qr-navy-on-ivoire.svg", NAVY, IVOIRE)
    export_png("niqo-qr-navy-on-ivoire.png", NAVY, IVOIRE)
    print()

    print("Variante max contraste (noir sur blanc) :")
    export_svg("niqo-qr-black-on-white.svg", "#000000", "#FFFFFF")
    export_png("niqo-qr-black-on-white.png", "#000000", "#FFFFFF")
    print()

    print("Terminé.")


if __name__ == "__main__":
    main()
