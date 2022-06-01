---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-tenantallowblocklistitems
applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection
title: Set-TenantAllowBlockListItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
ROBOTS: NOINDEX
---

# Set-TenantAllowBlockListItems

## SYNOPSIS
**Note**: The features described in this topic are in Preview, are subject to change, and are not available in all organizations.

This cmdlet is available only in the cloud-based service.

Use the Set-TenantAllowBlockListItems cmdlet to modify entries in the Tenant Allow/Block List in the Microsoft 365 Defender portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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

This example changes the expiration date of the URL allow entry for the specified third-party phishing simulation URL. For more information, see [Configure the delivery of third-party phishing simulations to users and unfiltered messages to SecOps mailboxes](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-advanced-delivery).

## PARAMETERS

### -Entries
The Entries parameter specifies the entries that you want to modify based on the ListType parameter value. Valid values are:

- Url: The exact URL entry value.
- File: The exact SHA256 file hash value.

To enter multiple values, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can't mix URL and file values or allow and block actions in the same command.

You can't use this parameter with the Ids parameter.

```yaml
Type: String[]
Parameter Sets: Entries
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ids
The Ids parameter specifies the entries that you want to modify. To find this value, use the Get-TenantAllowBlockListItems cmdlet and the Identity property value (a URL or a file hash).

An example value for this parameter is `RgAAAAAI8gSyI_NmQqzeh-HXJBywBwCqfQNJY8hBTbdlKFkv6BcUAAAl_QCZAACqfQNJY8hBTbdlKFkv6BcUAAAl_oSPAAAA0`.

To enter multiple values, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can't use this parameter with the Entries parameter.

```yaml
Type: String[]
Parameter Sets: Ids
Aliases:
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListType
The ListType parameter specifies the type of entry. Valid values are:

- FileHash
- Url

```yaml
Type: ListType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoExpiration
The NoExpiration switch specifies that the entry should never expire. You don't need to specify a value with this switch.

You can't use this switch with the ExpirationDate parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Allow
The Allow switch specifies that this is an allow entry for advanced delivery (third-party phishing simulation URLs). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Block
The Block switch specifies that this is a block entry for the values you specified by the ListType and Entries parameters. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

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
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2020 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://docs.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

You can't use this parameter with the NoExpiration switch.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListSubType
The ListSubType parameter specifies the subtype for this entry. Valid values are:

- AdvancedDelivery
- Tenant: This is the default value.

```yaml
Type: ListSubType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

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
Applicable: Exchange Online, Security & Compliance Center, Exchange Online Protection

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
