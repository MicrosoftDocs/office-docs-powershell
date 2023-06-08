---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-recipientpermission
applicable: Exchange Online
title: Remove-RecipientPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-RecipientPermission

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-RecipientPermission cmdlet to remove SendAs permission from users in a cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-RecipientPermission [-Identity] <RecipientIdParameter> -AccessRights <MultiValuedProperty> -Trustee <SecurityPrincipalIdParameter>
 [-Confirm]
 [-Deny]
 [-SkipDomainValidationForMailContact]
 [-SkipDomainValidationForMailUser]
 [-SkipDomainValidationForSharedMailbox]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When a user is given SendAs permission to another user or group, the user can send messages that appear to come from the other user or group.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-RecipientPermission "Help Desk" -AccessRights SendAs -Trustee "Ayla Kol"
```

This example removes the SendAs permission from the user Ayla Kol for the mailbox Help Desk. Ayla can't send messages that appear to come directly from the Help Desk mailbox.

## PARAMETERS

### -Identity
The Identity parameter specifies the target recipient. The user or group specified by the Trustee parameter can no longer operate on this recipient.

You can specify any type of recipient, for example:

- Mailboxes
- Mail users
- External contacts
- Distribution groups
- Dynamic distribution groups

You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessRights
The AccessRights parameter specifies the permission that you want to remove from the trustee on the target recipient. The only valid value for this parameter is SendAs.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Trustee
The Trustee parameter specifies whose Send As permissions are being removing from the specified target recipient. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users with a Microsoft account
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

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Deny
{{ Fill Deny Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -SkipDomainValidationForMailContact
The SkipDomainValidationForMailContact switch skips the check that confirms the proxy addresses of the external contact specified by the Identity parameter are in an accepted domain of the organization. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -SkipDomainValidationForMailUser
The SkipDomainValidationForMailUser switch skips the check that confirms the proxy addresses of the mail user specified by the Identity parameter are in an accepted domain of the organization. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -SkipDomainValidationForSharedMailbox
The SkipDomainValidationForSharedMailbox switch skips the check that confirms the proxy addresses of the shared mailbox specified by the Identity parameter are in an accepted domain of the organization. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
