for dir in */
do    
    make init -C $dir
    make verify -C $dir
done