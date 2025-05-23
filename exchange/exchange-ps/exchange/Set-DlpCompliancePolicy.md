---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-dlpcompliancepolicy
applicable: Security & Compliance
title: Set-DlpCompliancePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-DlpCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-DlpCompliancePolicy cmdlet to modify data loss prevention (DLP) policies in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Set-DlpCompliancePolicy [-Identity] <PolicyIdParameter>
 [-AddEndpointDlpLocation <MultiValuedProperty>]
 [-AddEndpointDlpLocationException <MultiValuedProperty>]
 [-AddExchangeLocation <MultiValuedProperty>]
 [-AddOneDriveLocation <MultiValuedProperty>]
 [-AddOneDriveLocationException <MultiValuedProperty>]
 [-AddOnPremisesScannerDlpLocation <MultiValuedProperty>]
 [-AddOnPremisesScannerDlpLocationException <MultiValuedProperty>]
 [-AddPowerBIDlpLocation <MultiValuedProperty>]
 [-AddPowerBIDlpLocationException <MultiValuedProperty>]
 [-AddSharePointLocation <MultiValuedProperty>]
 [-AddSharePointLocationException <MultiValuedProperty>]
 [-AddTeamsLocation <MultiValuedProperty>]
 [-AddTeamsLocationException <MultiValuedProperty>]
 [-AddThirdPartyAppDlpLocation <MultiValuedProperty>]
 [-AddThirdPartyAppDlpLocationException <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-EndpointDlpAdaptiveScopes <MultiValuedProperty>]
 [-EndpointDlpAdaptiveScopesException <MultiValuedProperty>]
 [-EndpointDlpExtendedLocations <String>]
 [-EnforcementPlanes <MultiValuedProperty>]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-ExchangeAdaptiveScopes <MultiValuedProperty>]
 [-ExchangeAdaptiveScopesException <MultiValuedProperty>]
 [-ExchangeSenderMemberOf <RecipientIdParameter[]>]
 [-ExchangeSenderMemberOfException <RecipientIdParameter[]>]
 [-Force]
 [-IsFromSmartInsights <System.Boolean>]
 [-Locations <String>]
 [-Mode <PolicyMode>]
 [-OneDriveAdaptiveScopes <MultiValuedProperty>]
 [-OneDriveAdaptiveScopesException <MultiValuedProperty>]
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-PolicyTemplateInfo <PswsHashtable>]
 [-Priority <Int32>]
 [-RemoveEndpointDlpLocation <MultiValuedProperty>]
 [-RemoveEndpointDlpLocationException <MultiValuedProperty>]
 [-RemoveExchangeLocation <MultiValuedProperty>]
 [-RemoveOneDriveLocation <MultiValuedProperty>]
 [-RemoveOneDriveLocationException <MultiValuedProperty>]
 [-RemoveOnPremisesScannerDlpLocation <MultiValuedProperty>]
 [-RemoveOnPremisesScannerDlpLocationException <MultiValuedProperty>]
 [-RemovePowerBIDlpLocation <MultiValuedProperty>]
 [-RemovePowerBIDlpLocationException <MultiValuedProperty>]
 [-RemoveSharePointLocation <MultiValuedProperty>]
 [-RemoveSharePointLocationException <MultiValuedProperty>]
 [-RemoveTeamsLocation <MultiValuedProperty>]
 [-RemoveTeamsLocationException <MultiValuedProperty>]
 [-RemoveThirdPartyAppDlpLocation <MultiValuedProperty>]
 [-RemoveThirdPartyAppDlpLocationException <MultiValuedProperty>]
 [-SharePointAdaptiveScopes <MultiValuedProperty>]
 [-SharePointAdaptiveScopesException <MultiValuedProperty>]
 [-StartSimulation <Boolean>]
 [-TeamsLocation <MultiValuedProperty>]
 [-TeamsLocationException <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

### RetryDistribution
```
Set-DlpCompliancePolicy [-Identity] <PolicyIdParameter> [-RetryDistribution]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

**Note**: Don't use a piped Foreach-Object command when adding or removing scope locations: `"Value1","Value2",..."ValueN" | Foreach-Object {Set-DlpCompliancePolicy -Identity "Main PII" -RemoveExchangeLocation $_}`.

## EXAMPLES

### Example 1
```powershell
Set-DlpCompliancePolicy -Identity "Main PII" -AddSharePointLocation "https://my.url1","https://my.url2" -AddOneDriveLocation "https://my.url3","https://my.url4"
```

This example adds the specified URLs to the SharePoint Online and OneDrive for Business locations for the DLP policy named Main PII without affecting the existing URL values.

### Example 2
```powershell
Set-DlpCompliancePolicy -Identity MainPII -Mode Disable
```

This example disables the "MainPII" policy.

### Example 3
```powershell
Set-DlpCompliancePolicy -Identity "PowerBIPolicy" -AddPowerBILocation "workspaceID1","workspaceID2","workspaceID3"
```

This example adds the specified workspace IDs to the Power BI location for the DLP policy named PowerBIPolicy without affecting the existing workspace IDs.

## PARAMETERS

### -Identity
The Identity parameter specifies the DLP policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID
- Id

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RetryDistribution
The RetryDistribution switch redistributes the policy to all Exchange, OneDrive for Business, and SharePoint Online locations. You don't need to specify a value with this switch.

Locations whose initial distributions succeeded aren't included in the retry. Policy distribution errors are reported if you used this switch.

**Note**: Because the process of retrying distribution is a significant operation, run it only if necessary and for one policy at a time. It is not intended to be run every time you update a policy. If you run a script to update multiple policies, wait until the policy distribution is successful before running the command again for the next policy.

```yaml
Type: SwitchParameter
Parameter Sets: RetryDistribution
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddEndpointDlpLocation
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The AddEndpointDLPLocation parameter specifies the user accounts to add to the list of included accounts for Endpoint DLP if you used the value All for the EndpointDLPLocation parameter. You identify the account by name or email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
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

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-learn-about).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocation
The AddExchangeLocation parameter adds email messages to the DLP policy if they're not already included. The valid value for this parameter is All.

