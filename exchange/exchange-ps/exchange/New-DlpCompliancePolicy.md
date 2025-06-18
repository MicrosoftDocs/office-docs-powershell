---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-dlpcompliancepolicy
applicable: Security & Compliance
title: New-DlpCompliancePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-DlpCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-DlpCompliancePolicy cmdlet to create data loss prevention (DLP) policies in the Microsoft Purview compliance portal. DLP policies contain DLP rules that identify, monitor, and protect sensitive information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DlpCompliancePolicy [-Name] <String>
 [-Comment <String>]
 [-Confirm]
 [-EndpointDlpAdaptiveScopes <MultiValuedProperty>]
 [-EndpointDlpAdaptiveScopesException <MultiValuedProperty>]
 [-EndpointDlpExtendedLocations <String>]
 [-EndpointDlpLocation <MultiValuedProperty>]
 [-EndpointDlpLocationException <MultiValuedProperty>]
 [-EnforcementPlanes <MultiValuedProperty>]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-ExchangeAdaptiveScopes <MultiValuedProperty>]
 [-ExchangeAdaptiveScopesException <MultiValuedProperty>]
 [-ExchangeLocation <MultiValuedProperty>]
 [-ExchangeSenderMemberOf <RecipientIdParameter[]>]
 [-ExchangeSenderMemberOfException <RecipientIdParameter[]>]
 [-Force]
 [-IsFromSmartInsights <System.Boolean>]
 [-Locations <String>]
 [-Mode <PolicyMode>]
 [-OneDriveAdaptiveScopes <MultiValuedProperty>]
 [-OneDriveAdaptiveScopesException <MultiValuedProperty>]
 [-OneDriveLocation <MultiValuedProperty>]
 [-OneDriveLocationException <MultiValuedProperty>]
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-OnPremisesScannerDlpLocation <MultiValuedProperty>]
 [-OnPremisesScannerDlpLocationException <MultiValuedProperty>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-PolicyTemplateInfo <PswsHashtable>]
 [-PowerBIDlpLocation <MultiValuedProperty>]
 [-PowerBIDlpLocationException <MultiValuedProperty>]
 [-Priority <Int32>]
 [-SharePointAdaptiveScopes <MultiValuedProperty>]
 [-SharePointAdaptiveScopesException <MultiValuedProperty>]
 [-SharePointLocation <MultiValuedProperty>]
 [-SharePointLocationException <MultiValuedProperty>]
 [-TeamsAdaptiveScopes <MultiValuedProperty>]
 [-TeamsAdaptiveScopesException <MultiValuedProperty>]
 [-TeamsLocation <MultiValuedProperty>]
 [-TeamsLocationException <MultiValuedProperty>]
 [-ThirdPartyAppDlpLocation <MultiValuedProperty>]
 [-ThirdPartyAppDlpLocationException <MultiValuedProperty>]
 [-ValidatePolicy]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-DlpCompliancePolicy -Name "GlobalPolicy" -SharePointLocation All
```

This example creates a DLP policy named GlobalPolicy that will be enforced across all SharePoint locations.

### Example 2
```powershell
New-DlpCompliancePolicy -Name "GlobalPolicy" -Comment "Primary policy" -SharePointLocation "https://my.url","https://my.url2" -OneDriveLocation "https://my.url3","https://my.url4" -Mode Enable
```

This example creates a DLP policy named GlobalPolicy for the specified SharePoint and OneDrive locations. The new policy has a descriptive comment and will be enabled on creation.

### Example 3
```powershell
New-DlpCompliancePolicy -Name "PowerBIPolicy" -Comment "Primary policy" -PowerBIDlpLocation "All" -PowerBIDlpLocationException "workspaceID1","workspaceID2","workspaceID3" -Mode Enable
```

This example creates a DLP policy named PowerBIPolicy for all qualifying Power BI workspaces (that is, those hosted on Premium Gen2 capacities) except for the specified workspaces. The new policy has a descriptive comment and will be enabled on creation.

### Example 4
```powershell
Get-Label | Format-List Priority,ContentType,Name,DisplayName,Identity,Guid

$guidVar = "e222b65a-b3a8-46ec-ae12-00c2c91b71c0"

$loc = "[{"Workload":"Applications","Location":"470f2276-e011-4e9d-a6ec-20768be3a4b0","Inclusions":[{Type:"Tenant", Identity:"All"}]}]"

New-DLPCompliancePolicy -Name "Copilot Policy" -Locations $loc

$advRule = @{
 "Version" = "1.0"
 "Condition" = @{
  "Operator" = "And"
   "SubConditions" = @(
    @{
    "ConditionName" = "ContentContainsSensitiveInformation"
    "Value" = @(
     @{
     "groups" = @(
       @{
       "Operator" = "Or"
       "labels" = @(
         @{
         "name" = $guidVar
         "type" = "Sensitivity"
        }
       )
       "name" = "Default"
       }
      )
     }
    )
   }
  )
 }
} | ConvertTo-Json -Depth 100

