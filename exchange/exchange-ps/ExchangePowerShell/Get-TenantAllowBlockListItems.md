---
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-tenantallowblocklistitems
schema: 2.0.0
title: Get-TenantAllowBlockListItems
---

# Get-TenantAllowBlockListItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-TenantAllowBlockListItems cmdlet to view entries in the Tenant Allow/Block List in the Microsoft Defender portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Expiration (Default)
```
Get-TenantAllowBlockListItems -ListType <ListType> [-ExpirationDate <DateTime>]
 [-Allow]
 [-Block]
 [-Entry <String>]
 [-ListSubType <ListSubType[]>]
 [-OutputJson]
 [<CommonParameters>]
```

### NoExpiration
```
Get-TenantAllowBlockListItems -ListType <ListType> [-NoExpiration]
 [-Allow]
 [-Block]
 [-Entry <String>]
 [-ListSubType <ListSubType[]>]
 [-OutputJson]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-TenantAllowBlockListItems -ListType Url -Block
```

This example returns all blocked URLs.

### Example 2
```powershell
Get-TenantAllowBlockListItems -ListType FileHash -Entry "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
```

This example returns information for the specified file hash value.

### Example 3
```powershell
Get-TenantAllowBlockListItems -ListType Url -ListSubType AdvancedDelivery
```

This example returns information for all allowed non-Microsoft phishing simulation URLs. For more information, see [Configure the advanced delivery policy for non-Microsoft phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

## PARAMETERS

### -ListType

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The ListType parameter specifies the list to view. Valid values are:

- FileHash
- Sender
- Url
- IP

```yaml
Type: ListType
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Entry

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Entry parameter filters the results based on the ListType parameter value. Valid values are:

- FileHash: The exact SHA256 file hash value.
- Sender: The exact domain or email address value.
- Url: The exact URL value.
- IP: IPv6 addresses only. Single IPv6 addresses in colon-hexadecimal or zero-compression format or CIDR IPv6 ranges from 1 to 128.

This value is shown in the Value property of the entry in the output of the Get-TenantAllowBlockListItems cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoExpiration

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The NoExpiration switch filters the results by entries that are set to never expire. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: NoExpiration
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Allow

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Allow switch filters the results for allow entries. You don't need to specify a value with this switch.

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

### -Block

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Block switch filters the results for block entries. You don't need to specify a value with this switch.

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

### -ExpirationDate

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The ExpirationDate parameter filters the results by expiration date in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, `"2021-05-06 14:30:00z"`.
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2020 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
Parameter Sets: Expiration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListSubType

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The ListSubType parameter filters the results by subtype. Valid values are:

- AdvancedDelivery
- Tenant: This value is the default.

```yaml
Type: ListSubType[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputJson

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The OutputJson switch specifies whether to return all entries in a single JSON value. You don't need to specify a value with this switch.

You use this switch to prevent the command from halting on the first entry that contains a syntax error.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
