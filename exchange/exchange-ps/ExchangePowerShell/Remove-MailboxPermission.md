---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-mailboxpermission
schema: 2.0.0
title: Remove-MailboxPermission
---

# Remove-MailboxPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Remove-MailboxPermission cmdlet to remove permissions from a user's mailbox or from an Exchange Server 2016, Exchange Server 2019 or Exchange Online mail user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AccessRights
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> -AccessRights <MailboxRights[]> -User <SecurityPrincipalIdParameter>
 [-BypassMasterAccountSid]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-SoftDeletedMailbox]
 [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Remove-MailboxPermission [[-Identity] <MailboxIdParameter>] -Instance <MailboxAcePresentationObject>
 [-AccessRights <MailboxRights[]>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-User <SecurityPrincipalIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Owner
```
Remove-MailboxPermission [[-Identity] <MailboxIdParameter>]
 [-BypassMasterAccountSid]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-WhatIf]
 [<CommonParameters>]
```

### ClearAutoMapping
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> [-ClearAutoMapping]
 [-BypassMasterAccountSid]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-WhatIf]
 [<CommonParameters>]
```

### ResetDefault
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> [-ResetDefault]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Remove-MailboxPermission cmdlet allows you to remove permissions from a user's mailbox, for example, removing full access to another user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-MailboxPermission -Identity "Yuuto Sasaki" -User "Pedro Pizarro" -AccessRights FullAccess -InheritanceType All
```

This example removes Pedro Pizarro's full access permission to Yuuto Sasaki's mailbox.

### Example 2
```powershell
Remove-MailboxPermission -Identity "HR Project" -ClearAutoMapping
```

In Exchange Online, this example excludes the HR Project mailbox from auto-mapping in Outlook for all users who have Full Access permission to the mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the mailbox where you are removing permissions. You can use any value that uniquely identifies the mailbox: For example:

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
Parameter Sets: AccessRights, Owner, ClearAutoMapping, ResetDefault
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessRights

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AccessRights parameter specifies the permission that you want to remove from the user on the mailbox. Valid values are:

- FullAccess
- SendAs
- ExternalAccount
- DeleteItem
- ReadPermission
- ChangePermission
- ChangeOwner

You can specify multiple values separated by commas.

```yaml
Type: MailboxRights[]
Parameter Sets: AccessRights, Instance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The Instance parameter enables you to pass an entire object to the command to be processed. It's mainly used in scripts where an entire object must be passed to the command.

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

### -User

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The User parameter specifies whose permissions are being removed from the specified mailbox. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users
- Security groups

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

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: AccessRights, Instance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClearAutoMapping

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in the cloud-based service.

The ClearAutoMapping parameter excludes the mailbox from the auto-mapping feature in Microsoft Outlook. You don't need to specify a value with this switch.

Auto-mapping uses Autodiscover to automatically add mailboxes to a user's Outlook profile if the user has Full Access permission to the mailbox. Use this switch to exclude this mailbox from auto-mapping for all users who have Full Access permission to the mailbox.

You can't use this switch with the User or AccessRights parameters.

**Note**: If you use this switch in a Remove-MailboxPermission command, but the mailbox is not excluded from auto-mapping for a user, remove the user's Full Access permission by using the Remove-MailboxPermission cmdlet with the User parameter. Then, reassign the user's Full Access permission on the mailbox using the Add-MailboxPermission cmdlet with the AutoMapping parameter set to the value $false.

```yaml
Type: SwitchParameter
Parameter Sets: ClearAutoMapping
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetDefault

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in the cloud-based service.

The ResetDefault switch resets the default security descriptor of the mailbox. You don't need to specify a value with this switch.

Permissions on the mailbox are reset so only the mailbox owner has Full Access permission to the mailbox. The following types of permissions are not affected:

- Recipient permissions (for example, SendAs, SendOnBehalf and delegates).
- Mailbox folder permissions assigned using the MailboxFolderPermission cmdlets.
- Mailbox folder permissions assigned using Outlook or other MAPI clients.

Also, because this switch removes Full Access permission from other users on the mailbox, the mailbox is no longer auto-mapped by Autodiscover into the Outlook profiles of other users.

You can't use this switch with the User for AccessRights parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Instance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassMasterAccountSid

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The BypassMasterAccountSid switch suppresses the following error: `Can't remove the access control entry on the object "User" for the user account because the ACE doesn't exist on the object.` You don't need to specify a value with this switch.

Typically, you only need to use this switch in Office 365 Dedicated or ITAR legacy environments.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights, Owner, ClearAutoMapping
Aliases:

Required: False
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

### -Deny

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Deny switch specifies that the permissions you're removing are Deny permissions. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights, Instance
Aliases:

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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The GroupMailbox switch is required to remove permissions from a Microsoft 365 Group mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights, Owner, Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InheritanceType

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The InheritanceType parameter specifies whether permissions are inherited to folders within the mailbox. Valid values are:

- None
- All (this is the default value)
- Children
- Descendents [sic]
- SelfAndChildren

```yaml
Type: ActiveDirectorySecurityInheritance
Parameter Sets: AccessRights, Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SoftDeletedMailbox switch is required to remove permissions from a soft-deleted mailbox. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights
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
