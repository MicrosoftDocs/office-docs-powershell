---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-tenantallowblocklistitems
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: Remove-TenantAllowBlockListItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Remove-TenantAllowBlockListItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-TenantAllowBlockListItems cmdlet to remove entries from the Tenant Allow/Block List in the Microsoft Defender portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Entries
```
Remove-TenantAllowBlockListItems -Entries <String[]> -ListType <ListType>
 [-ListSubType <ListSubType>]
 [-OutputJson]
 [<CommonParameters>]
```

### Ids
```
Remove-TenantAllowBlockListItems -Ids <String[]> -ListType <ListType>
 [-ListSubType <ListSubType>]
 [-OutputJson]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-TenantAllowBlockListItems -ListType Url -Ids "RgAAAAAI8gSyI_NmQqzeh-HXJBywBwCqfQNJY8hBTbdlKFkv6BcUAAAl_QCZAACqfQNJY8hBTbdlKFkv6BcUAAAl_oSPAAAA0l"
```

This example removes the specified URL entry from the Tenant Allow/Block List.

### Example 2
```powershell
Remove-TenantAllowBlockListItems -ListType Url -ListSubType AdvancedDelivery -Entries *.fabrikam.com
```

This example removes the URL allow entry for the specified third-party phishing simulation URL. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

## PARAMETERS

### -Entries
The Entries parameter specifies the entries that you want to remove based on the ListType parameter value. Valid values are:

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
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ids
The Ids parameter specifies the entries that you want to remove. This value is shown in the Identity property in the output of the Get-TenantAllowBlockListItems cmdlet.

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
The ListType parameter specifies the type of entry that you want to remove. Valid values are:

- FileHash
- Sender
- Url
- IP

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

### -ListSubType
The ListSubType specifies further specifies the type of entry that you want to remove. Valid values are:

- AdvancedDelivery: Use this value for phishing simulation URLs.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
