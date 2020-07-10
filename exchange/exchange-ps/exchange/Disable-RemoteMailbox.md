---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/disable-remotemailbox
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Disable-RemoteMailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Disable-RemoteMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Disable-RemoteMailbox cmdlet to remove mailboxes from the cloud-based service but keep the associated user objects in the on-premises Active Directory.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Disable-RemoteMailbox [-Identity] <RemoteMailboxIdParameter> [-Archive] [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-IgnoreLegalHold] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Disable-RemoteMailbox cmdlet to perform the following actions:

- Remove a cloud-based mailbox but keep the associated on-premises user account. To do this, you first need to remove the Exchange Online license for the mailbox. Otherwise, the mailbox won't be removed. The on-premises mail user is automatically converted to a regular user object. You can mail-enable the on-premises user object using the Enable-MailUser cmdlet.

- Disconnect a cloud-based archive mailbox from a cloud-based mailbox. The cloud-based mailbox and the associated on-premises mail user are preserved.

If you want to remove both the cloud-based mailbox and the associated on-premises mail user, use the Remove-RemoteMailbox cmdlet.

Directory synchronization must be configured correctly for a mailbox to be removed from the cloud. Removal of the cloud-based mailbox isn't immediate and depends on the directory synchronization schedule.

Note: If you are deprovisioning a cloud mailbox and its associated online archive, you must first disable the online archive with Disable-RemoteMailbox \<user\> -Archive and then perform a directory synchronization prior to disabling the remote mailbox. Attempting to disable both the online archive and cloud mailbox without a sync between them may result in an ArchiveGuid mismatch and validation error.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Disable-RemoteMailbox "Kim Akers"
```

This example removes the cloud-based mailbox that's associated with the on-premises mail user named Kim Akers. The mail user is automatically converted to a regular user. This example assumes that you've already removed the Exchange Online license for the mailbox, and that directory synchronization has been configured.

### Example 2
```powershell
Disable-RemoteMailbox "David Strome" -Archive
```

This example removes the cloud-based archive mailbox but keeps the cloud-based mailbox that's associated with the on-premises mail user named David Strome. This example assumes directory synchronization has been configured.

## PARAMETERS

### -Identity
The Identity parameter specifies the cloud-based mailbox. Valid values are:

- ADObjectID

- GUID

- Distinguished name (DN)

- Domain\\SamAccountName

- User principal name (UPN)

- LegacyExchangeDN

- Email address

- User alias

```yaml
Type: RemoteMailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive
The Archive switch specifies whether to disconnect the cloud-based archive mailbox from the associated cloud-based mailbox. You don't need to specify a value with this switch.

The on-premises mail user and its associated cloud-based mailbox aren't removed if you use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreLegalHold
The IgnoreLegalHold switch ignores the legal hold status of the mailbox user and allows you to disable a cloud-based mailbox that's on legal hold.

When you disable a mailbox, the mailbox is disconnected from the user account. After you disable a mailbox, you can't include it in a discovery search. Disconnected mailboxes are permanently deleted from the mailbox database after the deleted mailbox retention period expires. Check with your organization's legal or Human Resources department before disabling a mailbox that's on legal hold.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
