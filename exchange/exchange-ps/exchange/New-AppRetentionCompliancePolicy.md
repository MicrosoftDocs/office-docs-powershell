---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-appretentioncompliancepolicy
applicable: Security & Compliance
title: New-AppRetentionCompliancePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-AppRetentionCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-AppRetentionCompliancePolicy to create app retention compliance policies. App retention & labeling policies target new ways to scope and manage policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AdaptiveScopeLocation
```
New-AppRetentionCompliancePolicy [-Name] <String> -AdaptiveScopeLocation <MultiValuedProperty> -Applications <String[]>
 [-Confirm]
 [-Comment <String>]
 [-Enabled <Boolean>]
 [-Force]
 [-RestrictiveRetention <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### Default
```
New-AppRetentionCompliancePolicy [-Name] <String> -Applications <String[]>
 [-Comment <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-ExchangeLocation <MultiValuedProperty>]
 [-ExchangeLocationException <MultiValuedProperty>]
 [-Force]
 [-ModernGroupLocation <MultiValuedProperty>]
 [-ModernGroupLocationException <MultiValuedProperty>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-RestrictiveRetention <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
\*-AppRetentionCompliance\* cmdlets are used for policies with adaptive policy scopes and all static policies that cover Teams private channels, Viva Engage chats, and Viva Engage community messages. Eventually, you'll use these cmdlets for most retention locations and policy types. The \*-RetentionCompliance\* cmdlets will continue to support Exchange and SharePoint locations primarily. For policies created with the \*-AppRetentionCompliance\* cmdlets, you can only set the list of included or excluded scopes for all included workloads, which means you'll likely need to create one policy per workload.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-AppRetentionCompliancePolicy -Name "Regulation 567 Compliance" -Applications "User:MicrosoftTeams,VivaEngage","Group:MicrosoftTeams,VivaEngage" -ExchangeLocation "Jennifer Petersen","Kitty Nakamura"
```

This example creates a static scope retention policy named Regulation 567 Compliance for the Viva Engage user messages of Jennifer Petersen and Kitty Nakamura.

After you create the retention policy, use the New-AppRetentionComplianceRule cmdlet to create a retention rule and assign it the retention policy to it.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the app retention compliance policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdaptiveScopeLocation
The AdaptiveScopeLocation parameter specifies the adaptive scope location to include in the policy. You create adaptive scopes by using the New-AdaptiveScope cmdlet. You can use any value that uniquely identifies the adaptive scope. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: MultiValuedProperty
Parameter Sets: AdaptiveScopeLocation
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Applications
The Applications parameter specifies the applications to include in the policy and is relevant only for the following location parameters:

- ExchangeLocation
- ModernGroupLocation
- AdaptiveScopeLocation

This parameter uses the following syntax: `"LocationtType:App1,LocationType:App2,...LocationType:AppN` where LocationType is User or Group. For example, `"User:Exchange,User:OneDriveForBusiness,Group:Exchange,Group:SharePoint"` or `"User:MicrosoftTeams","User:VivaEngage"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter enables or disables the policy. Valid values are:

- $true: The policy is enabled. This is the default value.
- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeLocation
The ExchangeLocation parameter specifies the mailboxes to include in the policy. Valid values are:

- A mailbox
- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).
- The value All for all mailboxes. You can only use this value by itself.

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeLocationException
The ExchangeLocationException parameter specifies the mailboxes exclude from the policy when you use the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox
- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModernGroupLocation
The ModernGroupLocation parameter specifies the Microsoft 365 Groups to include in the policy. Valid values are:

- A Microsoft 365 Group
- The value All for all Microsoft 365 Groups. You can only use this value by itself.

To identify the Microsoft 365 Group, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModernGroupLocationException
The ModernGroupLocationException parameter specifies the Microsoft 365 Groups to exclude from the policy when you use the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyRBACScopes

> [!NOTE]
> Admin units are not currently supported, so the PolicyRBACScopes parameter cannot be used at this time. This parameter is documented here for informational purposes to be used when support for admin units is released.
The PolicyRBACScopes parameter specifies the administrative units to assign to the policy. A valid value is the Microsoft Entra ObjectID (GUID value) of the administrative unit. You can specify multiple values separated by commas.

Administrative units are available only in Microsoft Entra ID P1 or P2. You create and manage administrative units in Microsoft Graph PowerShell.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictiveRetention
The RestrictiveRetention parameter specifies whether Preservation Lock is enabled for the policy. Valid values are:

- $true: Preservation Lock is enabled for the policy. No one -- including an administrator -- can turn off the policy or make it less restrictive.
- $false: Preservation Lock isn't enabled for the policy. This is the default value.

After a policy has been locked, no one can turn off or disable it, or remove apps from the policy. The only ways that you can modify the policy are by adding apps to it, or extending its duration. A locked policy can be increased or extended, but it can't be reduced, disabled, or turned off.

Therefore, before you lock a policy, it's critical that you understand your organization's compliance requirements, and that you don't lock a policy until you are certain that it's what you need.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

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
