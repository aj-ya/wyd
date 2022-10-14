#!/bin/bash

# Author : Ajeya Bhat
# Last Modified : 2022-10-14T07:02:04+0000
# @args @param1 hostname @param2 static_ip_addr
#hostname
sudo hostnamectl set-hostname "$1"

#privilege escalation of k8s user
sudo echo "k8s ALL=(ALL) NOPASSWD: ALL" | sudo EDITOR='tee -a' visudo

#swapoff
sudo swapoff -a
#swapoff on reboot
sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

#Firewall Disable
sudo ufw disable

#network config
sudo tee /etc/netplan/00-installer-config.yaml << EOF
network:
  ethernets:
    ens33:
      dhcp4: false
      addresses: [$2/16]
      nameservers:
        addresses: [8.8.8.8,8.8.4.4,10.10.10.2,1.1.1.1]
      routes:
        - to: default
          via: 192.168.0.1
  version: 2
EOF

sudo netplan apply --debug

#get k8s installation script
sudo apt install -y curl
sudo touch ~/k8s_installation_ubuntu_22.sh
sudo chmod +x ~/k8s_installation_ubuntu_22.sh
curl -OL https://aj-ya.me/k8s_installation.sh >> ~/k8s_installation_ubuntu_22.sh
echo "continue to installtion by running ~/k8s_installation_ubuntu_22.sh "