If the policy doesn't already include email messages (in the output of the Get-DlpCompliancePolicy cmdlet, the ExchangeLocation property value is blank), you can use this parameter in the following procedures:

- If you use `-AddExchangeLocation All` by itself, the policy applies to email for all users.

- To include email of specific group members in the policy, use `-AddExchangeLocation All` with the ExchangeSenderMemberOf parameter in the same command. Only email of members of the specified groups is included in the policy.

- To exclude email of specific group members from the policy, use `-AddExchangeLocation All` with the ExchangeSenderMemberOfException parameter in the same command. Only email of members of the specified groups is excluded from the policy.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocation
The AddOneDriveLocation parameter adds OneDrive for Business sites to the DLP policy if they're not already included. The valid value for this parameter is All.

If the policy doesn't already include OneDrive for Business sites (in the output of the Get-DlpCompliancePolicy cmdlet, the OneDriveLocation property value is blank), you can use this parameter in the following procedures:

- If you use `-AddOneDriveLocation All` by itself, the policy applies to all OneDrive for Business sites.

- To include sites of specific OneDrive accounts in the policy, use `-AddOneDriveLocation All` and the OneDriveSharedBy parameter to specify the users. Only the sites of the specified users are included in the policy.

- To include sites of specific group members in the policy, use `-AddOneDriveLocation All` and the OneDriveSharedByMemberOf parameter to specify the groups. Only the sites of members of the specified groups are included in the policy.

- To exclude sites of specific OneDrive accounts from the policy, use `-AddOneDriveLocation All` and the ExceptIfOneDriveSharedBy parameter to specify the users. Only sites of the specified users are excluded from the policy.

- To exclude sites of specific group members from the policy, use `-AddOneDriveLocation All` and the ExceptIfOneDriveSharedByMemberOf parameter to specify the groups. Only sites of members of the specified groups are excluded from the policy.

You can't specify inclusions and exclusions in the same policy.

