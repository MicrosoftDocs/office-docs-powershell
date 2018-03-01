---
applicable: Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Set-AntiPhishPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-AntiPhishPolicy cmdlet to modify antiphishing policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-AntiPhishPolicy [-Identity] <AntiPhishPolicyIdParameter> [-AdminDisplayName <String>] [-Confirm]
 [-Enabled <$true | $false>] [-EnableMailboxIntelligence <$true | $false>]
 [-EnableOrganizationDomainsProtection <$true | $false>] [-EnableSimilarDomainsSafetyTips <$true | $false>]
 [-EnableSimilarUsersSafetyTips <$true | $false>] [-EnableTargetedDomainsProtection <$true | $false>]
 [-EnableTargetedUserProtection <$true | $false>] [-EnableUnusualCharactersSafetyTips <$true | $false>]
 [-ExcludedDomains <MultiValuedProperty>] [-ExcludedSenders <MultiValuedProperty>]
 [-TargetedDomainActionRecipients <MultiValuedProperty>]
 [-TargetedDomainProtectionAction <MultiValuedProperty>] [-TargetedDomainsToProtect <MultiValuedProperty>]
 [-TargetedUserActionRecipients <MultiValuedProperty>] [-TargetedUserProtectionAction <MultiValuedProperty>]
 [-TargetedUsersToProtect <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
{{ Add example code here }}
```

{{ Add example description here }}

### Example 1 (Exchange Online Protection)
```
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity
The Identity parameter specifies the antiphishing policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: AntiPhishPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminDisplayName
The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
```yaml
Type:
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -EnableMailboxIntelligence
```yaml
Type:
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -EnableOrganizationDomainsProtection
The EnableOrganizationDomainsProtection parameter specifies whether to enable antiphishing protection for all registered domains in the Office 365 organization. Valid values are:

- $true: Antiphishing protection is enabled for all registered domains in the Office 365 organization. This is the default value.

- $false: Antiphishing protection protection isn't enabled for all registered domains in the Office 365 organization. You can enable antiphishing protection for specific domains by using the EnableTargetedDomainsProtection and TargetedDomainsToProtect parameters.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSimilarDomainsSafetyTips
The EnableSimilarDomainsSafetyTips parameter specifies whether to enable safety tips that are shown to recipients in messages for similar domains antiphishing detections. Valid values are:

- $true: Safety tips for similar domains are enabled. This is the default value.

- $false: Safety tips for similar domains are disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSimilarUsersSafetyTips
The EnableSimilarUsersSafetyTips parameter specifies whether to enable safety tips that are shown to recipients in messages for similar users antiphishing detections. Valid values are:

- $true: Safety tips for similar users are enabled. This is the default value.

- $false: Safety tips for similar users are disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTargetedDomainsProtection
The EnableTargetedDomainsProtection parameter specifies whether to enable antiphishing protection for a list of specified domains. Valid values are:

- $true: Antiphishing protection is enabled for the domains specified by the TargetedDomainsToProtect parameter. This is the default value.

- $false: The TargetedDomainsToProtect parameter isn't used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTargetedUserProtection
The EnableTargetedUserProtection parameter specifies whether to enable antiphishing protection for the users specified by the TargetedUsersToProtect parameter. Valid values are:

- $true: Antiphishing protection is enabled for the specified users. This is the default value.

- $false: The TargetedUsersToProtect parameter isn't used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUnusualCharactersSafetyTips
The EnableUnusualCharactersSafetyTips parameter specifies whether to enable safety tips that are shown to recipients in messages for unusual characters antiphishing detections. Valid values are:

- $true: Safety tips for unusual characters are enabled. This is the default value.

- $false: Safety tips for unusual characters are disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedDomains
The ExcludedDomains parameter specifies trusted domains that are excluded from scanning by antiphishing protection. You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedSenders
The ExcludedSenders parameter specifies a list of trusted sender email addresses that are excluded from scanning by antiphishing protection. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainActionRecipients
The TargetedDomainActionRecipients parameter specifies the recipients to add to detected phishing messages when the TargetedDomainProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainProtectionAction
The TargetedDomainProtectionAction parameter specifies the action to take on detected phishing messages for the domains specified by the TargetedDomainsToProtect. Valid values are:

- NoAction (This is the default value)

- MoveToJmf: Move the message to the user's Junk Email folder.

- Quarantine: Quarantine the message.

- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter.

- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Accepted values: NoAction, MoveToJmf, Redirect, Quarantine, Delete, BccMessage
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainsToProtect
The TargetedDomainsToProtect parameter specifies the domains that are included in antiphishing protection when the EnableTargetedDomainsProtection parameter is set to $true.

You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUserActionRecipients
The TargetedUserActionRecipients parameter specifies the replacement or additional recipients for detected phishing messages when the TargetedUserProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUserProtectionAction
The TargetedUserProtectionAction parameter specifies the action to take on detected phishing messages for the users specified by the TargetedUsersToProtect parameter. Valid values are:

- NoAction (This is the default value)

- MoveToJmf: Move the message to the user's Junk Email folder.

- Quarantine: Quarantine the message.

- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter. 

- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Accepted values: NoAction, MoveToJmf, Redirect, Quarantine, Delete, BccMessage
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUsersToProtect
The TargetedUsersToProtect parameter specifies the users that are included in antiphishing protection when the EnableTargetedUserProtection parameter is set to $true.

This parameter uses the syntax DisplayNameEmailAddress.

- DisplayName specifies the display name of the user that could be a target of impersonation. This value can contain special characters.

- EmailAddress specifies the internal or external email address that's associated with the display name.

- You can specify multiple value sets by using the syntax: "DisplayName1;EmailAddress1","DisplayName2;EmailAddress2".... The combination of DisplayName and EmailAddress needs to be unique for each value set.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
