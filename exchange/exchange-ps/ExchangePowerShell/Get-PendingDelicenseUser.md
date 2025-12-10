---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-pendingdelicenseuser
schema: 2.0.0
title: Get-PendingDelicenseUser
---

# Get-PendingDelicenseUser

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-PendingDelicenseUser cmdlet to view information about mailboxes that have delayed mailbox license removal requests. You configure delayed mailbox license removal using the DelayedDelicensingEnabled parameter on the Set-OrganizationConfig cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-PendingDelicenseUser [[-Identity] <RecipientIdParameter>]
 [<CommonParameters>]
```

### TenantLevelParameterSet
```
Get-PendingDelicenseUser [-ResultSize <Unlimited>] [-ShowDueObjectsOnly]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PendingDelicenseUser | Format-Table DisplayName,UserPrincipalName,WhenDueForDelicensingUTC
```

This example returns a summary list of all mailboxes that have pending mailbox license removal requests.

### Example 2
```powershell
Get-PendingDelicenseUser -Identity yajvendra@contoso.onmicrosoft.com
```

This example returns detailed information about the pending mailbox license removal request for the specified mailbox.

### Example 3
```powershell
Get-PendingDelicenseUser -ShowDueObjectsOnly | Format-Table DisplayName,UserPrincipalName,WhenDueForDelicensingUTC
```

This example returns a summary list of all mailboxes where the 30 day delay for mailbox license removal requests has ended, so the licenses can be removed from the mailboxes at any time.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the mailbox with a pending mailbox license removal request.

You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Email address
- GUID
- LegacyExchangeDN
- User ID or user principal name (UPN)

You can't use this parameter with the ShowDueObjectsOnly switch.

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: RecipientIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online, Exchange Online Protection

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: TenantLevelParameterSet
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowDueObjectsOnly

> Applicable: Exchange Online, Exchange Online Protection

The ShowDueObjectsOnly switch filters the results by mailboxes where the 30 day delay for removing the license has ended, and the license can be removed from the mailbox at any time. You don't need to specify a value with this switch.

You can't use this switch with the Identity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: TenantLevelParameterSet
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
