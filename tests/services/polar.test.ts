import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

describe('Polar service definition', () => {
  const yamlPath = path.resolve(__dirname, '../../services/payments-fintech/polar.yaml');
  let data: any;

  beforeAll(() => {
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    data = yaml.load(fileContents);
  });

  test('should have correct vendor', () => {
    expect(data.vendor).toBe('Polar');
  });

  test('should have a valid entity_id', () => {
    expect(typeof data.entity_id).toBe('string');
    expect(data.entity_id).toMatch(/^ent_/);
  });

  test('should include required top‑level fields', () => {
    expect(data).toHaveProperty('slug', 'polar');
    expect(data).toHaveProperty('category', 'payments-fintech');
  });
});
