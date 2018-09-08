---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-TeamsRetentionCompliancePolicy
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Set-TeamsRetentionCompliancePolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-TeamsRetentionCompliancePolicy cmdlet to modify retention policies for Microsoft Teams in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Set-TeamsRetentionCompliancePolicy [-Identity] <PolicyIdParameter> [-AddTeamsChannelLocation <MultiValuedProperty>] [-AddTeamsChannelLocationException <MultiValuedProperty>] [-Comment <String>] [-AddTeamsChatLocation <MultiValuedProperty>] [-AddTeamsChatLocationException <MultiValuedProperty>] [-Enabled <$true | $false>] [-Force] [-RemoveTeamsChannelLocationException <MultiValuedProperty>] [-RemoveTeamsChannelLocation <MultiValuedProperty>] [-RemoveTeamsChatLocation <MultiValuedProperty>] [-RemoveTeamsChatLocationException <MultiValuedProperty>] [-Confirm] [-WhatIf]
```

### Set2
```
Set-TeamsRetentionCompliancePolicy [-Identity] <PolicyIdParameter> [-Comment <String>] [-Enabled <$true | $false>] [-Force] [-RestrictiveRetention <$true | $false>] [-Confirm] [-WhatIf]
```

### Set3
```
Set-TeamsRetentionCompliancePolicy [-Identity] <PolicyIdParameter> -RetryDistribution [-Confirm] [-WhatIf]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-RetentionCompliancePolicy -Identity "Teams - Regulation 123 Compliance" -AddTeamsChannelLocation "Build and Quality" -AddTeamsChatLocation "Kitty Petersen" -RemoveTeamsChannelLocation "UX Design" -RemoveTeamsChatLocation "Scott Nakamura" -Comment "Added new counsel, 4/24/18"
```

This example makes the following changes to the existing retention policy named "Teams - Regulation 123 Compliance":

- Adds the mailbox for the user named Kitty Petersen to Microsoft Teams chat locations

- Removes the mailbox for the user named Scott Nakamura from Microsoft Teams chat locations

- Adds the group (team) mailbox named Build and Quality to Microsoft Teams channel locations

- Removes the group (team) mailbox named UX Design from Microsoft Teams channel locations

- Updates the comment.

## PARAMETERS

### -Identity
The Identity parameter specifies the retention policy for Microsoft Teams that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RestrictiveRetention
The RestrictiveRetention parameter specifies whether Preservation Lock is enabled for the policy. Valid values are:

- $true: Preservation Lock is enabled for the policy. No one (including an administrator) can turn off the policy or make it less restrictive.

- $false: Preservation Lock isn't enabled for the policy. This is the default value.

After a policy has been locked, no one can turn off or disable it, or remove content from the policy. And it's not possible to modify or delete content that's subject to the policy during the retention period. The only ways that you can modify the retention policy are by adding content to it, or extending its duration. A locked policy can be increased or extended, but it can't be reduced, disabled, or turned off.

Therefore, before you lock a retention policy, it's critical that you understand your organization's compliance requirements, and that you don't lock a policy until you are certain that it's what you need.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddTeamsChannelLocation
The AddTeamsChannelLocation parameter specifies the teams (group mailboxes) to add to the list of included teams whose channel messages are targeted by this policy, when you aren't using the value All for the TeamsChannelLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

### -AddTeamsChannelLocationException
The AddTeamsChannelLocationException parameter specifies the teams (group mailboxes) to add to the list of excluded teams whose channel messages are targeted by this policy, when you aren't using the value All for the TeamsChannelLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: Object
Parameter Sets: Set1
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddTeamsChatLocation
The AddTeamsChatLocation parameter specifies the Microsoft Teams chats (mailboxes) to add to the list of included chats when you aren't using the value All for the TeamsChatLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: Object
Parameter Sets: Set1
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddTeamsChatLocationException
The AddTeamsChatLocationException parameter specifies the Microsoft Teams chats (mailboxes) to add to the list of excluded chats when you're using the value All for the TeamsChatLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: Object
Parameter Sets: Set1
Aliases:

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
Parameter Sets: Set1, Set2
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the policy is enabled. Valid values are:

- $true: The policy is enabled. This is the default value.

- $false: The policy is disabled.

```yaml
Type: $true | $false
Parameter Sets: Set1, Set2
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsChannelLocation
The RemoveTeamChannelLocation parameter specifies the teams (group mailboxes) to remove from the list of included teams whose channel messages are targeted by this policy, when you aren't using the value All for the TeamsChannelLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

```yaml
Type: Object
Parameter Sets: Set1
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsChannelLocationException
The RemoveTeamsChannelLocationException parameter specifies the teams (group mailboxes) to remove from the list of excluded teams whose channel messages are targeted by this policy, when you aren't using the value All for the TeamsChannelLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: Object
Parameter Sets: Set1
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsChatLocation
The RemoveTeamChatLocation parameter specifies the Microsft Teams chats (mailboxes) to remove from the list of included chats when you aren't using the value All for the TeamsChannelLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

```yaml
Type: Object
Parameter Sets: Set1
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveTeamsChatLocationException
The RemoveTeamsChatLocationException parameter specifies the Microsoft Teams chats (mailboxes) to remove from the list of excluded chats when you're using the value All for the TeamsChannelLocation parameter.

You can use any value that uniquely identifies the mailbox. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: Object
Parameter Sets: Set1
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetryDistribution
The RetryDistribution switch specifies whether to redistribute the policy to all Microsoft Teams locations. Locations whose initial distributions succeeded aren't included in the retry. Policy distribution errors are reported when you use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-retention/Set-TeamsRetentionCompliancePolicy)
