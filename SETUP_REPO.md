# Instructions pour configurer votre propre repo

## 1. Créer un nouveau repo sur GitHub
- Aller sur https://github.com/new
- Créer un nouveau repo (ex: `odelf-dev-portfolio`)
- **Ne pas** initialiser avec README, .gitignore ou licence

## 2. Changer l'origine du remote

Exécutez ces commandes (remplacez par vos valeurs) :

```bash
# Supprimer l'ancien remote
git remote remove origin

# Ajouter votre nouveau repo comme origine
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git

# Vérifier
git remote -v

# Pousser vers votre repo
git push -u origin main
```

## 3. (Optionnel) Supprimer l'historique git et recommencer

Si vous voulez un historique propre sans les commits du repo original :

```bash
# Supprimer le dossier .git
rm -rf .git

# Initialiser un nouveau repo git
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit: Odelf Dev portfolio"

# Ajouter votre remote
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git

# Pousser
git push -u origin main
```

## 4. Mettre à jour les métadonnées du site

N'oubliez pas de mettre à jour :
- `app/layout.tsx` : métadonnées SEO (title, description, etc.)
- README.md : description de votre projet
- Tous les liens et références personnels

