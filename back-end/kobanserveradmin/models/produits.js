class Product {
    // Récupérer tous les produits actifs
    static async getAll(page = 1, limit = 20) {
        const offset = (page - 1) * limit;
        
        try {
            const [rows] = await pool.execute(`
                SELECT p.*, v.nom_boutique, c.nom_categorie, 
                       (SELECT url_image FROM images_produits WHERE id_produit = p.id_produit AND principale = 1 LIMIT 1) as image_principale
                FROM produits p
                JOIN vendeurs v ON p.id_vendeur = v.id_vendeur
                JOIN categories c ON p.id_categorie = c.id_categorie
                WHERE p.statut = 'actif'
                ORDER BY p.date_creation DESC
                LIMIT ? OFFSET ?
            `, [limit, offset]);
            
            return rows;
        } catch (error) {
            throw new Error('Erreur récupération produits: ' + error.message);
        }
    }
    
    // Créer un produit
    static async create(productData) {
        const { id_vendeur, id_categorie, nom_produit, description, prix, stock, sku } = productData;
        
        try {
            const [result] = await pool.execute(`
                INSERT INTO produits (id_vendeur, id_categorie, nom_produit, description, prix, stock, sku)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `, [id_vendeur, id_categorie, nom_produit, description, prix, stock, sku]);
            
            return { id: result.insertId, ...productData };
        } catch (error) {
            throw new Error('Erreur création produit: ' + error.message);
        }
    }
    
    // Rechercher des produits
    static async search(query, categoryId = null) {
        let sql = `
            SELECT p.*, v.nom_boutique, c.nom_categorie
            FROM produits p
            JOIN vendeurs v ON p.id_vendeur = v.id_vendeur
            JOIN categories c ON p.id_categorie = c.id_categorie
            WHERE p.statut = 'actif' AND p.nom_produit LIKE ?
        `;
        let params = [`%${query}%`];
        
        if (categoryId) {
            sql += ' AND p.id_categorie = ?';
            params.push(categoryId);
        }
        
        try {
            const [rows] = await pool.execute(sql, params);
            return rows;
        } catch (error) {
            throw new Error('Erreur recherche produits: ' + error.message);
        }
    }
}