**Note**: Although this parameter accepts site URLs, don't specify site URLs values. Use the OneDriveSharedBy, ExceptIfOneDriveShareBy, OneDriveSharedByMemberOf, and ExceptIfOneDriveSharedByMemberOf parameters instead. In the DLP policy settings in the Microsoft Defender portal, you can't specify sites to include or exclude by URL; you specify sites to include or exclude only by users or groups.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocationException
Don't use this parameter. See the AddOneDriveLocation parameter for an explanation.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOnPremisesScannerDlpLocation
The AddOnPremisesScannerDlpLocation parameter specifies the on-premises file shares and SharePoint document libraries and folders to add to the list of included repositories if you used the value All for the OnPremisesScannerDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about the DLP on-premises scanner, see [Learn about the data loss prevention on-premises scanner](https://learn.microsoft.com/purview/dlp-on-premises-scanner-learn).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOnPremisesScannerDlpLocationException
The AddOnPremisesScannerDlpLocationExclusion parameter specifies the on-premises file shares and SharePoint document libraries and folders to add to the list of excluded repositories if you used the value All for the OnPremisesScannerDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about the DLP on-premises scanner, see [Learn about the data loss prevention on-premises scanner](https://learn.microsoft.com/purview/dlp-on-premises-scanner-learn).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddPowerBIDlpLocation
The AddPowerBIDlpLocation parameter specifies the Power BI workspace IDs to add to the list of included workspaces if you used the value All for the PowerBIDlpLocation parameter. Only workspaces hosted in Premium Gen2 capacities are permitted.

You can find the workspace ID using one of the following procedures:

- In the Admin portal, choose **Workspaces**, then select a workspace and choose **\> More options (...) \> Details**.
- Look in the URL of a selected workspace.
- In PowerShell, use the command **Get-PowerBIWorkspace**.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddPowerBIDlpLocationException
The AddPowerBIDlpLocationException parameter specifies the Power BI workspace IDs to add to the list of excluded workspaces if you used the value All for the PowerBIDlpLocation parameter. Only workspaces hosted in Premium Gen2 capacities are permitted.

You can find the workspace ID using one of the following procedures:

- In the Admin portal, choose **Workspaces**, then select a workspace and choose **\> More options (...) \> Details**.
- Look in the URL of a selected workspace.
- In PowerShell, use the command **Get-PowerBIWorkspace**.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocation
The AddSharePointLocation parameter specifies the SharePoint Online sites to add to the list of included sites if you used the value All for the SharePointLocation parameter. You identify the site by its URL value.

You can't add SharePoint Online sites to the policy until they have been indexed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocationException
The AddSharePointLocationException parameter specifies the SharePoint Online sites to add to the list of excluded sites if you used the value All for the SharePointLocation parameter. You identify the site by its URL value.

You can't add SharePoint Online sites to the policy until they have been indexed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddTeamsLocation
The AddTeamsLocation parameter specifies the accounts, distribution groups, or mail-enabled security groups to add to the list of included Teams chat and channel messages if you used the value All for the TeamsLocation parameter. You identify the entries by the email address or name of the account, distribution group, or mail-enabled security group.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddTeamsLocationException
The AddTeamsLocationException parameter specifies the accounts, distribution groups, or mail-enabled security groups to add to the list of excluded Teams chat and channel messages if you used the value All for the TeamsLocation parameter. You identify the entries by the email address or name of the account, distribution group, or mail-enabled security group.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddThirdPartyAppDlpLocation
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The AddThirdPartyAppDlpLocation parameter specifies the non-Microsoft cloud apps to add to the list of included apps if you used the value All for the ThirdPartyAppDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about DLP for non-Microsoft cloud apps, see [Use data loss prevention policies for non-Microsoft cloud apps](https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddThirdPartyAppDlpLocationException
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The AddThirdPartyAppDlpLocationException parameter specifies the non-Microsoft cloud apps to add to the list of excluded apps if you used the value All for the ThirdPartyAppDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about DLP for non-Microsoft cloud apps, see [Use data loss prevention policies for non-Microsoft cloud apps](https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
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
Parameter Sets: Identity
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

### -EndpointDlpAdaptiveScopes
{{ Fill EndpointDlpAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndpointDlpAdaptiveScopesException
{{ Fill EndpointDlpAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndpointDlpExtendedLocations
{{ Fill EndpointDlpExtendedLocations Description }}

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

### -EnforcementPlanes
The EnforcementPlanes parameter defines the layer where policy actions are executed. 

Currently, the only supported enforcement plane is `"Entra"`, for use with policies applied to an Entra-registered enterprise application in the organization.

To configure EnforcementPlanes, specify as an array, for example `-EnforcementPlanes @("Entra")`.

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

### -ExceptIfOneDriveSharedBy
The ExceptIfOneDriveSharedBy parameter specifies the users to exclude from the DLP policy (the sites of the OneDrive for Business user accounts are included in the policy). You identify the users by UPN (laura@contoso.onmicrosoft.com).

To use this parameter, one of the following statements must be true:

- The policy already includes OneDrive for Business sites (in the output of Get-DlpCOmpliancePolicy, the OneDriveLocation property value is All, which is the default value).
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
The ExceptIfOneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to exclude from the DLP policy (the OneDrive for Business sites of group members are excluded from the policy). You identify the groups by email address.

To use this parameter, one of the following statements must be true:

- The policy already includes OneDrive for Business sites (in the output of Get-DlpCOmpliancePolicy, the OneDriveLocation property value is All, which is the default value).
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

### -ExchangeAdaptiveScopes
{{ Fill ExchangeAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAdaptiveScopesException
{{ Fill ExchangeAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOf
The ExchangeSenderMemberOf parameter specifies the distribution groups or security groups to include in the policy (email of the group members is included in the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

To use this parameter, one of the following statements must be true:

- The policy already includes email messages (in the output of Get-DlpCOmpliancePolicy, the ExchangeLocation property value is All).
- Use `-AddExchangeLocation All` in the same command with this parameter.

You can't use this parameter with the ExchangeSenderMemberOfException parameter.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOfException
The ExchangeSenderMemberOfException parameter specifies the distribution groups or security groups to exclude from the policy (email of the group members is excluded from the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

To use this parameter, one of the following statements must be true:

- The policy already includes email messages (in the output of Get-DlpCOmpliancePolicy, the ExchangeLocation property value is All).
- Use `-AddExchangeLocation All` in the same command with this parameter.

You can't use this parameter with the ExchangeSenderMemberOf parameter.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: Identity
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
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsFromSmartInsights
{{ Fill IsFromSmartInsights Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locations
The Locations parameter specifies to whom, what, and where the DLP policy applies. This parameter uses the following properties:

- Workload: What the DLP policy applies to. Use the value `Applications`.
- Location: Where the DLP policy applies. For Microsoft 365 Copilot, (Preview), use the value `470f2276-e011-4e9d-a6ec-20768be3a4b0`.
- AddInclusions or RemoveInclusions: Add or remove security groups, distribution groups, or users to or from the scope of this DLP policy. For users, use the email address in this syntax: `{Type:IndividualResource,Identity:<EmailAddress>}`. For security groups or distribution groups, use the ObjectId value of the group from the Microsoft Entra portal in this syntax: `{Type:Group,Identity:<ObjectId>}`.
- AddExclusions or RemoveExclusions: Add or remove security groups, distribution groups, or users to or from exclusions to the scope of this DLP policy. For users, use the email address in this syntax: `{Type:IndividualResource,Identity:<EmailAddress>}`. For security groups or distribution groups, use the ObjectId value of the group from the Microsoft Entra portal in this syntax: `{Type:Group,Identity:<ObjectId>}`.

You create and store the properties in a variable as shown in the following examples:

DLP policy scoped to all users in the tenant:

`$loc = "[{"Workload":"Applications","Location":"470f2276-e011-4e9d-a6ec-20768be3a4b0","AddInclusions":[{Type:"Tenant",Identity:"All"}]}]"`

DLP policy scoped to the specified user and groups:

`$loc = "[{"Workload":"Applications","Location":"470f2276-e011-4e9d-a6ec-20768be3a4b0","AddInclusions":[{"Type":"Group","Identity":"fef0dead-5668-4bfb-9fc2-9879a47f9bdb"},{"Type":"Group","Identity":"b4dc1e1d-8193-4525-b59c-6d6e0f1718d2"},{"Type":"IndividualResource","Identity":"yibing@contoso.com"}]}]"`

DLP policy scoped to all users in the tenant except for members of the specified group:

`$loc = "[{"Workload":"Applications","Location":"470f2276-e011-4e9d-a6ec-20768be3a4b0","AddInclusions":[{Type:"Tenant",Identity:"All"}],"AddExclusions": [{"Type":"Group","Identity":"fef0dead-5668-4bfb-9fc2-9879a47f9bdb"},{"Type":"Group","Identity":"b4dc1e1d-8193-4525-b59c-6d6e0f1718d2"}]}]`

After you create the `$loc` variable as shown in the previous examples, use the value `$loc` for this parameter.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
The Mode parameter specifies the action and notification level of the DLP policy. Valid values are:

- Enable: The policy is enabled for actions and notifications. This is the default value.
- Disable: The policy is disabled.
- TestWithNotifications: Simulation mode where no actions are taken, but notifications **are** sent.
- TestWithoutNotifications: Simulation mode where no actions are taken, and no notifications are sent.

```yaml
Type: PolicyMode
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAdaptiveScopes
{{ Fill OneDriveAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAdaptiveScopesException
{{ Fill OneDriveAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedBy
The OneDriveSharedBy parameter specifies the users to include in the DLP policy (the sites of the OneDrive for Business user accounts are included in the policy). You identify the users by UPN (laura@contoso.onmicrosoft.com).

To use this parameter, one of the following statements must be true:

- The policy already includes OneDrive for Business sites (in the output of Get-DlpCOmpliancePolicy, the OneDriveLocation property value is All, which is the default value).
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
The OneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to include in the DLP policy (the OneDrive for Business sites of group members are included in the policy). You identify the groups by email address.

To use this parameter, one of the following statements must be true:

- The policy already includes OneDrive for Business sites (in the output of Get-DlpCOmpliancePolicy, the OneDriveLocation property value is All, which is the default value).
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
The PolicyRBACScopes parameter specifies the administrative units to assign to the policy. A valid value is the Microsoft Entra ObjectID (GUID value) of the administrative unit. You can specify multiple values separated by commas.

Administrative units are available only in Microsoft Entra ID P1 or P2. You create and manage administrative units in Microsoft Graph PowerShell.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyTemplateInfo
The PolicyTemplateInfo specifies the built-in or custom DLP policy templates to use in the DLP policy.

For more information about DLP policy templates, see [What the DLP policy templates include](https://learn.microsoft.com/purview/what-the-dlp-policy-templates-include).

```yaml
Type: PswsHashtable
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies a priority value for the policy that determines the order of policy processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and policies can't have the same priority value.

Valid values and the default value for this parameter depend on the number of existing policies. For example, if there are 5 existing policies:

- Valid priority values for the existing 5 policies are from 0 through 4.
- Valid priority values for a new 6th policy are from 0 through 5.
- The default value for a new 6th policy is 5.

If you modify the priority value of a policy, the position of the policy in the list changes to match the priority value you specify. In other words, if you set the priority value of a policy to the same value as an existing policy, the priority value of the existing policy and all other lower priority policies after it is increased by 1.

```yaml
Type: Int32
Parameter Sets: Identity
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
Parameter Sets: Identity
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
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocation
The RemoveExchangeLocation parameter removes email messages from the DLP policy if they're already included. The valid value for this parameter is All.

If the policy already includes email messages (in the output of the Get-DlpCompliancePolicy cmdlet, the ExchangeLocation property value is All), you can use `-RemoveExchangeLocation All` to prevent the policy from applying to email messages.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocation
The RemoveOneDriveLocation parameter removes OneDrive for Business sites from the DLP policy if they're already included. The valid value for this parameter is All.

If the policy already includes OneDrive for Business sites (in the output of the Get-DlpCompliancePolicy cmdlet, the OneDriveLocation property value is All), you can use `-RemoveOneDriveLocation All` to prevent the policy from applying to OneDrive for Business sites.

**Note**: Although this parameter accepts site URLs, don't specify site URLs values. Use the OneDriveSharedBy, ExceptIfOneDriveShareBy, OneDriveSharedByMemberOf, and ExceptIfOneDriveSharedByMemberOf parameters instead. In the DLP policy settings in the Microsoft Defender portal, you can't specify sites to include or exclude by URL; you specify sites to include or exclude only by users or groups.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocationException
Don't use this parameter. See the RemoveOneDriveLocation parameter for an explanation.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOnPremisesScannerDlpLocation
The RemoveOnPremisesScannerDlpLocation parameter specifies the on-premises file shares and SharePoint document libraries and folders to remove from the list of included repositories if you used the value All for the OnPremisesScannerDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about the DLP on-premises scanner, see [Learn about the data loss prevention on-premises scanner](https://learn.microsoft.com/purview/dlp-on-premises-scanner-learn).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOnPremisesScannerDlpLocationException
The RemoveOnPremisesScannerDlpLocationException parameter specifies the on-premises file shares and SharePoint document libraries and folders to remove from the list of excluded repositories if you used the value All for the OnPremisesScannerDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about the DLP on-premises scanner, see [Learn about the data loss prevention on-premises scanner](https://learn.microsoft.com/purview/dlp-on-premises-scanner-learn).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePowerBIDlpLocation
The RemovePowerBIDlpLocation parameter specifies the Power BI workspace IDs to remove from the list of included workspaces if you used the value All for the PowerBIDlpLocation parameter. Only workspaces hosted in Premium Gen2 capacities are permitted.

You can find the workspace ID using one of the following procedures:

- In the Admin portal, choose **Workspaces**, then select a workspace and choose **\> More options (...) \> Details**.
- Look in the URL of a selected workspace.
- In PowerShell, use the command **Get-PowerBIWorkspace**.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePowerBIDlpLocationException
The RemovePowerBIDlpLocationException parameter specifies the Power BI workspace IDs to remove the list of excluded workspaces if you used the value All for the PowerBIDlpLocation parameter. Only workspaces hosted in Premium Gen2 capacities are permitted.

You can find the workspace ID using one of the following procedures:

- In the Admin portal, choose **Workspaces**, then select a workspace and choose **\> More options (...) \> Details**.
- Look in the URL of a selected workspace.
- In PowerShell, use the command **Get-PowerBIWorkspace**.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocation
The RemoveSharePointLocation parameter specifies the SharePoint Online sites to remove from the list of included sites if you used the value All for the SharePointLocation parameter. You specify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocationException
The RemoveSharePointLocationException parameter specifies the SharePoint Online sites to remove from the list of excluded sites if you used the value All for the SharePointLocation parameter. You specify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsLocation
The RemoveTeamsLocation parameter specifies the accounts, distribution groups, or mail-enabled security groups to remove from the list of included Teams chat and channel messages if you used the value All for the TeamsLocation parameter. You specify the entries by the email address or name of the account, distribution group, or mail-enabled security group.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsLocationException
The RemoveTeamsLocationException parameter specifies the accounts, distribution groups, or mail-enabled security groups to remove from the list of excluded Teams chat and channel messages if you used the value All for the TeamsLocation parameter. You identify the entries by the email address or name of the account, distribution group, or mail-enabled security group.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveThirdPartyAppDlpLocation
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The RemoveThirdPartyAppDlpLocation parameter specifies the non-Microsoft cloud apps to remove from the list of included apps if you used the value All for the ThirdPartyAppDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about DLP for non-Microsoft cloud apps, see [Use data loss prevention policies for non-Microsoft cloud apps](https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveThirdPartyAppDlpLocationException
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The RemoveThirdPartyAppDlpLocationException parameter specifies the non-Microsoft cloud apps tp remove from the list of excluded apps if you used the value All for the ThirdPartyAppDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about DLP for non-Microsoft cloud apps, see [Use data loss prevention policies for non-Microsoft cloud apps](https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps).

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointAdaptiveScopes
{{ Fill SharePointAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointAdaptiveScopesException
{{ Fill SharePointAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartSimulation
{{ Fill StartSimulation Description }}

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsAdaptiveScopes
{{ Fill TeamsAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsAdaptiveScopesException
{{ Fill TeamsAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
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
