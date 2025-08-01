---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-mailboxfolderpermission
schema: 2.0.0
title: Remove-MailboxFolderPermission
---

# Remove-MailboxFolderPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-MailboxFolderPermission cmdlet to remove folder-level permissions for users in mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Remove-MailboxFolderPermission [-Identity] <MailboxFolderIdParameter> -User <MailboxFolderUserIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
Remove-MailboxFolderPermission [-Identity] <MailboxFolderIdParameter> -User <MailboxFolderUserIdParameter>
 [-Confirm]
 [-Force]
 [-SendNotificationToUser <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### ResetDelegateUserCollection
```
Remove-MailboxFolderPermission [-Identity] <MailboxFolderIdParameter> [-ResetDelegateUserCollection]
 [-Confirm]
 [-Force]
 [-SendNotificationToUser <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can't use this cmdlet to selectively remove permissions from a user on a mailbox folder. The cmdlet removes all permissions that are assigned to the user on the specified folder. To modify the permissions that are assigned to the user on a mailbox folder, use the Set-MailboxFolderPermission cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-MailboxFolderPermission -Identity kim@contoso.com:\Training -User john@contoso.com
```

This example removes John's permissions to the Training folder in Kim's mailbox.

### Example 2
```powershell
Remove-MailboxFolderPermission -Identity kim@contoso.com:\Calendar -ResetDelegateUserCollection
```

This example will clear any corrupted delegate information from Kim's mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the target mailbox and folder. The syntax is `Mailbox:\Folder`. For the value of Mailbox, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

Example values for the Identity parameter are `john@contoso.com:\Calendar` or `John:\Marketing\Reports`.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The User parameter specifies the mailbox, mail user, or mail-enabled security group (security principal) that's granted permission to the mailbox folder.

For the best results, we recommend using the following values:

- UPN: For example, `user@contoso.com` (users only).
- Domain\\SamAccountName: For example, `contoso\user`.

Otherwise, you can use any value that uniquely identifies the user or group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: MailboxFolderUserIdParameter
Parameter Sets: Default, Identity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ResetDelegateUserCollection
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetDelegateUserCollection

> Applicable: Exchange Server 2019, Exchange Online

The ResetDelegateUserCollection switch forces the removal of the LocalFreeBusy or the PR_FREEBUSY_ENTRYIDs files in case of corruption. You don't need to specify a value with this switch.

Use this switch if you encounter problems trying add, change, or remove delegate permissions. Using this switch deletes those files and downgrades any existing delegates to Editor permissions. You'll need to grant delegate permissions again using `-SharingPermissionFlag Delegate`.

When you use this switch, the value of Identity should be the user's primary calendar folder (for example, `kim@contoso.com:\Calendar`).

```yaml
Type: SwitchParameter
Parameter Sets: ResetDelegateUserCollection
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendNotificationToUser

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SendNotificationToUser parameter specifies whether to send a notification to the user when you remove their calendar permissions. Valid values are:

- $true: A notification is sent.
- $false: No notification is sent. This is the default value.

This parameter only applies to calendar folders.

```yaml
Type: Boolean
Parameter Sets: Identity, ResetDelegateUserCollection
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Get-MailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxfolderpermission)

[Set-MailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxfolderpermission)

[Add-MailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchangepowershell/add-mailboxfolderpermission)

[Get-EXOMailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchangepowershell/get-exomailboxfolderpermission)