New-DLPComplianceRule -Name "Copilot Rule" -Policy "Copilot Policy" -AdvancedRule $advrule -RestrictAccess @(@{setting="ExcludeContentProcessing";value="Block"})
```

This example creates a DLP policy for Microsoft 365 Copilot (Preview) in several steps:

- The first command returns information about all sensitivity labels. Select the GUID value of the sensitivity label that you want to use. For example, `e222b65a-b3a8-46ec-ae12-00c2c91b71c0`.

- The second command stores the GUID value of the sensitivity label in the variable named `$guidVar`.

- The third command stores the Microsoft 365 Copilot location (`470f2276-e011-4e9d-a6ec-20768be3a4b0`) in the variable named `$loc`. Update the `$loc` value based on the Inclusions/Exclusions scoping that you want to provide.

- The fourth command creates the DLP policy using the `$loc` variable for the value of the Locations parameter, and "Copilot Policy" as the name of the policy (use any unique name).

- The fifth command creates the variable named `$advRule`. The advanced rule needs to be updated depending on the grouping of labels you want to provide as input.

- The last command creates the DLP rule with the name "Copilot Rule" (use any unique name). Use the name of the DLP policy from step four as the value of the Policy parameter.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the DLP policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
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

### -EndpointDlpAdaptiveScopes
{{ Fill EndpointDlpAdaptiveScopes Description }}

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

### -EndpointDlpAdaptiveScopesException
{{ Fill EndpointDlpAdaptiveScopesException Description }}

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

### -EndpointDlpLocation
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The EndpointDLPLocation parameter specifies the user accounts to include in the DLP policy for Endpoint DLP when they are logged on to an onboarded device. You identify the account by name or email address. You can use the value All to include all user accounts.

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

### -EndpointDlpLocationException
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The EndpointDlpLocationException parameter specifies the user accounts to exclude from Endpoint DLP when you use the value All for the EndpointDlpLocation parameter. You identify the account by name or email address.

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

### -EnforcementPlanes
The EnforcementPlanes parameter defines the layer where policy actions are run. This parameter uses the following syntax:

`-EnforcementPlanes @("<Value>")`.

Currently, the only supported value is Entra, for use with policies applied to an Entra-registered enterprise application in the organization.

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
The ExceptIfOneDriveSharedBy parameter specifies the users to exclude from the DLP policy (the sites of the OneDrive user accounts are included in the policy). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, OneDrive sites need to be included in the policy (the OneDriveLocation parameter value is All, which is the default value).

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
The ExceptIfOneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to exclude from the DLP policy (the OneDrive sites of group members are excluded from the policy). You identify the groups by email address.

To use this parameter, OneDrive sites need to be included in the policy (the OneDriveLocation parameter value is All, which is the default value).

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
Parameter Sets: (All)
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
The ExchangeLocation parameter specifies whether to include email messages in the DLP policy. The valid value for this parameter is All. If you don't want to include email messages in the policy, don't use this parameter (the default value is blank or $null).

You can use this parameter in the following procedures:

- If you use `-ExchangeLocation All` by itself, the policy applies to email for all users.

- To include email of specific group members in the policy, use `-ExchangeLocation All` with the ExchangeSenderMemberOf parameter in the same command. Only email of members of the specified groups is included in the policy.

- To exclude email of specific group members from the policy, use `-ExchangeLocation All` with the ExchangeSenderMemberOfException parameter in the same command. Only email of members of the specified groups is excluded from the policy.

You can't specify inclusions and exclusions in the same policy.

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

### -ExchangeSenderMemberOf
The ExchangeSenderMemberOf parameter specifies the distribution groups or security groups to include in the policy (email of the group members is included in the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You must use this parameter with the ExchangeLocation parameter.

You can't use this parameter with the ExchangeSenderMemberOfException parameter.

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

### -ExchangeSenderMemberOfException
The ExchangeSenderMemberOfException parameter specifies the distribution groups or security groups to exclude from the policy (email of the group members is excluded from the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You must use this parameter with the ExchangeLocation parameter.

You can't use this parameter with the ExchangeSender or ExchangeSenderMemberOf parameters.

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
- Inclusions: Who the DLP policy applies to. For users, use the email address in this syntax: `{Type:IndividualResource,Identity:<EmailAddress>}`. For security groups or distribution groups, use the ObjectId value of the group from the Microsoft Entra portal in this syntax: `{Type:Group,Identity:<ObjectId>}`. For the entire tenant, use this value: `{Type:"Tenant",Identity:"All"}`.
- Exclusions: Exclude security groups, distribution groups, or users from the scope of this DLP policy. For users, use the email address in this syntax: `{Type:IndividualResource,Identity:<EmailAddress>}`. For groups, use the ObjectId value of the group from the Microsoft Entra portal in this syntax: `{Type:Group, Identity:<ObjectId>}`.

You create and store the properties in a variable as shown in the following examples:

DLP policy scoped to all users in the tenant:

`$loc = "[{"Workload":"Applications","Location":"470f2276-e011-4e9d-a6ec-20768be3a4b0","Inclusions":[{Type:"Tenant",Identity:"All"}]}]"`

DLP policy scoped to the specified user and groups:

`$loc = "[{"Workload":"Applications","Location":"470f2276-e011-4e9d-a6ec-20768be3a4b0","Inclusions":[{"Type":"Group","Identity":"fef0dead-5668-4bfb-9fc2-9879a47f9bdb"},{"Type":"Group","Identity":"b4dc1e1d-8193-4525-b59c-6d6e0f1718d2"},{"Type":"IndividualResource","Identity":"yibing@contoso.com"}]}]"`

DLP policy scoped to all users in the tenant except for members of the specified group:

`$loc = "[{"Workload":"Applications","Location":"470f2276-e011-4e9d-a6ec-20768be3a4b0","Inclusions":[{Type:"Tenant",Identity:"All"}]}],"Exclusions":[{"Type":"Group","Identity":"fef0dead-5668-4bfb-9fc2-9879a47f9bdb"}]}]"`

After you create the `$loc` variable as shown in the previous examples, use the value `$loc` for this parameter.

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

### -Mode
The Mode parameter specifies the action and notification level of the DLP policy. Valid values are:

- Enable: The policy is enabled for actions and notifications. This is the default value.
- Disable: The policy is disabled.
- TestWithNotifications: Simulation mode where no actions are taken, but notifications **are** sent.
- TestWithoutNotifications: Simulation mode where no actions are taken, and no notifications are sent.

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

### -OneDriveAdaptiveScopes
{{ Fill OneDriveAdaptiveScopes Description }}

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

### -OneDriveAdaptiveScopesException
{{ Fill OneDriveAdaptiveScopesException Description }}

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

### -OneDriveLocation
The OneDriveLocation parameter specifies whether to include OneDrive sites in the policy. A valid value for this parameter is All, which is also the default value.

You can use this parameter in the following procedures:

- To include sites of specific OneDrive accounts in the policy, use the OneDriveSharedBy parameter to specify the users. Only sites of the specified users are included in the policy.

- To include sites of specific group members in the policy, use the OneDriveSharedByMemberOf parameter to specify the groups. Only sites of members of the specified groups are included in the policy.

- To exclude sites of specific OneDrive accounts from the policy, use the ExceptIfOneDriveSharedBy parameter to specify the users. Only sites of the specified users are excluded from the policy.

- To exclude sites of specific group members from the policy, use the ExceptIfOneDriveSharedByMemberOf parameter to specify the groups. Only sites of members of the specified groups are excluded from the policy.

- If you use `-OneDriveLocation $null`, the policy does not apply to OneDrive sites.

You can't specify inclusions and exclusions in the same policy.

**Note**: Although this parameter accepts site URLs, don't specify site URLs values. Use the OneDriveSharedBy, ExceptIfOneDriveShareBy, OneDriveSharedByMemberOf, and ExceptIfOneDriveSharedByMemberOf parameters instead. In the DLP policy settings in the Microsoft Defender portal, you can't identify sites by URL; you specify sites only by users or groups.

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

### -OneDriveLocationException
Don't use this parameter. See the OneDriveLocation parameter for an explanation.

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

### -OneDriveSharedBy
The OneDriveSharedBy parameter specifies the users to include in the DLP policy (the sites of the OneDrive user accounts are included in the policy). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, OneDrive sites need to be included in the policy (the OneDriveLocation parameter value is All, which is the default value).

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
The OneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to include in the DLP policy (the OneDrive sites of group members are included in the policy). You identify the groups by email address.

To use this parameter, OneDrive sites need to be included in the policy (the OneDriveLocation parameter value is All, which is the default value).

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

### -OnPremisesScannerDlpLocation
The OnPremisesScannerDlpLocation parameter specifies the on-premises file shares and SharePoint document libraries and folders to include in the DLP policy. You can use the value All to include all on-premises file shares and SharePoint document libraries and folders.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about the DLP on-premises scanner, see [Learn about the data loss prevention on-premises scanner](https://learn.microsoft.com/purview/dlp-on-premises-scanner-learn).

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

### -OnPremisesScannerDlpLocationException
The OnPremisesScannerDlpLocationException parameter specifies the on-premises file shares and SharePoint document libraries and folders to exclude from the DLP policy if you use the value All for the OnPremisesScannerDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about the DLP on-premises scanner, see [Learn about the data loss prevention on-premises scanner](https://learn.microsoft.com/purview/dlp-on-premises-scanner-learn).

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

### -PolicyRBACScopes
The PolicyRBACScopes parameter specifies the administrative units to assign to the policy. A valid value is the Microsoft Entra ObjectID (GUID value) of the administrative unit. You can specify multiple values separated by commas.

Administrative units are available only in Microsoft Entra ID P1 or P2. You create and manage administrative units in Microsoft Graph PowerShell.

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

### -PolicyTemplateInfo
The PolicyTemplateInfo specifies the built-in or custom DLP policy templates to use in the DLP policy.

For more information about DLP policy templates, see [What the DLP policy templates include](https://learn.microsoft.com/purview/what-the-dlp-policy-templates-include).

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerBIDlpLocation
The PowerBIDlpLocation parameter specifies the Power BI workspace IDs to include in the DLP policy. Only workspaces hosted in Premium Gen2 capacities are permitted. You can use the value All to include all supported workspaces.

You can find the workspace ID using any of the following procedures:

- In the Admin portal, choose **Workspaces**, then select a workspace and choose **\> More options (...) \> Details**.
- Look in the URL of a selected workspace.
- In PowerShell, use the **Get-PowerBIWorkspace** cmdlet.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

**Note**: You can't use this parameter if the DLP policy applies to other locations.

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

### -PowerBIDlpLocationException
The PowerBIDlpLocationException parameter specifies the Power BI workspace IDs to exclude from the DLP policy when you use the value All for the PowerBIDlpLocation parameter. Only workspaces hosted in Premium Gen2 capacities are permitted.

You can find the workspace ID using any of the following procedures:

- In the Admin portal, choose **Workspaces**, then select a workspace and choose **\> More options (...) \> Details**.
- Look in the URL of a selected workspace.
- In PowerShell, use the **Get-PowerBIWorkspace** cmdlet.

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

### -Priority
The Priority parameter specifies a priority value for the policy that determines the order of policy processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and policies can't have the same priority value.

Valid values and the default value depend on the number of existing policies. For example, if there are 5 existing policies:

- Valid priority values for the existing 5 policies are from 0 through 4.
- Valid priority values for a new 6th policy are from 0 through 5.
- The default value for a new 6th policy is 5.

If you modify the priority value of a policy, the position of the policy in the list changes to match the priority value you specify. In other words, if you set the priority value of a policy to the same value as an existing policy, the priority value of the existing policy and all other lower priority policies after it is increased by 1.

```yaml
Type: Int32
Parameter Sets: (All)
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
Parameter Sets: (All)
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
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointLocation
The SharePointLocation parameter specifies the SharePoint sites to include in the DLP policy. You identify the site by its URL value, or you can use the value All to include all sites.

