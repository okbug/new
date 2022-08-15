#/bin/bash

# 不使用pnpm来对所有的项目进行安装依赖


# nest对node版本有要求
# 目前还不会自动切换版本
# 所以在使用该脚本之前需要自己将node版本调整为nest可用的node版本
# 项目中统一使用yarn作为包管理工具
# 由于npm源可能在不同电脑上不同
# 项目中都在 .gitingore 中加入lock-file

cd ./packages
dirs=$(ls)
for dir in $dirs
do
  cd $dir
  yarn
  cd ..
done
echo "done"
