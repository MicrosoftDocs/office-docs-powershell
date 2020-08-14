---
title: "Control remote PowerShell access to Exchange servers"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: ITPro
ms.topic: article
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 064e3bb0-38bf-495e-9994-784f823b88dd
description: "Administrators can learn how to block or allow users' remote PowerShell access to Exchange servers."
---

# Control remote PowerShell access to Exchange servers

Remote PowerShell in Microsoft Exchange allows you to manage your Exchange organization from a remote computer that's on your internal network or from the Internet. You can disable or enable a user's ability to connect to an Exchange server using remote PowerShell. For more information about remote PowerShell, see [Exchange Server PowerShell (Exchange Management Shell)](exchange-management-shell.md).

For additional management tasks related to remote PowerShell, see [Connect to Exchange servers using remote PowerShell](connect-to-exchange-servers-using-remote-powershell.md).

## What do you need to know before you begin?

- Estimated time to complete each procedure: less than 5 minutes

- You can only use PowerShell to perform this procedure. To learn how to open the Exchange Management Shell in your on-premises Exchange organization, see [Open the Exchange Management Shell](open-the-exchange-management-shell.md).

- By default, all user accounts have access to remote PowerShell. However, to actually use remote PowerShell to connect to an Exchange server, the user needs to be a member of a management role group, or be directly assigned a management role that enables the user to run Exchange cmdlets. For more information about role groups and management roles, see [Exchange Server permissions](https://docs.microsoft.com/Exchange/permissions/permissions).

- For detailed information about OPath filter syntax in Exchange, see [Additional OPATH syntax information](recipient-filters.md#additional-opath-syntax-information).

- You need to be assigned permissions before you can perform this procedure or procedures. To see what permissions you need, see the "Remote PowerShell" entry in the [Exchange infrastructure and PowerShell permissions](https://docs.microsoft.com/Exchange/permissions/feature-permissions/infrastructure-permissions) topic.

> [!TIP]
> Having problems? Ask for help in the [Exchange Server](https://go.microsoft.com/fwlink/p/?linkId=60612) forums.

## Use the Exchange Management Shell to enable or disable remote PowerShell access for a user

This example disables remote PowerShell access for the user named Therese Lindqvist.

```powershell
Set-User "Therese Lindqvist" -RemotePowerShellEnabled $false
```

This example enables remote PowerShell access for the user named Sirirat Kitjakarn.

```powershell
Set-User "Sirirat Kitjakarn" -RemotePowerShellEnabled $true
```

## Use the Exchange Management Shell to disable remote PowerShell access for many users

To prevent remote PowerShell access for a specific group of existing users, you have the following options:

- **Filter users based on an existing attribute**: This method assumes that the target user accounts all share a unique filterable attribute. Some attributes, such as Title, Department, address information, and telephone number, are visible only when you use the **Get-User** cmdlet. Other attributes, such as CustomAttribute1-15, are visible only when you use the **Get-Mailbox** cmdlet.

- **Use a list of specific users**: After you generate the list of specific users, you can use that list to disable their access to remote PowerShell.

### Filter users based on an existing attribute

To disable access to remote PowerShell for any number of users based on an existing attribute, use the following syntax:

```powershell
$<VariableName> = <Get-Mailbox | Get-User> -ResultSize unlimited -Filter <Filter>
```

```powershell
$<VariableName> | foreach {Set-User -RemotePowerShellEnabled $false}
```

This example removes access to remote PowerShell for all users whose **Title** attribute contains the value "Sales Associate".

```powershell
$DSA = Get-User -ResultSize unlimited -Filter "(RecipientType -eq 'UserMailbox') -and (Title -like '*Sales Associate*')"
```

```powershell
$DSA | foreach {Set-User -RemotePowerShellEnabled $false}
```

### Use a list of specific users

To disable access to remote PowerShell for a list of specific users, use the following syntax:

```powershell
$<VariableName> = Get-Content <text file>
```

```powershell
$<VariableName> | foreach {Set-User -RemotePowerShellEnabled $false
```

This example uses the text file C:\My Documents\NoPowerShell.txt to identify the users by their user principal name (UPN). The text file must contain one UPN on each line like this:

> akol@contoso.com <br/> tjohnston@contoso.com <br/> kakers@contoso.com

After you populate the text file with the user accounts you want to update, run the following commands:

```powershell
$NPS = Get-Content "C:\My Documents\NoPowerShell.txt"
```

```powershell
$NPS | foreach {Set-User -RemotePowerShellEnabled $false}
```

## View the remote PowerShell access for users

To view the remote PowerShell access status for a specific user, use the following syntax:

```powershell
Get-User -Identity <UserIdentity> | Format-List RemotePowerShellEnabled
```

This example displays the remote PowerShell access status of the user named Sarah Jones.

```powershell
Get-User -Identity "Sarah Jones" | Format-List RemotePowerShellEnabled
```

To display the remote PowerShell access status for all users, run the following command:

```powershell
Get-User -ResultSize unlimited | Format-Table -Auto Name,DisplayName,RemotePowerShellEnabled
```

To display only those users who don't have access to remote PowerShell, run the following command:

```powershell
Get-User -ResultSize unlimited -Filter 'RemotePowerShellEnabled -eq $false'
```

To display only those users who have access to remote PowerShell, run the following command:

```powershell
Get-User -ResultSize unlimited -Filter 'RemotePowerShellEnabled -eq $true'
```
