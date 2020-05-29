---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-tenantallowblocklistitems
applicable: Exchange Online, Exchange Online Protection
title: New-TenantAllowBlockListItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# New-TenantAllowBlockListItems

## SYNOPSIS
**Note**: The features described in this topic are in Preview, are subject to change, and are not available in all organizations.

This cmdlet is available only in the cloud-based service.

Use the New-TenantAllowBlockListItems cmdlet to add entries to the Tenant Allow/Block List in the Security & Compliance Center.

> [!NOTE]
> We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Expiration
```
New-TenantAllowBlockListItems -Action <ItemAction> -Entries <String[]> -ListType <ListType>
 [-ExpirationDate <DateTime>]
 [-Notes <String>]
 [-OutputJson]
 [<CommonParameters>]
```

### NoExpiration
```
New-TenantAllowBlockListItems -Action <ItemAction> -Entries <String[]> -ListType <ListType>
 [-NoExpiration]
 [-Notes <String>]
 [-OutputJson]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-TenantAllowBlockListItem -ListType Url -Action Block -Entries ~contoso.com~
```

This example adds a URL block entry for contoso.com and all subdomains (for example, contoso.com, www.contoso.com, xyz.abc.contoso.com, and www.contoso.com/b). Because we didn't use the ExpirationDate or NoExpiration parameters, the entry expires after 30 days.

### Example 2
```powershell
New-TenantAllowBlockListItem -ListType FileHash -Action Allow -Entries "768a813668695ef2483b2bde7cf5d1b2db0423a0d3e63e498f3ab6f2eb13ea3","2c0a35409ff0873cfa28b70b8224e9aca2362241c1f0ed6f622fef8d4722fd9a" -NoExpiration
```

This example adds a file allow entry for the specified files that never expires.

## PARAMETERS

### -Action
The Action parameter specifies the action type for the entry. Valid values are:

- Allow
- Block

```yaml
Type: ItemAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Entries
The Entries parameter specifies the URL or files that you want to add to the Tenant Allow/Block List based on the value of the ListType parameter:

- URLs: Use IPv4 or IPv6 addresses or hostnames. Wildcards (* and ~) are supported in hostnames. Protocols, TCP/UDP ports, or user credentials are not supported. For details, see [URL syntax for the Tenant Allow/Block List](https://docs.microsoft.com/microsoft-365/security/office-365-security/tenant-allow-block-list#url-syntax-for-the-tenant-allowedblocked-list).

- Files: Use the SHA256 hash value of the file. In Windows, you can find the SHA256 hash value by running the following command in a Command Prompt: `certutil.exe -hashfile "<Path>\<Filename>" SHA256`. An example value is `768a813668695ef2483b2bde7cf5d1b2db0423a0d3e63e498f3ab6f2eb13ea3`.

To enter multiple values, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can't mix URL and file values or allow and block actions in the same command. You can't modify existing URL or file values after you create the entry (there's no Entries parameter on the Set-TenantAllowBlockListItems cmdlet).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpirationDate
The ExpirationDate parameter filters the results by expiration date in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, `"2016-05-06 14:30:00z"`.

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2020 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://go.microsoft.com/fwlink/p/?LinkID=113313).

You can't use this parameter with the NoExpiration switch.

```yaml
Type: DateTime
Parameter Sets: Expiration
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListType
The ListType parameter specifies the type of entry to add. Valid values are:

- FileHash
- Url

```yaml
Type: ListType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Parameter Sets: NoExpiration
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
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
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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

## OUTPUTS

###  

## NOTES

## RELATED LINKS
