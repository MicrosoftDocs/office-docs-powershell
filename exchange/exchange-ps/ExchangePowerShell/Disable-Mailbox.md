---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/disable-mailbox
schema: 2.0.0
title: Disable-Mailbox
---

# Disable-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Disable-Mailbox cmdlet to disable the mailbox of existing users who already have mailboxes. For this cmdlet, a user could also be a public folder mailbox or an InetOrgPerson object. The user account that's associated with the mailbox remains, but it's no longer associated with a mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Arbitration
```
Disable-Mailbox [-Identity] <MailboxIdParameter>
 [-Arbitration]
 [-DisableLastArbitrationMailboxAllowed]
 [-DisableArbitrationMailboxWithOABsAllowed]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-IgnoreLegalHold]
 [-WhatIf]
 [<CommonParameters>]
```

### Archive
```
Disable-Mailbox [-Identity] <MailboxIdParameter>
 [-Archive]
 [-PermanentlyDisable]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-IgnoreLegalHold]
 [-WhatIf]
 [<CommonParameters>]
```

### PublicFolder
```
Disable-Mailbox [-Identity] <MailboxIdParameter>
 [-Confirm]
 [-PublicFolder]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-IgnoreLegalHold]
 [-WhatIf]
 [<CommonParameters>]
```

### RemoteArchive
```
Disable-Mailbox [-Identity] <MailboxIdParameter>
 [-RemoteArchive]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-IgnoreLegalHold]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Disable-Mailbox cmdlet removes the mailbox's Exchange attributes from Active Directory. The mailbox isn't deleted and can be reconnected to its user at a later date by using the Connect-Mailbox cmdlet.

The Disable-Mailbox cmdlet also performs the clean-up task on the individual mailbox, so the mailbox is disconnected immediately after this task completes.

Under normal circumstances, a mailbox is marked as disconnected immediately after the Disable-Mailbox or Remove-Mailbox command completes. However, if the mailbox was disabled or removed while the Exchange Information Store service was stopped, or if it was disabled or removed by an external means other than Exchange management interfaces, the status of the mailbox object in the Exchange mailbox database isn't marked as disconnected.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Disable-Mailbox -Identity "John Woods"
```

This example disables the mailbox of the user named John Woods and removes all mailbox attributes from John's user account.

### Example 2
```powershell
Disable-Mailbox -Identity "John Woods" -RemoteArchive
```

This example disables the remote archive for the on-premises user named John Woods.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the mailbox that you want to mailbox-disable. You can use any value that uniquely identifies the mailbox. For example:

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
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Arbitration

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Arbitration switch is required to mailbox-disable arbitration mailboxes. You don't need to specify a value with this switch.

Arbitration mailboxes are system mailboxes that are used for storing different types of system data and for managing messaging approval workflow.

```yaml
Type: SwitchParameter
Parameter Sets: Arbitration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Archive switch specifies whether to disconnect the archive mailbox from the associated user. You don't need to specify a value with this switch.

You can't use this switch with the RemoteArchive switch.

```yaml
Type: SwitchParameter
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

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

### -DisableArbitrationMailboxWithOABsAllowed

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DisableArbitrationMailboxWithOABsAllowed switch specifies whether to bypass the checks for offline address books (OABs) within the specified arbitration mailbox that is being mail-disabled. When you use this switch, the arbitration mailbox is disabled even if OABs are present in the mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Arbitration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableLastArbitrationMailboxAllowed

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DisableLastArbitrationMailboxAllowed switch specifies whether to disable the specified mailbox, even if it's the last arbitration mailbox in the organization. If you disable the last arbitration mailbox in the organization, you can't have user-created distribution groups or moderated recipients. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Arbitration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

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

### -IgnoreLegalHold

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The IgnoreLegalHold switch ignores the legal hold status of the user. You don't need to specify a value with this switch.

When you disable or remove the user, the user's cloud-based mailbox that's on legal hold is also disabled or removed.

After you disable or remove a mailbox, you can't include it in a discovery search. When you disable a mailbox, the mailbox is disconnected from the user account. Disconnected mailboxes and removed mailboxes are permanently deleted from the mailbox database after the deleted mailbox retention period expires. However, you can also remove a mailbox and purge it immediately from the mailbox database. Check with your organization's legal or Human Resources department before you disable or remove a mailbox that's on legal hold.

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

### -PermanentlyDisable

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The PermanentlyDisable switch specifies whether to permanently disable the mailbox. You don't need to specify a value with this switch.

**Notes**:

- You can only use this switch on user mailboxes that aren't licensed and aren't on hold.
- When the Exchange Online license is removed from a mailbox without following other deprovisioning steps, this might leave the mailbox in a hard-deleted state. In this case, this parameter is not useful. You can use it, for example, in hybrid Exchange environments.

```yaml
Type: SwitchParameter
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The PublicFolder switch is required to mailbox-disable public folder mailboxes. You don't need to specify a value with this switch.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: PublicFolder
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteArchive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RemoteArchive switch specifies whether to disconnect the remote archive for this mailbox. Remote archives exist in the cloud-based service. When you use this switch, the RemoteRecipientType property for the mailbox is reset to specify that this mailbox doesn't have a remote archive. You don't need to specify a value with this switch.

You can't use this switch with the Archive switch.

```yaml
Type: SwitchParameter
Parameter Sets: RemoteArchive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

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
