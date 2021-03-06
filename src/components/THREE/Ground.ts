import { PlaneBufferGeometry, ShadowMaterial, Color, Mesh } from 'three';

export default function (): Mesh<PlaneBufferGeometry, ShadowMaterial> {
  const geometry: PlaneBufferGeometry = new PlaneBufferGeometry(5, 20, 32);
  const material: ShadowMaterial = new ShadowMaterial();

  material.transparent = true;
  material.opacity = 0.35;
  material.color = new Color(0x000000);

  const plane: Mesh<PlaneBufferGeometry, ShadowMaterial> = new Mesh(
    geometry,
    material
  );

  plane.name = 'Ground';
  plane.position.set(0, 0, 0);
  plane.receiveShadow = true;
  plane.rotation.x = -Math.PI / 2;

  return plane;
}
