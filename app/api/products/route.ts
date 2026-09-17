import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const products = await query('SELECT * FROM Products ORDER BY createdAt DESC');
    return NextResponse.json(products);
  } catch (error) {
    console.warn('Database Error - Falling back to mock data:', error);
    // Mock data fallback if MySQL isn't running
    return NextResponse.json([
      { id: '1', name: 'Ashwagandha Wellness Capsules', slug: 'ashwagandha', price: 499, isPublished: 1 },
      { id: '2', name: 'Triphala Digestive Formula', slug: 'triphala', price: 399, isPublished: 1 },
      { id: '3', name: 'Herbal Hair Care Oil', slug: 'hair-oil', price: 549, isPublished: 1 },
      { id: '4', name: 'Turmeric Curcumin', slug: 'turmeric', price: 599, isPublished: 0 },
    ]);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, slug, description, price, mrp, categoryId, isPublished } = body;
    
    // Simple validation
    if (!name || !slug || !price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const result = await query(
      `INSERT INTO Products (id, name, slug, description, price, mrp, categoryId, isPublished) 
       VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?)`,
      [name, slug, description, price, mrp || price, categoryId || null, isPublished ?? 1]
    );
    
    return NextResponse.json({ message: 'Product created successfully', id: (result as any).insertId }, { status: 201 });
  } catch (error: any) {
    console.error('Database Error:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'Product with this slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
