---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Set-ExchangeAssistanceConfig
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-ExchangeAssistanceConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ExchangeAssistanceConfig cmdlet to modify the Microsoft Exchange Help configurations for your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ExchangeAssistanceConfig [[-Identity] <OrganizationIdParameter>]
 [-CommunityLinkDisplayEnabled <$true | $false>] [-CommunityURL <Uri>] [-Confirm]
 [-ControlPanelFeedbackEnabled <$true | $false>] [-ControlPanelFeedbackURL <Uri>] [-ControlPanelHelpURL <Uri>]
 [-DomainController <Fqdn>] [-ExchangeHelpAppOnline <$true | $false>]
 [-ManagementConsoleFeedbackEnabled <$true | $false>] [-ManagementConsoleFeedbackURL <Uri>]
 [-ManagementConsoleHelpURL <Uri>] [-OWAFeedbackEnabled <$true | $false>] [-OWAFeedbackURL <Uri>]
 [-OWAHelpURL <Uri>] [-OWALightFeedbackEnabled <$true | $false>] [-OWALightFeedbackURL <Uri>]
 [-OWALightHelpURL <Uri>] [-PrivacyLinkDisplayEnabled <$true | $false>] [-PrivacyStatementURL <Uri>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ExchangeAssistanceConfig -ExchangeHelpAppOnline $false -ManagementConsoleHelpURL 'http://exhelponline'
```

This example changes the Help location for the Exchange admin center.

## PARAMETERS

### -CommunityLinkDisplayEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommunityURL
This parameter is reserved for internal Microsoft use.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ControlPanelFeedbackEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ControlPanelFeedbackURL
This parameter is reserved for internal Microsoft use.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ControlPanelHelpURL
The ControlPanelHelpURL parameter specifies the URL where help for the Exchange admin center (EAC) is hosted.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeHelpAppOnline
The ExchangeHelpAppOnline specifies whether your organization uses the public help that's hosted by Microsoft. Valid values are:

- $true: Your organization uses the help that's hosted by Microsoft. This is the default value.

- $false: Your organization doesn't use the help that's hosted by Microsoft. You need to use the ControlPanelHelpURL, ManagementConsoleHelpURL, OWAHelpURL, and OWALightHelpURL parameters to configure the URLs where the help files are hosted.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ManagementConsoleFeedbackEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagementConsoleFeedbackURL
This parameter is reserved for internal Microsoft use.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagementConsoleHelpURL
The ManagementConsoleHelpURL parameter specifies the URL where help for the Exchange Management Console (EMC) is hosted.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAFeedbackEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAFeedbackURL
This parameter is reserved for internal Microsoft use.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAHelpURL
The OWAHelpURL parameter specifies the URL for where help for the standard version of Outlook on the web is hosted.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWALightFeedbackEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWALightFeedbackURL
This parameter is reserved for internal Microsoft use.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWALightHelpURL
The OWALightHelpURL parameter specifies the URL for where help for the light version of Outlook on the web is hosted.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivacyLinkDisplayEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivacyStatementURL
This parameter is reserved for internal Microsoft use.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/75a38090-d854-4138-9b78-c514f85eb76c.aspx)