You can't add SharePoint sites to the policy until they have been indexed.

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

### -SharePointLocationException
The SharePointLocationException parameter specifies the SharePoint sites to exclude when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

You can't add SharePoint sites to the policy until they have been indexed.

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

### -TeamsAdaptiveScopes
{{ Fill TeamsAdaptiveScopes Description }}

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

### -TeamsAdaptiveScopesException
{{ Fill TeamsAdaptiveScopesException Description }}

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

### -TeamsLocation
The TeamsLocation parameter specifies the Teams chat and channel messages to include in the DLP policy. You identify the entries by the email address or name of the account, distribution group, or mail-enabled security group. You can use the value All to include all accounts, distribution groups, and mail-enabled security groups.

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

### -TeamsLocationException
The TeamsLocation parameter specifies the Teams chat and channel messages to exclude from the DLP policy when you use the value All for the TeamsLocation parameter. You identify the entries by the email address or name of the account, distribution group, or mail-enabled security group.

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

### -ThirdPartyAppDlpLocation
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The ThirdPartyAppDlpLocation parameter specifies the non-Microsoft cloud apps to include in the DLP policy. You can use the value All to include all connected apps.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about DLP for non-Microsoft cloud apps, see [Use data loss prevention policies for non-Microsoft cloud apps](https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps).

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

### -ThirdPartyAppDlpLocationException
**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The ThirdPartyAppDlpLocationException parameter specifies the non-Microsoft cloud apps to exclude from the DLP policy when you use the value All for the ThirdPartyAppDlpLocation parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about DLP for non-Microsoft cloud apps, see [Use data loss prevention policies for non-Microsoft cloud apps](https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps).

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

### -ValidatePolicy
{{ Fill ValidatePolicy Description }}

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
