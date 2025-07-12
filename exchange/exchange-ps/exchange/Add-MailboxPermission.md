---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/add-mailboxpermission
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Add-MailboxPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Add-MailboxPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Add-MailboxPermission cmdlet to add permissions to a mailbox or to an Exchange Server 2016, Exchange Server 2019, or Exchange Online mail user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AccessRights
```
Add-MailboxPermission [-Identity] <MailboxIdParameter> -AccessRights <MailboxRights[]> -User <SecurityPrincipalIdParameter>
 [-AutoMapping <Boolean>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-WhatIf]
 [<CommonParameters>]
```

### Owner
```
Add-MailboxPermission [-Identity] <MailboxIdParameter> -Owner <SecurityPrincipalIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Add-MailboxPermission [[-Identity] <MailboxIdParameter>] -Instance <MailboxAcePresentationObject>
 [-AccessRights <MailboxRights[]>]
 [-User <SecurityPrincipalIdParameter>]
 [-AutoMapping <Boolean>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

> [!NOTE]
> You can use this cmdlet to add a maximum of 500 permission entries (ACEs) to a mailbox. To grant permissions to more than 500 users, use security groups instead of individual users for the User parameter. Security groups contain many members, but only count as one entry.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-MailboxPermission -Identity "Terry Adams" -User "Kevin Kelly" -AccessRights FullAccess -InheritanceType All
```

This example assigns the user Kevin Kelly Full Access permission to Terry Adams's mailbox.

### Example 2
```powershell
Add-MailboxPermission -Identity "Room 222" -Owner "Tony Smith"
```

This example sets the user Tony Smith as the owner of the resource mailbox named Room 222.

### Example 3
```powershell
Add-MailboxPermission -Identity "Jeroen Cool" -User "Mark Steele" -AccessRights FullAccess -InheritanceType All -AutoMapping $false
```

This example assigns the user Mark Steele Full Access permission to Jeroen Cool's mailbox, prevents Outlook from opening Jeroen Cool's mailbox when Mark Steele opens Outlook.

### Example 4
```powershell
Get-Mailbox -ResultSize unlimited -Filter "(RecipientTypeDetails -eq 'UserMailbox') -and (Alias -ne 'Admin')" | Add-MailboxPermission -User admin@contoso.com -AccessRights FullAccess -InheritanceType All
```

In Exchange Online, this example assigns the administrator account admin@contoso.com Full Access permission to all user mailboxes in the contoso.com organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox where you want to assign permissions to the user. You can use any value that uniquely identifies the mailbox. For example:

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

```yaml
Type: MailboxIdParameter
Parameter Sets: AccessRights, Owner
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: MailboxIdParameter
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessRights
The AccessRights parameter specifies the permission that you want to add for the user on the mailbox. Valid values are:

- ChangeOwner
- ChangePermission
- DeleteItem
- ExternalAccount
- FullAccess
- ReadPermission

You can specify multiple values separated by commas.

You can't use this parameter with the Owner parameter.

```yaml
Type: MailboxRights[]
Parameter Sets: AccessRights
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MailboxRights[]
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
This parameter is available only in on-premises Exchange.

This parameter has been deprecated and is no longer used.

```yaml
Type: MailboxAcePresentationObject
Parameter Sets: Instance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Owner
The Owner parameter specifies the owner of the mailbox object. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users
- Security groups

You can use any value that uniquely identifies the user or group. For example:

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

The default mailbox owner is NT AUTHORITY\\SELF.

You can't use this parameter with the AccessRights or User parameters.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Owner
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies who gets the permissions on the mailbox. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users
- Mail-enabled security groups (non-mail-enabled security groups are selectable, but they don't work)

**Note**: When a mail-enabled security group is used to specify Full Access permissions, the auto-mapping feature won't automatically add the mailbox in Outlook for the group member. For more information, see [Mailboxes to which your account has full access aren't automapped to Outlook profile](https://learn.microsoft.com/outlook/troubleshoot/profiles-and-accounts/full-access-mailbox-not-automapped-outlook-profile).

For the best results, we recommend using the following values:

- UPN: For example, `user@contoso.com` (users only).
- Domain\\SamAccountName: For example, `contoso\user`.

Otherwise, you can use any value that uniquely identifies the user or group. For example:

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

You can't use this parameter with the Owner parameter.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: AccessRights
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoMapping
The AutoMapping parameter includes or excludes the mailbox from the auto-mapping feature in Microsoft Outlook. Auto-mapping uses Autodiscover to automatically add mailboxes to a user's Outlook profile if the user has Full Access permission to the mailbox. However, Autodiscover won't enumerate security groups that are given Full Access permission to the mailbox. Valid values are:

- $true: The mailbox is automatically added to the user's Outlook profile if the user has Full Access permission. This is the default value.
- $false: The mailbox is not automatically added to the user's Outlook profile if the user has Full Access permission.

**Note**: To disable auto-mapping for a mailbox where the user was already assigned Full Access permission, you need to remove the user's Full Access permission by using the Remove-MailboxPermission cmdlet, and then reassign the user Full Access permission on the mailbox using the AutoMapping parameter with the value $false.

```yaml
Type: Boolean
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Deny
The Deny switch specifies that the permissions you're adding are Deny permissions. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox
This parameter is available only in the cloud-based service.

The GroupMailbox switch is required to add permissions to a Microsoft 365 Group mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights, Owner, Instance
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InheritanceType
The InheritanceType parameter specifies how permissions are inherited by folders in the mailbox. Valid values are:

- None
- All (this is the default value)
- Children
- Descendents [sic]
- SelfAndChildren

```yaml
Type: ActiveDirectorySecurityInheritance
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: All
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
