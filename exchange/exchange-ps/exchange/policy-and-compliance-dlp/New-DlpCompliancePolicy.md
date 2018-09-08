---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-DlpCompliancePolicy
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# New-DlpCompliancePolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-DlpCompliancePolicy cmdlet to create Data Loss Prevention (DLP) policies in the Security & Compliance Center. DLP policies contain DLP rules that identify, monitor, and protect sensitive information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DlpCompliancePolicy [-Name] <String> [-Comment <String>] [-Confirm]
 [-ExchangeLocation <MultiValuedProperty>] [-ExchangeOnPremisesLocation <MultiValuedProperty>] [-Force]
 [-Mode <Enable | TestWithNotifications | TestWithoutNotifications | Disable | PendingDeletion>]
 [-OneDriveLocation <MultiValuedProperty>] [-OneDriveLocationException <MultiValuedProperty>]
 [-SharePointLocation <MultiValuedProperty>] [-SharePointLocationException <MultiValuedProperty>]
 [-SharePointOnPremisesLocationException <MultiValuedProperty>]
 [-SharePointServerLocation <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-DlpCompliancePolicy -Name "GlobalPolicy" -SharePointLocation All
```

This example creates a DLP policy named GlobalPolicy that will be enforced across all SharePoint Online locations.

### -------------------------- Example 2 --------------------------
```
New-DlpCompliancePolicy -Name "GlobalPolicy" -Comment "Primary policy" -SharePointLocation "https://my.url","https://my.url2" -OneDriveLocation "https://my.url3","https://my.url4" -Mode Enable
```

This example creates a DLP policy named GlobalPolicy for the specified SharePoint Online and OneDrive for Business locations. The new policy has a descriptive comment and will be enabled on creation.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the DLP policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
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

### -ExchangeLocation
The ExchangeLocation parameter specifies Exchange Online mailboxes to include in the DLP policy. You can only use the value All for this parameter to include all mailboxes.

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

### -ExchangeOnPremisesLocation
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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

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

### -Mode
The Mode parameter specifies the action and notification level of the DLP policy. Valid values are:

- Enable: The policy is enabled for actions and notifications. This is the default value.

- Disable: The policy is disabled.

- TestWithNotifications: No actions are taken, but notifications are sent.

- TestWithoutNotifications: An audit mode where no actions are taken, and no notifications are sent.

```yaml
Type: Enable | TestWithNotifications | TestWithoutNotifications | Disable | PendingDeletion
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveLocation
The OneDriveLocation parameter specifies the OneDrive for Business sites to include. You identify the site by its URL value, or you can use the value All to include all sites.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

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

### -OneDriveLocationException
This parameter specifies the OneDrive for Business sites to exclude when you use the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

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

### -SharePointLocation
The SharePointLocation parameter specifies the SharePoint Online sites to include. You identify the site by its URL value, or you can use the value All to include all sites.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>". SharePoint Online sites can't be added to a policy until they have been indexed.

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

### -SharePointLocationException
This parameter specifies the SharePoint Online sites to exclude when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

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

### -SharePointOnPremisesLocationException
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

### -SharePointServerLocation
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

[Online Version](https://technet.microsoft.com/library/4a1d614a-08cf-4495-83c0-d0ed797d202a.aspx)
