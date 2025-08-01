---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-tenantallowblocklistitems
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: Set-TenantAllowBlockListItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-TenantAllowBlockListItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-TenantAllowBlockListItems cmdlet to modify entries in the Tenant Allow/Block List in the Microsoft Defender portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Ids (Default)
```
Set-TenantAllowBlockListItems -Ids <String[]> -ListType <ListType>
 [-Allow]
 [-Block]
 [-ExpirationDate <DateTime>]
 [-ListSubType <ListSubType>]
 [-NoExpiration]
 [-Notes <String>]
 [-OutputJson]
 [-RemoveAfter <Int32>]
 [<CommonParameters>]
```

### Entries
```
Set-TenantAllowBlockListItems -Entries <String[]> -ListType <ListType>
 [-Allow]
 [-Block]
 [-ExpirationDate <DateTime>]
 [-ListSubType <ListSubType>]
 [-NoExpiration]
 [-Notes <String>]
 [-OutputJson]
 [-RemoveAfter <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
In most cases, you can't modify the sender, URL, file, or IP address values after you create the entry. The only exception is URL allow entries for phishing simulations (ListType = URL, ListSubType = AdvancedDelivery). For more information about allowing URLs for phishing simulations, see [Configure the advanced delivery policy for non-Microsoft phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-TenantAllowBlockListItems -ListType Url -Ids "RgAAAAAI8gSyI_NmQqzeh-HXJBywBwCqfQNJY8hBTbdlKFkv6BcUAAAl_QCZAACqfQNJY8hBTbdlKFkv6BcUAAAl_oSRAAAA" -ExpirationDate (Get-Date "5/30/2021 9:30 AM").ToUniversalTime()
```

This example changes the expiration date of the specified entry.

### Example 2
```powershell
Set-TenantAllowBlockListItems -ListType Url -ListSubType AdvancedDelivery -Entries *.fabrikam.com -ExpirationDate 9/11/2021
```

This example changes the expiration date of the URL allow entry for the specified non-Microsoft phishing simulation URL.

## PARAMETERS

### -Entries
The Entries parameter specifies the entries that you want to modify based on the ListType parameter value. Valid values are:

- FileHash: The exact SHA256 file hash value.
- Sender domains and email addresses: The exact domain or email address value.
- Url: The exact URL value.
- IP: IPv6 addresses only. Single IPv6 addresses in colon-hexadecimal or zero-compression format or CIDR IPv6 ranges from 1 to 128.

This value is shown in the Value property of the entry in the output of the Get-TenantAllowBlockListItems cmdlet.

You can't mix value types (sender, URL, file, or IP address) or allow and block actions in the same command.

You can't use this parameter with the Ids parameter.

```yaml
Type: String[]
Parameter Sets: Entries
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ids
The Ids parameter specifies the entries that you want to modify. This value is shown in the Identity property in the output of the Get-TenantAllowBlockListItems cmdlet.

An example value for this parameter is `RgAAAAAI8gSyI_NmQqzeh-HXJBywBwCqfQNJY8hBTbdlKFkv6BcUAAAl_QCZAACqfQNJY8hBTbdlKFkv6BcUAAAl_oSPAAAA0`.

You can't use this parameter with the Entries parameter.

```yaml
Type: String[]
Parameter Sets: Ids
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListType
The ListType parameter specifies the type of entry that you want to modify. Valid values are:

- FileHash
- Sender
- Url
- IP

Use the Entries or Ids parameter with this parameter to identify the entry itself.

```yaml
Type: ListType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoExpiration
The NoExpiration switch specifies that the entry should never expire. You don't need to specify a value with this switch.

This switch is available to use with the following types of entries:

- Block entries.
- URL allow entries where the ListSubType parameter value is AdvancedDelivery.
- IP address allow entries.

You can't use this switch with the ExpirationDate parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Allow
The Allow switch specifies that you're modifying an allow entry. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Block
The Block switch specifies that you're modifying a block entry. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpirationDate
The ExpirationDate parameter filters the results by expiration date in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, `"2021-05-06 14:30:00z"`.
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2020 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

You can't use this parameter with the NoExpiration or RemoveAfter parameters.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListSubType
The ListSubType parameter further specifies the entry that you want to modify. Valid values are:

- AdvancedDelivery: Use this value for phishing simulation URLs. For more information, see [Configure the advanced delivery policy for non-Microsoft phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).
- Tenant: This is the default value.

```yaml
Type: ListSubType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputJson
The OutputJson switch specifies whether to return all entries in a single JSON value. You don't need to specify a value with this switch.

You use this switch to prevent the command from halting on the first entry that contains a syntax error.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveAfter
The RemoveAfter parameter enables the **Remove on** \> **45 days after last used date** feature for an allow entry. The LastUsedDate property is populated when the bad entity in the allow entry is encountered by the filtering system during mail flow or time of click. The allow entry is kept for 45 days after the filtering system determines that the entity is clean.

The only valid value for this parameter is 45.

You can't use this parameter with the ExpirationDate or NoExpirationDate parameters.

To change the allow entry to a static expiration date/time value that doesn't depend on the LastUsedDate property, run a Set-TenantAllowBlockListItems command with the ExpirationDate parameter.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
