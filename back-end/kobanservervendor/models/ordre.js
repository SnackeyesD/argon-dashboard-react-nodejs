class Order {
    // Créer une commande
    static async create(orderData) {
        const connection = await pool.getConnection();
        
        try {
            await connection.beginTransaction();
            
            const { id_acheteur, items, adresse_livraison, mode_paiement } = orderData;
            
            // Générer numéro de commande unique
            const numeroCommande = 'CMD' + Date.now();
            
            // Calculer le total
            let sousTotal = 0;
            for (let item of items) {
                sousTotal += item.prix_unitaire * item.quantite;
            }
            
            const fraisPort = 5.99; // Exemple
            const totalCommande = sousTotal + fraisPort;
            
            // Insérer la commande
            const [orderResult] = await connection.execute(`
                INSERT INTO commandes (id_acheteur, numero_commande, sous_total, frais_port, total_commande, mode_paiement)
                VALUES (?, ?, ?, ?, ?, ?)
            `, [id_acheteur, numeroCommande, sousTotal, fraisPort, totalCommande, mode_paiement]);
            
            const orderId = orderResult.insertId;
            
            // Insérer les détails de commande
            for (let item of items) {
                await connection.execute(`
                    INSERT INTO details_commandes (id_commande, id_produit, id_vendeur, nom_produit, prix_unitaire, quantite, sous_total)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `, [orderId, item.id_produit, item.id_vendeur, item.nom_produit, item.prix_unitaire, item.quantite, item.prix_unitaire * item.quantite]);
                
                // Décrémenter le stock
                await connection.execute(`
                    UPDATE produits SET stock = stock - ? WHERE id_produit = ?
                `, [item.quantite, item.id_produit]);
            }
            
            await connection.commit();
            return { id: orderId, numero_commande: numeroCommande };
            
        } catch (error) {
            await connection.rollback();
            throw new Error('Erreur création commande: ' + error.message);
        } finally {
            connection.release();
        }
    }
}
