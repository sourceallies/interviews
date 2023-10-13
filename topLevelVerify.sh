for dir in */
do
    make install -C $dir
    make test -C $dir
done