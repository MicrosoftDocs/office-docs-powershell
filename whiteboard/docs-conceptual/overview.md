---
title: Whiteboard Overview
description: "Whiteboard PowerShell overview."
---

# Overview

## Installing

To install and use the Microsoft Whiteboard cmdlets:

1. Open the start menu and search for Windows PowerShell
2. Right-click on Windows PowerShell and choose Run As Administrator
3. Type or copy this command into the window and press the Enter key:

```powershell
Install-Module -Name WhiteboardAdmin
```

By default, the PowerShell Gallery (PSGallery) isn't configured as a trusted repository for **PowerShellGet**. The first time you use the PSGallery, you'll see the following message:

```console
Untrusted repository

You are installing the modules from an untrusted repository. If you trust this repository, change
its InstallationPolicy value by running the `Set-PSRepository` cmdlet.

Are you sure you want to install the modules from 'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"):
```

Answer **Yes** or **Yes to All** to continue with the installation.

You may need to update your execution policy, which you can do by typing or copying this command into the window and pressing the Enter key:

```powershell
Set-ExecutionPolicy RemoteSigned
```

Note: For more information on Execution_Policies, go to <https://go.microsoft.com/fwlink/p/?LinkID=135170>.

## User IDs

Cmdlets taking user IDs use the ID from Microsoft Entra ID. To get a user ID, you can use the Microsoft Graph Explorer. For more information, go to </graph/api/user-get>.

## Exporting Whiteboard Content

The Microsoft Whiteboard cmdlets are often used to facilitate the export of Whiteboard content for users that no longer have access to whiteboard. To accomplish this you must first transfer the whiteboard owner to someone who has access to Whiteboard. Then the user who now owns the whiteboard can sign into the app and export the content.

## Common Cmdlets

* @MicrosoftWhiteboardAdmin.Get-Whiteboard
* @MicrosoftWhiteboardAdmin.Set-WhiteboardOwner
* @MicrosoftWhiteboardAdmin.Invoke-TransferAllWhiteboards
