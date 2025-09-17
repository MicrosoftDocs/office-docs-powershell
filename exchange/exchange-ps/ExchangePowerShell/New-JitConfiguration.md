---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-jitconfiguration
schema: 2.0.0
title: New-JitConfiguration
---

# New-JitConfiguration

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-JitConfiguration cmdlet to create the Just-in-time (JIT) configuration in your organization. For more information about JIT, see [Just-in-time protection](https://learn.microsoft.com/purview/endpoint-dlp-learn-about#just-in-time-protection-preview).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-JitConfiguration [-Name] <String>
 [-Comment <String>]
 [-Confirm]
 [-EndpointConfig <String>]
 [-EndpointDlpLocation <MultiValuedProperty>]
 [-EndpointDlpLocationException <MultiValuedProperty>]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-Mode <PolicyMode>]
 [-OneDriveLocation <MultiValuedProperty>]
 [-OneDriveLocationException <MultiValuedProperty>]
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-Organization <OrganizationIdParameter>]
 [-SharePointLocation <MultiValuedProperty>]
 [-SharePointLocationException <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/microsoft-365/compliance/microsoft-365-compliance-center-permissions).


## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies the unique name for the JIT configuration. The only valid value is "Jit".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -Confirm

> Applicable: Security & Compliance

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndpointConfig

> Applicable: Security & Compliance

{{ Fill EndpointConfig Description }}

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

### -EndpointDlpLocation

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance administrator or Compliance data administrator roles in Azure Active Directory.

The EndpointDLPLocation parameter specifies the user accounts to include in the DLP policy for Endpoint DLP when they are logged on to an onboarded device. You identify the account by name or email address. You can use the value All to include all user accounts.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/microsoft-365/compliance/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndpointDlpLocationException

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance administrator or Compliance data administrator roles in Azure Active Directory.

The EndpointDlpLocationException parameter specifies the user accounts to exclude from Endpoint DLP when you use the value All for the EndpointDlpLocation parameter. You identify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/microsoft-365/compliance/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfOneDriveSharedBy

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfOneDriveSharedByMemberOf

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode

> Applicable: Security & Compliance

The Mode parameter specifies the action and notification level of the JIT configuration. Valid values are:

- Disable
- Enable (default)
- PendingDeletion
- TestWithNotifications
- TestWithoutNotifications

```yaml
Type: PolicyMode
Parameter Sets: (All)
Aliases:
Accepted values: Enable, TestWithNotifications, TestWithoutNotifications, Disable, PendingDeletion

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedBy

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedByMemberOf

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
