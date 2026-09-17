import mysql from 'mysql2/promise';

async function seed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'fitlife_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  const products = [
    { id: 'prod-1', name: 'Ashwagandha Wellness Capsules', slug: 'ashwagandha-wellness-capsules', description: 'Natural stress relief and daily vitality.', price: 499, mrp: 699, isPublished: 1 },
    { id: 'prod-2', name: 'Triphala Digestive Formula', slug: 'triphala-digestive-formula', description: 'Gentle detox and digestive support.', price: 399, mrp: 499, isPublished: 1 },
    { id: 'prod-3', name: 'Herbal Hair Care Oil', slug: 'herbal-hair-care-oil', description: 'Nourishing blend of Bhringraj and Amla.', price: 549, mrp: 799, isPublished: 1 },
    { id: 'prod-4', name: 'Turmeric Curcumin Support', slug: 'turmeric-curcumin-support', description: 'Powerful anti-inflammatory.', price: 599, mrp: 899, isPublished: 1 }
  ];

  try {
    for (const p of products) {
      await pool.query(
        `INSERT IGNORE INTO products (id, name, slug, description, price, mrp, isPublished) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [p.id, p.name, p.slug, p.description, p.price, p.mrp, p.isPublished]
      );
    }
    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Seed error:', error);
  } finally {
    await pool.end();
  }
}

seed();
