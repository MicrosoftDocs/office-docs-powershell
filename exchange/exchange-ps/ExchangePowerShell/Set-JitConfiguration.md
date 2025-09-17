---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-jitconfiguration
schema: 2.0.0
title: Set-JitConfiguration
---

# Set-JitConfiguration

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-JitConfiguration cmdlet to modify the Just-in-time (JIT) configuration in the organization. For more information about JIT, see [Just-in-time protection](https://learn.microsoft.com/purview/endpoint-dlp-learn-about#just-in-time-protection-preview).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Set-JitConfiguration [-Identity] <PolicyIdParameter>
 [-AddEndpointDlpLocation <MultiValuedProperty>]
 [-AddEndpointDlpLocationException <MultiValuedProperty>]
 [-AddOneDriveLocation <MultiValuedProperty>]
 [-AddOneDriveLocationException <MultiValuedProperty>]
 [-AddSharePointLocation <MultiValuedProperty>]
 [-AddSharePointLocationException <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-EndpointConfig <String>]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-Mode <PolicyMode>]
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-RemoveEndpointDlpLocation <MultiValuedProperty>]
 [-RemoveEndpointDlpLocationException <MultiValuedProperty>]
 [-RemoveOneDriveLocation <MultiValuedProperty>]
 [-RemoveOneDriveLocationException <MultiValuedProperty>]
 [-RemoveSharePointLocation <MultiValuedProperty>]
 [-RemoveSharePointLocationException <MultiValuedProperty>]
 [-WhatIf] [<CommonParameters>]
```

### AdaptiveScopeLocation
```
Set-JitConfiguration [-Identity] <PolicyIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-EndpointConfig <String>]
 [-Mode <PolicyMode>]
 [-WhatIf]
 [<CommonParameters>]
```

### TeamLocation
```
Set-JitConfiguration [-Identity] <PolicyIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-EndpointConfig <String>]
 [-Mode <PolicyMode>]
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

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the JIT configuration that you want to modify. There's only one JIT configuration named "Jit" in the organization.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AddEndpointDlpLocation

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance administrator or Compliance data administrator roles in Azure Active Directory.

The AddEndpointDLPLocation parameter specifies the user accounts to add to the list of included accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You identify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/microsoft-365/compliance/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddEndpointDlpLocationException

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance administrator or Compliance data administrator roles in Azure Active Directory.

The AddEndpointDlpLocationException parameter specifies the user accounts to add to the list of excluded accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You identify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/microsoft-365/compliance/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
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

### -ExceptIfOneDriveSharedBy

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: Identity
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
Parameter Sets: Identity
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

### -OneDriveSharedBy

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: Identity
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
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveEndpointDlpLocation

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance administrator or Compliance data administrator roles in Azure Active Directory.

The RemoveEndpointDlpLocation parameter specifies the user accounts to remove from the list of included accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You specify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/microsoft-365/compliance/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveEndpointDlpLocationException

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance administrator or Compliance data administrator roles in Azure Active Directory.

The RemoveEndpointDlpLocation parameter specifies the user accounts to remove from the list of excluded accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You specify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/microsoft-365/compliance/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
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
