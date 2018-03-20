---
applicable: Office 365 Security & Compliance Center
schema: 2.0.0
---

# Set-RetentionCompliancePolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-RetentionCompliancePolicy cmdlet to modify existing retention policies in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Set-RetentionCompliancePolicy [-Identity] <PolicyIdParameter> [-RetryDistribution]
 [-AddExchangeLocationException <MultiValuedProperty>] [-AddModernGroupLocationException <MultiValuedProperty>]
 [-AddOneDriveLocationException <MultiValuedProperty>] [-AddSharePointLocationException <MultiValuedProperty>]
 [-AddSkypeLocationException <MultiValuedProperty>] [-Confirm]
 [-RemoveExchangeLocationException <MultiValuedProperty>]
 [-RemoveModernGroupLocationException <MultiValuedProperty>]
 [-RemoveOneDriveLocationException <MultiValuedProperty>]
 [-RemoveSharePointLocationException <MultiValuedProperty>]
 [-RemoveSkypeLocationException <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Set-RetentionCompliancePolicy [-Identity] <PolicyIdParameter> [-AddExchangeLocation <MultiValuedProperty>]
 [-AddExchangeLocationException <MultiValuedProperty>] [-AddModernGroupLocation <MultiValuedProperty>]
 [-AddModernGroupLocationException <MultiValuedProperty>] [-AddOneDriveLocation <MultiValuedProperty>]
 [-AddOneDriveLocationException <MultiValuedProperty>] [-AddPublicFolderLocation <MultiValuedProperty>]
 [-AddSharePointLocation <MultiValuedProperty>] [-AddSharePointLocationException <MultiValuedProperty>]
 [-AddSkypeLocation <MultiValuedProperty>] [-AddSkypeLocationException <MultiValuedProperty>]
 [-Comment <String>] [-Confirm] [-Enabled <$true | $false>] [-Force]
 [-RemoveExchangeLocation <MultiValuedProperty>] [-RemoveExchangeLocationException <MultiValuedProperty>]
 [-RemoveModernGroupLocation <MultiValuedProperty>] [-RemoveModernGroupLocationException <MultiValuedProperty>]
 [-RemoveOneDriveLocation <MultiValuedProperty>] [-RemoveOneDriveLocationException <MultiValuedProperty>]
 [-RemovePublicFolderLocation <MultiValuedProperty>] [-RemoveSharePointLocation <MultiValuedProperty>]
 [-RemoveSharePointLocationException <MultiValuedProperty>] [-RemoveSkypeLocation <MultiValuedProperty>]
 [-RemoveSkypeLocationException <MultiValuedProperty>] [-RestrictiveRetention <$true | $false>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
Set-RetentionCompliancePolicy -Identity "Regulation 123 Compliance" -AddExchangeLocation "Kitty Petersen" -AddSharePointLocation "http://contoso.sharepoint.com/sites/teams/finance" -RemovePublicFolderLocation All -Comment "Added new counsel, 9/9/14"
```

This example makes the following changes to the existing retention policy named "Regulation 123 Compliance":


Adds the mailbox for the user named Kitty Petersen.

Adds the SharePoint Online site http://contoso.sharepoint.com/sites/teams/finance.

Removes public folders.

Updates the comment.

## PARAMETERS

### -Identity
The Identity parameter specifies the retention policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

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

### -RetryDistribution
The RetryDistribution switch specifies whether to redistribute the policy to all Exchange Online and SharePoint Online locations. Locations whose initial distributions succeeded aren't included in the retry. Policy distribution errors are reported when you use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocation
The AddExchangeLocation parameter specifies the mailboxes to add to the list of included mailboxes when you aren't using the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocationException
This parameter specifies the mailboxes to add to the list of excluded mailboxes when you use the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddModernGroupLocation
The AddModernGroupLocation parameter specifies the Office 365 groups to add to the list of included Office 365 groups when you aren't using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Office 365 Group. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddModernGroupLocationException
The AddModernGroupLocationException parameter specifies the Office 365 groups to add to the list of excluded Office 365 groups when you're using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Office 365 Group. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocation
The AddOneDriveLocation parameter specifies the OneDrive for Business sites to add to the list of included sites when you aren't using the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocationException
This parameter specifies the OneDrive for Business sites to add to the list of excluded sites when you use the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddPublicFolderLocation
The AddPublicFolderLocation parameter specifies that you want to add all public folders to the retention policy. You use the value All for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocation
The AddSharePointLocation parameter specifies the SharePoint Online sites to add to the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

SharePoint Online sites can't be added to the policy until they have been indexed.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocationException
This parameter specifies the SharePoint Online sites to add to the list of excluded sites when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSkypeLocation
The AddSkypeLocation parameter specifies the Skype for Business Online users to add from the list of included Skype for Business Online users.

You can use any value that uniquely identifies the user. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSkypeLocationException
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Parameter Sets: Set1
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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
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
Parameter Sets: Set1
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
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocation
The RemoveExchangeLocation parameter specifies the mailboxes to remove from the list of included mailboxes when you aren't using the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocationException
This parameter specifies the mailboxes to remove from the list of excluded mailboxes when you use the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveModernGroupLocation
The RemoveModernGroupLocation parameter specifies the Office 365 groups to remove from the list of included groups when you aren't using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Office 365 Group. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveModernGroupLocationException
The RemoveModernGroupLocationException parameter specifies the Office 365 groups to remove from the list of excluded groups when you're using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Office 365 Group. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocation
The RemoveOneDriveLocation parameter specifies the OneDrive for Business sites to remove from the list of included sites when you aren't using the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocationException
This parameter specifies the OneDrive for Business sites to remove from the list of excluded sites when you use the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePublicFolderLocation
The RemovePublicFolderLocation parameter specifies that you want to remove all public folders from the retention policy. You use the value All for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocation
The RemoveSharePointLocation parameter specifies the SharePoint Online sites to remove from the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocationException
This parameter specifies the SharePoint Online sites to remove from the list of excluded sites when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSkypeLocation
The RemoveSkypeLocation parameter specifies the Skype for Business Online users to remove from the list of included Skype for Business Online users.

You can use any value that uniquely identifies the user. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSkypeLocationException
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
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
Aliases:
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

[Online Version](https://technet.microsoft.com/library/17c199c0-a714-4ae2-b916-f77c90829cca.aspx)

