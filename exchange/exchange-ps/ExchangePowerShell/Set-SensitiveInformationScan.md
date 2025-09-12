---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-sensitiveinformationscan
applicable: Security & Compliance
title: Set-SensitiveInformationScan
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-SensitiveInformationScan

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-SensitiveInformationScan cmdlet to modify on-demand classification scans.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SensitiveInformationScan [-Identity] <PolicyIdParameter>
 [-AddEndpointDlpLocation <MultiValuedProperty>]
 [-AddEndpointDlpLocationException <MultiValuedProperty>]
 [-AddExchangeLocation <MultiValuedProperty>]
 [-AddOneDriveLocation <MultiValuedProperty>]
 [-AddOneDriveLocationException <MultiValuedProperty>]
 [-AddSharePointLocation <MultiValuedProperty>]
 [-AddSharePointLocationException <MultiValuedProperty>]
 [-AddTeamsLocation <MultiValuedProperty>]
 [-AddTeamsLocationException <MultiValuedProperty>]
 [-CancelScan <Boolean>]
 [-Comment <String>]
 [-Confirm]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-ExchangeSender <SmtpAddress[]>]
 [-ExchangeSenderException <SmtpAddress[]>]
 [-ExchangeSenderMemberOf <RecipientIdParameter[]>]
 [-ExchangeSenderMemberOfException <RecipientIdParameter[]>]
 [-Mode <PolicyMode>]
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-RemoveEndpointDlpLocation <MultiValuedProperty>]
 [-RemoveEndpointDlpLocationException <MultiValuedProperty>]
 [-RemoveExchangeLocation <MultiValuedProperty>]
 [-RemoveOneDriveLocation <MultiValuedProperty>]
 [-RemoveOneDriveLocationException <MultiValuedProperty>]
 [-RemoveSharePointLocation <MultiValuedProperty>]
 [-RemoveSharePointLocationException <MultiValuedProperty>]
 [-RemoveTeamsLocation <MultiValuedProperty>]
 [-RemoveTeamsLocationException <MultiValuedProperty>]
 [-StartImpactAssessment <Boolean>]
 [-StopImpactAssessmentAndStartClassification <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SensitiveInformationScan "SharePoint scan" -AddOneDriveLocation All -Workload OneDriveForBusiness
```

This example updates the on-demand classification scan to also include all OneDrive accounts.

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information scan that you want to modify. You can use any value that uniquely identifies the scan. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AddEndpointDlpLocation
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The AddEndpointDLPLocation parameter specifies the user accounts to add to the list of included accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You identify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

A scan can't have Endpoint devices and SharePoint/OneDrive locations together in the same command.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddEndpointDlpLocationException
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The AddEndpointDlpLocationException parameter specifies the user accounts to add to the list of excluded accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You identify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

A scan can't have Endpoint devices and SharePoint/OneDrive locations together in the same command.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocationException
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocation
The AddSharePointLocation parameter specifies the SharePoint sites to add to the list of included sites if you used the value All for the SharePointLocation parameter. You identify the site by its URL value.

You can't add SharePoint sites to the scan until they have been indexed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocationException
The AddSharePointLocationException parameter specifies the SharePoint sites to add to the list of excluded sites if you used the value All for the SharePointLocation parameter. You identify the site by its URL value.

You can't add SharePoint sites to the scan until they have been indexed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddTeamsLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddTeamsLocationException
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CancelScan
{{ Fill CancelScan Description }}

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

### -ExceptIfOneDriveSharedBy
The ExceptIfOneDriveSharedBy parameter specifies the users to exclude from the scan (the sites of the OneDrive user accounts are included in the scan). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, one of the following statements must be true:

- The scan already includes OneDrive sites (in the output of Get-DlpCOmpliancePolicy, the OneDriveLocation property value is All, which is the default value).
- Use `-AddOneDriveLocation All` in the same command with this parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the OneDriveSharedBy or OneDriveSharedByMemberOf parameters.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfOneDriveSharedByMemberOf
The ExceptIfOneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to exclude from the scan (the OneDrive sites of group members are excluded from the scan). You identify the groups by email address.

To use this parameter, one of the following statements must be true:

- The scan already includes OneDrive sites (in the output of Get-DlpCOmpliancePolicy, the OneDriveLocation property value is All, which is the default value).
- Use `-AddOneDriveLocation All` in the same command with this parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the OneDriveSharedBy or OneDriveSharedByMemberOf parameters.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSender
This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderException
This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOf
This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOfException
This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
The Mode parameter specifies the scan mode. Valid values are:

- Enable: Use this value to start the scan.
- Disable
- TestWithNotifications
- TestWithoutNotifications
- PendingDeletion

```yaml
Type: PolicyMode
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedBy
The OneDriveSharedBy parameter specifies the users to include in the DLP scan (the sites of the OneDrive user accounts are included in the scan). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, one of the following statements must be true:

- The scan already includes OneDrive sites (in the output of Get-SensitiveInformationScan, the OneDriveLocation property value is All, which is the default value).
- Use `-AddOneDriveLocation All` in the same command with this parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the ExceptIfOneDriveSharedBy or ExceptIfOneDriveSharedByMemberOf parameters.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedByMemberOf
The OneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to include in the DLP scan (the OneDrive sites of group members are included in the scan). You identify the groups by email address.

To use this parameter, one of the following statements must be true:

- The scan already includes OneDrive sites (in the output of Get-SensitiveInformationScan, the OneDriveLocation property value is All, which is the default value).
- Use `-AddOneDriveLocation All` in the same command with this parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the ExceptIfOneDriveSharedBy or ExceptIfOneDriveSharedByMemberOf parameters.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyRBACScopes
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveEndpointDlpLocation
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The RemoveEndpointDlpLocation parameter specifies the user accounts to remove from the list of included accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You specify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveEndpointDlpLocationException
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The RemoveEndpointDlpLocation parameter specifies the user accounts to remove from the list of excluded accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You specify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocation
The RemoveExchangeLocation parameter removes email messages from the scan if they're already included. The valid value for this parameter is All.

If the scan already includes email messages (in the output of the Get-DlpCompliancePolicy cmdlet, the ExchangeLocation property value is All), you can use `-RemoveExchangeLocation All` to prevent the scan from applying to email messages.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocationException
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocation
The RemoveSharePointLocation parameter specifies the SharePoint sites to remove from the list of included sites if you used the value All for the SharePointLocation parameter. You specify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocationException
The RemoveSharePointLocationException parameter specifies the SharePoint sites to remove from the list of excluded sites if you used the value All for the SharePointLocation parameter. You specify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsLocationException
This parameter is reserved for internal Microsoft use.

```yaml
Type:MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartImpactAssessment
The StartImpactAssessment parameter specifies whether to start cost estimation for on-demand classification scans. Valid values are:

- $true: Start cost estimation for on-demand classification scans.
- $false: Don't start cost estimation for on-demand classification scans.

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

### -StopImpactAssessmentAndStartClassification
The StopImpactAssessmentAndStartClassification specifies whether to stop cost estimation and start classification for devices where estimation completed successfully. Valid values are:

- $true: Start classification for devices where estimation completed successfully.
- $false: Don't start classification for devices where estimation completed successfully.

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
