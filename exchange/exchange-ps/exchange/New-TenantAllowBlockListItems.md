---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-tenantallowblocklistitems
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: New-TenantAllowBlockListItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-TenantAllowBlockListItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-TenantAllowBlockListItems cmdlet to add entries to the Tenant Allow/Block List in the Microsoft Defender portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Expiration
```
New-TenantAllowBlockListItems -Entries <String[]> -ListType <ListType> [-ExpirationDate <DateTime>]
 [-Allow]
 [-Block]
 [-ListSubType <ListSubType>]
 [-LogExtraDetails]
 [-Notes <String>]
 [-OutputJson]
 [-SubmissionID <String>]
 [<CommonParameters>]
```

### NoExpiration
```
New-TenantAllowBlockListItems -Entries <String[]> -ListType <ListType> [-NoExpiration]
 [-Allow]
 [-Block]
 [-ListSubType <ListSubType>]
 [-LogExtraDetails]
 [-Notes <String>]
 [-OutputJson]
 [-SubmissionID <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-TenantAllowBlockListItems -ListType Url -Block -Entries ~contoso.com~
```

This example adds a URL block entry for contoso.com and all subdomains (for example, contoso.com, www.contoso.com, xyz.abc.contoso.com, and www.contoso.com/b). Because we didn't use the ExpirationDate or NoExpiration parameters, the entry expires after 30 days.

### Example 2
```powershell
New-TenantAllowBlockListItems -ListType FileHash -Block -Entries "768a813668695ef2483b2bde7cf5d1b2db0423a0d3e63e498f3ab6f2eb13ea3","2c0a35409ff0873cfa28b70b8224e9aca2362241c1f0ed6f622fef8d4722fd9a" -NoExpiration
```

This example adds a file block entry for the specified files that never expires.

### Example 3
```powershell
New-TenantAllowBlockListItems -Allow -ListType Url -ListSubType AdvancedDelivery -Entries *.fabrikam.com -NoExpiration
```

This example adds a URL allow entry for the specified third-party phishing simulation URL with no expiration. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/microsoft-365/security/office-365-security/advanced-delivery-policy-configure).

## PARAMETERS

### -Entries
The Entries parameter specifies the values that you want to add to the Tenant Allow/Block List based on the ListType parameter value:

- FileHash: Use the SHA256 hash value of the file. In Windows, you can find the SHA256 hash value by running the following command in a Command Prompt: `certutil.exe -hashfile "<Path>\<Filename>" SHA256`. An example value is `768a813668695ef2483b2bde7cf5d1b2db0423a0d3e63e498f3ab6f2eb13ea3`.
- Sender: A domain or email address value. For example, `contoso.com` or `michelle@contoso.com`.
- URL: Use IPv4 or IPv6 addresses or hostnames. Wildcards (* and ~) are supported in hostnames. Protocols, TCP/UDP ports, or user credentials are not supported. For details, see [URL syntax for the Tenant Allow/Block List](https://learn.microsoft.com/microsoft-365/security/office-365-security/tenant-allow-block-list-urls-configure#url-syntax-for-the-tenant-allowblock-list).

To enter multiple values, use the following syntax: `"Value1","Value2",..."ValueN"`.

For senders, files, and URLs the maximum number of allow entries for each type is 500, and the maximum number of block entries for each type is 500 (1000 entries total for each type).

The maximum number of characters in a file entry is 64 and the maximum number of characters in a URL entry is 250.

You can't mix value types (file, sender, or URL) or allow and block actions in the same command.

In most cases, you can't modify the URL, file, or sender values after you create the entry. The only exception is allow URL entries for phishing simulations (ListType = URL, ListSubType = AdvancedDelivery).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
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

You can't use this parameter with the NoExpiration switch.

```yaml
Type: DateTime
Parameter Sets: Expiration
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListType
The ListType parameter specifies the type of entry to add. Valid values are:

- FileHash
- Sender
- Url

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

This switch is available to use in the following scenarios:

- With the Block switch.
- With the Allow switch where the ListType parameter value is URL and the ListSubType parameter value is AdvancedDelivery.

You can't use this switch with the ExpirationDate parameter.

```yaml
Type: SwitchParameter
Parameter Sets: NoExpiration
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Allow
The Allow switch specifies that you're creating an allow entry. You don't need to specify a value with this switch.

You can't use this switch with the Block switch.

**Note**: See [Allow entries in the Tenant Allow/Block List](https://learn.microsoft.com/microsoft-365/security/office-365-security/tenant-allow-block-list-about#allow-entries-in-the-tenant-allowblock-list), before you try to create an allow entry.

You can also use allow entries for third-party phishing simulation URLs with no expiration. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/microsoft-365/security/office-365-security/advanced-delivery-policy-configure).

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
The Allow switch specifies that you're creating a block entry. You don't need to specify a value with this switch.

You can't use this switch with the Allow switch.

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

### -ListSubType
The ListSubType parameter specifies the subtype for this entry. Valid values are:

- AdvancedDelivery: Use this value for phishing simulation URLs. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/microsoft-365/security/office-365-security/advanced-delivery-policy-configure).
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

### -LogExtraDetails
{{ Fill LogExtraDetails Description }}

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

### -SubmissionID
This parameter is reserved for internal Microsoft use.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
