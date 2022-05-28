# Vamos a automatizar el Ejercicio03

# Descargamos el conjunto de datos comprimido
curl -O http://files.grouplens.org/datasets/movielens/ml-1m.zip

echo ¡Archivo Descargado!

# Descomprimimos el zip
unzip ml-1m.zip

echo ¡Archivo descomprimido!

# Hacemos un respaldo
cp -a ml-1m ml-1m-1

echo ¡Respaldo realizado!

# Borramos archivo comprimido
rm ml-1m.zip

echo ¡Archivo eliminado!

