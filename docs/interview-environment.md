# In-Person Interview Environment

Our interview projects are built around VS Code dev containers.

https://code.visualstudio.com/docs/remote/containers

The above documentation provides detailed installation steps, but here is the high-level sequence of steps:

1. Install Docker.
2. Install VS Code.
3. From within VS Code, install the "Remote - Containers" extension.

## Opening a repo in a dev container

1. Clone the repository. Note that there is a `.devcontainer` directory at the top-level of the repo.
2. Open the repository in VS Code.

VS Code will typically prompt you if you want to open the directory in the dev container. If it does not, then do the following:

1. Click the "Open a Remote Window" icon on the bottom-left corner of VS Code.
2. Select "Reopen in Container".

A development container image will be built according to the configuration in the `.devcontainer` directory. **Nothing is installed on your host OS**. Everything can be cleaned up by deleting the development container and corresponding image.

## Deleting dev container and container image

Once you close the VS Code window running the dev container, you can manually delete the dev container and corresponding image by running the following commands.

**Note:** You cannot delete the container if the VS Code window hosting the dev container is still open.

### macOS/Linux (bash/zsh)

Run the following commands from within the project directory.

```
$ NAME=${PWD##*/}
$ docker ps -a | grep "vsc-${NAME}" | awk '{print $1}' | xargs docker rm
$ docker images | grep "vsc-${NAME}" | awk '{print $1}' | xargs docker image rm
```

### Windows (PowerShell)

Run the following commands from within PowerShell.

```
> $name = Split-Path -Path $pwd -Leaf
> docker rm (docker ps -a | Select-String "vsc-$name").ToString().Split()[0]
> docker image rm (docker images | Select-String "vsc-$name").ToString().Split()[0]
```


#### Windows Enabling Optional Features Hyper V and Virtualization
###### Enable Windows Hyper-V
1. Run the following command from the Command Prompt, PowerShell, or the "Run" dialog:
```
optionalfeatures
```

2. Once the Windows Feature appears, check the `Hyper-V` option from the list of optional features and Restart Windows 
>![image](https://user-images.githubusercontent.com/356193/142332166-de394dd9-a330-4364-8927-c116e26cb77e.png)

3. Another option is running the command as Admin `Windows PowerShell` which will enable the feature
```
DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V
```
###### Enable BIOS Virtualization
1. Open the BIOS setup on your computer by following your model instruction on Start-up
2. Once the BIOS setup opens up, go to the `Advanced` tab. 
3. Next, select the `Virtualization` from the list and make sure it is `Enabled`.
4. Select `Yes` to save and exit the bios settings on your computer.

Open the Docker app on your computer and try to open a new virtual machine.
