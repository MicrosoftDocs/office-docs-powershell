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
 [-RemoveAfter <Int32>]
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
 [-RemoveAfter <Int32>]
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

This example adds a URL allow entry for the specified third-party phishing simulation URL with no expiration. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

### Example 4
```powershell
New-TenantAllowBlockListItems -Allow -ListType Url -Entries abcd.fabrikam.com -RemoveAfter 45
```

This example adds a URL allow entry for the specified domain with expiration as 45 days after last used date. This allow entry permits URLs identified as bulk, spam, high confidence spam, and phishing (not high confidence phishing).

For URLs identified as malware or high-confidence phishing, you need to submit the URLs Microsoft to create allow entries. For instructions, see [Report good URLs to Microsoft](https://learn.microsoft.com/defender-office-365/submissions-admin#report-good-urls-to-microsoft).

## PARAMETERS

### -Entries
The Entries parameter specifies the values that you want to add to the Tenant Allow/Block List based on the ListType parameter value:

- FileHash: Use the SHA256 hash value of the file. You can find the SHA256 hash value by running the following command in PowerShell: `Get-FileHash -Path "<Path>\<Filename>" -Algorithm SHA256`. An example value is `768a813668695ef2483b2bde7cf5d1b2db0423a0d3e63e498f3ab6f2eb13ea3`.
- Sender: A domain or email address value. For example, `contoso.com` or `michelle@contoso.com`.
- URL: Use IPv4 or IPv6 addresses or hostnames. Wildcards (\* and ~) are supported in hostnames. Protocols, TCP/UDP ports, or user credentials are not supported. For details, see [URL syntax for the Tenant Allow/Block List](https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-urls-configure#url-syntax-for-the-tenant-allowblock-list).
- IP: IPv6 addresses only:

  • Single IPv6 addresses in colon-hexadecimal format (for example, 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

  • Single IPv6 addresses in zero-compression format (for example, 2001:db8::1 for 2001:0db8:0000:0000:0000:0000:0000:0001).

  • CIDR IPv6 ranges from 1 to 128 (for example, 2001:0db8::/32).

To enter multiple values, use the following syntax: `"Value1","Value2",..."ValueN"`.

Entry limits for each list subtype (sender, URL, file, or IP address):

- **Exchange Online Protection**: The maximum number of allow entries is 500, and the maximum number of block entries is 500.
- **Defender for Office 365 Plan 1**: The maximum number of allow entries is 1000, and the maximum number of block entries is 1000.
- **Defender for Office 365 Plan 2**: The maximum number of allow entries is 5000, and the maximum number of block entries is 10000.

The maximum number of characters in a file entry is 64 and the maximum number of characters in a URL entry is 250.

You can't mix value types (sender, URL, file, or IP address) or allow and block actions in the same command.

In most cases, you can't modify the sender, URL, file, or IP address values after you create the entry. The only exception is URL allow entries for phishing simulations (ListType = URL, ListSubType = AdvancedDelivery).

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
The ExpirationDate parameter set the expiration date of the entry in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, `"2021-05-06 14:30:00z"`.
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2020 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

You can't use this parameter with the NoExpiration or RemoveAfter parameters.

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

### -NoExpiration
The NoExpiration switch specifies that the entry should never expire. You don't need to specify a value with this switch.

This switch is available to use in the following scenarios:

- With the Block switch.
- With the Allow switch where the ListType parameter value is URL and the ListSubType parameter value is AdvancedDelivery.
- With the Allow switch where the ListType parameter value is IP.

You can't use this switch with the ExpirationDate or RemoveAfter parameter.

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

**Note**: See [Allow entries in the Tenant Allow/Block List](https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-about#allow-entries-in-the-tenant-allowblock-list), before you try to create an allow entry.

You can also use allow entries for third-party phishing simulation URLs with no expiration. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

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

- AdvancedDelivery: Use this value for phishing simulation URLs. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).
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

### -RemoveAfter
The RemoveAfter parameter enables the **Remove on** \> **45 days after last used date** feature for an allow entry. The LastUsedDate property is populated when the bad entity in the allow entry is encountered by the filtering system during mail flow or time of click. The allow entry is kept for 45 days after the filtering system determines that the entity is clean.

The only valid value for this parameter is 45.

It can be used with the Allow switch where the ListType parameter value is Sender or FileHash or Url.

You can't use this parameter with the ExpirationDate or NoExpirationDate parameters.

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
